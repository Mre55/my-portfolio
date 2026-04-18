export type Project = {
  id: number;
  title: string;
  description: string;
  details: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "TrackStat Scheduler Tool",
    description:
      "A scheduling and resource planning dashboard for operations teams.",
    details:
      "Built a robust scheduling platform with availability mapping, conflict detection, and role-based controls for daily planning workflows.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python"],
    imageUrl: "/projects/analytics-dashboard.svg",
    liveUrl: "https://example.com/trackstat-scheduler",
    sourceUrl: "https://github.com/example/trackstat-scheduler",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A conversion-optimized storefront with smooth checkout flow.",
    details:
      "Designed a scalable storefront architecture with robust product filtering, secure checkout orchestration, and conversion-tracking instrumentation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python"],
    imageUrl: "/projects/ecommerce-platform.svg",
    liveUrl: "https://example.com/ecommerce-platform",
    sourceUrl: "https://github.com/example/ecommerce-platform",
  },
  {
    id: 3,
    title: "SaaS Booking System",
    description: "A scheduling app with role-based collaboration tools.",
    details:
      "Implemented a booking platform with flexible availability rules, team management features, and reliable asynchronous notifications.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python"],
    imageUrl: "/projects/saas-booking-system.svg",
    liveUrl: "https://example.com/saas-booking-system",
    sourceUrl: "https://github.com/example/saas-booking-system",
  },
];
