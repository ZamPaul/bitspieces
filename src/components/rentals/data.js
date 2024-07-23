import event from "../../../public/rentals/eventchair.webp"
import sport from "../../../public/rentals/basketball.webp"
import kids from "../../../public/rentals/kidstent.webp"
import kitchen from "../../../public/rentals/kitchencrockery.webp"
import props from "../../../public/rentals/vintagedevice.webp"
import arabicItem from "../../../public/rentals/arabicpot2.webp"
import tent from "../../../public/rentals/lightingtent.webp"
import sfx from "../../../public/rentals/smokemachine2.webp"
import music from "../../../public/rentals/musickeyboard.webp"

export const productCards = [
  {
    name: "Event Furniture",
    src: event,
    items:225,
    shortDescription: "Elegant and comfortable furniture for all types of events.",
    detailedDescription: "Our event furniture includes a variety of chairs, tables, sofas, and accessories designed to enhance the ambiance of your event. Available in multiple styles and colors.",
    relatedProducts: ["Tents and Lighting", "Vintage Props"],
    usage:"Ideal for weddings, corporate events, parties, and conferences."
  },
  {
    name: "Sport and Games",
    src: sport,
    items:196,
    shortDescription: "Fun and engaging sports and games for all ages.",
    detailedDescription: "We offer a wide range of sports and games equipment, including inflatable games, arcade machines, and sports gear to entertain guests at any event.",
    relatedProducts: ["Kids Party Equipment", "SFX Machine"],
    usage:"Perfect for team-building events, school fairs, and family gatherings."
  },
  {
    name: "Kids Party Equipment",
    src: kids,
    items:189,
    shortDescription: "Exciting and safe equipment for kids' parties.",
    detailedDescription: "Our kids party equipment includes bounce houses, slides, carnival games, and more to keep children entertained and safe during parties.",
    relatedProducts: ["Sport and Games", "Event Furniture"],
    usage:"Great for birthday parties, school events, and family reunions."
  },
  {
    name: "Kitchen and Crockery",
    src: kitchen,
    items:204,
    shortDescription: "High-quality kitchen and crockery items for your event.",
    detailedDescription: "We provide a range of kitchen and crockery items, including cutlery, glassware, serving dishes, and cooking equipment to cater to your event's culinary needs.",
    relatedProducts: ["Event Furniture", "Tents and Lighting"],
    usage:"Ideal for weddings, corporate dinners, and private parties."
  },
  {
    name: "Vintage Props",
    src: props,
    items:320,
    shortDescription: "Authentic vintage props to add a unique touch to your event.",
    detailedDescription: "Our collection of vintage props includes antique furniture, decor items, and accessories that bring a nostalgic charm to any event.",
    relatedProducts: ["Arabic Items", "Event Furniture"],
    usage:"Perfect for themed parties, photo shoots, and film sets."
  },
  {
    name: "Arabic Items",
    src: arabicItem,
    items:420,
    shortDescription: "Traditional Arabic items to enhance the cultural ambiance of your event.",
    detailedDescription: "We offer a variety of traditional Arabic items, including rugs, lanterns, cushions, and decor to create an authentic Middle Eastern experience.",
    relatedProducts: ["Vintage Props", "Tents and Lighting"],
    usage:"Ideal for cultural events, themed parties, and weddings."
  },
  {
    name: "Tents and Lighting",
    src: tent,
    items:420,
    shortDescription: "Quality tents and lighting to create the perfect ambiance for your event.",
    detailedDescription: "Our tents and lighting options include a variety of sizes and styles to suit any event. We offer marquee tents, canopies, string lights, spotlights, and more to create a stunning visual experience.",
    relatedProducts: ["Event Furniture", "Arabic Items"],
    usage:"Great for outdoor weddings, corporate events, and festivals"
  },
  {
    name: "SFX Machine",
    src: sfx,
    items:225,
    shortDescription: "Special effects machines to add excitement to your event.",
    detailedDescription: "Our SFX machines include smoke machines, bubble machines, confetti cannons, and more to create a dynamic and memorable experience at your event.",
    relatedProducts: ["Sport and Games", "Kids Party Equipment"],
    usage:"Great for outdoor weddings, corporate events, and festivals."
  },
  {
    name: "Musical Instruments",
    src: music,
    items:123,
    shortDescription: "High-quality musical instruments for any event.",
    detailedDescription: "We offer a range of musical instruments, including guitars, keyboards, drums, and more, perfect for live performances and entertainment at your event.",
    relatedProducts: ["SFX Machine", "Event Furniture"],
    usage:"Useful for live band performances at weddings, corporate events, and private parties to create an engaging and entertaining atmosphere."
  }
];

