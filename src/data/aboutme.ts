export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Han Nguyen",
  title: "Ph.D. Student",
  institution: "Clemson University",
  // Note that links work in the description
  description:
    "<p>I am a 3rd-year Ph.D. student in Human-Centered Computing at Clemson University. I am advised by <a href='https://chrisflathmann.com/index.html'>Dr. Christopher Flathmann</a> and a member of BIG-CAT Research Lab. Prior to graduate school, I received a B.S. in Visual Communication Technology at Bowling Green State University.</p><p>I am broadly interested in <strong>responsible AI</strong> and <strong>human–AI interaction</strong>. I’m particularly interested in designing AI and training humans for responsible adoption in human–AI teaming, improving human–AI workflows for responsible AI work, and understanding how people adapt to roles and workflows with AI teammates.</p><p>If you are working on fun ideas related to human-centered AI and human–AI teaming, I’d love to collaborate!</p>",
  email: "hann@clemson.edu",
  imageUrl: "/images/han.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=dvIKKKcAAAAJ&hl=en",
  linkedinUsername: "hannguyen301",
  cvUrl: "/Han-Nguyen-CV.pdf",
  institutionUrl: "https://www.clemson.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
