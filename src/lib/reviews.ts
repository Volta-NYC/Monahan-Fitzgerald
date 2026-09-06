const tripadvisor = "https://www.tripadvisor.com/Attraction_Review-g47289-d5835173-Reviews-Monahan_Fitzgerald-Bayside_Queens_New_York.html";
const restaurantji = "https://www.restaurantji.com/ny/flushing/monahan-and-fitzgerald-/";
const googleHighlights = "https://wanderlog.com/geoInMonth/61086/6/bayside-in-june";

export const reviewGroups = [
  [
    { quote: "Very good service and a terrific burger.", source: "Tripadvisor", href: tripadvisor },
    { quote: "The fish was quite tasty.", source: "Tripadvisor", href: tripadvisor },
    { quote: "Buffalo wings are the best.", source: "Tripadvisor", href: tripadvisor },
    { quote: "The food was outstanding.", source: "Restaurantji", href: restaurantji },
  ],
  [
    { quote: "You walk in and are treated like family.", source: "Restaurantji", href: restaurantji },
    { quote: "Friendly atmosphere.", source: "Tripadvisor", href: tripadvisor },
    { quote: "A fun bar to hang out at.", source: "Tripadvisor", href: tripadvisor },
  ],
  [
    { quote: "Service always excellent.", source: "Tripadvisor", href: tripadvisor },
    { quote: "The bartenders are excellent.", source: "Restaurantji", href: restaurantji },
    { quote: "Waitstaff and bartender were friendly and attentive.", source: "Google review", href: googleHighlights },
  ],
  [
    { quote: "Plenty of room. The food was great.", source: "Tripadvisor", href: tripadvisor },
    { quote: "Great service and food.", source: "Tripadvisor", href: tripadvisor },
    { quote: "Jeff and his team were flexible and amazing.", source: "Google review", href: googleHighlights },
    { quote: "The food was delicious and plentiful.", source: "Google review", href: googleHighlights },
  ],
  [
    { quote: "Happy to enjoy the shepherd’s pie again.", source: "Tripadvisor", href: tripadvisor },
    { quote: "The chicken pot pie was really good.", source: "Tripadvisor", href: tripadvisor },
    { quote: "The stuffed mushrooms were amazing.", source: "Restaurantji", href: restaurantji },
  ],
  [
    { quote: "Very good food. Nice atmosphere.", source: "Tripadvisor", href: tripadvisor },
    { quote: "A great menu with a good selection.", source: "Tripadvisor", href: tripadvisor },
    { quote: "I will come back for the shepherd’s pie.", source: "Tripadvisor", href: tripadvisor },
  ],
] as const;
