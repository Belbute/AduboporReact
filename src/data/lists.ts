import AduboporBackground from "../assets/AduboporBackground.png";
import AduboporBackground2 from "../assets/AduboporBackground2.png"; // src/data/lists.tsx
import AduboporBackground3 from "../assets/AduboporBackground2.2.png";
import AduboporBackground4 from "../assets/AduboporBackground2.3.png";

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
// ../data/lists.js
export const timelineEvents = [
  {
    date: "1986",
    image: AduboporBackground,
    event: "Primeira Abertura",
    text: "In January 1986, we proudly opened our doors for the first time, marking the beginning of our journey",
  },
  {
    date: "1988",
    image: AduboporBackground2,
    event: "O Incêndio",
    text: "A devastating fire swept through in February 1988, testing our resilience and strength.",
  },
  {
    date: "1990",
    image: AduboporBackground3,
    event: "Novas Instalações",
    text: "In March 1990, we unveiled our new facilities, a testament to our dedication and growth.",
  },
  {
    date: "1996",
    image: AduboporBackground4,
    event: "Loja de Animais",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  // Add more events as needed
];
