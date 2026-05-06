/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface TeamCategory {
  title: string;
  members: TeamMember[];
}

export interface Project {
  title: string;
  location: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  image: string;
  description?: string;
  advantages?: {
    schools: string[];
    hospitals: string[];
    markets: string[];
    connectivity: string[];
  };
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string;
}

export interface FloorPlan {
  title: string;
  image: string;
}

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}
