
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';

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
            speciality: 'Самообразование, изучение программирования. Курс от RS School с сертификатом st.0 (HTML, БЭМ, Адаптивная верстка, CSS,  JavaScript, Git). Онлайн курс из 120 уроков по React, Redux',
            university: 'rs.school, codewars, youtube, lern.javascript, developer.mozilla и другие',
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
          { name: 'Русский', percent: '95' },
          { name: 'Английский', percent: '45' }
        ],
    },
    aboutMe: {
        title: 'Обо мне',
        text: `Жизнерадостная девушка 32 года, которой нравится программирование и активный отдых. Каждый день стараюсь изучать что-то новое. Имею большое желание развиваться и применять свои навыки в команде профессионалов. В данный момент работаю системным администратором.`,
    },
    experience: {
        title: 'Опыт',
        list: [
          {
            date: '2024-настоящее время',
            name: 'GitHub, фриланс',
            job: 'Frontend Developer',
            description: `Практическое применение получаемых знаний, разработка собственных проектов на GitHub. Выполнение тестовых заданий.`,
          },
          {
            date: '2021-2024',
            name: 'ООО "Микросистема"',
            job: 'Системный администратор',
            description: `Работа на должности системного администратора. В мои обязанности входило: подключение новых пользователей к корпоративной сети,
            настройка электронной почты на debian (exim + dovecot), обслуживание парка компьютерной техники,
            мониторинг работоспособности внутреннего сайта, написанного на  PHP`,
          },
        ],
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
          { image: '../assets/shelter-project.jpg', name: 'Shelter', text: 'Лендинг 2х страничный на чистом JS. Реализован слайдер, пагинация, карусель, модальное окно, бургер-меню.', url: 'https://github.com/MariaSuz/Shelter' },
          { image: '../assets/singup-project.jpg', name: 'Sing up form', text: 'Представлена валидация страницы регистрации с помощью JavaScript.', url: 'https://github.com/MariaSuz/sing-up' },
          { image: '../assets/social-network.jpg', name: 'Social Network', text: 'Социальная сеть SPA, созданная с помощью React. Используется TypeScript, React Router, Redux, Axios, Redux-toolkit, Hooks.', url: 'https://github.com/MariaSuz/react-samurai-project/tree/main' },
        ],
    },
}

export default DATARUS