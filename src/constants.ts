/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TeamCategory, Project, Service, FAQItem, Review, FloorPlan } from './types.ts';

export const FLOOR_PLANS: FloorPlan[] = [
  { title: "ADH Greens Floor Plan-A", image: "/gallery/a.png" },
  { title: "ADH Greens Floor Plan-B", image: "/gallery/b.png" },
  { title: "ADH Greens Floor Plan-C", image: "/gallery/c.png" },
  { title: "ADH Greens Floor Plan-D", image: "/gallery/e.png" },
  { title: "ADH Homes Duplex Floor Plan ", image: "/gallery/f.png" },
];

export const TEAM_DATA: TeamCategory[] = [
  {
    title: "Founder",
    members: [{ name: "Asif Ali", role: "Founder", image: "/gallery/owner.jpeg" }]
  },
  {
    title: "Co-Founders",
    members: [
      { name: "Asif Ali", role: "Co-Founder", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
      { name: "Asad Jameel", role: "Co-Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    title: "Engineers",
    members: [
      { name: "Salman Haider", role: "Engineer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
      { name: "Mohd Faaz", role: "Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
      { name: "Shamim Ahmad", role: "Engineer", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    title: "Architect",
    members: [{ name: "Mohd Arif", role: "Architect", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" }]
  },
  {
    title: "Interior Designers",
    members: [
      { name: "Imran Chaudhary", role: "Interior Designer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
      { name: "Salman Ahmad", role: "Interior Designer", image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    title: "Site Supervisor",
    members: [{ name: "Mohd Sajid Faarooq", role: "Site Supervisor", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400" }]
  },
  {
    title: "Accountant",
    members: [{ name: "Mohd Shahroz", role: "Accountant", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400" }]
  },
  {
    title: "Administration",
    members: [{ name: "Sheeba Khan", role: "Administration", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" }]
  },
  {
    title: "Sales Staff",
    members: [
      { name: "Rukhsar Khan", role: "Sales Staff", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
      { name: "Mehak Khan", role: "Sales Staff", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    title: "HR",
    members: [
      { name: "Noor Saba", role: "HR", image: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=400" },
      { name: "Asif Ali Khan", role: "HR", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400" }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Real Estate Development",
    description: "Transforming landscapes into premium residential and commercial spaces with a focus on value and sustainability.",
    icon: "Building2",
    image: "/gallery/p4.png"
  },
  {
    title: "Construction Services",
    description: "Expert engineering and quality construction ensuring every brick laid is a testament to durability and trust.",
    icon: "HardHat",
    image: "https://tse4.mm.bing.net/th/id/OIP.M2v4PkVAhFa50tij4VW6CwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Interior Design",
    description: "Curating aesthetic and functional interiors that reflect luxury and personal style for elite living environments.",
    icon: "Palette",
    image: "data:image/webp;base64,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"
  },
  {
    title: "Architecture Planning",
    description: "Precision-driven architectural layouts that blend modern innovation with timeless structural integrity.",
    icon: "Ruler",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Project Management",
    description: "End-to-end management ensuring timely delivery and uncompromising quality standards at every project phase.",
    icon: "ClipboardCheck",
    image: "https://th.bing.com/th/id/OIP.6OMhvlB85V2rcWkc4NYRBQHaE8?w=268&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "ADH Greens Phase 2",
    location: "Aligarh, UP",
    status: "Upcoming",
    image: "/gallery/p4.png",
    description: "Premium residential living in the heart of the city.",
    advantages: {
      schools: ["Al Barkat School", "Iqra Schools"],
      hospitals: ["Vaqar Hospital", "Malik Hospital"],
      markets: ["Center Point Market", "Great Value Mall"],
      connectivity: ["5 mins to Railway Station", "Near GT Road"]
    }
  },
  {
    title: "ADH Home Phase 2",
    location: "Civic Center, Aligarh",
    status: "Completed",
    image: "/gallery/p3.jpeg",
    description: "Aligarh's premier commercial hub and business destination.",
    advantages: {
      schools: ["Heritage International", "St. Fidelis School"],
      hospitals: ["Upadhyay Hospital", "Life Line Hospital"],
      markets: ["Shamshad Market", "Railway Road Market"],
      connectivity: ["City Heart Location", "Easy public transport access"]
    }
  },
  {
    title: "Samina Residence",
    location: "Kwani Road, Aligarh",
    status: "Ongoing",
    image: "/gallery/p5.png",
    description: "Luxury apartments with panoramic city views.",
    advantages: {
      schools: ["Wisdom Public School", "Our Lady of Fatima"],
      hospitals: ["City Hospital", "Metas Hospital"],
      markets: ["Kwani Road Local Market", "Super Bazar"],
      connectivity: ["Connected to Main Bypass", "10 mins to Center Point"]
    }
  },
  {
    title: "ADH Home Duplexes",
    location: "GT Road, Aligarh",
    status: "Completed",
    image: "/gallery/hero2.png",
    description: "Strategic commercial space for modern enterprises.",
    advantages: {
      schools: ["Delhi Public School Aligarh", "The Blossoms School"],
      hospitals: ["Malkhan Singh Hospital", "ESI Hospital"],
      markets: ["GT Road Shopping Complex", "Exhibition Ground Market"],
      connectivity: ["Direct Highway Access", "Key link to Industrial Area"]
    }
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What services does ADH Group offer?",
    answer: "ADH Group provides comprehensive real estate development, high-quality construction services, luxury interior design, architectural planning, and robust project management."
  },
  {
    question: "Where are your primary project locations?",
    answer: "Our primary expertise and project portfolio are focused on Aligarh, Uttar Pradesh, where we have developed several residential and commercial landmarks."
  },
  {
    question: "Do you offer interior design for residential properties?",
    answer: "Yes, we specialize in curating aesthetic and functional interiors for both residential and commercial elite living environments."
  },
  {
    question: "How can I book a site visit?",
    answer: "You can book a site visit by clicking the 'Book Visit' button in our navigation bar or by using the floating WhatsApp/Call buttons at the bottom of the page."
  },
  {
    question: "What is the typical timeline for a construction project?",
    answer: "Timelines vary based on project scale and complexity. However, we pride ourselves on timely delivery through our rigorous project management processes."
  }
];

export const REVIEWS: Review[] = [
  {
    name: "Dr. Sameer Ahmad",
    location: "Civil Lines, Aligarh",
    rating: 5,
    comment: "ADH Group's attention to detail is unparalleled. They transformed my vision into a stunning reality. Highly professional team!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Mrs. Fatima Khan",
    location: "Marris Road, Aligarh",
    rating: 5,
    comment: "Excellent construction quality and timely delivery. The interior design team is exceptional. Best builders in Aligarh.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Er. Rahul Sharma",
    location: "Anoopshahr Road, Aligarh",
    rating: 4,
    comment: "Impressive architectural planning and structural integrity. They handled everything from approval to final finishing smoothly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  }
];
