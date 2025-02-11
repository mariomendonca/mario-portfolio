import { Instagram, Github, Linkedin, Settings } from 'lucide-react'

export function Home() {
  function handleNavigateToSection(section: string) {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <div className='flex w-screen h-screen bg-gray-100 flex-row'>
      <div className='w-1/2 flex flex-col justify-between my-20'>
        <div>
          <h1 className='text-5xl font-semibold text-orange-600'>Mario Mendonça</h1>
          <h3 className='text-3xl text-blue-950 font-medium'>Software Engineer</h3>
          <p className='text-xl text-blue-950 font-normal'>I build robust and scalable web <br />and mobile applications</p>
        </div>

        <nav className='h-1/2'>
          <ul className='flex flex-col gap-3'>
            <li onClick={() => handleNavigateToSection('about')} className='text-lg font-semibold text-blue-950 hover:text-orange-600 hover:translate-x-2 transition duration-300 cursor-pointer'>About me</li>
            <li onClick={() => handleNavigateToSection('experience')} className='text-lg font-semibold text-blue-950 hover:text-orange-600 hover:translate-x-2 transition duration-300 cursor-pointer'>Experience</li>
            <li onClick={() => handleNavigateToSection('projects')} className='text-lg font-semibold text-blue-950 hover:text-orange-600 hover:translate-x-2 transition duration-300 cursor-pointer'>Projects</li>
            <li onClick={() => handleNavigateToSection('education')} className='text-lg font-semibold text-blue-950 hover:text-orange-600 hover:translate-x-2 transition duration-300 cursor-pointer'>Education</li>
          </ul>
        </nav>

        <footer className='flex gap-4'>
          <Settings size={'40px'} className='cursor-pointer text-blue-950 hover:text-orange-600 transition duration-300' />
          <a href='https://www.linkedin.com/in/mariommendonca' target='_blank'><Linkedin size={'40px'} className='text-blue-950 hover:text-orange-600 transition duration-300' /></a>
          <a href='https://github.com/mariomendonca' target='_blank'><Github size={'40px'} className='text-blue-950 hover:text-orange-600 transition duration-300' /></a>
          <a href='https://www.instagram.com/mariomeendonca/' target='_blank'><Instagram size={'40px'} className='text-blue-950 hover:text-orange-600 transition duration-300' /></a>
        </footer>
      </div>


      <div className="w-1/2 h-screen flex flex-col overflow-y-auto scroll-smooth" id="scrollContainer">
        <section id="about" className="min-h-[500px] bg-gray-100 flex items-center justify-center">About Me Section</section>
        <section id="experience" className="min-h-[500px] bg-gray-200 flex items-center justify-center">Experience Section</section>
        <section id="projects" className="min-h-[500px] bg-gray-300 flex items-center justify-center">Projects Section</section>
        <section id="education" className="min-h-[500px] bg-gray-400 flex items-center justify-center">Education Section</section>
      </div>
    </div>
  )
}