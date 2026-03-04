const img = (path) => `/img/${path}`;
export const categories = [
  {
    id: 61,
    slug: "make-up",
    name: "Fragrance ",
    href: "/category/make-up/61/",
    img: {
      src: img("cate-1.png"),
      alt: "Fragrance ",
    },
  },
  {
    id: 42,
    slug: "sun",
    name: "Candles & Home",
    href: "/category/sun/42/",
    img: {
      src: img("cate-2.png"),

      alt: "Candles & Home",
    },
  },
  {
    id: 52,
    slug: "lip",
    name: "Bath & Body",
    href: "/category/lip/52/",
    img: {
      src: img("cate-3.png"),

      alt: "Bath & Body",
    },
  },
  {
    id: 50,
    slug: "skincare",
    name: "Home Decor",
    href: "/category/skincare/50/",
    img: {
      src: img("cate-4.png"),

      alt: "Home Decor",
    },
  },
  {
    id: 47,
    slug: "cleansing",
    name: "Valentine's Day",
    href: "/category/cleansing/47/",
    img: {
      src: img("cate-5.png"),

      alt: "Valentine's Day",
    },
  },
  {
    id: 28,
    slug: "setetc",
    name: "Gift Sets",
    href: "/category/setetc/28/",
    img: {
      src: img("cate-6.png"),

      alt: "Gift Sets",
    },
  },
];

export default categories;