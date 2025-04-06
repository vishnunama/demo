import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
// import p5_img from "./product_5.png";
// import p6_img from "./product_6.png";
// import p7_img from "./product_7.png";
// import p8_img from "./product_8.png";
// import p9_img from "./product_9.png";
// import p10_img from "./product_10.png";
// import p11_img from "./product_11.png";
// import p12_img from "./product_12.png";
// import p13_img from "./product_13.png";
// import p14_img from "./product_14.png";
// import p15_img from "./product_15.png";
// import p16_img from "./product_16.png";
// import p17_img from "./product_17.png";
// import p18_img from "./product_18.png";
// import p19_img from "./product_19.png";
// import p20_img from "./product_20.png";
// import p21_img from "./product_21.png";
// import p22_img from "./product_22.png";
// import p23_img from "./product_23.png";
// import p24_img from "./product_24.png";
// import p25_img from "./product_25.png";
// import p26_img from "./product_26.png";
// import p27_img from "./product_27.png";
// import p28_img from "./product_28.png";
// import p29_img from "./product_29.png";
// import p30_img from "./product_30.png";
// import p31_img from "./product_31.png";
// import p32_img from "./product_32.png";
// import p33_img from "./product_33.png";
// import p34_img from "./product_34.png";
// import p35_img from "./product_35.png";
// import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Tiranga Game Demo",
    category: "women",
    image: p1_img,

    gameid: 1234567890,
    gamepassword: 12345678,
    sales: 10,
    comment: 12,
    comments: [
      "Perfect for any occasion.",
      "Lovely color and fit.",
      "Highly recommended for women.",
    ],
    description:
      "System management saas products, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    updatedate: "Oct 21, 2024,",
    published: "dec 21, 2024,",
    technology: "Node, ejs",
    livedemo: "https://bdjackpot.com/home",
    reviews: 4.9,
  },
  {
    id: 2,
    name: "BDG Big Daddy Game Demo",
    category: "women",
    image: p2_img,
    gameid: "admin",
    gamepassword: "admin",
    sales: 11,
    comment: 9,
    comments: [
      "Fits perfectly, great buy!",
      "Loved the fabric quality.",
      "Will purchase again.",
    ],
    description:
      "vishnu consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    updatedate: "july 21, 2024,",
    published: "jan 21, 2024,",
    technology: "node",
    livedemo: "https://bdg.codehere.online/admin",
    reviews: 5,
  },
  {
    id: 3,
    name: "TC Lottery Game Demo",
    category: "women",
    image: p3_img,
    gameid: 1234567890,
    gamepassword: 12345678,
    sales: 12,
    comment: 8,
    comments: [
      "Amazing quality and design!",
      "Absolutely loved it!",
      "Worth every penny!",
    ],
    description:
      "adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    updatedate: "May 21, 2024,",
    published: "mar 21, 2024,",
    technology: "php",
    livedemo: "https://hash.game/",
    reviews: 5.0,
  },
  {
    id: 4,
    name: "91 Club game demo",
    category: "women",
    image: p4_img,
    gameid: 1234567890,
    gamepassword: 12345678,
    sales: 13,
    comment: 9,
    comments: [
      "Great product for the price!",
      "Fast delivery, highly recommend.",
      "Exceeded expectations!",
    ],
    description:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    updatedate: "Feb 21, 2024,",
    published: "april 21, 2024,",
    technology: "unity",
    livedemo: "https://ekjeet.com/",
    reviews: 4.5,
  },

  // {
  //   id: 5,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p5_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 6,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p6_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 7,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p7_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 8,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p8_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 9,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p9_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 10,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p10_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 11,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p11_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 12,
  //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //   category: "women",
  //   image: p12_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 13,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p13_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 14,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p14_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 15,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p15_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 16,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p16_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 17,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p17_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 18,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p18_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 19,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p19_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 20,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p20_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 21,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p21_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 22,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p22_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 23,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p23_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 24,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p24_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 25,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p25_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 26,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p26_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 27,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p27_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 28,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p28_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 29,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p29_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 30,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p30_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 31,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p31_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 32,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p32_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 33,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p33_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 34,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p34_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 35,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p35_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 36,
  //   name: "Boys Orange Colourblocked Hooded Sweatshirt",
  //   category: "kid",
  //   image: p36_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
];

export default all_product;
