
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

const DATARUS = {
    profileName: { name: 'Мария Суздальцева', job: 'Frontend Developer' },
    contactInfo: {
        title: 'Контакты',
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
            text: 'Россия, Самара',
            url: 'https://maps.app.goo.gl/9asUzUpcJZ3Ua9JP7',
          },
        ],
    },
    education: {
        title: 'Образование',
        list: [
          {
            date: '2024-настоящее время',
            speciality: 'Самообразование, изучение программирования. Курс RS School с сертификатом st.0, где было изучено HTML, БЭМ, Адаптивная верстка, CSS, JavaScript, Git. Онлайн курс из 120 уроков по React, Redux',
            university: 'rs.school, codewars, learn.javascript, developer.mozilla и другие',
          },
          {
            date: '2021',
            speciality: 'Техническая защита информации ограниченного доступа, не содержащей сведения, составляющие государственную тайну',
            university: 'Поволжский государственный университет телекоммуникаций и информатики',
          },
          {
            date: '2011-2015',
            speciality: 'Автоматизация технологических процессов и производств',
            university: 'Самарский государственный аэрокосмический университет им. С. П. Королёва',
          },
        ],
    },
    languages: {
        title: 'Языки',
        list: [
          { name: 'Русский', text: 'Родной' },
          { name: 'Английский', text: 'A2' }
        ],
    },
    aboutMe: {
        title: 'Обо мне',
        text: `Жизнерадостная девушка 32 года, которой нравится программирование и активный отдых. Каждый день стараюсь изучать что-то новое. Имею большое желание развиваться и применять свои навыки в команде профессионалов. В данный момент работаю системным администратором.`,
    },
    skills: {
        title: 'Навыки',
        list: [
          { name: 'HTML', percent: '100' },
          { name: 'CSS, SASS', percent: '100' },
          { name: 'Javascript', percent: '95' },
          { name: 'Typescript', percent: '75' },
          { name: 'React, Hooks, Class Components, Route v6', percent: '85' },
          { name: 'Redux', percent: '85' },
          { name: 'Запросы axios', percent: '85' },
          { name: 'Formik', percent: '85' },
          { name: 'Git, GitHub', percent: '85' },
          { name: 'Webpack, Vite', percent: '70' },
          { name: 'MUI, Tailwindcss', percent: '75' },
        ],
    },
    interest: {
        title: 'Интересы',
        list: [
          { icon: <SnowshoeingIcon fontSize="large" />, name: 'Лыжи' },
          { icon: <SportsEsportsIcon fontSize="large" />, name: 'Игры' },
          { icon: <CodeIcon fontSize="large" />, name: 'Фронтенд' },
        ],
    },
    workExamples: {
        title: 'Примеры работ',
        list: [
          { image: ReactSocialImage, name: 'Social Network', text: 'Социальная сеть SPA, созданная с помощью React. Используется TypeScript, React Router, Redux, Axios, Redux-toolkit, Hooks.', url: 'https://github.com/MariaSuz/react-samurai-project/tree/main' },
          { image: ShelterImage, name: 'Shelter', text: 'Лендинг 2х страничный на чистом JS. Реализован слайдер, пагинация, карусель, модальное окно, бургер-меню.', url: 'https://github.com/MariaSuz/Shelter' },
          { image: SingUpImage, name: 'Sing up form', text: 'Представлена валидация страницы регистрации с помощью JavaScript.', url: 'https://github.com/MariaSuz/sing-up' },
        ],
    },
}

export default DATARUS