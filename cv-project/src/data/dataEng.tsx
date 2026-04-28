
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import ShelterImage from '../assets/shelter-project.jpg'
import PhoneBookImage from '../assets/phonebook.jpg'
import ReactSocialImage from '../assets/social-network.jpg'

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
        date: '2011-2015',
        speciality: 'Automation of technological processes and production',
        university: 'Samara State Aerospace University',
      },
    ],
  },
  languages: {
    title: 'Languages',
    list: [
      { name: 'Russian', text: 'Native' },
      { name: 'English', text: 'A2' }
    ],
  },
  aboutMe: {
    title: 'About me',
    text: `A cheerful and goal-oriented frontend developer with one year of experience. I combine my love for programming with an active lifestyle. I strive to learn something new every day, I am a fast learner, and I am ready to apply my skills in a team of professionals. I am looking for opportunities to grow further and solve interesting challenges.`,
  },
  skills: {
    title: 'Skills',
    list: [
      { name: 'HTML5, CSS3, SASS/SCSS', percent: '100' },
      { name: 'Javascript', percent: '95' },
      { name: 'Typescript', percent: '95' },
      { name: 'Vue 3 (Composition API, Pinia, Vue Router)', percent: '85' },
      { name: 'Git, GitHub', percent: '85' },
      { name: 'Webpack, Vite', percent: '85' },
      { name: 'Node.js + Express', percent: '75' },
    ],
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
        period: "20.02.2025 - present",
        position: "Frontend Developer",
        company: "Rozhkov",
        description: "Supporting a Vue3 application. Bug fixing, adding i18n translations, website optimization.",
        achievements: [
          "Optimized the codebase: removed 'dead code', extracted repetitive logic into compositions and constants, reducing code volume by ~20%",
        ],
        technologies: ["Vue", "TypeScript", "Vuetify", "Vuex"],
      },
      {
        period: "2020 - 2025",
        position: "Software Engineer",
        company: "SATOB",
        description: "Worked as a system administrator: configuring mail service based on Debian (Exim + Dovecot), working with Active Directory, setting up computer and server equipment.",
        achievements: [
          "Deployed and configured a mail server for 600+ users",
          "Automated backup of critical data",
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
      {
        image: ReactSocialImage,
        name: 'Social Network',
        text: 'Social network SPA built with React. Uses TypeScript, React Router, Redux, Axios, Redux-toolkit, Hooks.',
        url: 'https://github.com/MariaSuz/react-samurai-project/tree/main',
      },
      {
        image: ShelterImage,
        name: 'Shelter',
        text: 'Two-page landing built with pure JavaScript. Features include a slider, pagination, a carousel, a modal window, and a burger menu.',
        url: 'https://github.com/MariaSuz/Shelter',
      },
    ],
  },
}

export default DATAENG