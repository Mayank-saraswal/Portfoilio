"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatButton() {
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Button
                size="icon"
                className="w-14 h-14 rounded-full bg-white text-black hover:bg-gray-200 shadow-lg transition-transform hover:scale-110"
            >
                <MessageCircle className="w-6 h-6" />
            </Button>
        </div>
    );
}
