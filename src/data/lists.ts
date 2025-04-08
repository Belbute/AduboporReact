import AduboporBackground from "../assets/AduboporBackground.png";
import AduboporBackground2 from "../assets/AduboporBackground2.png";
import AduboporBackground3 from "../assets/AduboporBackground2.2.png";
import AduboporBackground4 from "../assets/AduboporBackground2.3.png";

export const NavBarItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About us", href: "/#AboutUs" },
  { label: "Contacts", href: "/#Contact" },
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
  content: string; // Changed from 'testimonial' to match your component
  imageUrl?: string; // Added to match your TestimonialCard props
  clovers?: number; // Added to match your rating system (1-5 clovers)
}

// Export the testimonials data with Portuguese agricultural theme
export const TestimonialsData: Testimonial[] = [
  {
    name: "Carlos Mendes",
    title: "Agricultor, Alentejo",
    content:
      "Os fertilizantes da Adubopor revolucionaram a minha produção de trigo. Nunca tive colheitas tão abundantes!",
    clovers: 5,
  },
  {
    name: "Ana Silva",
    title: "Proprietária, Quinta das Flores",
    content:
      "Produtos de excelente qualidade e um atendimento impecável. Recomendo a todos os meus colegas agricultores.",
    clovers: 4,
  },
  {
    name: "João Pereira",
    title: "Engenheiro Agrónomo",
    content:
      "Como profissional da área, posso afirmar que a Adubopor oferece soluções equilibradas e eficazes para qualquer tipo de cultura.",
    clovers: 5,
  },
  {
    name: "Maria Fernandes",
    title: "Produtora de Vinho, Douro",
    content: "As minhas vinhas nunca estiveram tão saudáveis. Os resultados falam por si!",
    clovers: 5,
  },
  {
    name: "Rui Gonçalves",
    title: "Cooperativa Agrícola do Centro",
    content: "Parceiros confiáveis há mais de 10 anos. Sempre entregam o que prometem.",
    clovers: 4,
  },
  {
    name: "Sofia Martins",
    title: "Horticultora Biológica",
    content:
      "Encontrei na Adubopor os fertilizantes perfeitos para a minha agricultura sustentável.",
    clovers: 5,
  },
];

// Define the TimelineEvent interface
export interface TimelineEvent {
  date: string;
  image: string;
  event: string;
  text: string;
}

export const timelineEvents: TimelineEvent[] = [
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
];
