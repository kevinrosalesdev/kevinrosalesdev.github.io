/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Kevin Rosales",
  title: "Hi! I'm Kevin Rosales",
  subTitle: emoji(
    "I am a 22 years old spanish passionate Computer Engineer specialized in Data Science, Machine Learning & Software Engineering located in Barcelona, Spain 💻"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1S_KohRRkBgEK_1iov5Yot922NJouY3Zw/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kevinrosalesdev",
  linkedin: "https://www.linkedin.com/in/kevin-rosales-santana/",
  gmail: "kevinrosalesdev@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI Research: Machine Learning, Statistics & Data Science and Optimization",
  skills: [
      emoji("🧠 Deep Learning: Keras, TensorFlow and CUDA"),
      emoji("📖 Natural Language Processing: NLTK and CoreNLP"),
      emoji("🔢 Arithmetic, Optimization and Data Management: Numpy, pandas, NetworkX and iGraph"),
      emoji("📊 Data Visualization: Matplotlib"),
      emoji("🤖 Computer Vision: OpenCV")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-plus"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fab fa-medium-m"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fas fa-file-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UPC, UB & URV",
      logo: require("./assets/images/upc.png"),
      subHeader: "Master of Science in Artificial Intelligence",
      duration: "September 2020 - February 2022",
      desc: "Interuniversity MSc in AI at Polytechnic University of Catalonia, University of Barcelona and University of Rovira i Virgili",
      descBullets: ["Average Mark: 9.2 / 10.0"]
    },
    {
      schoolName: "University of Las Palmas de Gran Canaria",
      logo: require("./assets/images/ulpgc.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - July 2020",
      desc: "Bachelor's Degree in Computer Engineering, specialized in Computational Science",
      descBullets: [
          "Average Mark: 9.25 / 10.0",
          "Including 14 courses passed with honors like: Computational Mathematics, Numerical Methods, Statistical Methods, " +
          "Programming I, Programming II, Databases, Fundamentals of Intelligent Systems, Algorithms and Computability and " +
          "Design of User Interfaces"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Research",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Teamwork Experience",
      progressPercentage: "75%"
    },
    {
      Stack: "Project Leadership",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Collaborator",
      company: "IUSIANI (ULPGC)",
      companylogo: require("./assets/images/siani.png"),
      date: "May 2020 – March 2021",
      desc: "Collaborator of a research project based on the content of my bachelor's thesis, a computer vision face verification problem."
    },
    {
      role: "Junior Back-End Developer",
      company: "Deipe, S.L.",
      companylogo: require("./assets/images/deipe.jpg"),
      date: "September 2019 – March 2020",
      desc: "Developer of projects related to the communication system of the company in its main software (GIO Web) using WebSocket Technology and AWS services, among others."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Hackathon Projects",
  subtitle: "Some projects developed during Hackathons",
  projects: [
    {
      image: require("./assets/images/logo-hackupc.png"),
      projectName: "Trustometer (2018)",
      projectDesc: "Google Chrome extension to detect fake news using Natural Language Processing",
      footerLink: [
        {
          name: "Hackathon Website",
          url: "https://hackupc.com/"
        },
        {
          name: "Source Code",
          url: "https://github.com/kevinrosalesdev/trustometer/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/femepa_logo.png"),
      projectName: "Futura-T (2018)",
      projectDesc: "Website to help students to afford various challenges to improve their CV and get them into the world of work",
      footerLink: [
        {
          name: "Hackathon Website",
          url: "https://feelthemetalpower.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications"),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Discrete Optimization Course (July 2019)",
      subtitle:
        "Online course authorized by The University of Melbourne and offered through Coursera",
      image: require("./assets/images/melbourne.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/NKLXN7ZULRX9"
        }
      ]
    },
    {
      title: "B2 First",
      subtitle:
        "B2 First from the University of Cambridge",
      image: require("./assets/images/university-of-cambridge-logo.png"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/"
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  email_address: "kevinrosalesdev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
