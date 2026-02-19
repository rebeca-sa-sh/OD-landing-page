// Import React to provide access to the React namespace for type definitions
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  // Fix: Added React.ReactNode type which depends on the React import above
  icon: React.ReactNode;
}

export interface PartnerStat {
  value: string;
  label: string;
  description: string;
  // Fix: Added React.ReactNode type which depends on the React import above
  icon: React.ReactNode;
}