const img = (path) => `/img/${path}`;
export const helloData = {

  media: {
    type: "image",                     // "image" | "video"
    src: img("hello.png"),   // public 폴더 기준
    alt: "Pink square demo image",
    radius: 24                         // 이미지 둥근 모서리(px)
  },

  eyebrow: "We are Diptyque.",
  title: "Personalized <br/> engraving <br/> by Diptyque",
  description:
    "A date, a memory... Diptyque offers you the chance to personalize <br/> a scented creation by having a message engraved on it. <br/>  A unique touch, perfect... Read more",
  cta: {
    label: "• Engrave your gift •",
    href: "/about"
  }
};


