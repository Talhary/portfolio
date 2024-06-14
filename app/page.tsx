import { About } from '@/sections/about';
import { Contact } from '@/sections/contact';
import Home from '@/sections/home'
import { Mail } from '@/sections/mail';
import { Projects } from '@/sections/projects';
import { Skills } from '@/sections/skills';
export default function App() {
  return (
    <main className="dark:bg-dark-bg bg-radial-gradient  transition-all max-w-[1440px] mx-auto">
      <section id='home' className='  h-screen mx-auto'>
       <Home/>
      </section>
      <section id='projects' className='dark:bg-dark-bg bg-radial-gradient h-[50vh] '>
        <Projects/>
      </section>
      {/* <section id='skills' className='bg-radial-gradient h-[100vh]'>
        <Skills/>
      </section> */}
      <section id='about' className='bg-radial-gradient h-[90vh]'>
        <About/>
      </section>
      <section id='mail' className='bg-radial-gradient min-h-[80vh] h-[100vh]'>
        <Mail/>
      </section>
      <section id='contact' className='bg-radial-gradient h-[40vh] dark:bg-dark-bg'>
        <Contact/>
      </section>

    </main>
  );
}
