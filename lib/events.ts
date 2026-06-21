export type Pricing = "free" | "varies";

export type EventFormat = {
  id: string;
  name: string;
  icon: string;
  mode: string;
  modeBadge: string;
  /** Short one-liner for the home hero pills. */
  teaser: string;
  /** Fuller description for the events page. */
  description: string;
  pricing: Pricing;
  /** Precise pricing language — never a blanket "always free" claim. */
  pricingLabel: string;
  /** Accent palette key. */
  accent: "teal" | "purple";
  flagship?: boolean;
};

export const EVENT_FORMATS: EventFormat[] = [
  {
    id: "knect-live",
    name: "Knect Live",
    icon: "📹",
    mode: "Online",
    modeBadge: "ONLINE",
    teaser: "A founder's journey, narrated live",
    description:
      "A founder narrates their journey to a virtual audience of students. No venue, no geography limit — the easiest format to run often.",
    pricing: "free",
    pricingLabel: "Always free for students",
    accent: "teal",
  },
  {
    id: "club-collabs",
    name: "Club Collabs",
    icon: "🤝",
    mode: "Varies by club",
    modeBadge: "MIXED",
    teaser: "Founders, inside your college club",
    description:
      "We partner with existing college clubs — coding, design, hobby, interest groups — and bring founders directly into their regular gatherings.",
    pricing: "free",
    pricingLabel: "Always free for students",
    accent: "teal",
  },
  {
    id: "knect-circles",
    name: "Knect Circles",
    icon: "🎙️",
    mode: "Offline",
    modeBadge: "OFFLINE",
    teaser: "4–5 founders, one room, one evening",
    description:
      "A conference-style evening with 4–5 founder speakers in one sitting. More structured, higher production than Knect Live.",
    pricing: "varies",
    pricingLabel: "Free or paid — decided per event",
    accent: "purple",
  },
  {
    id: "knect-pitch",
    name: "Knect Pitch",
    icon: "🏆",
    mode: "Primarily offline",
    modeBadge: "FLAGSHIP",
    teaser: "Students pitch, founders respond",
    description:
      "A Shark Tank-style pitch night. Students pitch their ideas to a panel that includes founders and get real, direct feedback — built to scale into our biggest event.",
    pricing: "varies",
    pricingLabel: "Free or paid — decided per event",
    accent: "purple",
    flagship: true,
  },
];
