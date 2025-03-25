// src/data/menuItems.js
const menuItems = [
  // Wyróżnione (Featured) section
  {
    id: 1,
    name: "Super King Specjal",
    description: "mięso mieszane wołowina/drób, mięso, surówki, sosy, papryki, ogórki, marchewki, ser",
    price: 35.00,
    category: "featured",
    image: "/menu/super-king-special.png",
    tags: ["Bestseller"]
  },
  {
    id: 2,
    name: "King Box z kurczakiem lub mieszany",
    description: "frytki, mięso, surówki, sosy, papryki, ogórki, marchewki, ser",
    price: 30.00,
    category: "featured",
    image: "/menu/king-box.png",
    tags: ["Popular"]
  },
  {
    id: 3,
    name: "Kebab Amerykański z frytkami",
    description: "frytki, surówki, papryki, ogórki, marchewki, sosy",
    price: 33.00,
    category: "featured",
    image: "/menu/kebab-american.png",
    tags: ["Bestseller"]
  },

  // Kebab section
  {
    id: 4,
    name: "Cienki z kurczakiem lub mieszany mały",
    description: "mięso mieszane wołowina/drób, surówki, papryki, ogórki, marchewki",
    price: 20.00,
    category: "kebab",
    image: "/menu/cienki-maly.png",
    tags: []
  },
  {
    id: 5,
    name: "Cienki z kurczakiem lub mieszany średni",
    description: "mięso mieszane wołowina/drób, surówki, papryki, ogórki, marchewki",
    price: 25.00,
    category: "kebab",
    image: "/menu/cienki-sredni.png",
    tags: []
  },
  {
    id: 6,
    name: "Cienki z kurczakiem lub mieszany duży",
    description: "mięso mieszane wołowina/drób, surówki, papryki, ogórki, marchewki",
    price: 30.00,
    category: "kebab",
    image: "/menu/cienki-duzy.png",
    tags: []
  },
  {
    id: 7,
    name: "Super King Specjal",
    description: "mięso mieszane wołowina/drób, mięso, surówki, sosy, papryki, ogórki, marchewki, ser",
    price: 35.00,
    category: "kebab",
    image: "/menu/super-king-special.png", 
    tags: ["Bestseller"]
  },
  {
    id: 8,
    name: "Gruby z kurczakiem lub mieszany mały",
    description: "mięso mieszane wołowina/drób, mięso, surówki, sosy, papryki, ogórki, marchewki, ser",
    price: 25.00,
    category: "kebab",
    image: "/menu/gruby-maly.png",
    tags: []
  },
  {
    id: 9,
    name: "Gruby z kurczakiem lub mieszany duży",
    description: "mięso mieszane wołowina/drób, mięso, surówki, sosy, papryki, ogórki, marchewki, ser",
    price: 30.00,
    category: "kebab",
    image: "/menu/gruby-duzy.png",
    tags: []
  },
  {
    id: 10, 
    name: "Kebab Amerykański z frytkami mały",
    description: "frytki, surówki, papryki, ogórki, marchewki, sosy",
    price: 23.00,
    category: "kebab",
    image: "/menu/kebab-american-small.png",
    tags: []
  },
  {
    id: 11,
    name: "Kebab Amerykański z frytkami średni",
    description: "frytki, surówki, papryki, ogórki, marchewki, sosy",
    price: 27.00,
    category: "kebab",
    image: "/menu/kebab-american-medium.png",
    tags: []
  },
  {
    id: 12,
    name: "Kebab Amerykański z frytkami duży",
    description: "frytki, surówki, papryki, ogórki, marchewki, sosy",
    price: 33.00,
    category: "kebab",
    image: "/menu/kebab-american-large.png",
    tags: ["Bestseller"]
  },
  {
    id: 13,
    name: "Kapsalon mały",
    description: "mięso kebab, frytki, surówki, marchewki, sosy",
    price: 25.00,
    category: "kebab",
    image: "/menu/kapsalon-small.png",
    tags: []
  },
  {
    id: 14,
    name: "Kapsalon średni",
    description: "mięso kebab, frytki, surówki, marchewki, sosy",
    price: 30.00,
    category: "kebab",
    image: "/menu/kapsalon-medium.png",
    tags: []
  },
  {
    id: 15,
    name: "Kapsalon duży",
    description: "mięso kebab, frytki, surówki, marchewki, sosy",
    price: 35.00,
    category: "kebab",
    image: "/menu/kapsalon-large.png",
    tags: []
  },
  
  // Box section
  {
    id: 16,
    name: "King Box z kurczakiem lub mieszany mały",
    description: "frytki, mięso, surówki, sosy, papryki, ogórki, marchewki, ser",
    price: 18.00,
    category: "box",
    image: "/menu/king-box-small.png",
    tags: []
  },
  {
    id: 17,
    name: "King Box z kurczakiem lub mieszany średni",
    description: "frytki, mięso, surówki, sosy, papryki, ogórki, marchewki, ser",
    price: 25.00,
    category: "box",
    image: "/menu/king-box-medium.png",
    tags: []
  },
  {
    id: 18,
    name: "King Box z kurczakiem lub mieszany duży",
    description: "frytki, mięso, surówki, sosy, papryki, ogórki, marchewki, ser",
    price: 30.00,
    category: "box",
    image: "/menu/king-box-large.png",
    tags: ["Popular"]
  },
  
  // Talerze (Plates) section
  {
    id: 19,
    name: "Talerz z frytkami lub ryżem mały",
    description: "mięso mieszane wołowina/drób, frytki, surówki, papryki, ogórki, marchewki, ser, sosy",
    price: 27.00,
    category: "plates",
    image: "/menu/talerz-maly.png",
    tags: []
  },
  {
    id: 20,
    name: "Talerz z frytkami lub ryżem duży",
    description: "mięso mieszane wołowina/drób, frytki, surówki, papryki, ogórki, marchewki, ser, sosy",
    price: 32.00,
    category: "plates",
    image: "/menu/talerz-duzy.png",
    tags: []
  },
  
  // Dania wegetariańskie (Vegetarian dishes)
  {
    id: 21,
    name: "Falafel wegetariański z cienkim ciastem mały",
    description: "kotleciki falafel, frytki, surówki, ogórki, marchewki, sosy",
    price: 16.00,
    category: "vegetarian",
    image: "/menu/falafel-small.png",
    tags: ["Vegetarian"]
  },
  {
    id: 22,
    name: "Falafel wegetariański z cienkim ciastem średni",
    description: "kotleciki falafel, frytki, surówki, ogórki, marchewki, sosy",
    price: 21.00,
    category: "vegetarian",
    image: "/menu/falafel-medium.png",
    tags: ["Vegetarian"]
  },
  {
    id: 23,
    name: "Falafel wegetariański z cienkim ciastem duży",
    description: "kotleciki falafel, frytki, surówki, ogórki, marchewki, sosy",
    price: 26.00,
    category: "vegetarian",
    image: "/menu/falafel-large.png",
    tags: ["Vegetarian"]
  },
  {
    id: 24,
    name: "Talerz Falafel wegetariański mały",
    description: "kotleciki falafel, frytki, surówki, ogórki, marchewki, sosy",
    price: 20.00,
    category: "vegetarian",
    image: "/menu/talerz-falafel-maly.png",
    tags: ["Vegetarian"]
  },
  {
    id: 25,
    name: "Talerz Falafel wegetariański duży",
    description: "kotleciki falafel, frytki, surówki, ogórki, marchewki, sosy",
    price: 25.00,
    category: "vegetarian",
    image: "/menu/talerz-falafel-duzy.png",
    tags: ["Vegetarian"]
  },
  
  // Przekąski (Snacks)
  {
    id: 26,
    name: "Nuggets / Wings / Strips",
    description: "kawałki kurczaka z frytkami",
    price: 20.00,
    category: "snacks",
    image: "/menu/nuggets.png",
    tags: []
  },
  {
    id: 27,
    name: "Bakława mała",
    description: "",
    price: 4.00,
    category: "snacks",
    image: "/menu/baklawa-small.png",
    tags: ["Sweet"]
  },
  {
    id: 28,
    name: "Bakława duża",
    description: "",
    price: 8.00,
    category: "snacks",
    image: "/menu/baklawa-large.png",
    tags: ["Sweet"]
  },
  
  // Dodatki (Sides)
  {
    id: 29,
    name: "Frytki małe",
    description: "",
    price: 10.00,
    category: "sides",
    image: "/menu/frytki-male.png",
    tags: []
  },
  {
    id: 30,
    name: "Frytki duże",
    description: "",
    price: 15.00,
    category: "sides",
    image: "/menu/frytki-duze.png",
    tags: []
  },
  {
    id: 31,
    name: "Dodatkowy sos/ser",
    description: "",
    price: 3.00,
    category: "sides",
    image: "/menu/dodatkowy-sos.png",
    tags: []
  },
  {
    id: 32,
    name: "Dodatkowe mięso",
    description: "",
    price: 5.00,
    category: "sides",
    image: "/menu/dodatkowe-mieso.png",
    tags: []
  },
  
  // Sałatki (Salads)
  {
    id: 33,
    name: "Sałatka Normalna",
    description: "surówka, biała, czerwona, pomidory, ogórki, sałata lodowa",
    price: 7.00,
    category: "salads",
    image: "/menu/salatka-normalna.png",
    tags: []
  },
  {
    id: 34,
    name: "Sałatka Grecka",
    description: "pomidory, ogórki, sałata lodowa, ser, oliwki, koperek, cebula",
    price: 16.00,
    category: "salads",
    image: "/menu/salatka-grecka.png",
    tags: []
  },
  
  // Napoje (Drinks)
  {
    id: 35,
    name: "Mango Nektan",
    description: "Sok turecki Turtamek mango",
    price: 7.00,
    category: "drinks",
    image: "/menu/sok.png",
    tags: []
  },
  {
    id: 36,
    name: "Ayran",
    description: "",
    price: 6.00,
    category: "drinks",
    image: "/menu/ayran.png",
    tags: []
  },
  {
    id: 37,
    name: "Pepsi puszka",
    description: "",
    price: 6.00,
    category: "drinks",
    image: "/menu/pepsi-puszka.png",
    tags: []
  },
  {
    id: 38,
    name: "Pepsi butelka",
    description: "500 ml",
    price: 8.00,
    category: "drinks",
    image: "/menu/pepsi-butelka.png",
    tags: []
  },
  {
    id: 39,
    name: "Lipton butelka",
    description: "500 ml",
    price: 8.00,
    category: "drinks",
    image: "/menu/lipton-butelka.png",
    tags: []
  },
  {
    id: 40,
    name: "Woda gazowana",
    description: "",
    price: 4.00,
    category: "drinks",
    image: "/menu/woda-gazowana.png",
    tags: []
  },
  {
    id: 40,
    name: "Woda Niegazowana",
    description: "",
    price: 4.00,
    category: "drinks",
    image: "/menu/woda-niegazowana.png",
    tags: []
  },
  {
    id: 41,
    name: "Liption ice tea puszka",
    description: "Lipton ice tea cytrynowy 0,33 l",
    price: 6.00,
    category: "drinks",
    image: "/menu/lipton-puszka.png",
    tags: []
  },
  {
    id: 42,
    name: "Dew puszka 0,33 l",
    description: "Mountain Dew puszka 0,33 l",
    price: 6.00,
    category: "drinks",
    image: "/menu/dew-puszka.png",
    tags: []
  },
  {
    id: 43,
    name: "Dew butelka 0,5 l",
    description: "Mountain Dew butelka 0,5 l",
    price: 6.00,
    category: "drinks",
    image: "/menu/dew-butelka.png",
    tags: []
  },
];

export default menuItems;