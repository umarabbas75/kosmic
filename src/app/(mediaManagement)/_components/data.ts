type ContentItem = {
  title: string;
  value: string;
};

type ContentData = {
  [key: string]: ContentItem[];
};

const contentData: ContentData = {
  Fun: [
    { title: "Board games revival", value: "Board games revival" },
    { title: "Comedy trends", value: "Comedy trends" },
    { title: "Amusement parks", value: "Amusement parks" },
    { title: "Escape rooms", value: "Escape rooms" },
    { title: "Street performances", value: "Street performances" },
    { title: "Online challenges", value: "Online challenges" },
    { title: "Festivals impact", value: "Festivals impact" },
    { title: "Crafting movement", value: "Crafting movement" },
    { title: "Social gaming", value: "Social gaming" },
    { title: "Virtual reality", value: "Virtual reality" }
  ],
  Education: [
    { title: "Gamified learning", value: "Gamified learning" },
    { title: "Education systems", value: "Education systems" },
    { title: "Bilingual benefits", value: "Bilingual benefits" },
    { title: "Standardized testing", value: "Standardized testing" },
    { title: "Arts in schools", value: "Arts in schools" },
    { title: "Tech bootcamps", value: "Tech bootcamps" },
    { title: "Homeschooling dynamics", value: "Homeschooling dynamics" },
    { title: "Mentorship importance", value: "Mentorship importance" },
    { title: "Educational equity", value: "Educational equity" },
    { title: "Mobile learning", value: "Mobile learning" }
  ],
  Sports: [
    { title: "Sports medicine", value: "Sports medicine" },
    { title: "Team sociology", value: "Team sociology" },
    { title: "Olympic economics", value: "Olympic economics" },
    { title: "Gender parity", value: "Gender parity" },
    { title: "Fandom psychology", value: "Fandom psychology" },
    { title: "Extreme sports", value: "Extreme sports" },
    { title: "Sports business", value: "Sports business" },
    { title: "Youth athletics", value: "Youth athletics" },
    { title: "Data analytics", value: "Data analytics" },
    { title: "Doping ethics", value: "Doping ethics" }
  ],
  News: [
    { title: "Citizen journalism", value: "Citizen journalism" },
    { title: "Whistleblower influence", value: "Whistleblower influence" },
    { title: "Fake news", value: "Fake news" },
    { title: "Print media survival", value: "Print media survival" },
    { title: "Social media news", value: "Social media news" },
    { title: "Cybersecurity news", value: "Cybersecurity news" },
    { title: "Democratic media", value: "Democratic media" },
    { title: "News deserts", value: "News deserts" },
    { title: "News economics", value: "News economics" },
    { title: "Broadcast evolution", value: "Broadcast evolution" }
  ],
  Investment: [
    { title: "Robo-advising", value: "Robo-advising" },
    { title: "Geopolitical impacts", value: "Geopolitical impacts" },
    { title: "Index funds", value: "Index funds" },
    { title: "Real estate trends", value: "Real estate trends" },
    { title: "Startup investing", value: "Startup investing" },
    { title: "Social trading", value: "Social trading" },
    { title: "Tax strategies", value: "Tax strategies" },
    { title: "Emerging markets", value: "Emerging markets" },
    { title: "Financial literacy", value: "Financial literacy" },
    { title: "Pension futures", value: "Pension futures" }
  ],
  Facts: [
    { title: "Animal oddities", value: "Animal oddities" },
    { title: "Everyday science", value: "Everyday science" },
    { title: "Historical obscurities", value: "Historical obscurities" },
    { title: "Science myths", value: "Science myths" },
    { title: "Human body facts", value: "Human body facts" },
    { title: "Oceanic discoveries", value: "Oceanic discoveries" },
    { title: "Space exploration", value: "Space exploration" },
    { title: "Ancient tech", value: "Ancient tech" },
    { title: "World laws", value: "World laws" },
    { title: "Bizarre news", value: "Bizarre news" }
  ]
};

export default contentData;
