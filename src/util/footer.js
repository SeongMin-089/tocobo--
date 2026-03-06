// src/util/footer.js
const img = (path) => `/img/${path}`;
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

// 로고
export const logoData = {
  src: img("logo.svg"),
  alt: "Diptyque 로고",
  href: "/",
};

// 회사 정보
export const companyData = [
  "Diptyque Paris",
  "Head Office: 34 Boulevard Saint-Germain, 75005 Paris",
  "Business Registration", 
  "No.: FR XX XXX XXX XXX  [Company Information]",
  "Customer Service: +33 (0)1 43 26 77 44",
  "E-mail: contact@diptyqueparis.com",
  "Online Store Support: service@diptyqueparis.com",
  "Marketing Inquiries:press@diptyqueparis.com",
  "Corporate & Bulk Orders: corporate@diptyqueparis.com",
];
export const footerLegal = {
  copyright: "© DIPTYQUE PARIS. ALL RIGHTS RESERVED.",
  links: [
    { label: "Country", href: "/terms" },
    { label: "Language International", href: "/privacy" },
    { label: "English", href: "/guide" }
  ]
};
// 고객센터
export const customerCenterData = {
  title: "Customer Center",
  tel: { value: "+1 (833) 798-0845", href: "tel:0263522410" },
  hours: "Monday - Friday: 10 am to 6 pm EST",
  notice: "Excluding public holidays ",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "Services",
    items: [
      { label: "Exclusive States", href: "/brand-story" },
      { label: "Exclusive Canada", href: "/collection" },
      { label: "Diptyque & You", href: "/collection" },
      { label: "Personalized Engraving", href: "/follow" },
      { label: "All services", href: "/collection" },
    ],
  },
  {
    title: "Informaiton",
    items: [
      { label: "Orders", href: "/shop" },
      { label: "Delivery", href: "/shop/makeup" },
      { label: "Returns", href: "/shop/cleansing" },
      { label: "Contact", href: "/shop/skincare" },
      { label: "FAQ", href: "/shop/sun" },
    ],
  },
  {
    title: "Explore website",
    items: [
        { label: "Caring for Yours", href: "/promotion" },
        { label: "Choose a diffuser", href: "/promotion" },
        { label: "Compose your ceremony", href: "/promotion" },
        { label: "Refillable Products", href: "/promotion" },
        { label: "Travel formats", href: "/promotion" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms of use", href: "/notice" },
      { label: "Privacy Policy", href: "/faq" },
      { label: "Accessibility", href: "/review" },
      { label: "Brand Protection", href: "/cs" },
      { label: "Cookie management", href: "/cs" },
    ],
  },
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    abel: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];
