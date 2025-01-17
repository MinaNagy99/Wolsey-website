const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

const projectsData = [
  {
    name: "Aqsarniit Hotel and Conference Centre",
    slug: slugify("Aqsarniit Hotel and Conference Centre"),
    imgs: [
      "/projects/Aqsarniit Hotel and Conference Centre/1.webp",
      "/projects/Aqsarniit Hotel and Conference Centre/2.webp",
      "/projects/Aqsarniit Hotel and Conference Centre/3.webp",
      "/projects/Aqsarniit Hotel and Conference Centre/4.webp",

    ],
    industry: "Engineering",
    subIndustry: "Residential - Modular Str.",
    client: "Bird Construction - Jonathan Higgins",
    status: "Completed",
    location: "Calgary, Canada",
    year: "2021",
    description: [
      "The hotel designed by Bird Construction in Iqaluit, Nunavut, is named the Aqsarniit Hotel and Conference Centre. It is located at 1730 Federal Road, Iqaluit, Nunavut, X0A 1L0. This modern facility includes 94 guest rooms and suites, a 7,200-square-foot conference center, dining facilities, and a lounge. Its design reflects Inuit culture, with features such as LED-lit glass evoking the Northern Lights and a drum circle-inspired conference space​",
    ],
  },
  {
    name: "CKE Community Center",
    slug: slugify("CKE Community Center"),
    imgs: [
      "/projects/CKE Community Center/1.webp",
      "/projects/CKE Community Center/2.webp",
      "/projects/CKE Community Center/3.webp",
      "/projects/CKE Community Center/4.webp",
      "/projects/CKE Community Center/5.webp",
      "/projects/CKE Community Center/6.webp",
      "/projects/CKE Community Center/7.webp",
      "/projects/CKE Community Center/8.webp",
    ],
    industry: "Engineering",
    subIndustry: "Commercial",
    client: "Casola Koppe Architects",
    status: "Completed",
    location: "Calgary, Canada",
    year: "2021",
    description: [
      "The CKE Community Centre, designed by Casola Koppe Architects, is located at 1015 - 73 Avenue SW, Calgary, Alberta, T2V 0R9. This facility serves the Chinook Park, Kelvin Grove, and Eagle Ridge neighborhoods, offering spaces for events, recreational programs, and community activities.",
    ],
  },
  {
    name: "Herns Mill Historic Covered Bridge",
    slug: slugify("Herns Mill Historic Covered Bridge"),
    imgs: [
      "/projects/Herns Mill Historic Covered Bridge/1.webp",

    ],
    industry: "Engineering",
    subIndustry: "Specialty Fabrications",
    client: "LA West Inc. - Scott Wright",
    status: "Completed",
    location: "near Lewisburg, West Virginia.",
    year: "2021",
    description: [
      "Herns Mill Covered Bridge is a historic covered bridge near Lewisburg, Greenbrier County, West Virginia. It was built in 1884, and is a Queen post truss bridge measuring 10 feet, 6 inches wide and 53 feet, 8 inches long. It has red board-and-batten siding and a galvanized sheet metal roof.",
    ],
  },
  {
    name: "Latitude 51",
    slug: slugify("Latitude 51"),
    imgs: ["/projects/Latitude 51/1.webp"],
    industry: "Engineering",
    subIndustry: "Residential",
    client: "Shane Homes - IBI Group",
    status: "Completed",
    location: "Sage Hill Drive Northwest, Calgary, Alberta, Canada.",
    year: "2019",
    description: [
      "Latitude 51 Airdrie developed by Hunter Residential Developments Inc., featured townhomes with modern designs completed in 2019. Each unit offered approximately 1,200 square feet of living space, including two bedrooms, two full baths, and one half bath. The development was sold out shortly after launch, providing condominium ownership with shared amenities and property management benefits",
    ],
  },
  {
    name: "Mission 19",
    slug: slugify("Mission 19"),
    imgs: [
      "/projects/Mission 19/1.webp",
      "/projects/Mission 19/2.webp",
      "/projects/Mission 19/3.webp",
      "/projects/Mission 19/4.webp",
    ],
    industry: "Engineering",
    subIndustry: "Residential",
    client: "Advent Development Corporation Ltd.  - Harvey Russell",
    status: "Compeleted",
    location: "Calgary, Alberta",
    year: "2024",
    description: [
      "The 'Mission 19' development designed by Advent Development Corporation Ltd., led by architect Harvey Russell, is a residential project located in Calgary, Alberta. The project has garnered attention for its design and potential contribution to the city's multi-residential landscape. Unfortunately, I wasn't able to find detailed pictures or exact plans for this project at this moment.",
    ],
  },
  {
    name: "Pines of Normanview",
    slug: slugify("Pines of Normanview"),
    imgs: [
      "/projects/Pines of Normanview/1.webp",
      "/projects/Pines of Normanview/2.webp",
      "/projects/Pines of Normanview/3.webp",
    ],
    industry: "Engineering",
    subIndustry: "Residential",
    client: "Casola Koppe Architects",
    status: "Completed",
    location: "Calgary, Regina, Canada",
    year: "2021",
    description: [
      "Pines of Normanview offers modern, spacious apartments in Regina's desirable Normanview neighborhood. Managed by Boardwalk, it features well-maintained suites, on-site amenities, and 24/7 customer service. Conveniently located near schools, shopping, and transit, it’s ideal for families, professionals, and students seeking quality living.",
    ],
  },
  {
    name: "Skyview Ranch",
    slug: slugify("Skyview Ranch"),
    imgs: [
      "/projects/Skyview Ranch/1.webp",
      "/projects/Skyview Ranch/2.webp",
      "/projects/Skyview Ranch/3.webp",
      "/projects/Skyview Ranch/4.webp",

    ],
    industry: "Engineering",
    subIndustry: "Residential- Mixed Use",
    client: "S2 Architecture",
    status: "Compeleted",
    location: "Calgary, Alberta, Canada",
    year: "2013",
    description: [
      "Skyview Ranch is a master-planned community in northeast Calgary, offering a variety of housing options from condos to single-family homes. Designed for modern living, it features green spaces, parks, and easy access to amenities like schools, shopping, and recreation facilities. The community is well-connected with major routes and public transit, making it convenient for families and professionals. ",
    ],
  },
  {
    name: "The Mark 101",
    slug: slugify("The Mark 101"),
    imgs: ["/projects/The Mark 101/1.webp", "/projects/The Mark 101/2.webp"],
    industry: "Engineering",
    subIndustry: "Residential",
    client: "Hunter Residential Developments",
    status: "Completed",
    location: "Calgary, Airdrie, Canada",
    year: "2014",
    description: [
      "The Mark 101 is a new condominium development located in Calgary's vibrant Sage Hill community. This project features a variety of units, from one-bedroom suites to spacious two-bedroom homes, with sizes ranging from 613 to 887 square feet. The development offers modern amenities, including high-quality finishes, open living spaces, and well-equipped kitchens. Residents also enjoy access to amenities such as fitness centers, rooftop terraces, and community lounges.",
      "The Mark 101 is strategically located near shopping, dining, and entertainment options, making it an ideal choice for those seeking a convenient and modern living space.",
    ],
  },
  {
    name: "Warman Home Centre Communiplex",
    slug: slugify("Warman Home Centre Communiplex"),
    imgs: [
      "/projects/Warman Home Centre Communiplex/1.webp",
      "/projects/Warman Home Centre Communiplex/2.webp",
      "/projects/Warman Home Centre Communiplex/3.webp",
      "/projects/Warman Home Centre Communiplex/4.webp",
    ],
    industry: "Engineering",
    subIndustry: "Commercial",
    client: "CTM Design Services Ltd",
    status: "Compeleted",
    location: "Warman, Saskatchewan, Canada",
    year: "2021",
    description: [
      "The Warman buildings originally associated with CTM Design Services Ltd. are located in Warman, Saskatchewan, Canada. These facilities have undergone developments, and one notable project in the city is the Warman Home Centre Communiplex (previously referred to as the Legends Centre). The Communiplex serves as a hub for recreation and cultural activities and is central to the city's continued growth. Recent expansions and upgrades have added modern features to the facility",
    ],
  },
];

export default projectsData;
