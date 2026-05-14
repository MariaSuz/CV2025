
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import PhoneBookImage from '../assets/phonebook.jpg'

const DATAENG = {
  profileName: { name: 'Mariia Suzdaltceva', job: 'Frontend Developer' },
  contactInfo: {
    title: 'Contact',
    list: [
      {
        icon: <TelegramIcon />,
        text: '@mary_sleep',
        url: 'https://t.me/mary_sleep',
      },
      {
        icon: <PhoneIcon />,
        text: '+7 (927) 654-46-42',
        url: 'tel:+79276544642',
      },
      {
        icon: <GitHubIcon />,
        text: 'github.com/MariaSuz',
        url: 'https://github.com/MariaSuz',
      },
      {
        icon: <MailOutlineIcon />,
        text: 'index93@mail.ru',
        url: 'mailto:index93@mail.ru',
      },
      {
        icon: <LocationOnIcon />,
        text: 'Russia, Samara',
        url: 'https://maps.app.goo.gl/9asUzUpcJZ3Ua9JP7',
      },
    ],
  },
  education: {
    title: 'Education',
    list: [
      {
        date: '2024 - present',
        speciality: 'Self-education, learning programming. RS School course with st.0 certificate, where HTML, BEM, Adaptive layout, CSS, JavaScript, Git were studied. Online course of 120 lessons on React, Redux',
        university: 'rs.school, codewars, learn.javascript, developer.mozilla and etc',
      },
      {
        date: '2021',
        speciality: 'Technical protection of restricted access information that does not contain information constituting a state secret',
        university: 'Povolzhskiy State University of Telecommunications and Informatics',
      },
      {
        date: '2017',
        speciality: 'Technical operation of aircraft electrical systems and flight navigation complexes',
        university: 'Samara State Aerospace University',
      },
      {
        date: '2015',
        speciality: 'Automation of technological processes and production',
        university: 'Samara State Aerospace University',
      },
    ],
  },
  languages: {
    title: 'Languages',
    list: [
      { name: 'Russian', text: 'Native' },
      { name: 'English', text: 'A2 (reading documentation)' }
    ],
  },
  aboutMe: {
    title: 'About me',
    text: 'Cheerful and goal-oriented front-end developer with 1.5 years of commercial experience (self-employed). Specializes in Vue 3 + TypeScript. Combines a love for programming with an active lifestyle. Strives to learn something new every day, learns quickly, and is ready to apply her skills in a team of professionals.',
  },
  skills: {
    title: 'Skills',
    list: [
      {
        category: 'Main',
        items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS/SASS']
      },
      {
        category: 'Vue',
        items: ['Vue 3 (Composition API)', 'Pinia', 'Vuex (modules)', 'Vue Router', 'Vuetify']
      },
      {
        category: 'React (basic)',
        items: ['React Hooks', 'Redux Toolkit', 'React Router']
      },
      {
        category: 'Build Tools & Git',
        items: ['Webpack', 'Vite', 'Git', 'GitHub']
      },
      {
        category: 'Backend (basic)',
        items: ['Node.js', 'Express']
      }
    ]
  },
  interest: {
    title: 'Interests',
    list: [
      { icon: <SnowshoeingIcon fontSize="large" />, name: 'Skis' },
      { icon: <SportsEsportsIcon fontSize="large" />, name: 'Games' },
      { icon: <CodeIcon fontSize="large" />, name: 'Frontend' },
    ],
  },
  workExperience: {
    title: 'Work Experience',
    achievementsTitle: 'Key achievements:',
    list: [
      {
        period: "February 2025 - present",
        position: "Frontend Developer (self-employed)",
        company: "Self-employment",
        description: "Development and support of a portal for managing terminals and transactions. On the main page, charts make it easy to understand payment and terminal data. I work in a small team, handling the development and maintenance of this functionality. The project uses the following stack: Vue 3, Vuetify, Vuex, Vue Router, TypeScript. A complex filtering and sorting system has been implemented.",
        achievements: [
          "Implemented i18n - interface translation into two languages",
          "Adapt and configure a complex filtering and sorting system for new table pages",
          "Improved application performance by refactoring resource-intensive tables, removing unused code, and extracting strings into enums",
        ],
        technologies: ["Vue 3", "TypeScript", "Vuetify", "Vuex", "Vue Router", "i18n"],
      },
      {
        period: "2020 - 2025",
        position: "Software Engineer",
        company: "SATOB",
        description: "Worked as a system administrator: configuring mail service based on Debian (Exim + Dovecot), working with Active Directory, setting up computer and server equipment.",
        achievements: [
          "Deployed and configured a mail server for 600+ users",
          "Automated backup of critical data",
          "Migrated an old PHP + jQuery application to a new machine",
          "Developed and deployed a full-stack application for employees using Vue + Node.js (a corporate directory containing information about offices, positions, phone numbers, regulations, and links to portals).",
        ],
        technologies: ["Linux (Debian)", "Windows Server", "Cisco", "1C", "MySQL", "Exim", "Dovecot"],
      },
    ],
  },
  workExamples: {
    title: 'Projects',
    list: [
      {
        image: PhoneBookImage,
        name: 'PhoneBook',
        text: 'A full-featured web application for managing employee contacts within an organization. The project is built on a modern technology stack and provides a user-friendly interface for working with the company’s organizational structure. Uses Vue, TypeScript, Pinia, Vuelidate, Vuetify 3, Node + Express, Bcrypt, REST API.',
        url: 'https://github.com/MariaSuz/Phonebook',
      },
    ],
  },
}

export default DATAENG