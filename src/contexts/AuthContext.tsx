import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { auth } from "../firebase/firebaseConfig";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";

type User = {
  name: string;
  email: string;
  avatar: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Check if user is logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }

    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const userData: User = {
          name: firebaseUser.displayName || "User",
          email: firebaseUser.email || "",
          avatar: firebaseUser.photoURL || "",
          role: "user"
        };
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Auth state listener will handle the rest
    } catch (error: any) {
      setError(error.message);
      toast.error("Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmail = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      console.log('Attempting to sign in with email:', email);
      await signInWithEmailAndPassword(auth, email, password);
      // Auth state listener will handle the rest
      console.log('Sign in successful');
      toast.success("Signed in successfully");
    } catch (error: any) {
      console.error('Sign in error:', error);
      const errorCode = error.code;
      let errorMessage = "Invalid email or password";
      
      // Provide more specific error messages based on Firebase error codes
      if (errorCode === 'auth/user-not-found') {
        errorMessage = "No account found with this email";
      } else if (errorCode === 'auth/wrong-password') {
        errorMessage = "Incorrect password";
      } else if (errorCode === 'auth/invalid-credential') {
        errorMessage = "Invalid credentials";
      } else if (errorCode === 'auth/invalid-email') {
        errorMessage = "Invalid email format";
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const signUpWithEmail = async (name: string, email: string, password: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      console.log('Attempting to create account with email:', email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update the user's display name
      if (userCredential.user) {
        console.log('Account created, updating profile with name:', name);
        await updateProfile(userCredential.user, {
          displayName: name
        });
      }
      
      console.log('Account created successfully');
      toast.success("Account created successfully");
    } catch (error: any) {
      console.error('Sign up error:', error);
      const errorCode = error.code;
      let errorMessage = "Failed to create account";
      
      // Provide more specific error messages based on Firebase error codes
      if (errorCode === 'auth/email-already-in-use') {
        errorMessage = "Email is already in use";
      } else if (errorCode === 'auth/invalid-email') {
        errorMessage = "Invalid email format";
      } else if (errorCode === 'auth/weak-password') {
        errorMessage = "Password is too weak. Use at least 6 characters";
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      await signOut(auth);
      // Auth state listener will handle the rest
      toast.info("You have been logged out");
    } catch (error: any) {
      setError(error.message);
      toast.error("Failed to log out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        error,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
