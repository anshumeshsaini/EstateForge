import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, User as UserIcon, ChevronDown } from "lucide-react";

const HeaderSection: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user, signInWithGoogle, logout } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-purple" : "text-gray-700";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md py-3 text-gray-900"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Home className="h-8 w-8 text-white" />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple to-purple-dark bg-clip-text text-transparent">
            EstateForge
          </span>
        </Link>

        {/* Navigation */}
        <nav className="md:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium text-purple-800 hover:text-purple-900 transition-colors ${isActive(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/properties"
            className={`font-medium text-purple-800 hover:text-purple-900 transition-colors ${isActive(
              "/properties"
            )}`}
          >
            Properties
          </Link>
          <Link
            to="/about"
            className={`font-medium text-purple-800 hover:text-purple-900 transition-colors ${isActive(
              "/about"
            )}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`font-medium text-purple-800 hover:text-purple-900 transition-colors ${isActive(
              "/contact"
            )}`}
          >
            Contact
          </Link>
        </nav>

        {/* User Menu */}
        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  try {
                    signInWithGoogle();
                  } catch (error) {
                    console.error('Error signing in with Google:', error);
                  }
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81Z"
                  />
                </svg>
                Sign In with Google
              </Button>
              <Button
                onClick={() => navigate('/login')}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Log In
              </Button>
              <Button
                onClick={() => navigate('/register')}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Sign Up
              </Button>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center text-white">
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <UserIcon className="w-5 h-5" />
                    )}
                  </div>
                  <span className="hidden md:inline">{user?.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="w-full cursor-pointer">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full cursor-pointer">
                    Profile
                  </Link>
                </DropdownMenuItem>
                {user?.role === "admin" && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="w-full cursor-pointer">
                      Admin Panel
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={async () => {
                    try {
                      await logout();
                      navigate('/');
                    } catch (error) {
                      console.error('Error signing out:', error);
                    }
                  }}
                  className="text-red-500 cursor-pointer"
                >
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
