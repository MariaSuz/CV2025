
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import ShelterImage from '../assets/shelter-project.jpg'
import SingUpImage from '../assets/singup-project.jpg'
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
        text: 'A cheerful girl of 32 years old who likes programming and active recreation. Every day I try to learn something new. I have a great desire to develop and apply my skills in a team of professionals. At the moment I work as a system administrator.',
    },
    skills: {
        title: 'Skills',
        list: [
          { name: 'HTML', percent: '100' },
          { name: 'CSS, SASS', percent: '100' },
          { name: 'Javascript', percent: '95' },
          { name: 'Typescript', percent: '75' },
          { name: 'React, Hooks, Class Components, Route v6', percent: '85' },
          { name: 'Redux', percent: '85' },
          { name: 'Axios requests', percent: '85' },
          { name: 'Formik', percent: '85' },
          { name: 'Git, GitHub', percent: '85' },
          { name: 'Webpack, Vite', percent: '70' },
          { name: 'MUI, Tailwindcss', percent: '75' },
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
    workExamples: {
        title: 'Projects',
        list: [
          { image: ReactSocialImage, name: 'Social Network', text: 'Social network SPA built with React. Uses TypeScript, React Router, Redux, Axios, Redux-toolkit, Hooks.', url: 'https://github.com/MariaSuz/react-samurai-project/tree/main' },
          { image: ShelterImage, name: 'Shelter', text: 'Two-page landing built with pure JavaScript. Features include a slider, pagination, a carousel, a modal window, and a burger menu.', url: 'https://github.com/MariaSuz/Shelter' },
          { image: SingUpImage, name: 'Sing up form', text: 'Registration page with validation using pure JavaScript.', url: 'https://github.com/MariaSuz/sing-up' },
        ],
    },
}

export default DATAENG