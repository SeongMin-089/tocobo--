const img = (path) => `/img/${path}`;


// Hero 슬라이더용 "가짜 DB" 데이터
export const heroSlides = [
  {
    id: "hs-1",
    title: "The perfect Gift",
    subtitle: "Diptyque celebrates love through its scented creations.",
    desc: "피부 본연의 균형을 위한 미니멀 케어",
    ctaText: "•   Explore   •",
    ctaHref: "/products",
    image: {
      desktop: img("main_d_1.png"),
      mobile: img("main_mo_1.png"),
    },
    alt: "선물 히어로 배너",
    active: true,
    order: 1,
  },
  {
    id: "hs-2",
    title: "Home Fragrance",
    subtitle: "The signature Diptyque oval design",
    desc: "가볍지만 깊게, 산뜻한 촉촉함",
    ctaText: "• Discover •",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("main_d_2.png"),
      mobile: img("main_mo_2.png"),
    },
    alt: "향수 히어로 배너",
    active: true,
    order: 2,
  },
  {
    id: "hs-3",
    title: "Valentine’s Day",
    subtitle: "For Valentine's Day, Diptyque celebrates love",
    desc: "민감 피부를 위한 무향 포뮬러",
    ctaText: "• Discover •",
    ctaHref: "/collections/sensitive",
    image: {
      desktop:  img("main_d_3.png"),
      mobile: img("main_d_3.png"),
    },
    alt: "발렌타인데이 히어로 배너",
    active: true,
    order: 3,
  }
];