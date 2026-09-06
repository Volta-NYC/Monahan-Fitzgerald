export const site = {
  name: "Monahan & Fitzgerald",
  shortName: "M&F",
  address: "214-17 41st Avenue, Bayside, NY 11361",
  phone: "718-279-4450",
  phoneHref: "tel:+17182794450",
  maps: "https://maps.google.com/?q=Monahan+%26+Fitzgerald+Bayside",
  order: "/order",
  instagram: "https://www.instagram.com/monahan_fitzgerald/",
  facebook: "https://www.facebook.com/MonahanFitzgeraldNY/",
  hours: [
    ["Monday–Friday", "10:00 AM–2:00 AM"],
    ["Saturday–Sunday", "11:00 AM–2:00 AM"],
  ],
};

export const menuMoments = [
  { title: "Baby Back Ribs", note: "Slow, tender, and worth getting your hands messy for." },
  { title: "Chicken Française", note: "A neighborhood favorite with a little more occasion." },
  { title: "The M.O.M. Burger", note: "Mozzarella, onions, mushrooms, and the proper amount of napkins." },
  { title: "Shepherd’s Pie", note: "The kind of comfort food that keeps regulars coming back." },
];

export const menu = [
  { category: "Starters", items: ["French Onion Soup", "Buffalo Wings", "Stuffed Mushrooms", "Sampler Platter", "Country Salad", "Caesar Salad"] },
  { category: "Handhelds", items: ["Chicken Caesar Wrap", "Grilled Chicken Sandwich", "Cajun Chicken Sandwich", "French Dip", "Corned Beef Sandwich", "Filet Mignon Sliders"] },
  { category: "Burgers", items: ["Classic Hamburger", "Cheeseburger", "Bacon Cheeseburger", "M.O.M. Burger", "Burger Sliders"] },
  { category: "Pub classics", items: ["Baby Back Ribs", "The Pub Steak", "14 oz. NY Strip Steak", "Chicken Française", "Shepherd’s Pie", "Chicken Pot Pie", "Chicken Romano", "Sautéed Shrimp", "Raul’s Special House Pasta", "Lobster Ravioli", "Penne alla Vodka", "Steak Tidbits", "Corned Beef & Cabbage", "Fish & Chips"] },
];

export const menuImages: Record<string, { src: string; alt: string }> = {
  Starters: { src: "/images/gallery-room-4.png", alt: "Buffalo wings with celery and carrots" },
  Handhelds: { src: "/images/gallery-room-3.png", alt: "French dip sandwiches with fries and au jus" },
  Burgers: { src: "/images/gallery-room-5.png", alt: "Filet mignon sliders with fries" },
  "Pub classics": { src: "/images/gallery-welcome.jpeg", alt: "Corned beef and cabbage with a Guinness at the bar" },
};

export const menuDescriptions: Record<string, string> = {
  "Baby Back Ribs": "A full rack with house barbecue sauce, served in the classic pub style.",
  "The Pub Steak": "A neighborhood steak-house favorite with frizzled onions and fries.",
  "14 oz. NY Strip Steak": "A hand-cut strip steak grilled to order.",
  "Chicken Française": "Battered chicken in a lemon and white-wine sauce.",
  "Shepherd’s Pie": "Ground sirloin, vegetables, rich gravy, and a golden mashed-potato top.",
  "Chicken Pot Pie": "Creamy chicken filling under puff pastry.",
  "Chicken Romano": "Chicken medallions with garlic, white wine, mushrooms, prosciutto, and mozzarella.",
  "Sautéed Shrimp": "White wine, garlic, cilantro, and lime over rice.",
  "Raul’s Special House Pasta": "Penne, Italian sausage, chicken, peppers, onions, and mushrooms.",
  "Lobster Ravioli": "Lobster ravioli finished with lobster sauce and jumbo shrimp.",
  "Penne alla Vodka": "Penne with plum tomatoes and a touch of cream.",
  "Steak Tidbits": "Steak served over toasted bread rounds with classic sides.",
};
