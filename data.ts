export type Speaker = {
  /** URL segment for /speakers/[slug] — keep stable once published. */
  slug: string;
  name: string;
  designation: string;
  /** Headshot under public/images/. Falls back to an initials tile when absent. */
  image?: string;
  bio?: string;
  talk?: { title: string; overview?: string };
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
    website?: string;
  };
};

export const speakers: Speaker[] = [
  {
    slug: "derick-rethans",
    name: "Derick Rethans",
    designation: "Creator, Xdebug",
    image: "speakers/Derick.jpg",
    bio: "Derick Rethans is a PHP internals expert and author of Xdebug. He works as an independent contractor with the PHP Foundation to improve PHP, by contributing to the project in numerous forms, such as the Date/Time Extension, Xdebug, and managing its server set-up.\n\nHe is a frequent lecturer at conferences, the author of php|architect's Guide to Date and Time Programming, and the co-author of PHP 5 Power Programming. Derick also hosted the weekly-ish PHP Internals News podcast.\n\nIn his spare time, he likes to travel, hike, and photography.",
    talk: {
      title: "PHP Internals Deep Dive",
      overview:
        "We will start by looking at how the language parser and scanner work, which convert scripts into an Abstract Syntax Tree. When then look at how PHP internal byte code is generated from this AST, and how the engine runs byte code.",
    },
    socials: {
      linkedin: "https://www.linkedin.com/in/derickrethans/",
      twitter: "https://x.com/derickr",
    },
  },
  {
    slug: "bosun-egberinde",
    name: "Bosun Egberinde",
    designation: "Software Engineer",
    image: "speakers/Bosun.jpeg",
    talk: { title: "The Engineer and the Loop." },
    socials: {
      linkedin: "https://www.linkedin.com/in/bosunski/",
      twitter: "https://x.com/bosunski",
    },
  },
  {
    slug: "elizabeth-barron",
    name: "Elizabeth Barron",
    designation: "CEO, PHPFoundation",
    image: "speakers/Elizabeth.jpeg",
    bio: "Elizabeth Barron is the Executive Director of The PHP Foundation, an organization focused on the long term sustainability of the PHP language and ecosystem. She is a long time open source contributor and advocate with almost 30 years of experience at organizations like GitHub, Pivotal/VMWare, Sourceforge, and CHAOSS (Community Health Analytics in Open Source Software). She is also a published author, public speaker, community organizer, and award winning nature photographer. She is currently working toward achieving her MBA and she lives in Cincinnati, Ohio.",
    talk: {
      title: "PHPFoundation: Communities, Contribution & Opportunity",
      overview:
        "I'd be delighted to talk a little about the Foundation's work and how we can involve more folks from the region!",
    },
    socials: { linkedin: "https://www.linkedin.com/in/elizabethn/" },
  },
  {
    slug: "shane-rosenthal",
    name: "Shane Rosenthal",
    designation: "Co Founder, NativePHP",
    socials: { twitter: "https://x.com/ShaneDRosenthal" },
  },
  {
    slug: "paul-adams-ohiani",
    name: "Paul Adams Ohiani",
    designation: "Senior Software Engineer, involve.me",
    image: "speakers/Paul.png",
    talk: {
      title:
        "Building an AI-Powered E2E Testing Platform: Real Bugs, Real Trade-offs, Real Lessons",
      overview:
        "Testsnag is an AI-powered platform that runs autonomous end-to-end tests across web, mobile, API, messaging, and SEO. You describe a user flow in plain English, and AI agents run it against your product on every release or on a schedule, catching bugs before your users do. This talk walks through what it actually took to build it: the architecture trade-offs, where AI genuinely helped (and where it didn't), and what broke in production. Practical, real-world lessons for PHP developers.",
    },
    socials: {
      linkedin: "https://www.linkedin.com/in/paul-adams-ohiani/",
      twitter: "https://x.com/ohpauladams",
    },
  },
  {
    slug: "jesutomiwa-salam",
    name: "Jesutomiwa 'JT' Salam",
    designation: "Senior Software Engineer, Avelis Health",
    image: "speakers/Jesutomiwa.jpg",
    talk: {
      title: "Engineering in the Age of Abstraction",
      overview:
        "The goal of this talk is to build on Matt Stauffer's talk at Laracon 2026 by introducing a new paradigm I call Research-Oriented Engineering. It explores what it takes to build effectively in unfamiliar product domains without outsourcing the process of learning and reasoning entirely to AI. At its core, the talk is a return to what it means to be an engineer, not merely a developer or builder, and an exploration of foundational engineering principles and why they matter even more in the age of AI.",
    },
    socials: {
      linkedin: "https://linkedin.com/in/jesutomiwa",
      twitter: "https://x.com/jesutomiwajs",
    },
  },
  {
    slug: "alexander-garuba",
    name: "Alexander Garuba",
    designation: "Software Engineer",
    image: "speakers/Alexander.jpg",
    talk: {
      title: "From Prompt to Production: Building Better Software with AI",
      overview:
        "AI can help developers build faster, but writing code is only one part of building good software. This session will explore practical ways to use AI for development, debugging, testing, and problem-solving while still making sound engineering decisions. It will also cover where AI helps, where it falls short, and why developers still need to understand the code they ship.",
    },
    socials: {
      linkedin: "https://www.linkedin.com/in/iamahless",
      twitter: "https://x.com/iamahless",
    },
  },
];

export const getSpeakerBySlug = (slug: string) =>
  speakers.find((speaker) => speaker.slug === slug);

export const hosts: {
  name: string;
  designation: string;
  image: string;
}[] = [
  {
    name: "Cleophas Success",
    designation: "",
    image: "hosts/Cleophas.jpg",
  },
  {
    name: "Chris Eminence",
    designation: "",
    image: "hosts/ChrisEminence.jpg",
  },
];

export const galleryGroups: {
  edition: string;
  caption: string;
  images: string[];
  albumUrl: string;
}[] = [
  {
    edition: "PHP Connect '23",
    caption:
      "Where it all started — a first look at the talks, demos, and the community that showed up for it.",
    images: [
      "gallery/2023/1.jpg",
      "gallery/2023/2.jpg",
      "gallery/2023/3.jpg",
      "gallery/2023/4.jpg",
      "gallery/2023/5.jpg",
      "gallery/2023/ab.jpg",
      "gallery/2023/bb.jpg",
    ],
    albumUrl: "https://photos.app.goo.gl/22mBofWsMqUH9mhA8",
  },
  {
    edition: "PHP Connect '24",
    caption:
      "A bigger crowd and bolder talks — recapping a weekend that pushed the PHP community forward.",
    images: [
      "gallery/2024/1.jpg",
      "gallery/2024/2.jpg",
      "gallery/2024/3.jpg",
      "gallery/2024/4.jpg",
      "gallery/2024/5.jpg",
      "gallery/2024/a.jpg",
      "gallery/2024/b.jpg",
      "gallery/2024/c.jpg",
      "gallery/2024/d.jpg",
      "gallery/2024/e.jpg",
      "gallery/2024/f.jpg",
      "gallery/2024/g.jpg",
      "gallery/2024/h.jpg",
      "gallery/2024/i.jpg",
    ],
    albumUrl: "https://photos.app.goo.gl/g2WjvCFoDw3juVUg9",
  },
  {
    edition: "PHP Connect '25",
    caption:
      "The community keeps growing — another year of new faces, deeper conversations, and PHP done right.",
    images: [
      "gallery/2025/Presentation-25.jpg",
      "gallery/2025/NATIVE-25.jpg",
      "gallery/2025/speaker-3-25.jpg",
      "gallery/2025/speaker-25.jpg",
      "gallery/2025/SPEAKER-5-25.jpg",
      "gallery/2025/Everyone-25.jpg",
      "gallery/2025/YO-25.jpg",
      "gallery/2025/lady-php25.jpg",
      "gallery/2025/ATTENDEES-25.jpg",
      "gallery/2025/dan+lady-25.png",
      // "gallery/2025/1.jpg",
      // "gallery/2025/2.jpg",
      // "gallery/2025/3.jpg",
      // "gallery/2025/4.jpg",
      // "gallery/2025/5.jpg",
    ],
    albumUrl: "https://photos.app.goo.gl/8iG2Q1oDKEAS2Wry7",
  },
];

export const coreTeamMembers: {
  name: string;
  designation: string;
  image: string;
}[] = [
  {
    name: "Daniel Mabadeje",
    designation: "Co-Founder PHP Talks, Software Engineer",
    image: "team/daniel.jpeg",
  },
  {
    name: "Elisha Ukpong",
    designation: "Software Engineer",
    image: "team/elisha.jpeg",
  },
  {
    name: "Miracle Ihejimba",
    designation: "Social Media and Community Management",
    image: "team/miracle.jpeg",
  },
  {
    name: "Saviour Inyang",
    designation: "Visual Designer Lead",
    image: "team/saviour.jpeg",
  },
  {
    name: "Victor Nkereuwem",
    designation: "Visual Designer",
    image: "team/victor.jpeg",
  },
];

export const REGISTRATION_URL = "https://luma.com/h2w3bies";

export type SponsorTierId = "diamond" | "silver" | "media" | "meal" | "general";

export const SPONSOR_TIERS: { id: SponsorTierId; label: string }[] = [
  { id: "diamond", label: "Diamond Sponsors" },
  { id: "silver", label: "Silver Sponsors" },
  { id: "media", label: "Media Sponsor" },
  { id: "meal", label: "Meal Sponsor" },
  { id: "general", label: "Sponsors" },
];

/**
 * How a logo is treated on the dark sponsors background:
 * "invert" flips monochrome black artwork to white, "chip" sits multi-colour
 * dark artwork on a light tile. Omit when the logo already reads on dark.
 */
export type LogoOnDark = "invert" | "chip";

export type Sponsor = {
  name: string;
  tier: SponsorTierId;
  /** Logo under public/images/. Falls back to a wordmark until artwork lands. */
  logo?: string;
  logoOnDark?: LogoOnDark;
  website?: string;
  twitter?: string;
  instagram?: string;
  description?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "PHPSandbox",
    tier: "diamond",
    logo: "sponsors/phpsandbox.png",
    website: "https://phpsandbox.io/",
    twitter: "https://x.com/phpsandboxio",
    description:
      "PHPSandbox is an instant, browser-based online development environment that enables developers to write, prototype, share, and test PHP and Laravel applications without local installations. It serves as a comprehensive cloud runtime environment supporting diverse frameworks and package dependencies directly within a browser interface.",
  },
  {
    name: "Helfer.dev",
    tier: "silver",
    logo: "sponsors/helfer.png",
    website: "https://helfer.dev/",
    twitter: "https://x.com/helferdev",
    description:
      "Helfer.dev is an AI-powered development companion designed to help developers and product teams scaffold, iterate, and ship Laravel and modern web applications faster.",
  },
  {
    name: "Litehost",
    tier: "silver",
    logo: "sponsors/litehost.png",
    website: "https://getlitehost.com/",
    twitter: "https://x.com/litehostng",
    description:
      "A web hosting company that runs PHP, Laravel, WordPress and Node.js sites on isolated, SSH-accessible servers.",
  },
  {
    name: "Wckd Studio",
    tier: "media",
    logo: "sponsors/wckd.svg",
    website: "https://www.wckd.studio/",
    twitter: "https://x.com/WCKDStudio",
    instagram: "https://www.instagram.com/wckd_studio/",
    description:
      "WCKD Studio is a professional media, production, and creative agency that specializes in premium event coverage, professional photography, high-quality videography, and real-time live streaming services.",
  },
  {
    name: "Lunchpark",
    tier: "meal",
    logo: "sponsors/lunchpark.png",
    website: "https://lunchpark.ng/",
    instagram: "https://instagram.com/lunchpark",
    description:
      "Lunchpark is a Food-as-a-Service lifestyle brand using proprietary technology and cloud kitchens to make healthy, personalized meals accessible and on-demand.",
  },
  {
    name: "MTN Cloud",
    tier: "general",
    website: "https://cloud.mtn.ng/",
    twitter: "https://x.com/MTNNGBusiness",
    instagram: "https://www.instagram.com/mtnngbusiness/",
    description:
      "MTN Cloud is a next-generation cloud infrastructure platform built by MTN Nigeria as the anchor of its evolution from a telecommunications company into a digital technology group.",
  },
  {
    name: "AGNimble",
    tier: "general",
    logo: "sponsors/agnimble.png",
    website: "https://agnimble.com/",
  },
  {
    name: "ServiceMe",
    tier: "general",
  },
];

export type Partner = {
  name: string;
  /** Partnership type as submitted, e.g. "Organising Partner". */
  type?: string;
  /** Logo under public/images/. Falls back to a wordmark until artwork lands. */
  logo?: string;
  logoOnDark?: LogoOnDark;
  website?: string;
  twitter?: string;
  linkedin?: string;
  description?: string;
};

export const partners: Partner[] = [
  {
    name: "Kovo Labs",
    type: "Organising Partner",
    logo: "partners/kovo-labs.png",
    logoOnDark: "invert",
    twitter: "https://x.com/KovoLabsHQ",
    linkedin: "https://www.linkedin.com/company/kovo-labs/",
    description:
      "Kovo Labs is an end-to-end digital studio based in Nigeria that specializes in building digital products, delivering full-suite design, and providing event services.",
  },
  {
    name: "PHP Foundation",
    type: "Community Partner",
    logo: "partners/php-foundation.svg",
    website: "https://thephp.foundation/",
    twitter: "https://x.com/ThePHPF",
    linkedin: "https://www.linkedin.com/company/phpfoundation/",
    description:
      "The PHP Foundation is a collective of people and organizations relying on the PHP language. Its mission is to ensure the long-term prosperity of the PHP language.",
  },
  {
    name: "NativePHP",
    type: "Partner",
    logo: "partners/nativephp.svg",
    website: "https://nativephp.com/",
    twitter: "https://x.com/nativephp",
    linkedin: "https://www.linkedin.com/company/nativephp",
    description:
      "NativePHP is a modern toolkit that makes it possible to build truly native desktop and mobile applications directly with PHP — no need to learn a new language or framework.",
  },
  {
    name: "JetBrains",
    type: "Community Partner",
    logo: "partners/jetbrains.svg",
    website: "https://www.jetbrains.com",
    twitter: "https://x.com/jetbrains",
    linkedin: "https://www.linkedin.com/company/jetbrains",
    description:
      "JetBrains is a software vendor specializing in intelligent development tools, helping programmers write, test, and fix code faster.",
  },
  {
    name: "Hinexa",
    type: "Hosting Partner",
    logo: "partners/hinexa.png",
    logoOnDark: "chip",
    website: "https://ap.hinexa.com",
    twitter: "https://x.com/usehinexa",
    linkedin: "https://www.linkedin.com/company/hinexa/",
    description:
      "Hinexa is a modern web hosting platform providing domains, hosting, deployment and website management infrastructure for individuals, businesses and developers.",
  },
  {
    name: "Nsa",
    type: "Games Partner",
    website: "http://playnsa.xyz/",
  },
  {
    name: "Utibe Udoma",
    type: "Media Partner",
  },
];

export const faqs: {
  question: string;
  answer: string;
}[] = [
  {
    question: "When and where does PHP Connect take place?",
    answer:
      "PHP Connect '26 takes place virtually on October 3, 2026. [Register on this site](https://luma.com/h2w3bies) to receive your access link and join us online for a full day of talks, workshops, and networking.",
  },
  {
    question: "How do I get a ticket?",
    answer:
      "Registration is now open and free. [Reserve your spot](https://luma.com/h2w3bies) directly from this site. You'll receive your virtual access link by email ahead of the event.",
  },
  {
    question: "Will the talks and workshops be recorded?",
    answer:
      "Yes, sessions will be recorded and shared with attendees after the event, so you won't miss a thing even if you can't catch every talk live.",
  },
  {
    question:
      "What platform will PHP Connect be hosted on, and do I need anything special to join?",
    answer:
      "The full day streams online, and your access link arrives by email after you [register](https://luma.com/h2w3bies). All you need is a modern web browser and a stable internet connection — there's nothing to install, and you can join from a laptop, tablet, or phone.",
  },
  {
    question: "How can my company become a sponsor or partner?",
    answer:
      "We'd love to have you on board. Head over to the Sponsors & Partners section and use the \"Become a Sponsor\" link to get in touch with our team.",
  },
];

export type ScheduleSpeaker = {
  name: string;
  affiliation?: string;
  image?: string;
};

export type ScheduleSession = {
  title: string;
  description?: string;
  time: string;
  speakers?: ScheduleSpeaker[];
};

export const schedule: ScheduleSession[] = [
  {
    title: "Opening",
    description: "Registrations and arrival of guests.",
    time: "10:00 AM",
  },
  {
    title: "Introduction of the Host",
    description: "Meet the voices guiding you through the day.",
    time: "11:00 AM",
    speakers: [
      { name: "Cleophas Success", image: "hosts/Cleophas.jpg" },
      { name: "Chris Eminence", image: "hosts/ChrisEminence.jpg" },
    ],
  },
  {
    title: "Organizer's Welcome Speech",
    description:
      "Brief introduction to the event, overview of the day's program, goals, and expectations.",
    time: "11:15 AM",
  },
  {
    title: "Keynote Address",
    description: "Mastering your Craft.",
    time: "11:30 AM",
    speakers: [{ name: "Bosun Egberinde", affiliation: "Software Engineer", image: "speakers/Bosun.jpeg" }],
  },
  {
    title: "PHP, the Unsung Hero of the Modern Web",
    description: "Why PHP still powers a huge share of the modern internet.",
    time: "12:00 PM",
    speakers: [{ name: "James John" }],
  },
  {
    title: "Test-Driven Development in PHP",
    description: "Writing cleaner, more reliable code.",
    time: "12:30 PM",
    speakers: [{ name: "Solomon Eseme", affiliation: "Software Engineer", image: "speakers/Solomon.jpeg" }],
  },
  {
    title: "Building Cross-Platform Mobile Apps",
    description: "Flutter with a PHP backend.",
    time: "1:00 PM",
    speakers: [{ name: "Utibe Etim" }],
  },
  {
    title: "Integration Testing with Docker",
    description: "Containerized workflows for reliable, repeatable test runs.",
    time: "1:30 PM",
    speakers: [{ name: "Rufai Mustapha" }],
  },
  {
    title: "Mastering PHP",
    description: "Deliberate practice in a rapidly evolving landscape.",
    time: "2:00 PM",
    speakers: [{ name: "Harry Zahavi", affiliation: "CEO, Coderigi", image: "speakers/Zahavi.jpg" }],
  },
  {
    title: "Becoming a Lifelong Apprentice of Bugs",
    description: "Why the best engineers never stop learning from what breaks.",
    time: "2:30 PM",
    speakers: [
      {
        name: "David Inyang-Etoh",
        affiliation: "Senior Software Engineer, Receeve GmBH",
        image: "speakers/David2.jpeg",
      },
    ],
  },
  {
    title: "Games! Games!! Games!!!",
    description: "A short, high-energy break before the breakout sessions.",
    time: "2:30 PM",
  },
  {
    title: "Showcase",
    description: "Attendees and sponsors demo what they've been building.",
    time: "2:45 PM",
  },
  {
    title: "Breakout Sessions",
    description: "Three parallel tracks running side by side.",
    time: "3:00 PM",
    speakers: [
      { name: "Favour Akpan", affiliation: "Introduction to PHP (Beginner)", image: "speakers/Favour.jpg" },
      { name: "Edidiong Udoh", affiliation: "Building APIs with Laravel", image: "speakers/Edidiong.jpeg" },
      { name: "Tobi Anifowose", affiliation: "CI/CD for Zero-Downtime PHP", image: "speakers/tobi.png" },
    ],
  },
  {
    title: "Sponsors Session",
    description: "A word from the sponsors making PHP Connect possible.",
    time: "3:45 PM",
  },
  {
    title: "Closing",
    description: "Photo session, connect and network.",
    time: "4:15 PM",
  },
];

export const volunteers: {
  name: string;
  designation: string;
  image: string;
}[] = [
  {
    name: "Regina Ekwere",
    designation: "Content Creator",
    image: "volunteers/regina_ekwere.jpeg",
  },
  {
    name: "Ekikere-abasi Michael",
    designation: "Wicked Devloper",
    image: "volunteers/nzaki.jpeg",
  },
  {
    name: "Maamaa Victor",
    designation: "Full Stack Developer",
    image: "volunteers/maamaa-victor.jpeg",
  },
  {
    name: "Loveday Sunday",
    designation: "Content Creator",
    image: "volunteers/loveday-sunday.jpeg",
  },
  {
    name: "Joseph Ibochi",
    designation: "Visual Designer",
    image: "volunteers/joseph-ibochi.jpeg",
  },
  {
    name: "Mfoniso Ukpabio",
    designation: "Software Developer",
    image: "volunteers/mfoniso-ukpabio.jpeg",
  },
  {
    name: "Ukeme Eyoh",
    designation: "Ushering/Protocol",
    image: "volunteers/ukeme-eyoh.jpeg",
  },
  {
    name: "Godsproof Kindness",
    designation: "Protocol/Ushering",
    image: "volunteers/godsproof-kindness.png",
  },
  {
    name: "Owai Owai",
    designation: "UX Designer",
    image: "volunteers/owaix2.jpeg",
  },
  {
    name: "Akpan Daniel",
    designation: "Software Developer",
    image: "volunteers/akpan-daniel.jpeg",
  },
  {
    name: "Jewel Omon",
    designation: "Content Team",
    image: "volunteers/jewel-omon.jpeg",
  },
];
