import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import DunePartTwoPost from './pages/movie-posts/DunePartTwo';
import TheBatmanPost from './pages/movie-posts/TheBatman';
import MissionImpossiblePost from './pages/movie-posts/MissionImpossible';
import MissionImpossibleFinalReckoningPost from './pages/movie-posts/MissionImpossibleFinalReckoning';
import TalkToMePost from './pages/movie-posts/TalkToMe';
import M3GANPost from './pages/movie-posts/M3GAN';
import BarbiePost from './pages/movie-posts/Barbie';
import AnyoneButYouPost from './pages/movie-posts/AnyoneButYou';
import OppenheimerPost from './pages/movie-posts/Oppenheimer';
import TheIronClawPost from './pages/movie-posts/TheIronClaw';
import SaltburnPost from './pages/movie-posts/Saltburn';
import PoorThingsPost from './pages/movie-posts/PoorThings';
import SquidGameSeason1Post from './pages/movie-posts/SquidGameSeason1';
import SquidGameSeason2Post from './pages/movie-posts/SquidGameSeason2';
import SquidGameSeason3Post from './pages/movie-posts/SquidGameSeason3';
import BallerinPost from './pages/movie-posts/Ballerina';
import IndependenceDayPost from './pages/movie-posts/IndependenceDay';
import TangledPost from './pages/movie-posts/Tangled';
import HowToTrainYourDragonPost from './pages/movie-posts/HowToTrainYourDragon';
import KarateKidLegendsPost from './pages/movie-posts/KarateKidLegends';
import TwentyEightYearsLaterPost from './pages/movie-posts/TwentyEightYearsLater';
import WeaponsPost from './pages/movie-posts/Weapons';
import TheGirlfriendPost from './pages/movie-posts/TheGirlfriend';
import SaiyaaraPost from './pages/movie-posts/Saiyaara';

import EyesOfWakandaS1Post from './pages/movie-posts/EyesOfWakandaS1';
import JurassicWorldRebirthPost from './pages/movie-posts/JurassicWorldRebirth';
import WednesdaySeason2Post from './pages/movie-posts/WednesdaySeason2';
import AlienEarthPost from './pages/movie-posts/AlienEarth';
import ThePickupPost from './pages/movie-posts/ThePickup';
import Superman2025Post from './pages/movie-posts/Superman2025';
import TheMapThatLeadsToYouPost from './pages/movie-posts/TheMapThatLeadsToYou';
import F1Post from './pages/movie-posts/F1';
import KPopDemonHuntersPost from './pages/movie-posts/KPopDemonHunters';
import IKnowWhatYouDidLastSummerPost from './pages/movie-posts/IKnowWhatYouDidLastSummer';
import TogetherPost from './pages/movie-posts/Together';
import GenVS2E7Post from './pages/movie-posts/GenVS2E7';
import SplinterCellDeathwatchPost from './pages/movie-posts/SplinterCellDeathwatch';
import NCISTonyAndZivaPost from './pages/movie-posts/NCISTonyAndZiva';
import AHouseOfDynamitePost from './pages/movie-posts/AHouseOfDynamite';
import BoneLakePost from './pages/movie-posts/BoneLake';
import GoodBoyPost from './pages/movie-posts/GoodBoy';
import NoOtherChoicePost from './pages/movie-posts/NoOtherChoice';
import GhostTrainPost from './pages/movie-posts/GhostTrain';
import TheWhistlerPost from './pages/movie-posts/TheWhistler';
import BallisticPost from './pages/movie-posts/Ballistic';
import News from './components/News';
import NewsDetails from './components/NewsDetails';


// Movie-related news data
const newsData = [
  {
    id: 1,
    title: "Superman 2025: First Official Trailer Reveals Stunning New Suit Design",
    excerpt: "The highly anticipated Superman reboot showcases an entirely new suit design for the Man of Steel. Fans are thrilled with the sleek and modern approach to the iconic costume. The trailer has already garnered over 50 million views worldwide.",
    category: "Movie Trailers",
    author: "Entertainment Weekly",
    date: "2 hours ago",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPfYWUBZ_LxH0n5eZKrK2W0i-8DxGj98oLCXJQRz7lzjHaZk",
    details: [
      {
        title: "New Suit Design Elements",
        content: "The new Superman suit combines classic elements with modern aesthetics. It features enhanced durability technology, a more streamlined silhouette, and revolutionary materials that make it appear lighter and more dynamic than ever before."
      },
      {
        title: "Cast and Director",
        content: "The film stars as the new Superman with acclaimed director James Gunn at the helm. This fresh take promises to bring a new perspective to the iconic character while honoring the legacy of previous iterations."
      },
      {
        title: "Release and Reception",
        content: "Expected to release in summer 2025, the trailer has already broken streaming records with 50+ million views. Fan reactions on social media have been overwhelmingly positive, with particular praise for the suit design and visual effects."
      }
    ]
  },
  {
    id: 2,
    title: "Dune: Part Three Officially Greenlit by Warner Bros",
    excerpt: "Following the massive success of Dune: Part Two, Warner Bros has officially approved the production of Dune: Part Three. Director Denis Villeneuve is set to return for the epic conclusion of Paul Atreides' journey across the desert planet.",
    category: "Breaking News",
    author: "Deadline",
    date: "4 hours ago",
    imageUrl: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    details: [
      {
        title: "Production Timeline",
        content: "Pre-production is set to begin in Q3 2026, with principal photography scheduled to start in early 2027. The film is expected to release in late 2029, completing the trilogy with a grand cinematic conclusion."
      },
      {
        title: "Story Direction",
        content: "Part Three will adapt the final sections of Frank Herbert's original novel, focusing on Paul's reign as emperor and the inevitable conflicts that arise. The narrative promises deeper exploration of the themes of power, prophecy, and destiny."
      },
      {
        title: "Scale and Ambition",
        content: "Denis Villeneuve has confirmed that Part Three will be the most ambitious installment yet, featuring expanded scope, new locations on Arrakis, and groundbreaking visual effects that push the boundaries of cinema technology."
      }
    ]
  },
  {
    id: 3,
    title: "How to Train Your Dragon Live-Action: Cast Announcement and Behind-the-Scenes",
    excerpt: "The live-action adaptation of How to Train Your Dragon has announced its main cast. The production team shared exclusive behind-the-scenes footage showing the incredible practical effects and dragon design process for the upcoming film.",
    category: "Production Updates",
    author: "Variety",
    date: "6 hours ago",
    imageUrl: "https://res.cloudinary.com/dib0fble7/image/upload/v1752688734/Untitled12222_fkn050.webp",
    details: [
      {
        title: "Main Cast Revealed",
        content: "The lead role of Hiccup has been cast with an acclaimed young actor known for dramatic performances. Supporting cast includes veteran actors for Stoick and other key Viking characters, bringing depth and gravitas to the adaptation."
      },
      {
        title: "Dragon Design and Effects",
        content: "The production revealed revolutionary dragon design processes combining motion-capture technology with practical animatronics. Each dragon species has been meticulously crafted to be both visually stunning and believable within a live-action world."
      },
      {
        title: "Viking World Building",
        content: "Behind-the-scenes footage showcases extensive set construction of Berk, the Viking village. Production designers have created a fully realized world that balances the fantastical elements of dragons with grounded Viking architecture and culture."
      }
    ]
  },
  {
    id: 4,
    title: "Oppenheimer Breaks Box Office Records at International Markets",
    excerpt: "Christopher Nolan's acclaimed film Oppenheimer continues to dominate global box offices, becoming the highest-grossing biographical drama of all time. The film has resonated with audiences across 87 countries.",
    category: "Box Office",
    author: "Hollywood Reporter",
    date: "8 hours ago",
    imageUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    details: [
      {
        title: "Box Office Milestones",
        content: "Oppenheimer has earned over $1.2 billion globally, surpassing all previous biographical dramas. The film topped the international box office in 47 countries and continues to attract audiences weeks after its initial release."
      },
      {
        title: "Critical Acclaim",
        content: "The film has maintained a high critical score across major review aggregators and has been selected as a strong contender for major awards season. Critics praise the cinematography, narrative structure, and powerful performances throughout the film."
      },
      {
        title: "Cultural Impact",
        content: "Oppenheimer has sparked renewed interest in World War II history and atomic physics. Universities report increased enrollment in physics departments, and the film has become a cultural touchstone for discussions about scientific responsibility and ethics."
      }
    ]
  },
  {
    id: 5,
    title: "Barbie Movie Wins Best Comedy at International Film Awards",
    excerpt: "Greta Gerwig's Barbie has taken home the Best Comedy award at the prestigious International Film Awards. The film also won for Best Costumes and Best Original Score, celebrating its massive cultural impact.",
    category: "Awards",
    author: "Variety",
    date: "1 day ago",
    imageUrl: "https://image.tmdb.org/t/p/w500/nM4gtwMNQYxHzxdCTXKJbS6SggS.jpg",
    details: [
      {
        title: "Awards Won",
        content: "Barbie swept the awards ceremony, winning Best Comedy, Best Costumes, Best Original Score, and Best Production Design. The film's achievements represent recognition of Greta Gerwig's bold directorial vision and the film's cultural relevance."
      },
      {
        title: "Director and Cast Recognition",
        content: "Margot Robbie's performance as Barbie and Ryan Gosling's unexpected comedic turn as Ken received special recognition. Greta Gerwig became the first female director to win Best Comedy, marking a significant milestone in industry representation."
      },
      {
        title: "Cultural Phenomenon",
        content: "The Barbie movie sparked a global cultural movement, with 'Barbie pink' becoming a fashion trend and the film influencing conversations about feminism, nostalgia, and consumer culture. The success has reinvigorated interest in the original Mattel doll brand."
      }
    ]
  },
  {
    id: 6,
    title: "Mission Impossible: Final Reckoning - Director Reveals Action Sequence Details",
    excerpt: "Director Christopher McQuarrie has revealed the ambitious action sequences planned for Mission Impossible: The Final Reckoning. Tom Cruise is set to perform more death-defying stunts, including a skyscraper BASE jump never attempted before.",
    category: "Behind the Scenes",
    author: "Empire Magazine",
    date: "1 day ago",
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShcMw2wUx24KAWkT-eQaC8bCB5EzkApaInrKpXeGm_UM8HcBlN",
    details: [
      {
        title: "Gravity-Defying Stunts",
        content: "Tom Cruise will perform a record-breaking BASE jump from a 5,000-foot cliff in a single take. The stunt was choreographed over two years with military specialists and has been approved by international stunt coordinators as the most ambitious skyscraper jump ever filmed."
      },
      {
        title: "Story Arc Conclusion",
        content: "This final installment brings closure to Ethan Hunt's story arc, featuring emotional depth alongside the franchise's signature action. McQuarrie promises a blend of intimate character moments and explosive set pieces that will satisfy both longtime fans and newcomers."
      },
      {
        title: "International Locations",
        content: "Filming takes place across six continents, with major action sequences shot in practical locations without green screen. The production showcases breathtaking scenery from Iceland to the streets of Dubai, creating a visually stunning swan song for the franchise."
      }
    ]
  },
  {
    id: 7,
    title: "Squid Game Season 3: Finale Sets New Netflix Streaming Record",
    excerpt: "The highly anticipated final season of Squid Game has shattered all Netflix records, becoming the most-watched season of the series. The finale kept viewers on the edge of their seats with shocking plot twists and character revelations.",
    category: "Streaming",
    author: "Netflix Official Blog",
    date: "2 days ago",
    imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    details: [
      {
        title: "Viewership Records",
        content: "Squid Game Season 3 reached 900 million hours watched in its first week, breaking the platform's all-time record. The finale episode was watched by over 500 million accounts, making it the most-watched single episode in Netflix history."
      },
      {
        title: "Story Conclusion",
        content: "The season provides definitive endings to major character arcs while leaving room for thematic reflection. Viewer satisfaction scores indicate that the finale successfully balanced emotional depth with the show's signature high-stakes drama."
      },
      {
        title: "Global Cultural Impact",
        content: "The series finale sparked global conversations about class inequality, human nature, and morality. Social media was dominated by fan theories and discussions, with the show trending in 195 countries simultaneously."
      }
    ]
  },
  {
    id: 8,
    title: "The Batman Director Matt Reeves Hints at Batman Returns: The Sequel",
    excerpt: "Matt Reeves has teased that The Batman sequel is already in development. The director hinted at a darker, more intricate mystery thriller storyline for the next installment of the Dark Knight's adventures.",
    category: "Upcoming Projects",
    author: "The Hollywood Reporter",
    date: "2 days ago",
    imageUrl: "https://image.tmdb.org/t/p/w500/oJscIwyhjqmAwiaY89GBWnRHy5J.jpg",
    details: [
      {
        title: "Sequel Development Status",
        content: "The sequel is in active development with Matt Reeves returning as director and writer. Production is expected to begin in 2027, with a targeted release date of 2029, allowing ample time for script refinement and pre-production planning."
      },
      {
        title: "Story Direction",
        content: "The sequel will explore a more intricate mystery that challenges Batman's detective skills at the highest level. Reeves hints at introducing iconic villains and expanding the detective noir elements that made the first film successful."
      },
      {
        title: "Cast and Tone",
        content: "Robert Pattinson is confirmed to return as Bruce Wayne/Batman. The tone will maintain the dark, grounded aesthetic of the first film while deepening character development and expanding Gotham's criminal underworld mythology."
      }
    ]
  },
  {
    id: 9,
    title: "M3GAN 2: Artificial Intelligence Thriller Gets Greenlit",
    excerpt: "Following the success of M3GAN, the studio has approved the production of M3GAN 2. The sequel will explore more advanced AI technology and new ethical dilemmas. The script is already in development with returning star Allison Williams.",
    category: "Movie News",
    author: "Deadline",
    date: "3 days ago",
    imageUrl: "https://image.tmdb.org/t/p/w500/87kMmFsEGl3e1agVoPIr3BzBLJh.jpg",
    details: [
      {
        title: "Sequel Concept",
        content: "M3GAN 2 will introduce more advanced AI iterations and explore the global implications of artificial intelligence becoming mainstream. The story expands beyond a single family to examine society-wide consequences of unchecked AI development."
      },
      {
        title: "Cast and Production",
        content: "Allison Williams returns in a lead role, with acclaimed director James McTeigue set to direct the sequel. The budget has increased significantly to support more sophisticated visual effects and expanded scope of the story."
      },
      {
        title: "Thematic Expansion",
        content: "Beyond the thriller elements, M3GAN 2 will tackle deeper philosophical questions about consciousness, free will, and humanity's relationship with technology. The film aims to balance entertainment with thought-provoking commentary on AI ethics and responsibility."
      }
    ]
  }
];

// Updated movie data with specific movies for each category
const movieData = {
  latest: [
    {
      id: 47,
      title: "Ballistic",
      imageUrl: "https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/245426/ballistic.jpg",
      rating: "7.8",
      year: "2026",
      description: "Ballistic is an intense action-thriller with high-octane sequences. Stream or download Ballistic (2026) in stunning HD quality. Available in 1080p (5.1 GB) and 720p (1.88 GB) with English E-AC-3 6ch audio.",
      watchUrl: "/movies/ballistic"
    },
    {
      id: 46,
      title: "The Whistler",
      imageUrl: "https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/245395/TheWhistler_Web-Size_Poster_2764x4096.jpg",
      rating: "7.7",
      year: "2026",
      description: "The Whistler is an upcoming thriller that delivers suspense and mystery. Stream or download The Whistler (2026) in stunning HD quality. Available in 1080p (4.34 GB) and 720p (1.96 GB) with English E-AC-3 6ch audio.",
      watchUrl: "/movies/the-whistler"
    },
    {
      id: 44,
      title: "No Other Choice",
      imageUrl: "https://resizing.flixster.com/jmx4yLi00DEubbDPQoxemNRqPsc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyMzQ4M2M5LWEzMTUtNDA4NC05OGMyLTVhYjMxNTE0ZjhhNi5qcGc=",
      rating: "7.9",
      year: "2025",
      description: "A tense drama-thriller where every decision carries consequences. As a rising professional faces an explosive scandal, the dominoes fall and the choices narrow—until there’s no other choice."
    },
    {
      id: 45,
      title: "Ghost Train",
      imageUrl: "https://img2.beritasatu.com/cache/jakartaglobe/960x620-w/2025/07/1753444859-1673x2461.webp",
      rating: "7.4",
      year: "2025",
      description: "A claustrophobic horror-thriller set on the last train of the night. Ghostly hands press through windows as a sinister presence stalks the carriage."
    },
    {
      id: 43,
      title: "Good Boy",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-nBijFTKz_-XkJCTNXVo-bA7Qj7vFiU7NIcbC2ygYeEn47IA6",
      rating: "7.6",
      year: "2025",
      description: "A heartwarming comedy-drama about the unique bond between humans and their four-legged companions. A lovable dog teaches valuable lessons about loyalty, unconditional love, and what truly matters."
    },
    {
      id: 42,
      title: "Bone Lake",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPCge07msT0TbZ_-d5FhcN7ozQsd4WKdX0Ka2NTOdoMLiEjqXo",
      rating: "7.5",
      year: "2025",
      description: "A chilling horror-thriller that takes you deep into terror and mystery. When friends venture to a remote lakeside cabin, they discover the serene waters hide a dark and sinister secret."
    },
    {
      id: 41,
      title: "A House of Dynamite",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNjAzMjQ4YTUtOGI1Yy00YTFkLTlkMDQtMDEwOWNjYmE3MTU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: "7.8",
      year: "2025",
      description: "An explosive action-thriller caught in a dangerous web of crime, corruption, and explosive revelations. Available in 4K with Dolby Vision, HDR, and Multi Audio [Hindi + Tamil + Telugu + English].",
      watchUrl: "https://www.netflix.com/lk/title/81744537?source=35&fromWatch=true"
    },
    {
      id: 40,
      title: "NCIS: Tony and Ziva Season 1",
      imageUrl: "https://www.tvguide.com/a/img/resize/b726ea18c0d1d2a6999d5e4e95d780b470f8b922/hub/2025/06/16/6f9da3f4-5e3a-4297-b228-c3e26354edc9/ncistonyziva.jpg?auto=webp",
      rating: "8.5",
      year: "2025",
      description: "The long-awaited reunion of Tony DiNozzo and Ziva David in an all-new thrilling adventure. Complete Season 1 available in 4K with Dolby Vision, HDR, and Dual Audio [Hindi + English]."
    },
    {
      id: 39,
      title: "Splinter Cell: Deathwatch Season 1",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDy03rgYPk2rrOKMI18KZU3l32V9fPcnzcqrVOZuiv3nHH36-WrbLtHtFXpDqmi6crAqj9",
      rating: "8.7",
      year: "2025",
      description: "Based on the legendary video game franchise, this Netflix original series follows elite operative Sam Fisher as he navigates a world of shadows, high-tech gadgets, and deadly conspiracies. Complete Season 1 available in premium Netflix WEB-DL quality with Dual Audio."
    },
    {
      id: 38,
      title: "Gen V S02E07 - Hell Week",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzwSBfxxHGySUWXuRNH1MJ4-UX971SBEnF7dRVmtQ9WbwlOmYY",
      rating: "8.3",
      year: "2025",
      description: "In Hell Week, the seventh episode of Gen V's second season, the stakes reach new heights at Godolkin University. As the pressure mounts during the intense Hell Week trials, our young heroes face their most challenging tests yet in this explosive superhero drama."
    },
    {
      id: 37,
      title: "Saiyaara",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_FMjpg_UX933_.jpg",
      rating: "7.6",
      year: "2025",
      description: "A captivating romantic drama that follows the journey of two individuals from different walks of life whose paths cross unexpectedly. Set against the backdrop of contemporary India, the film explores themes of love, destiny, and the courage to follow your heart."
    },
    {
      id: 36,
      title: "The Girlfriend",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSDKJJbrAlhez-_qFHsNabgqhmMcBd1FBxhBv3FMIh-kma8F8y",
      rating: "8.2",
      year: "2025",
      description: "A gripping psychological drama series where a mysterious woman enters the lives of an unsuspecting family, gradually unraveling their secrets and threatening to destroy everything they've built."
    },
    {
      id: 35,
      title: "Weapons",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-FkFMeOIyaH7KEDXFhc3p8itdq1EZGDKYmWhwC0iry-Ka3Pr",
      rating: "7.8",
      year: "2025",
      description: "When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance."
    },
    {
      id: 34,
      title: "Together",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSW1FzzjgYeF_ARyk2gInJMc9Q0rAkYSGST7VLI48J48Xn6j67M",
      rating: "7.8",
      year: "2025",
      description: "A psychological horror film that explores the terrifying consequences of collective trauma and isolation. Six friends at a remote cabin for a reunion weekend discover they're unable to physically separate from each other, forcing them to confront the dark secret that binds them together."
    },
    {
      id: 33,
      title: "I Know What You Did Last Summer",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtIJDVkAddVE006PU9kip20wEONtjik8-S1jogokxIlelsPTd6",
      rating: "7.5",
      year: "2025",
      description: "A modern reboot of the classic slasher film. A group of friends are haunted by a shared secret from their past when they begin to receive threatening messages one year after a tragic accident. As they try to uncover who's behind the messages, they find themselves being hunted down one by one."
    },
    {
      id: 32,
      title: "KPop Demon Hunters Sing-Along",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRiQPAU0vExAsL_LLn1IejwD-e4TNAGB-952JTZ000HZ-lfNKOh",
      rating: "7.8",
      year: "2025",
      description: "A high-energy action musical featuring a talented K-pop girl group who discover they're the latest in a long line of demon hunters. By day, they're chart-topping sensations; by night, they battle supernatural forces threatening the world. This special sing-along version includes on-screen lyrics for all original songs."
    },
    {
      id: 31,
      title: "F1",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT85TrSaHuKW1dis3_6g4acoHHaNvt1crmPF1MQKfn6QNjWXuiM",
      rating: "8.5",
      year: "2025",
      description: "An action-packed sports drama chronicling the high-stakes world of Formula 1 racing. When a rookie driver gets the opportunity of a lifetime to join an elite racing team, he must navigate fierce rivalries, dangerous tracks, and his own personal demons to become a champion.",
      watchUrl: "https://www.youtube.com/watch?v=8RInW7zWDn8"
    },
    {
      id: 30,
      title: "The Map That Leads to You",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJix5tp_t--OlEPLwAy7rdYzAwpbuBUeFZMMLJVHK0R3VKqc1",
      rating: "7.8",
      year: "2025",
      description: "A sweeping romance and drama set in 2025. Two strangers meet by chance and embark on a journey across Europe, discovering love, heartbreak, and the meaning of destiny. Their story unfolds through a series of maps, letters, and unforgettable moments.",
      watchUrl: "https://www.youtube.com/results?search_query=The+Map+That+Leads+to+You+2025+trailer"
    },
    {
      id: 29,
      title: "Alien: Earth",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKBTdQQVzT5EA37PubvEMvnPNJ2og0eDOvgoinUEGa9gJ4MtNk",
      rating: "8.5",
      year: "2025",
      description: "A thrilling new sci-fi drama series set in 2025. When mysterious extraterrestrial forces arrive on Earth, humanity must unite to face an unprecedented threat. Follow the journey of scientists, soldiers, and ordinary people as they struggle to survive, adapt, and uncover the secrets behind the alien invasion. 1 season."
    },
    {
      id: 28,
      title: "Mission Impossible - The Final Reckoning",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShcMw2wUx24KAWkT-eQaC8bCB5EzkApaInrKpXeGm_UM8HcBlN",
      rating: "8.2",
      year: "2025",
      watchUrl: "#",
      description: "In the epic conclusion to the Mission: Impossible saga, Ethan Hunt and his IMF team face their deadliest enemy yet. As past choices return to haunt him, Hunt must make the ultimate sacrifice to protect those he loves most."
    },
      {
        id: 27,
        title: "Superman",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
        rating: "8.4",
        year: "2025",
        watchUrl: "#",
        description: "The legendary superhero returns in an epic action/sci-fi adventure. Superman faces new threats to Earth and must balance his human identity with his superhuman responsibilities."
      },
    {
      id: 26,
      title: "The Pickup",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSosgeC462Ds54wCyynZPrAlSillruysuUNUQO_py7dW-7D16KT",
      rating: "7.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/en/movie/the-pickup-2025",
      description: "A hilarious comedy heist film about an unlikely crew pulling off the perfect crime. When a group of ordinary people decide to attempt an extraordinary heist, they discover that stealing isn't as easy as it looks in the movies."
    },
    {
      id: 25,
      title: "Wednesday Season 2",
      imageUrl: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      rating: "8.7",
      year: "2025",
      description: "Wednesday Addams returns for her sophomore year at Nevermore Academy. As she navigates new mysteries, supernatural threats, and complex relationships, the iconic goth teenager must master her emerging psychic abilities while uncovering dark secrets that threaten both the school and her family legacy."
    },
    {
      id: 24,
      title: "Jurassic World Rebirth",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA",
      rating: "7.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/assets/v1/video/movie.mp4",
      description: "A profit-driven pharmaceutical company assembles a team to retrieve blood samples from the world's last prehistoric giants. Their mission leads them to a forbidden island overrun by engineered hybrids that can run, swim, glide, and soar."
    },
    {
      id: 23,
      title: "Eyes of Wakanda Season 1",
      imageUrl: "https://res.cloudinary.com/dib0fble7/image/upload/v1754124989/images_4_li0lmi.jpg",
      rating: "8.5",
      year: "2025",
      description: "Marvel Animation's new action-adventure series follows the adventures of brave Wakandan warriors throughout history. In this globe-trotting adventure, the heroes must carry-out dangerous missions to retrieve Vibranium artifacts from the enemies of Wakanda. They are the Hatut Zaraze and this is their story."
    },
    {
      id: 21,
      title: "28 Years Later",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52mCisDohLeTVzvyFcx_elHY3I4lzMhJLUfHsyoMnt3vIpjTs",
      rating: "8.2",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=28YearsLater2025#",
      description: "The highly anticipated third installment in the acclaimed zombie apocalypse franchise. Set 28 years after the original outbreak, a new generation faces the evolved infected in a world forever changed by the rage virus."
    },
    {
      id: 20, 
      title: "Karate Kid: Legends",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLrkP1ycW19vMwYgQnsDpCNo3kd2OBpZSwaIdAVNnz6zvG9Digr3pDpE7p2DMkrLB000LUAa4mVBW_rR7JqN5Z8M9JovQiSMI2IZ3TqRY",
      rating: "7.5",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=karateKid2025#",
      description: "The latest installment in the beloved Karate Kid franchise brings together new and familiar faces in an epic martial arts adventure. A new generation learns the way of karate while honoring the legends who came before them."
    },
    {
      id: 18,
      title: "Tangled",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
      rating: "7.7",
      year: "2010",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=38757#",
      description: "When the kingdom's most wanted—and most charming—bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair."
    },
    {
      id: 19,
      title: "How to Train Your Dragon",
      imageUrl: "https://res.cloudinary.com/dib0fble7/image/upload/v1752688734/Untitled12222_fkn050.webp",
      rating: "8.1",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=10191#",
      description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed."
    },
    {
      id: 16,
      title: "Ballerina",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRh56p8pGOiRsnHtc1SZi5g8lbs7cedWGNpPtk8PzFpgsKqCiVHk1qHSAjBUiRPgTnrRohOs3EPGEiR8lcy0WjZOhqs8upsRa6kQzh3dlhylg",
      rating: "6.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/en/movie/541671/ballerina",
      description: "Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve Macarro begins her training in the assassin traditions of the Ruska Roma. Years later, she's forced to use her skills to seek revenge against the crime syndicate that killed her family."
    },
    {
      id: 17,
      title: "Independence Day",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgpf_kmbE2z20si8bOc1mY6_6uP-785cFHO4aihElaklDd-wVCwcnIQbJuJRD3Evu8CEQ8GJQetvjCqW8UASWKlVR3w0bfMCL1jBesFjhVSw",
      rating: "7.0",
      year: "1996",
      watchUrl: "https://embedder.net/e/movie?tmdb=602&season=&episode=",
      description: "Aliens attack Earth in this epic sci-fi blockbuster. On July 4th, humanity fights back against a massive alien invasion in this thrilling summer blockbuster."
    },
    {
       
      id: 15,
      title: "Squid Game Season 3",
      imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      rating: "8.5",
      year: "2025",
      description: "The final season brings the ultimate confrontation as Player 456 faces the masterminds behind the deadly games in an epic conclusion."
    }
      
    
  ],
  action: [
    {
      id: 47,
      title: "Ballistic",
      imageUrl: "https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/245426/ballistic.jpg",
      rating: "7.8",
      year: "2026",
      description: "Ballistic is an intense action-thriller with high-octane sequences and explosive confrontations. Available in 1080p (5.1 GB) and 720p (1.88 GB)."
    },
    {
      id: 39,
      title: "Splinter Cell: Deathwatch Season 1",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDy03rgYPk2rrOKMI18KZU3l32V9fPcnzcqrVOZuiv3nHH36-WrbLtHtFXpDqmi6crAqj9",
      rating: "8.7",
      year: "2025",
      description: "Based on the legendary video game franchise, this Netflix original series follows elite operative Sam Fisher as he navigates a world of shadows, high-tech gadgets, and deadly conspiracies. Complete Season 1 available in premium Netflix WEB-DL quality with Dual Audio."
    },
    {
      id: 32,
      title: "KPop Demon Hunters Sing-Along",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRiQPAU0vExAsL_LLn1IejwD-e4TNAGB-952JTZ000HZ-lfNKOh",
      rating: "7.8",
      year: "2025",
      description: "A high-energy action musical featuring a talented K-pop girl group who discover they're the latest in a long line of demon hunters. By day, they're chart-topping sensations; by night, they battle supernatural forces threatening the world. This special sing-along version includes on-screen lyrics for all original songs."
    },
    {
      id: 31,
      title: "F1",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT85TrSaHuKW1dis3_6g4acoHHaNvt1crmPF1MQKfn6QNjWXuiM",
      rating: "8.5",
      year: "2025",
      description: "An action-packed sports drama chronicling the high-stakes world of Formula 1 racing. When a rookie driver gets the opportunity of a lifetime to join an elite racing team, he must navigate fierce rivalries, dangerous tracks, and his own personal demons to become a champion.",
      watchUrl: "https://www.youtube.com/watch?v=8RInW7zWDn8"
    },
    {
      id: 28,
      title: "Mission Impossible - The Final Reckoning",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShcMw2wUx24KAWkT-eQaC8bCB5EzkApaInrKpXeGm_UM8HcBlN",
      rating: "8.2",
      year: "2025",
      watchUrl: "#",
      description: "In the epic conclusion to the Mission: Impossible saga, Ethan Hunt and his IMF team face their deadliest enemy yet. As past choices return to haunt him, Hunt must make the ultimate sacrifice to protect those he loves most."
    },
    {
      id: 24,
      title: "Jurassic World Rebirth",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA",
      rating: "7.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/assets/v1/video/movie.mp4",
      description: "A profit-driven pharmaceutical company assembles a team to retrieve blood samples from the world's last prehistoric giants. Their mission leads them to a forbidden island overrun by engineered hybrids that can run, swim, glide, and soar."
    },
    {
      id: 20,
      title: "Karate Kid: Legends",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLrkP1ycW19vMwYgQnsDpCNo3kd2OBpZSwaIdAVNnz6zvG9Digr3pDpE7p2DMkrLB000LUAa4mVBW_rR7JqN5Z8M9JovQiSMI2IZ3TqRY",
      rating: "7.5",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=karateKid2025#",
      description: "The latest installment in the beloved Karate Kid franchise brings together new and familiar faces in an epic martial arts adventure. A new generation learns the way of karate while honoring the legends who came before them."
    },
    {
      id: 16,
      title: "Ballerina",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRh56p8pGOiRsnHtc1SZi5g8lbs7cedWGNpPtk8PzFpgsKqCiVHk1qHSAjBUiRPgTnrRohOs3EPGEiR8lcy0WjZOhqs8upsRa6kQzh3dlhylg",
      
      rating: "6.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/en/movie/541671/ballerina",
      description: "Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve Macarro begins her training in the assassin traditions of the Ruska Roma. Years later, she's forced to use her skills to seek revenge against the crime syndicate that killed her family."
    },
    {
      id: 3,
      title: "The Batman",
      imageUrl: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      rating: "8.3",
      year: "2022"
    },
    {
      id: 4,
      title: "Mission: Impossible - Dead Reckoning",
      imageUrl: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
      rating: "7.8",
      year: "2023"
    }
  ],
  horror: [
    {
      id: 45,
      title: "Ghost Train",
      imageUrl: "https://img2.beritasatu.com/cache/jakartaglobe/960x620-w/2025/07/1753444859-1673x2461.webp",
      rating: "7.4",
      year: "2025",
      description: "Supernatural horror aboard a night train where escape isn’t an option."
    },
    {
      id: 35,
      title: "Weapons",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-FkFMeOIyaH7KEDXFhc3p8itdq1EZGDKYmWhwC0iry-Ka3Pr",
      rating: "7.8",
      year: "2025",
      description: "When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance."
    },
    {
      id: 34,
      title: "Together",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSW1FzzjgYeF_ARyk2gInJMc9Q0rAkYSGST7VLI48J48Xn6j67M",
      rating: "7.8",
      year: "2025",
      description: "A psychological horror film that explores the terrifying consequences of collective trauma and isolation. Six friends at a remote cabin for a reunion weekend discover they're unable to physically separate from each other, forcing them to confront the dark secret that binds them together."
    },
    {
      id: 33,
      title: "I Know What You Did Last Summer",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtIJDVkAddVE006PU9kip20wEONtjik8-S1jogokxIlelsPTd6",
      rating: "7.5",
      year: "2025",
      description: "A modern reboot of the classic slasher film. A group of friends are haunted by a shared secret from their past when they begin to receive threatening messages one year after a tragic accident. As they try to uncover who's behind the messages, they find themselves being hunted down one by one."
    },
    {
      id: 21,
      title: "28 Years Later",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52mCisDohLeTVzvyFcx_elHY3I4lzMhJLUfHsyoMnt3vIpjTs",
      rating: "8.2",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=28YearsLater2025#",
      description: "The highly anticipated third installment in the acclaimed zombie apocalypse franchise. Set 28 years after the original outbreak, a new generation faces the evolved infected in a world forever changed by the rage virus."
    },
    {
      id: 5,
      title: "Talk to Me",
      imageUrl: "https://image.tmdb.org/t/p/w500/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
      rating: "7.1",
      year: "2023"
    },
    {
      id: 6,
      title: "M3GAN",
      imageUrl: "https://image.tmdb.org/t/p/w500/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
      rating: "6.4",
      year: "2023"
    }
  ],
  comedy: [
    {
      id: 26,
      title: "The Pickup",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSosgeC462Ds54wCyynZPrAlSillruysuUNUQO_py7dW-7D16KT",
      rating: "7.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/en/movie/the-pickup-2025",
      description: "A hilarious comedy heist film about an unlikely crew pulling off the perfect crime. When a group of ordinary people decide to attempt an extraordinary heist, they discover that stealing isn't as easy as it looks in the movies."
    },
    {
      id: 19,
      title: "How to Train Your Dragon",
      imageUrl: "https://res.cloudinary.com/dib0fble7/image/upload/v1752688734/Untitled12222_fkn050.webp",
      rating: "8.1",
      year: "2010",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=10191#",
      description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed."
    },
    {
      id: 18,
      title: "Tangled",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
      rating: "7.7",
      year: "2010",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=38757#",
      description: "When the kingdom's most wanted—and most charming—bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair."
    },
    {
      id: 7,
      title: "Barbie",
      imageUrl: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      rating: "7.0",
      year: "2023"
    },
    {
      id: 8,
      title: "Anyone But You",
      imageUrl: "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
      rating: "6.8",
      year: "2023"
    }
  ],
  drama: [
    {
      id: 44,
      title: "No Other Choice",
      imageUrl: "https://resizing.flixster.com/jmx4yLi00DEubbDPQoxemNRqPsc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyMzQ4M2M5LWEzMTUtNDA4NC05OGMyLTVhYjMxNTE0ZjhhNi5qcGc=",
      rating: "7.9",
      year: "2025",
      description: "Character-driven drama with thriller stakes. A gripping look at ethics under pressure and the consequences of ambition."
    },
    {
      id: 38,
      title: "Gen V S02E07 - Hell Week",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzwSBfxxHGySUWXuRNH1MJ4-UX971SBEnF7dRVmtQ9WbwlOmYY",
      rating: "8.3",
      year: "2025",
      description: "In Hell Week, the seventh episode of Gen V's second season, the stakes reach new heights at Godolkin University. As the pressure mounts during the intense Hell Week trials, our young heroes face their most challenging tests yet in this explosive superhero drama."
    },
    {
      id: 36,
      title: "The Girlfriend",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSDKJJbrAlhez-_qFHsNabgqhmMcBd1FBxhBv3FMIh-kma8F8y",
      rating: "8.2",
      year: "2025",
      description: "A gripping psychological drama series where a mysterious woman enters the lives of an unsuspecting family, gradually unraveling their secrets and threatening to destroy everything they've built."
    },
    {
      id: 29,
      title: "Alien: Earth",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKBTdQQVzT5EA37PubvEMvnPNJ2og0eDOvgoinUEGa9gJ4MtNk",
      rating: "8.5",
      year: "2025",
      description: "A thrilling new sci-fi drama series set in 2025. When mysterious extraterrestrial forces arrive on Earth, humanity must unite to face an unprecedented threat. Follow the journey of scientists, soldiers, and ordinary people as they struggle to survive, adapt, and uncover the secrets behind the alien invasion. 1 season."
    },
    {
      id: 25,
      title: "Wednesday Season 2",
      imageUrl: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      rating: "8.7",
      year: "2025",
      description: "Wednesday Addams returns for her sophomore year at Nevermore Academy. As she navigates new mysteries, supernatural threats, and complex relationships, the iconic goth teenager must master her emerging psychic abilities while uncovering dark secrets that threaten both the school and her family legacy."
    },
    {
      id: 23,
      title: "Eyes of Wakanda Season 1",
      imageUrl: "https://res.cloudinary.com/dib0fble7/image/upload/v1754124989/images_4_li0lmi.jpg",
      rating: "8.5",
      year: "2025",
      description: "Marvel Animation's new action-adventure series follows the adventures of brave Wakandan warriors throughout history. In this globe-trotting adventure, the heroes must carry-out dangerous missions to retrieve Vibranium artifacts from the enemies of Wakanda. They are the Hatut Zaraze and this is their story."
    },
    
    {
      id: 13,
      title: "Squid Game Season 1",
      imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      rating: "8.0",
      year: "2021",
      description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes."
    },
    {
      id: 14,
      title: "Squid Game Season 2",
      imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      rating: "8.2",
      year: "2024",
      description: "Three years after winning Squid Game, Player 456 remains determined to find the people behind the game and put an end to their vicious sport."
    },
    {
      id: 15,
      title: "Squid Game Season 3",
      imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      rating: "8.5",
      year: "2025",
      description: "The final season brings the ultimate confrontation as Player 456 faces the masterminds behind the deadly games in an epic conclusion."
    }
  ],
  thriller: [
    {
      id: 46,
      title: "The Whistler",
      imageUrl: "https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/245395/TheWhistler_Web-Size_Poster_2764x4096.jpg",
      rating: "7.7",
      year: "2026",
      description: "The Whistler is an upcoming thriller that delivers suspense and mystery. Available in 1080p (4.34 GB) and 720p (1.96 GB)."
    },
    {
      id: 11,
      title: "Saltburn",
      imageUrl: "https://image.tmdb.org/t/p/w500/qjhahNLSZ705B5JP92YMEYPocPz.jpg",
      rating: "7.1",
      year: "2023"
    }
  ],
  romantic: [
    {
      id: 37,
      title: "Saiyaara",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_FMjpg_UX933_.jpg",
      rating: "7.6",
      year: "2025",
      description: "A captivating romantic drama that follows the journey of two individuals from different walks of life whose paths cross unexpectedly. Set against the backdrop of contemporary India, the film explores themes of love, destiny, and the courage to follow your heart."
    },
    {
      id: 30,
      title: "The Map That Leads to You",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJix5tp_t--OlEPLwAy7rdYzAwpbuBUeFZMMLJVHK0R3VKqc1",
      rating: "7.8",
      year: "2025",
      description: "A sweeping romance and drama set in 2025. Two strangers meet by chance and embark on a journey across Europe, discovering love, heartbreak, and the meaning of destiny. Their story unfolds through a series of maps, letters, and unforgettable moments.",
      watchUrl: "https://www.youtube.com/results?search_query=The+Map+That+Leads+to+You+2025+trailer"
    },
    {
      id: 8,
      title: "Anyone But You",
      imageUrl: "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
      rating: "6.8",
      year: "2023"
    }
  ],
  scifi: [
    {
      id: 27,
      title: "Superman",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
      rating: "8.4",
      year: "2025",
      watchUrl: "#",
      description: "The legendary superhero returns in an epic action/sci-fi adventure. Superman faces new threats to Earth and must balance his human identity with his superhuman responsibilities."
    },
    {
      id: 24,
      title: "Jurassic World Rebirth",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA",
      rating: "7.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/assets/v1/video/movie.mp4",
      description: "A profit-driven pharmaceutical company assembles a team to retrieve blood samples from the world's last prehistoric giants. Their mission leads them to a forbidden island overrun by engineered hybrids that can run, swim, glide, and soar."
    },
    {
      id: 17,
      title: "Independence Day",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgpf_kmbE2z20si8bOc1mY6_6uP-785cFHO4aihElaklDd-wVCwcnIQbJuJRD3Evu8CEQ8GJQetvjCqW8UASWKlVR3w0bfMCL1jBesFjhVSw",
      rating: "7.0",
      year: "1996",
      watchUrl: "https://embedder.net/e/movie?tmdb=602&season=&episode=",
      description: "Aliens attack Earth in this epic sci-fi blockbuster. On July 4th, humanity fights back against a massive alien invasion in this thrilling summer blockbuster."
    },
    {
      id: 12,
      title: "Poor Things",
      imageUrl: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      rating: "8.4",
      year: "2023"
    },
    {
      id: 9,
      title: "Oppenheimer",
      imageUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      rating: "8.9",
      year: "2023"
    },
    {
      id: 10,
      title: "The Iron Claw",
      imageUrl: "https://image.tmdb.org/t/p/w500/nfs7DCYhgrEIgxKYbITHTzKsggf.jpg",
      rating: "7.8",
      year: "2023"
    },
    {
    id: 1,
      title: "Dune: Part Two",
      imageUrl: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      rating: "8.9",
      year: "2024",
      watchUrl: "https://ww5.123moviesfree.net/movie/dune-part-two",
      description: "A top Marine sniper, Bob Lee Swagger, leaves the military after a mission goes horribly awry and disappears without a trace, living in seclusion. He is coaxed back into service after learning of a plot to kill the president."
    }
  ]
};

// Search functionality component
const SearchResults = ({ searchQuery, allMovies }) => {
  if (!searchQuery) return null;

  const filteredMovies = Object.values(allMovies)
    .flat()
    .filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.year.toString().includes(searchQuery)
    );

  return filteredMovies.length > 0 ? (
    <div className="search-results">
      <h2 className="section-title">Search Results</h2>
      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    <div className="no-results">
      <h2 className="section-title">No movies found matching "{searchQuery}"</h2>
    </div>
  );
};

// MovieCard Component
const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleDownload = (e) => {
    // Original download functionality - redirect functionality removed
    let urlTitle = movie.title.toLowerCase();
    
    // Handle specific movie title mappings
    if (urlTitle.includes('mission impossible - the final reckoning')) {
      urlTitle = 'mission-impossible-final-reckoning';
    } else if (urlTitle.includes('mission: impossible')) {
      urlTitle = 'mission-impossible';
    } else if (urlTitle.includes('dune: part two')) {
      urlTitle = 'dune-part-two';
    } else if (urlTitle.includes('the batman')) {
      urlTitle = 'the-batman';
    } else if (urlTitle.includes('talk to me')) {
      urlTitle = 'talk-to-me';
    } else if (urlTitle.includes('m3gan')) {
      urlTitle = 'm3gan';
    } else if (urlTitle.includes('barbie')) {
      urlTitle = 'barbie';
    } else if (urlTitle.includes('anyone but you')) {
      urlTitle = 'anyone-but-you';
    } else if (urlTitle.includes('oppenheimer')) {
      urlTitle = 'oppenheimer';
    } else if (urlTitle.includes('the iron claw')) {
      urlTitle = 'the-iron-claw';
    } else if (urlTitle.includes('saltburn')) {
      urlTitle = 'saltburn';
    } else if (urlTitle.includes('poor things')) {
      urlTitle = 'poor-things';
    } else if (urlTitle.includes('squid game season 1')) {
      urlTitle = 'squid-game-season-1';
    } else if (urlTitle.includes('squid game season 2')) {
      urlTitle = 'squid-game-season-2';
    } else if (urlTitle.includes('squid game season 3')) {
      urlTitle = 'squid-game-season-3';
    } else if (urlTitle.includes('ballerina')) {
      urlTitle = 'ballerina';
    } else if (urlTitle.includes('independence day')) {
      urlTitle = 'independence-day';
    } else if (urlTitle.includes('tangled')) {
      urlTitle = 'tangled';
    } else if (urlTitle.includes('how to train your dragon')) {
      urlTitle = 'how-to-train-your-dragon';
    } else if (urlTitle.includes('karate kid: legends')) {
      urlTitle = 'karate-kid-legends';
    } else if (urlTitle.includes('28 years later')) {
      urlTitle = '28-years-later';
    } else if (urlTitle.includes('game of thrones season 1')) {
      urlTitle = 'game-of-thrones-season-1';
    } else if (urlTitle.includes('eyes of wakanda season 1')) {
      urlTitle = 'eyes-of-wakanda-season-1';
    } else if (urlTitle.includes('wednesday season 2')) {
      urlTitle = 'wednesday-season-2';
    } else if (urlTitle.includes('jurassic world rebirth')) {
      urlTitle = 'jurassic-world-rebirth';
    } else if (urlTitle.includes('the pickup')) {
      urlTitle = 'the-pickup';
    } else if (urlTitle.includes('superman')) {
      urlTitle = 'superman-2025';
    } else if (urlTitle.includes('kpop demon hunters')) {
      urlTitle = 'kpop-demon-hunters';
    } else if (urlTitle.includes('i know what you did last summer')) {
      urlTitle = 'i-know-what-you-did-last-summer';
    } else if (urlTitle.includes('together')) {
      urlTitle = 'together';
    } else if (urlTitle.includes('weapons')) {
      urlTitle = 'weapons';
    } else if (urlTitle.includes('the girlfriend')) {
      urlTitle = 'the-girlfriend';
    } else if (urlTitle.includes('saiyaara')) {
      urlTitle = 'saiyaara';
    } else if (urlTitle.includes('gen v s02e07') || urlTitle.includes('gen.v.s02e07')) {
      urlTitle = 'gen-v-s02e07';
    } else if (urlTitle.includes('splinter cell') || urlTitle.includes('deathwatch')) {
      urlTitle = 'splinter-cell-deathwatch';
    } else if (urlTitle.includes('ncis') || urlTitle.includes('tony and ziva') || urlTitle.includes('tony-and-ziva')) {
      urlTitle = 'ncis-tony-and-ziva';
    } else if (urlTitle.includes('house of dynamite') || urlTitle.includes('a house of dynamite')) {
      urlTitle = 'a-house-of-dynamite';
    } else if (urlTitle.includes('bone lake')) {
      urlTitle = 'bone-lake';
    } else if (urlTitle.includes('good boy')) {
      urlTitle = 'good-boy';
    } else {
      // Fallback: general URL-friendly conversion
      urlTitle = urlTitle.replace(/[:\s]+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');
    }
    
    navigate(`/movies/${urlTitle}`);
  };

  const handleWatchOnline = (e) => {
    // Open the watch URL if available - redirect functionality removed
    if (movie.watchUrl) {
      window.open(movie.watchUrl, '_blank');
    }
  };

  const handleMovieCardClick = (e) => {
    // Only handle clicks on the poster area, not on buttons
    if (e.target.closest('.button-group')) {
      return;
    }
    
    // Navigate to movie details page - redirect functionality removed
    handleDownload(e);
  };

  return (
    <div 
      className="movie-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="movie-card">
        <div className="movie-poster" 
             style={{ backgroundImage: `url(${movie.imageUrl})`, cursor: 'pointer' }}
             onClick={handleMovieCardClick}>
          {isHovered && (
            <div className="movie-overlay">
              <div className="button-group">
                {movie.watchUrl && (
                  <a 
                    href={movie.watchUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="watch-button"
                    onClick={handleWatchOnline}
                  >
                    Watch Online
                  </a>
                )}
                <button className="download-button" onClick={handleDownload}>Download</button>
              </div>
            </div>
          )}
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
      </div>
      
      {isHovered && (
        <div className="movie-details-popup">
          <h2>{movie.title}</h2>
          <div className="rating-box">
            <div className="rating-score">{movie.rating}</div>
            <div className="rating-text">Rating</div>
          </div>
          <div className="movie-plot">
            {movie.description || "A thrilling movie experience that will keep you on the edge of your seat."}
          </div>
        </div>
      )}
    </div>
  );
};

// Page Component
const Page = ({ title, movies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setIsSearching(query.length > 0);
  };

  const handleSearchFocus = (e) => {
    // Removed redirect functionality
  };

  return (
    <>
      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={handleSearch}
            onFocus={handleSearchFocus}
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>
      
      {isSearching ? (
        <SearchResults searchQuery={searchQuery} allMovies={movieData} />
      ) : (
        <div className="movies-section">
          <h2 className="section-title">{title}</h2>
          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// Add Footer Component
const Footer = () => {
  const handleFooterClick = (e) => {
    // Removed redirect functionality
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Film Buffs</h3>
          <p>Your ultimate destination for watching and downloading the latest movies and TV shows in high quality.</p>
          <div className="social-links">
            <a href="https://facebook.com/filmbuffs" target="_blank" rel="noreferrer" className="social-link" onClick={handleFooterClick}><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com/filmbuffs" target="_blank" rel="noreferrer" className="social-link" onClick={handleFooterClick}><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com/filmbuffs" target="_blank" rel="noreferrer" className="social-link" onClick={handleFooterClick}><i className="fab fa-instagram"></i></a>
            <a href="https://youtube.com/filmbuffs" target="_blank" rel="noreferrer" className="social-link" onClick={handleFooterClick}><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={handleFooterClick}>Home</Link></li>
            <li><Link to="/news" onClick={handleFooterClick}>News</Link></li>
            <li><Link to="/action" onClick={handleFooterClick}>Action</Link></li>
            <li><Link to="/thriller" onClick={handleFooterClick}>Thriller</Link></li>
            <li><Link to="/horror" onClick={handleFooterClick}>Horror</Link></li>
            <li><Link to="/comedy" onClick={handleFooterClick}>Comedy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/movies" onClick={handleFooterClick}>Movies</Link></li>
            <li><Link to="/tv-series" onClick={handleFooterClick}>TV Series</Link></li>
            <li><Link to="/trending" onClick={handleFooterClick}>Trending</Link></li>
            <li><Link to="/upcoming" onClick={handleFooterClick}>Coming Soon</Link></li>
            <li><Link to="/top-rated" onClick={handleFooterClick}>Top Rated</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy" onClick={handleFooterClick}>Privacy Policy</Link></li>
            <li><Link to="/terms" onClick={handleFooterClick}>Terms of Service</Link></li>
            <li><Link to="/disclaimer" onClick={handleFooterClick}>Disclaimer</Link></li>
            <li><Link to="/dmca" onClick={handleFooterClick}>DMCA</Link></li>
            <li><Link to="/contact" onClick={handleFooterClick}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-info">
          <p>© 2024 Film Buffs. All rights reserved.</p>
          <p className="disclaimer-text">Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const location = useLocation();

  const handleNavClick = (e) => {
    // Removed redirect functionality
  };

  const handleLogoClick = (e) => {
    // Removed redirect functionality
  };

  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/" className="logo" onClick={handleLogoClick}>Film Buffs</Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleNavClick}>Home</Link>
          <Link to="/news" className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`} onClick={handleNavClick}>News</Link>
          <Link to="/action" className={`nav-link ${location.pathname === '/action' ? 'active' : ''}`} onClick={handleNavClick}>Action</Link>
          <Link to="/thriller" className={`nav-link ${location.pathname === '/thriller' ? 'active' : ''}`} onClick={handleNavClick}>Thriller</Link>
          <Link to="/scifi" className={`nav-link ${location.pathname === '/scifi' ? 'active' : ''}`} onClick={handleNavClick}>Sci-Fi</Link>
          <Link to="/horror" className={`nav-link ${location.pathname === '/horror' ? 'active' : ''}`} onClick={handleNavClick}>Horror</Link>
          <Link to="/comedy" className={`nav-link ${location.pathname === '/comedy' ? 'active' : ''}`} onClick={handleNavClick}>Comedy</Link>
          <Link to="/drama" className={`nav-link ${location.pathname === '/drama' ? 'active' : ''}`} onClick={handleNavClick}>Drama</Link>
          <Link to="/romantic" className={`nav-link ${location.pathname === '/romantic' ? 'active' : ''}`} onClick={handleNavClick}>Romantic</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Page title="Latest Releases" movies={movieData.latest} />} />
        <Route path="/news" element={<News newsData={newsData} />} />
        <Route path="/news/:id" element={<NewsDetails newsData={newsData} />} />
        <Route path="/action" element={<Page title="Action Movies" movies={movieData.action} />} />
        <Route path="/horror" element={<Page title="Horror Movies" movies={movieData.horror} />} />
        <Route path="/comedy" element={<Page title="Comedy Movies" movies={movieData.comedy} />} />
        <Route path="/drama" element={<Page title="Drama Movies" movies={movieData.drama} />} />
        <Route path="/thriller" element={<Page title="Thriller Movies" movies={movieData.thriller} />} />
        <Route path="/scifi" element={<Page title="Sci-Fi Movies" movies={movieData.scifi} />} />
        <Route path="/romantic" element={<Page title="Romantic Movies" movies={movieData.romantic} />} />
        
        {/* Movie Post Pages */}
        <Route path="/movies/dune-part-two" element={<DunePartTwoPost />} />
        <Route path="/movies/the-batman" element={<TheBatmanPost />} />
        <Route path="/movies/mission-impossible" element={<MissionImpossiblePost />} />
        <Route path="/movies/talk-to-me" element={<TalkToMePost />} />
        <Route path="/movies/m3gan" element={<M3GANPost />} />
        <Route path="/movies/barbie" element={<BarbiePost />} />
        <Route path="/movies/anyone-but-you" element={<AnyoneButYouPost />} />
        <Route path="/movies/oppenheimer" element={<OppenheimerPost />} />
        <Route path="/movies/the-iron-claw" element={<TheIronClawPost />} />
        <Route path="/movies/saltburn" element={<SaltburnPost />} />
        <Route path="/movies/poor-things" element={<PoorThingsPost />} />
        <Route path="/movies/squid-game-season-1" element={<SquidGameSeason1Post />} />
        <Route path="/movies/squid-game-season-2" element={<SquidGameSeason2Post />} />
        <Route path="/movies/squid-game-season-3" element={<SquidGameSeason3Post />} />
        <Route path="/movies/ballerina" element={<BallerinPost />} />
        <Route path="/movies/independence-day" element={<IndependenceDayPost />} />
        <Route path="/movies/tangled" element={<TangledPost />} />
        <Route path="/movies/how-to-train-your-dragon" element={<HowToTrainYourDragonPost />} />
        <Route path="/movies/karate-kid-legends" element={<KarateKidLegendsPost />} />
        <Route path="/movies/28-years-later" element={<TwentyEightYearsLaterPost />} />
        <Route path="/movies/eyes-of-wakanda-season-1" element={<EyesOfWakandaS1Post />} />
        <Route path="/movies/wednesday-season-2" element={<WednesdaySeason2Post />} />
        <Route path="/movies/jurassic-world-rebirth" element={<JurassicWorldRebirthPost />} />
  <Route path="/movies/superman-2025" element={<Superman2025Post />} />
        <Route path="/movies/the-pickup" element={<ThePickupPost />} />
  <Route path="/movies/mission-impossible-final-reckoning" element={<MissionImpossibleFinalReckoningPost />} />
        <Route path="/movies/alien-earth" element={<AlienEarthPost />} />
        <Route path="/movies/the-map-that-leads-to-you" element={<TheMapThatLeadsToYouPost />} />
        <Route path="/movies/f1" element={<F1Post />} />
        <Route path="/movies/kpop-demon-hunters" element={<KPopDemonHuntersPost />} />
        <Route path="/movies/i-know-what-you-did-last-summer" element={<IKnowWhatYouDidLastSummerPost />} />
        <Route path="/movies/together" element={<TogetherPost />} />
        <Route path="/movies/weapons" element={<WeaponsPost />} />
        <Route path="/movies/the-girlfriend" element={<TheGirlfriendPost />} />
        <Route path="/movies/saiyaara" element={<SaiyaaraPost />} />
        <Route path="/movies/gen-v-s02e07" element={<GenVS2E7Post />} />
        <Route path="/movies/splinter-cell-deathwatch" element={<SplinterCellDeathwatchPost />} />
        <Route path="/movies/ncis-tony-and-ziva" element={<NCISTonyAndZivaPost />} />
        <Route path="/movies/a-house-of-dynamite" element={<AHouseOfDynamitePost />} />
        <Route path="/movies/bone-lake" element={<BoneLakePost />} />
        <Route path="/movies/good-boy" element={<GoodBoyPost />} />
        <Route path="/movies/no-other-choice" element={<NoOtherChoicePost />} />
        <Route path="/movies/ghost-train" element={<GhostTrainPost />} />
        <Route path="/movies/the-whistler" element={<TheWhistlerPost />} />
        <Route path="/movies/ballistic" element={<BallisticPost />} />
      </Routes>      <Footer />
    </div>
  );
}

// Wrapper component to provide Router context
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
