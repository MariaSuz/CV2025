import image from '../assets/my-photo.jpg'
import DATARUS from '../data/dataRus'

function Resume() {
  const data = DATARUS
  return (
    <section class='flex justify-center items-center'>
      <div class='relative w-full max-w-screen-lg grid grid-cols-[1fr_2fr] shadow p-8 rounded-sm transition: 0.5s m-14'>
        <div className='p-2.5 relative flex flex-col gap-6'>
          <div class='flex flex-col justify-center items-center gap-3'>
            <img src={image} alt="my-photo" class='rounded-full max-w-52' />
            <h1 class='text-2xl font-medium uppercase'>{data.profileName.name}</h1>
            <h2 class='text-lg uppercase font-light'>{data.profileName.job}</h2>
          </div>
          <div className='h-px bg-gray-300 w-3xs mx-auto'></div>
          <div>
            <h3 class='text-lg uppercase font-medium mb-4'>{data.contactInfo.title}</h3>
            <ul className='flex flex-col gap-2'>
              {data.contactInfo.list.map((el) => (
                <li key={el.text}>
                  <a
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
            <h3 class='text-lg uppercase font-medium mb-4'>{data.education.title}</h3>
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
            <h3 class='text-lg uppercase font-medium mb-4'>{data.languages.title}</h3>
            <div>
            {data.languages.list.map((el) => (
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
        </div>
        <div className='p-2.5 relative flex flex-col gap-6'>
            <div>
              <h3 class='text-2xl uppercase font-medium mb-4'>{data.aboutMe.title}</h3>
              <span>{data.aboutMe.text}</span>
            </div>
            <div>
              <h3 class='text-2xl uppercase font-medium mb-4'>{data.workExamples.title}</h3>
              <div className='relative'>
                {data.workExamples.list.map((el) => (
                    <a href={el.url}>
                      <div className='grid grid-cols-[1fr_2fr] gap-6 mb-4'>
                        <div>
                          <img className='h-32 w-48 object-cover' src={el.image} alt={el.name} />
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
              <h3 class='text-2xl uppercase font-medium mb-4'>{data.skills.title}</h3>
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
              <h3 class='text-2xl uppercase font-medium mb-4'>{data.interest.title}</h3>
              <ul className='flex justify-between'>
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