import image from '../assets/my-photo.jpg'
import DATARUS from '../data/dataRus'
import DATAENG from '../data/dataEng'
import { useState } from 'react'

function Resume() {
  const [language, setLanguage] = useState(true)
  const data = !language ? DATAENG : DATARUS
  const changeLanguage = () => {
    setLanguage(!language);
  }
  return (
    <section className='min-h-screen flex justify-center items-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_2fr] shadow-2xl bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-500 m-4 md:m-8'>
        <div className='absolute top-4 right-4 z-20'>
          <button
            onClick={changeLanguage}
            className='bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105'
          >
            {language ? 'ENG' : 'RUS'}
          </button>
        </div>

        {/* LEFT COLUMN */}
        <div className='bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 md:p-8'>
          {/* Profile */}
          <div className='flex flex-col items-center text-center mb-6'>
            <div className='relative'>
              <img
                src={image}
                alt="my-photo"
                className='w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-sky-500 shadow-xl hover:scale-105 transition-transform duration-300'
              />
              <div className='absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white'></div>
            </div>
            <h1 className='text-2xl md:text-3xl font-bold uppercase mt-4 text-gray-800 dark:text-white'>
              {data.profileName.name}
            </h1>
            <h2 className='text-base md:text-lg uppercase font-light text-gray-600 dark:text-gray-300 mt-1'>
              {data.profileName.job}
            </h2>
          </div>

          <div className='h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6'></div>

          {/* Contact Info */}
          <div className='mb-6'>
            <h3 className='text-lg font-bold uppercase mb-4 text-gray-700 dark:text-gray-200 flex items-center gap-2'>
              <span className='text-sky-500'>📞</span> {data.contactInfo.title}
            </h3>
            <ul className='space-y-3'>
              {data.contactInfo.list.map((el) => (
                <li key={el.text}>
                  <a
                    href={el.url}
                    target="_blank"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-all duration-300 hover:translate-x-1"
                    rel="noreferrer"
                  >
                    <span className="text-sky-500 text-xl">{el.icon}</span>
                    <span className="text-sm">{el.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className='mb-6'>
            <h3 className='text-lg font-bold uppercase mb-4 text-gray-700 dark:text-gray-200 flex items-center gap-2'>
              <span className='text-sky-500'>🎓</span> {data.education.title}
            </h3>
            <ul className='space-y-4'>
              {data.education.list.map((el, i) => (
                <li key={i} className='relative pl-4 border-l-2 border-sky-200 hover:border-sky-500 transition-all'>
                  <div className='text-xs font-mono text-sky-600 dark:text-sky-400 mb-1'>
                    {el.date}
                  </div>
                  <div className='font-semibold text-gray-800 dark:text-white'>
                    {el.speciality}
                  </div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>
                    {el.university}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className='text-lg font-bold uppercase mb-4 text-gray-700 dark:text-gray-200 flex items-center gap-2'>
              <span className='text-sky-500'>🌐</span> {data.languages.title}
            </h3>
            <div className='space-y-2'>
              {data.languages.list.map((el) => (
                <div key={el.name} className='flex justify-between items-center'>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{el.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{el.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className='p-6 md:p-8 space-y-8 bg-white dark:bg-gray-800'>
          {/* About Me */}
          <div>
            <h3 className='text-2xl font-bold uppercase mb-4 text-gray-800 dark:text-white flex items-center gap-2'>
              <span className='text-sky-500'>👩‍💻</span> {data.aboutMe.title}
            </h3>
            <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
              {data.aboutMe.text}
            </p>
          </div>

          {/* Work Experience */}
          {data.workExperience && (
            <div>
              <h3 className='text-2xl font-bold uppercase mb-4 text-gray-800 dark:text-white flex items-center gap-2'>
                <span className='text-sky-500'>💼</span> {data.workExperience.title}
              </h3>
              <div className='space-y-6'>
                {data.workExperience.list.map((job, i) => (
                  <div key={i} className='group relative pl-4 border-l-2 border-sky-200 hover:border-sky-500 transition-all duration-300'>
                    <div className='inline-block text-xs font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2 py-1 rounded mb-2'>
                      {job.period}
                    </div>
                    <h4 className='font-bold text-lg text-gray-800 dark:text-white mt-1'>
                      {job.position}
                    </h4>
                    <h4 className='font-medium text-sky-600 dark:text-sky-400 mb-2'>
                      {job.company}
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3'>
                      {job.description}
                    </p>

                    {job.technologies && job.technologies.length > 0 && (
                      <div className='flex flex-wrap gap-2 mb-3'>
                        {job.technologies.map((tech, idx) => (
                          <span key={idx} className='text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full'>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {job.achievements && job.achievements.length > 0 && (
                      <div className='mt-2'>
                        <div className='text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1'>
                          <span>✓</span> {data.workExperience.achievementsTitle}
                        </div>
                        <ul className='space-y-1'>
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className='text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2'>
                              <span className='text-sky-500 mt-0.5'>▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Work Examples */}
          <div>
            <h3 className='text-2xl font-bold uppercase mb-4 text-gray-800 dark:text-white flex items-center gap-2'>
              <span className='text-sky-500'>📁</span> {data.workExamples.title}
            </h3>
            <div className='space-y-4'>
              {data.workExamples.list.map((el) => (
                <a
                  href={el.url}
                  key={el.name}
                  target="_blank"
                  rel="noreferrer"
                  className='block group'
                >
                  <div className='flex flex-col sm:flex-row gap-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
                    <div className='sm:w-2/5'>
                      <img
                        className='h-48 w-full object-cover sm:h-full'
                        src={el.image}
                        alt={el.name}
                      />
                    </div>
                    <div className='p-4 sm:w-3/5'>
                      <h5 className='font-bold text-sky-600 dark:text-sky-400 group-hover:text-sky-700 transition-colors mb-2'>
                        {el.name}
                      </h5>
                      <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                        {el.text}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className='text-2xl font-bold uppercase mb-4 text-gray-800 dark:text-white flex items-center gap-2'>
              <span className='text-sky-500'>⚡</span> {data.skills.title}
            </h3>
            <div className='space-y-4'>
              {data.skills.list.map((el) => (
                <div key={el.name}>
                  <div className='flex justify-between mb-1'>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{el.name}</span>
                    <span className="text-sm text-sky-600 dark:text-sky-400 font-mono">{el.percent}%</span>
                  </div>
                  <div className='h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'>
                    <div
                      className="h-full bg-gradient-to-r from-sky-500 to-sky-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${el.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className='text-2xl font-bold uppercase mb-4 text-gray-800 dark:text-white flex items-center gap-2'>
              <span className='text-sky-500'>🎯</span> {data.interest.title}
            </h3>
            <div className='flex flex-wrap gap-3'>
              {data.interest.list.map((el) => (
                <div
                  key={el.name}
                  className='flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full hover:bg-sky-50 dark:hover:bg-sky-900 transition-all duration-300 hover:scale-105'
                >
                  <span className="text-sky-500 text-xl">{el.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{el.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume