import React from "react";

export interface Service {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  slug?: string;
  description?: string;
  animationPath?: string;
  features?: string[];
  benefits?: string[];
  useCases?: string[];
}

export type OnContactFn = () => void;
