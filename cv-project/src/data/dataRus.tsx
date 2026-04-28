
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
    text: `Жизнерадостная и целеустремленная фронтенд-разработчица с годовым опытом работы. Сочетаю любовь к программированию с активным образом жизни. Ежедневно стремлюсь узнавать новое, быстро обучаюсь и готова применять свои навыки в команде профессионалов. Ищу возможности для дальнейшего развития и решения интересных задач.`,
  },
  skills: {
    title: 'Навыки',
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
    title: 'Интересы',
    list: [
      { icon: <SnowshoeingIcon fontSize="large" />, name: 'Лыжи' },
      { icon: <SportsEsportsIcon fontSize="large" />, name: 'Игры' },
      { icon: <CodeIcon fontSize="large" />, name: 'Фронтенд' },
    ],
  },
  workExperience: {
    title: 'Опыт работы',
    achievementsTitle: 'Ключевые результаты:',
    list: [
      {
        period: "20.02.2025 - настоящее время",
        position: "Фронтенд разработчик",
        company: "ИП Рожков",
        description: "Поддержка приложения на Vue3. Устранения багов, добавление переводов i18n, оптимизация сайта.",
        achievements: [
          `Оптимизировала кодовую базу: удалила 'мертвый код', вынесла повторяющуюся логику в композиции и константы, сократив объем кода на ~20%",`,
        ],
        technologies: ["Vue", "TypeScript", "Vuetify", "Vuex"],
      },
      {
        period: "2020 - 2025",
        position: "Инженер-программист",
        company: "ГБУК САТОБ",
        description: "Работа системным администратором, те настройка почтового сервиса  на основе Debian (Exim + Dovecot), работа в AD, настройка компьютерного и серверного оборудования.",
        achievements: [
          "Развернула и настроила почтовый сервер для 600+ пользователей",
          "Автоматизировала резервное копирование критически важных данных",
        ],
        technologies: ["Linux (Debian)", "Windows Server", "Cisco", "1С", "MySQL", "Exim", "Dovecot"],
      },
    ],
  },
  workExamples: {
    title: 'Примеры работ',
   list: [
    {
      image: PhoneBookImage,
      name: 'PhoneBook',
      text: 'Полнофункциональное веб-приложение для управления контактами сотрудников организации. Проект построен на современном стеке технологий и предоставляет удобный интерфейс для работы с организационной структурой компании. Используется Vue, TypeScript, Pinia, Vuelidate, Vuetify 3, Node + Express, Bcrypt, REST API.',
      url: 'https://github.com/MariaSuz/Phonebook',
    },
    {
      image: ReactSocialImage,
      name: 'Social Network',
      text: 'Социальная сеть SPA, созданная с помощью React. Используется TypeScript, React Router, Redux, Axios, Redux-toolkit, Hooks.',
      url: 'https://github.com/MariaSuz/react-samurai-project/tree/main',
    },
    {
      image: ShelterImage,
      name: 'Shelter',
      text: 'Лендинг 2х страничный на чистом JS. Реализован слайдер, пагинация, карусель, модальное окно, бургер-меню.',
      url: 'https://github.com/MariaSuz/Shelter',
    },
    ],
  },
}

export default DATARUS