export type ModuleKey =
  "people" | "engage" | "prayer" | "groups" | "sermons" | "giving" | "serving";

export type ProductModule = {
  key: ModuleKey;
  label: string;
  mark: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  background: string;
  metric: string;
  metricLabel: string;
};

export const modules: ProductModule[] = [
  {
    key: "people",
    label: "People",
    mark: "P",
    eyebrow: "People & households",
    title: "Know the person, not just the row.",
    description:
      "Profiles keep households, pastoral notes, attendance, tags, and communication history in one calm record.",
    accent: "var(--color-accent-green)",
    background: "var(--color-accent-green-bg)",
    metric: "847",
    metricLabel: "active people",
  },
  {
    key: "engage",
    label: "Engage",
    mark: "E",
    eyebrow: "Email & communication",
    title: "Write a real email. Send it to the right list.",
    description:
      "Build an audience by tag or lifecycle stage, then see opens and replies on each member profile.",
    accent: "var(--color-accent-purple)",
    background: "var(--color-accent-purple-bg)",
    metric: "68%",
    metricLabel: "opened this week",
  },
  {
    key: "prayer",
    label: "Prayer",
    mark: "R",
    eyebrow: "Prayer wall",
    title: "Make care visible without making it public.",
    description:
      "Members share requests with the right circle while staff can follow up and record outcomes.",
    accent: "var(--color-accent-blue)",
    background: "var(--color-accent-blue-bg)",
    metric: "24",
    metricLabel: "active requests",
  },
  {
    key: "groups",
    label: "Groups",
    mark: "G",
    eyebrow: "Groups & connection",
    title: "Help every person find their smaller room.",
    description:
      "Manage leaders, capacity, meeting rhythms, attendance, and the next best group for every member.",
    accent: "var(--color-accent-orange)",
    background: "var(--color-accent-orange-bg)",
    metric: "31",
    metricLabel: "healthy groups",
  },
  {
    key: "sermons",
    label: "Sermons",
    mark: "S",
    eyebrow: "Media library",
    title: "Sunday teaching, organized by Monday.",
    description:
      "Publish series, audio, notes, and discussion guides into a searchable church library.",
    accent: "var(--color-accent-brown)",
    background: "var(--color-accent-brown-bg)",
    metric: "126",
    metricLabel: "messages archived",
  },
  {
    key: "giving",
    label: "Giving",
    mark: "D",
    eyebrow: "Giving & statements",
    title: "Clear records for generous communities.",
    description:
      "Track funds, recurring gifts, household totals, and statements without a separate spreadsheet.",
    accent: "var(--color-accent-yellow)",
    background: "var(--color-accent-yellow-bg)",
    metric: "$42k",
    metricLabel: "this month",
  },
  {
    key: "serving",
    label: "Serving",
    mark: "V",
    eyebrow: "Teams & schedules",
    title: "Build a Sunday plan volunteers can trust.",
    description:
      "Create roles, invite the right people, confirm availability, and see coverage before the weekend.",
    accent: "var(--color-accent-red)",
    background: "var(--color-accent-red-bg)",
    metric: "92%",
    metricLabel: "roles covered",
  },
];

export const plans = [
  {
    name: "Free",
    price: "$0",
    members: "Up to 100 members",
    description: "For church plants and small communities getting organized.",
    features: [
      "All seven core modules",
      "2 admin seats",
      "Member portal",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Seed",
    price: "$29",
    members: "Up to 300 members",
    description: "For growing churches ready to replace scattered tools.",
    features: [
      "Everything in Free",
      "Unlimited admin seats",
      "Email broadcasts",
      "Giving statements",
    ],
    featured: false,
  },
  {
    name: "Grow",
    price: "$99",
    members: "Up to 1,000 members",
    description: "For established teams that need deeper coordination.",
    features: [
      "Everything in Seed",
      "Advanced reporting",
      "Automated workflows",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Pro",
    price: "$279",
    members: "Unlimited members",
    description: "For multi-site churches and larger ministry teams.",
    features: [
      "Everything in Grow",
      "Multiple campuses",
      "Custom onboarding",
      "Dedicated support",
    ],
    featured: false,
  },
] as const;
