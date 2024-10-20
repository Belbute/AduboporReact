// src/data/lists.tsx

export const NavBarItems = [
  { label: "Home", href: "#Header" },
  { label: "Gallery", href: "#Gallery" },
  { label: "About us", href: "#AboutUs" },
  { label: "Contacts", href: "#Contact" },
];

export const FooterItems = [
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
];

// Define the Testimonial interface
export interface Testimonial {
  name: string;
  title: string;
  image: string;
  testimonial: string;
  rating: number;
}

// Export the testimonials data
export const TestimonialsData: Testimonial[] = [
  {
    name: "John Doe",
    title: "CEO at Acme Corp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial: "This product has significantly improved our workflow and productivity.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager at Beta Inc",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial: "An essential tool for our team. Highly recommended!",
    rating: 4,
  },
  {
    name: "Samuel Green",
    title: "CTO at Gamma LLC",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    testimonial: "A game-changer in our industry. Exceptional support and features.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    title: "Product Manager at Delta Co",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    testimonial: "User-friendly interface and excellent customer service.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    title: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    testimonial: "Helped me scale my business to new heights.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    title: "Freelancer",
    image: "https://randomuser.me/api/portraits/women/95.jpg",
    testimonial: "A must-have tool for freelancers!",
    rating: 5,
  },
  // Add more testimonials as needed
];

// Define the TimelineEvent interface
export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image: string;
}
