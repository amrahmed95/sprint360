// app/components/ui/LottieAnimation.tsx

"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface LottieAnimationProps {
  animationPath: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({
  animationPath,
  className = "",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setLoading(true);
        setError(null);

        // For public animations stored in the public folder
        const response = await fetch(animationPath);

        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status}`);
        }

        const data = await response.json();
        setAnimationData(data);
      } catch (err) {
        console.error("Error loading Lottie animation:", err);
        setError("Failed to load animation");
      } finally {
        setLoading(false);
      }
    };

    loadAnimation();
  }, [animationPath]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center animate-pulse">
          <span className="text-2xl">⏳</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-2xl">⚠️</span>
          </div>
          <p className="text-sm text-muted">Animation unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
