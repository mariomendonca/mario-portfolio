import { Instagram, Github, Linkedin, Settings } from 'lucide-react'

export function Home() {
  return (
    <div className='flex w-screen h-screen bg-gray-100 flex-row'>
      <div className='w-1/2 flex flex-col justify-between my-20'>
        <div>
          {/* <h1 className='text-5xl font-semibold text-blue-950'>Mario Mendonça</h1> */}
          <h1 className='text-5xl font-semibold text-orange-600'>Mario Mendonça</h1>
          <h3 className='text-3xl text-blue-950 font-medium'>Software Engineer</h3>
          <p className='text-xl text-blue-950 font-normal'>I build robust and scalable web <br />and mobile applications</p>
        </div>

        <nav className='h-1/2'>
          <ul className='flex flex-col gap-3'>
            <li className='text-lg font-semibold text-blue-950 hover:text-orange-600 hover:translate-x-2 transition duration-300'>About me</li>
            <li className='text-lg font-semibold text-blue-950 hover:text-orange-600 hover:translate-x-2 transition duration-300'>Experience</li>
            <li className='text-lg font-semibold text-blue-950 hover:text-orange-600 hover:translate-x-2 transition duration-300'>Projects</li>
            <li className='text-lg font-semibold text-blue-950 hover:text-orange-600 hover:translate-x-2 transition duration-300'>Education</li>
          </ul>
        </nav>

        <footer className='flex gap-4'>
          <Settings size={'40px'} className='text-blue-950 hover:text-orange-600 transition duration-300' />
          <a href='https://www.linkedin.com/in/mariommendonca' target='_blank'><Linkedin size={'40px'} className='text-blue-950 hover:text-orange-600 transition duration-300' /></a>
          <a href='https://github.com/mariomendonca' target='_blank'><Github size={'40px'} className='text-blue-950 hover:text-orange-600 transition duration-300' /></a>
          <a href='https://www.instagram.com/mariomeendonca/' target='_blank'><Instagram size={'40px'} className='text-blue-950 hover:text-orange-600 transition duration-300' /></a>
        </footer>
      </div>
      <p>hello world</p>
    </div>
  )
}