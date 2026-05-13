
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import PhoneBookImage from '../assets/phonebook.jpg'

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
        date: '2017',
        speciality: 'Техническая эксплуатация авиационных электросистем и пилотажно-навигационных комплексов',
        university: 'Самарский государственный аэрокосмический университет им. С. П. Королёва',
      },
      {
        date: '2015',
        speciality: 'Автоматизация технологических процессов и производств',
        university: 'Самарский государственный аэрокосмический университет им. С. П. Королёва',
      },
    ],
  },
  languages: {
    title: 'Языки',
    list: [
      { name: 'Русский', text: 'Родной' },
      { name: 'Английский', text: 'A2 (читаю документацию)' }
    ],
  },
  aboutMe: {
    title: 'Обо мне',
    text: `Жизнерадостная и целеустремлённая фронтенд-разработчица с годом коммерческого опыта (самозанятость). Специализируюсь на Vue 3 + TypeScript: синхронизация таблиц с роутером, модульная архитектура, i18n. Сочетаю любовь к программированию с активным образом жизни. Ежедневно стремлюсь узнавать новое, быстро обучаюсь и готова применять свои навыки в команде профессионалов.`,
  },
  skills: {
    title: 'Навыки',
    list: [
      {
        category: 'Main',
        items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS/SASS']
      },
      {
        category: 'Vue',
        items: ['Vue 3 (Composition API)', 'Pinia', 'Vuex (модули)', 'Vue Router', 'Vuetify']
      },
      {
        category: 'React (базовый)',
        items: ['React Hooks', 'Redux Toolkit', 'React Router']
      },
      {
        category: 'Build Tools & Git',
        items: ['Webpack', 'Vite', 'Git', 'GitHub']
      },
      {
        category: 'Backend (базовый)',
        items: ['Node.js', 'Express']
      }
    ]
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
        period: "Февраль 2025 - настоящее время",
        position: "Frontend-разработчик (самозанятая)",
        company: "Самозанятость (коммерческий проект)",
        description: "Разработка и поддержка B2B-портала на Vue 3. Работа со сложными табличными данными (фильтры, сортировка, пагинация), в проекте синхронизация состояния с URL через Vue Router с запросом на бэкенд. Модульная архитектура Vuex.",
        achievements: [
          "Участвовала во внедрении i18n для всего приложения",
          "Провела рефакторинг таблиц: вынесла логику в композиции",
          "Удалила мёртвый код, вынесла строки в константы",
        ],
        technologies: ["Vue 3", "TypeScript", "Vuetify", "Vuex", "i18n"],
      },
      {
        period: "2020 - 2025",
        position: "Системный администратор",
        company: "ГБУК САТОБ",
        description: "Работа системным администратором, те настройка почтового сервиса  на основе Debian (Exim + Dovecot), работа в AD, настройка компьютерного и серверного оборудования.",
        achievements: [
          "Развернула и настроила почтовый сервер для 600+ пользователей",
          "Автоматизировала резервное копирование критически важных данных",
          "Перенесла старое приложение на PHP + jQuery на новую машину",
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
    ],
  },
}

export default DATARUS