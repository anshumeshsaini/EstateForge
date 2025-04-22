import React from 'react';
import { MessageSquarePlus } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ChatBotIconProps {
  onClick: () => void;
}

const ChatBotIcon: React.FC<ChatBotIconProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-5 right-5 h-12 w-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg flex items-center justify-center z-50"
      aria-label="Open chat assistant"
    >
      <MessageSquarePlus size={24} />
    </Button>
  );
};

export default ChatBotIcon;
