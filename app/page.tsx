import { About } from '@/sections/about';
import { Contact } from '@/sections/contact';
import Home from '@/sections/home'
import { Mail } from '@/sections/mail';
import { Projects } from '@/sections/projects';
import { Skills } from '@/sections/skills';
export default function App() {
  return (
    <main className="overflow-hidden dark:bg-dark-bg bg-radial-gradient mx-3 px-3 min-w-[340px]  transition-all max-w-[1440px">
      <section id='home' className='  h-[120vh] mx-auto'>
       <Home/>
      </section>
      <section id='projects' className='dark:bg-dark-bg bg-radial-gradient max-sm:h-[100vh] h-[80vh] '>
        <Projects/>
      </section>
      {/* <section id='skills' className='bg-radial-gradient h-[100vh]'>
        <Skills/>
      </section> */}
      <section id='about' className='bg-radial-gradient dark:bg-dark-bg max-sm:mt-10 h-[100vh] max-sm:h-[130vh]'>
        <About/>
      </section>
      <section id='mail' className='bg-radial-gradient min-h-[80vh] h-[100vh]'>
        <Mail/>
      </section>
      <section id='contact' className='bg-radial-gradient max-md:h-[80vh] lg:h-[40vh] max-xl:h-[60vh] max-sm:h-[140vh] dark:bg-dark-bg overflow-hidden '>
        <Contact/>
      </section>

    </main>
  );
}
