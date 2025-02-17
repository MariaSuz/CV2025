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
    <section className='flex justify-center items-center'>
      <div className='relative w-full max-w-screen-lg grid grid-cols-[1fr_2fr] shadow p-8 rounded-sm transition: 0.5s m-14 max-[958px]:flex max-[958px]:flex-col max-[958px]:p-4'>
        <div className='absolute top-2 right-4 z-100 max-w-md:right-0 max-w-md:top-0'>
          <button onClick={changeLanguage} className ='bg-sky-500 transition-colors z-100 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded'>{language ? 'ENG' : 'RUS'}</button>
        </div>
        <div className='p-2.5 relative flex flex-col gap-6'>
          <div className='flex flex-col justify-center items-center gap-3'>
            <img src={image} alt="my-photo" className='rounded-full max-w-52' />
            <h1 className='text-2xl font-medium uppercase max-[521px]:text-center'>{data.profileName.name}</h1>
            <h2 className='text-lg uppercase font-light'>{data.profileName.job}</h2>
          </div>
          <div className='h-px bg-gray-300 w-3xs mx-auto'></div>
          <div>
            <h3 className='text-lg uppercase font-medium mb-4'>{data.contactInfo.title}</h3>
            <ul className='flex flex-col gap-2 max-[958px]:flex-row max-[958px]:justify-between max-[958px]:flex-wrap max-[521px]:flex-col'>
              {data.contactInfo.list.map((el) => (
                <li key={el.text}>
                  <a key={el.text}
                    href={el.url}
                    target="_blank"
                    className="transition-colors font-light hover:text-sky-500 hover:tracking-wider"
                    rel="noreferrer">
                    <span className="inline-block text-sky-500 p-1">{el.icon}</span>
                    {el.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg uppercase font-medium mb-4'>{data.education.title}</h3>
            <ul className='flex flex-col gap-6'>
              {data.education.list.map((el, i) => (
                <li className='flex flex-col gap-1' key={i}>
                  <h5 className=' text-sky-500 font-medium text-xs'>{el.date}</h5>
                  <h4 className='font-medium'>{el.speciality}</h4>
                  <h4 className='font-light'>{el.university}</h4>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-lg uppercase font-medium mb-4'>{data.languages.title}</h3>
            <div>
            {data.languages.list.map((el) => (
                  <div key={el.name} className='mb-6'>
                    <span className="font-light">{el.name}</span>
                    <span className="font-light"> - </span>
                    <span className="font-light">{el.text}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className='p-2.5 relative flex flex-col gap-6'>
            <div>
              <h3 className='text-2xl uppercase font-medium mb-4'>{data.aboutMe.title}</h3>
              <span>{data.aboutMe.text}</span>
            </div>
            <div>
              <h3 className='text-2xl uppercase font-medium mb-4'>{data.workExamples.title}</h3>
              <div className='relative'>
                {data.workExamples.list.map((el) => (
                    <a href={el.url} key={el.name}>
                      <div className='grid grid-cols-[1fr_2fr] gap-6 mb-4 max-sm:flex flex-col-reverse'>
                        <div>
                          <img className='h-32 w-48 object-cover max-sm:h-48 max-sm:w-full' src={el.image} alt={el.name} />
                        </div>
                        <div>
                          <h5 className='font-medium text-sky-500'>{el.name}</h5>
                          <span>{el.text}</span>
                        </div>
                      </div>
                    </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className='text-2xl uppercase font-medium mb-4'>{data.skills.title}</h3>
              <div>
                {data.skills.list.map((el) => (
                  <div key={el.name} className='mb-6'>
                    <span className="font-light">{el.name}</span>
                    <div className='h-4 w-full bg-gray-300 dark:bg-neutral-600 overflow-hidden'>
                      <div className="flex flex-col justify-center h-full bg-sky-500 rounded transition-width duration-500 ease-in-out leading-none" style={{ width: `${el.percent}%` }}>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about interest">
              <h3 className='text-2xl uppercase font-medium mb-4'>{data.interest.title}</h3>
              <ul className='flex justify-between max-[521px]:flex-col gap-2'>
                {data.interest.list.map((el) => (
                  <li key={el.name}>
                    <span className="inline-block text-sky-500 p-1">{el.icon}</span>
                    {el.name}
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Resume