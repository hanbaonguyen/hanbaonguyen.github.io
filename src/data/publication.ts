export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  status?: "In press" | "Under review";
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "The 29th Conference on Computer-Supported Cooperative Work & Social Computing (CSCW)",
    title: 'Does AI Kill "Real" Networking? Opportunities and Risks of AI-Assisted Self-Presentation on Professional Online Networks',
    authors: "Han Nguyen, Guo Freeman, Christopher Flathmann",
  },
  {
    year: "2026",
    conference: "Proceedings of the ACM on Human-Computer Interaction (GROUP)",
    title: "The Teammate Divide: How Humans Approach Teamwork Differently with Human and AI Teammates",
    authors: "Christopher Flathmann, Han Nguyen, Kwame Andre, Chase Guynup",
  },
  {
    year: "2026",
    conference: "Proceedings of the ACM on Human-Computer Interaction (GROUP)",
    title: '"AI is a friend, a teammate, not a supervisor": Understanding Human Perceptions of AI teammates’ Monitoring in Human-AI Teams',
    authors: "Nan Weng, Wen Duan, Han Nguyen, Yunhao Wang, Nathan McNeese",
  },
  {
    year: "2026",
    conference: "IEEE Conference on Cognitive and Computational Aspects of Situation Management (CogSIMA)",
    title: "Expanding the Roster: Qualitative Needs Assessment for Autonomous Teammates in Hazardous Environments",
    authors: "Chase Guynup, Han Nguyen, Rhea Basappa, Kwame Andre, Mia Yancey, Christopher Flathmann, Nathan McNeese, Carlos Toxtli, Kapil Madathil, Anand Gramopadhye",
  },
  {
    year: "2025",
    conference: "Proceedings of the Human Factors and Ergonomics Society Annual Meeting (HFES)",
    title: "Modeling Adaptive Autonomy at the Team Level: Understanding Team-Wide Autonomy and its Impact on Situation Awareness in Human-Autonomy Teams",
    authors: "Han Nguyen, Yunhao Wang, Kwame Andre, Wen Duan, Christopher Flathmann, Nathan McNeese",
  },
  {
    year: "2025",
    conference: "Proceedings of the Human Factors and Ergonomics Society Annual Meeting (HFES)",
    title: "A Framework Considering the Cross-Effects of Human and AI Collaboration on Team Resilience",
    authors: "Yunhao Wang, Han Nguyen, Kwame Andre, Wen Duan, Christopher Flathmann, Nathan McNeese",
  },
];
