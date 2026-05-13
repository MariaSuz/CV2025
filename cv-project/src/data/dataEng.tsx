
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
        date: '2024-present',
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
    text: `Cheerful and goal-oriented front-end developer with one year of commercial experience (self-employed). Specializing in Vue 3 + TypeScript: table synchronization with router, modular architecture, i18n. Combining a love for programming with an active lifestyle. Strive to learn something new every day, a fast learner, and ready to apply my skills in a team of professionals.`,
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
        description: "Development and maintenance of a B2B portal on Vue 3. Working with complex tabular data (filters, sorting, pagination), state synchronization with URL via Vue Router combined with backend requests. Modular Vuex architecture.",
        achievements: [
          "Participated in implementing i18n for the entire application",
          "Refactored tables: extracted logic into compositions",
          "Removed dead code, extracted strings into constants",
        ],
        technologies: ["Vue 3", "TypeScript", "Vuetify", "Vuex"],
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