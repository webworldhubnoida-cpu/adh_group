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
    members: [{ name: "Asif Ali Khan", role: "Founder", image: "/gallery/owner.jpeg" }]
  },
  {
    title: "Co-Founders",
    members: [
      { name: "Asif Ali", role: "Co-Founder", image: "/team/AsifAliCoFounder.jpeg" },
      { name: "Syed Asad Jamil", role: "Managing Partner", image: "/gallery/SayedAsadJamil.jpeg" },
      { name: "Dr. Mohammad Asim", role: "Managing Partner", image: "/DrMohammadAsimManagingPartner.jpeg" }
    ]
  },
  {
    title: "Project Manager",
    members: [{ name: "Kamal Barkat Ansari", role: "Project Manager", image: "/team/dummyBoy.png" }]
  },
  {
    title: "Engineers",
    members: [
      { name: "Salman Haider", role: "Engineer", image: "/gallery/salmanHaider.jpeg" },
      { name: "Mohd Faaz", role: "Engineer", image: "/team/dummyBoy.png" },
      { name: "Shamim Ahmad", role: "Engineer", image: "/team/dummyBoy.png" }
    ]
  },
  {
    title: "Architect",
    members: [
      { name: "Mohd Arif", role: "Architect", image: "/team/MohdArifArchitect.jpeg" },
      { name: "Mohammad Ashraf", role: "Architect", image: "/team/MohammadAshrafArchitect.jpeg" }
    ]
  },
  {
    title: "Interior Designers",
    members: [
      { name: "Imran Chaudhary", role: "Interior Designer", image: "/gallery/MohdImran.jpeg" },
      { name: "Salman Ahmad", role: "Interior Designer", image: "/team/dummyBoy.png" }
    ]
  },
  {
    title: "Accountant",
    members: [{ name: "Mohd Sajid Farooq", role: "Accountant", image: "/team/MohdSajidFarooqAccountant.jpeg" }]
  },
  {
    title: "Accountant",
    members: [{ name: "Mohd Shahroz", role: "Accountant", image: "/gallery/MohdShahroz.jpeg" }]
  },
  {
    title: "Administration",
    members: [{ name: "Sheeba Khan", role: "Administration", image: "/team/dummyGirl.avif" }]
  },
  {
    title: "Sales Staff",
    members: [
      { name: "Rukhsar Khan", role: "Sales Staff", image: "/team/dummyGirl.avif" },
      { name: "Mehak Khan", role: "Sales Staff", image: "/team/dummyBoy.png" }
    ]
  },
  {
    title: "HR",
    members: [
      { name: "Noor Saba", role: "HR", image: "/team/dummyGirl.avif" },
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
    image: "/gallery/c1.webp",
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
    brochure: "/gallery/ADH GREEN'S.pdf",
    advantages: {
      schools: ["Al Barkat School", "Iqra Schools","Aligarh Muslim University"],
      hospitals: ["Vaqar Hospital", "Malik Hospital" ,"JNMC medical college","AMU Hospital"],
      markets: ["Dodhpur","Center Point Market", "Great Value Mall"],
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
    brochure: "/gallery/adh homes.pdf",
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
