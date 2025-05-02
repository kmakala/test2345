"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#cbeef3] px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center w-full text-center">
          <p className="text-sm font-medium text-gray-900">
            Welcome back | Snap up this special deal and build the skills you need for the future you want.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}