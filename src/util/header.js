
const img = (path) => `/img/${path}`

export const headerData = {

    logo: {
        src: img('logo.svg'),
        alt: 'DIPTYQUE',
        href: '/'
    },
    menus: [
        {
            id: 'hero',
            label: 'hero',
            href: '#hero',
            type: 'section'
        },
        {
            id: 'follow',
            label: 'engrave',
            href: '#follow',
            type: 'section'
        },
        {
            id: 'collection',
            label: 'bestsellers',
            href: '#collection',
            type: 'section'  
        },
        {
            id: 'skincare',
            label: 'touch',
            href: '#skincare',
            type: 'section'
        },
        {
            id: 'instargram',
            label: 'instargram',
            href: '#instargram',
            type: 'section'
        },
        {
            id: 'service',
            label: 'service',
            href: '#service',
            type: 'section'
        }
    ],
    utils: [
        { id: "language", label: "언어", icon: img("icon_language.svg"), href: "#" },
        { id: "search", label: "검색", icon: img("icon_search.svg"), href: "#" },
        { id: "account", label: "마이", icon: img("icon_myp.svg"), href: "#" },
        { id: "cart", label: "장바", icon: img("icon_cart.svg"), href: "#" },
    ],
    topBanner: {
        enabled: true,
        height: 64,
        items: [
            { id: "tb-1", text: "Complimentary gifts with selected purchases.", href: "#" },
            { id: "tb-2", text: "Exclusive gifts for a limited time.", href: "#" },
            { id: "tb-3", text: "Enjoy a complimentary gift with your order.", href: "#" },
        ],
        closeIcon: img("icon_pop_close_b.png"),
        background: "#DC272D",
        color: "#fff",
    },
}