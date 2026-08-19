/**
 * Speakers — Confluence 3.0
 *
 * Each institution section contains an array of speakers. Update this file to
 * add, remove, or reassign speakers — the page renders entirely from this data.
 *
 * Speaker shape:
 *   { id, name, title, category?, image?, profileUrl?, institution }
 */

const SPEAKERS = [
  {
    id: "rbs-rcss",
    institution: "Rajagiri Business School & Rajagiri College of Social Sciences",
    emblem: "",
    description:
      "Management, business, and social-science leadership shaping the people dimension of technology and enterprise.",
    speakers: [
      {
        id: "rbs-1",
        name: "Dr. Satheesh Kumar K.",
        title: "Director, Rajagiri Business School",
        category: "Academic",
        institution: "Rajagiri Business School",
      },
      {
        id: "rbs-2",
        name: "Dr. Reji D. Nair",
        title: "Professor, Rajagiri Business School",
        category: "Academic",
        institution: "Rajagiri Business School",
      },
      {
        id: "rbs-3",
        name: "Dr. Anil Joseph",
        title: "Head, Centre for Management Research",
        category: "Research",
        institution: "Rajagiri Business School",
      },
      {
        id: "rcss-1",
        name: "Dr. S. M. Junaid",
        title: "Principal, Rajagiri College of Social Sciences",
        category: "Academic",
        institution: "Rajagiri College of Social Sciences",
      },
      {
        id: "rcss-2",
        name: "Dr. Beena Philip",
        title: "Professor, Department of Social Work",
        category: "Academic",
        institution: "Rajagiri College of Social Sciences",
      },
      {
        id: "rcss-3",
        name: "Ms. Neetha Susan Thomas",
        title: "Coordinator, Public Policy & Governance",
        category: "Government",
        institution: "Rajagiri College of Social Sciences",
      },
    ],
  },
  {
    id: "rcmas",
    institution: "Rajagiri College of Management and Applied Sciences",
    emblem: "",
    description:
      "Applied management and professional programs connecting students directly with industry and public institutions.",
    speakers: [
      {
        id: "rcmas-1",
        name: "Dr. Jomy P. K.",
        title: "Principal, Rajagiri College of Management and Applied Sciences",
        category: "Academic",
        institution: "RCMAS",
      },
      {
        id: "rcmas-2",
        name: "Dr. P. S. Anoop",
        title: "Head, Department of Commerce",
        category: "Academic",
        institution: "RCMAS",
      },
      {
        id: "rcmas-3",
        name: "Mr. Vimal Raj N.",
        title: "Industry Advisor, Placement & Partnerships",
        category: "Industry",
        institution: "RCMAS",
      },
      {
        id: "rcmas-4",
        name: "Dr. Liji Sara Varghese",
        title: "Assistant Professor, Computer Applications",
        category: "Technology",
        institution: "RCMAS",
      },
      {
        id: "rcmas-5",
        name: "Mr. Adithya Krishnan",
        title: "Founder & Managing Director, Kelvi Tech",
        category: "Industry",
        institution: "RCMAS",
        profileUrl: "https://www.linkedin.com/",
      },
    ],
  },
  {
    id: "rjcaas",
    institution: "Rajagiri Viswajyothi College of Arts & Applied Sciences",
    emblem: "",
    description:
      "Arts, humanities, and applied-science faculty and visiting artists contributing a cultural and creative lens to the summit.",
    speakers: [
      {
        id: "rjcaas-1",
        name: "Dr. Sajini Varghese",
        title: "Principal, Rajagiri Viswajyothi College of Arts & Applied Sciences",
        category: "Academic",
        institution: "Rajagiri Viswajyothi",
      },
      {
        id: "rjcaas-2",
        name: "Mr. Deepak Menon",
        title: "Creative Director, Studio Kerala",
        category: "Arts",
        institution: "Rajagiri Viswajyothi",
        profileUrl: "https://www.linkedin.com/",
      },
      {
        id: "rjcaas-3",
        name: "Dr. Meera Krishnan",
        title: "Professor, Department of Visual Arts",
        category: "Arts",
        institution: "Rajagiri Viswajyothi",
      },
      {
        id: "rjcaas-4",
        name: "Ms. Fathima Shajahan",
        title: "Curator & Design Researcher",
        category: "Arts",
        institution: "Rajagiri Viswajyothi",
      },
      {
        id: "rjcaas-5",
        name: "Dr. Manoj P. R.",
        title: "Head, Department of Applied Sciences",
        category: "Research",
        institution: "Rajagiri Viswajyothi",
      },
    ],
  },
];

export default SPEAKERS;
