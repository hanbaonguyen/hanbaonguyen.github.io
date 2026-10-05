export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  details?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024–Present",
    institution: "Clemson University",
    degree: "Ph.D. in Human-Centered Computing",
    advisor: "Dr. Christopher Flathmann",
    details: "Expected May 2029",
  },
  {
    year: "2019–2023",
    institution: "Bowling Green State University",
    degree: "B.S. in Visual Communication Technology",
    details: "Minor in Computer Science",
  },
];
