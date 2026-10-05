export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2024–Present",
    title: "Graduate Research Assistant",
    company: "BIG-CAT Research Lab, Clemson University",
    description:
      "Lead mixed-methods studies of trust, coordination, and effectiveness in human–AI teams, both independently and with collaborators.",
    advisor: "Dr. Christopher Flathmann",
  },
];
