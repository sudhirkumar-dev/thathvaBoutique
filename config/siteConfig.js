/**
 * Central brand configuration for TATHVA.
 * Everything easily changeable lives here.
 *
 * Nothing in this file is invented: empty strings mean "not supplied yet"
 * and the UI will not render those fields.
 */
export const siteConfig = {
  name: "TATHVA",

  tagline: "Tradition Meets Trend",

  description:
    "Explore a world of designer sarees, elegant suits, graceful kurtis, chic Indo-western outfits, and lehengas.",

  // Set to the final production URL before deploying (used for canonical + OG).
  url: "https://example.com",

  instagram: "https://www.instagram.com/tathva_label/",
  instagramHandle: "@TATHVA_LABEL",

  categories: [
    "Designer Sarees",
    "Elegant Suits",
    "Graceful Kurtis",
    "Indo-Western",
    "Lehengas",
  ],

  nav: [
    { label: "Collections", href: "#collections" },
    { label: "About", href: "#about" },
    { label: "Visit", href: "#visit" },
    { label: "Instagram", href: "#instagram" },
  ],

  images: {
    logo: "/images/logo.jpeg",
    hero: "/images/thathvaStoreFront.jpg",
    boutique: "/images/thathvaStoreFront.jpg",
    sarees: "/images/designerSarees1.jpeg",
    suits: "/images/elegantSuits1.jpeg",
    kurtis: "/images/kurthis1.jpeg",
    indoWestern: "/images/indoWestern1.jpeg",
    lehengas: "/images/lehenga1.jpeg",

    // Multi-look collections for interactive category lookbooks
    gallery: {
      sarees: [
        {
          src: "/images/designerSarees1.jpeg",
          title: "Mint Zari & Sequin Embellished Saree",
          look: "Look 01",
        },
        {
          src: "/images/designerSarees2.jpeg",
          title: "Crimson Red Scallop Embroidered Saree",
          look: "Look 02",
        },
        {
          src: "/images/designerSarees3.jpeg",
          title: "Blush Champagne Sequined Pallu Saree",
          look: "Look 03",
        },
      ],
      suits: [
        {
          src: "/images/elegantSuits1.jpeg",
          title: "Crimson & Onyx Mirror-Work Kurta Sets",
          look: "Look 01",
        },
        {
          src: "/images/elegantSuits2.jpeg",
          title: "Emerald & Wine Ombre Embroidered Suits",
          look: "Look 02",
        },
        {
          src: "/images/elegantSuits3.jpeg",
          title: "Scarlet Red Embroidered Flared Sharara",
          look: "Look 03",
        },
      ],
      kurtis: [
        {
          src: "/images/kurthis1.jpeg",
          title: "Crimson Angrakha Flared Tiered Kurti",
          look: "Look 01",
        },
        {
          src: "/images/kurthis2.jpeg",
          title: "Indigo & Peach Layered Duo Jacket Sets",
          look: "Look 02",
        },
        {
          src: "/images/kurthis3.jpeg",
          title: "Pastel Blossom Floral Embroidered Tunics",
          look: "Look 03",
        },
      ],
      indoWestern: [
        {
          src: "/images/indoWestern1.jpeg",
          title: "Rose Beige Embroidered Cape & Palazzo Ensemble",
          look: "Look 01",
        },
        {
          src: "/images/indoWestern2.jpeg",
          title: "Dusty Rose & Olive Geometric High-Low Sets",
          look: "Look 02",
        },
        {
          src: "/images/indoWestern3.jpeg",
          title: "Fuchsia & Mustard One-Shoulder Cape Sets",
          look: "Look 03",
        },
      ],
      lehengas: [
        {
          src: "/images/lehenga1.jpeg",
          title: "Sunlit Ochre Crush Silk Lehenga with Jacket Blouse",
          look: "Look 01",
        },
        {
          src: "/images/lehenga2.jpeg",
          title: "Peacock Teal Applique Flare Lehenga & Choli",
          look: "Look 02",
        },
        {
          src: "/images/lehenga3.jpeg",
          title: "Chartreuse Olive Pleated Lehenga with Resham Work",
          look: "Look 03",
        },
      ],
    },

    // Curated editorial looks for social feed showcase
    instagram: [
      {
        src: "/images/designerSarees2.jpeg",
        title: "Crimson Silk Saree",
        category: "Designer Sarees",
      },
      {
        src: "/images/lehenga2.jpeg",
        title: "Peacock Teal Lehenga",
        category: "Lehengas",
      },
      {
        src: "/images/elegantSuits2.jpeg",
        title: "Emerald & Wine Ombre Suit",
        category: "Elegant Suits",
      },
      {
        src: "/images/indoWestern3.jpeg",
        title: "One-Shoulder Cape Set",
        category: "Indo-Western",
      },
      {
        src: "/images/kurthis2.jpeg",
        title: "Layered Jacket Kurti",
        category: "Graceful Kurtis",
      },
      {
        src: "/images/designerSarees3.jpeg",
        title: "Blush Champagne Saree",
        category: "Designer Sarees",
      },
    ],
  },

  // Only non-empty values are rendered.
  visit: {
    address: "",
    phone: "",
    email: "",
  },

  collections: [
    {
      id: "sarees",
      index: "01",
      title: "Designer Sarees",
      lines: ["DESIGNER", "SAREES"],
      copy: "Timeless drapes with a contemporary expression.",
    },
    {
      id: "suits",
      index: "02",
      title: "Elegant Suits",
      lines: ["ELEGANT", "SUITS"],
      copy: "Refined silhouettes designed for effortless elegance.",
    },
    {
      id: "kurtis",
      index: "03",
      title: "Graceful Kurtis",
      lines: ["GRACEFUL", "KURTIS"],
      copy: "Everyday elegance with a distinctly contemporary character.",
    },
    {
      id: "indo-western",
      index: "04",
      title: "Indo-Western",
      lines: ["INDO-", "WESTERN"],
      copy: "Where traditional influence meets modern styling.",
    },
    {
      id: "lehengas",
      index: "05",
      title: "Lehengas",
      lines: ["LEHEN-", "GAS"],
      copy: "Statement silhouettes for unforgettable occasions.",
    },
  ],

  collectionIntro:
    "Discover styles that bring timeless Indian elegance into the contemporary wardrobe.",

  perspective:
    "TATHVA brings together the enduring beauty of Indian fashion and the evolving language of contemporary style.",

  experience: {
    lines: ["A space where tradition,", "style and individuality", "come together."],
  },

  instagramSection: {
    heading: "FOLLOW THE TATHVA EDIT",
    copy: "Discover new styles, collections and moments from TATHVA.",
  },
};
