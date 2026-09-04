export const speakers: {
  name: string;
  designation: string;
  image: string;
}[] = [
  {
    name: "Bosun Egberinde",
    designation: "Software Engineer",
    image: "speakers/Bosun.jpeg",
  },
  {
    name: "Stephen Jude",
    designation: "CT0, Pay4Me",
    image: "speakers/Stephen.jpeg",
  },
  // {
  //   name: "Daniel Mabadeje",
  //   designation: "Co-Founder PHP Talks, Software Engineer",
  //   image: "hosts/Cleophas.jpg",
  // },
  {
    name: "David Inyang-Etoh",
    designation: "Senior Software Engineer, Receeve GmBH, Germany",
    image: "speakers/David2.jpeg",
  },

  {
    name: "Edidiong Udoh",
    designation: "Fullstack Developer, Tuzapay",
    image: "speakers/Edidiong.jpeg",
  },
  {
    name: "Favour Akpan",
    designation: "Software Engineer",
    image: "speakers/Favour.jpg",
  },
  {
    name: "Solomon Eseme",
    designation: "Software Engineer",
    image: "speakers/Solomon.jpeg",
  },
  {
    name: "Kyrian Obikwelu",
    designation: "Software Engineer, Transformers PHP",
    image: "speakers/Kyrian.jpeg",
  },
  {
    name: "Joseph Chimezie",
    designation: "Senior Software, Startease",
    image: "speakers/Joseph.jpeg",
  },
  {
    name: "Harry Zahavi",
    designation: "CEO, Coderigi",
    image: "speakers/Zahavi.jpg",
  },
  {
    name: "Tobi Anifowose",
    designation: "Senior Software, Internet Brand",
    image: "speakers/tobi.png",
  },
];

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
}[] = [
  {
    edition: "PHP Connect '23",
    caption:
      "Where it all started — a first look at the talks, demos, and the community that showed up for it.",
    images: [
      "speakers/Bosun.jpeg",
      "speakers/Stephen.jpeg",
      "speakers/David2.jpeg",
      "speakers/Solomon.jpeg",
      "backgrounds/hero-3.png",
    ],
  },
  {
    edition: "PHP Connect '24",
    caption:
      "A bigger crowd and bolder talks — recapping a weekend that pushed the PHP community forward.",
    images: [
      "speakers/Kyrian.jpeg",
      "speakers/Joseph.jpeg",
      "speakers/Zahavi.jpg",
      "speakers/Edidiong.jpeg",
      "backgrounds/hero-3.png",
    ],
  },
  {
    edition: "PHP Connect '25",
    caption:
      "The community keeps growing — another year of new faces, deeper conversations, and PHP done right.",
    images: [
      "speakers/Rufai.jpeg",
      "speakers/Utibe.jpeg",
      "speakers/James.jpg",
      "speakers/David1.jpeg",
      "backgrounds/hero-3.png",
    ],
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

export const faqs: {
  question: string;
  answer: string;
}[] = [
  {
    question: "When and where does PHP Connect take place?",
    answer:
      "PHP Connect brings the community together for a full day of talks, workshops, and networking. Keep an eye on the countdown and event details on this site for the exact date, venue, and how to find us.",
  },
  {
    question: "How do I get a ticket?",
    answer:
      "Tickets can be reserved directly from this site. Once registration opens, you'll find a link to grab your seat before spots run out.",
  },
  {
    question: "Will the talks and workshops be recorded?",
    answer:
      "Yes, sessions will be recorded and shared with attendees after the event, so you won't miss a thing even if you can't catch every talk live.",
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
