'use client'
import Link from 'next/link'
const sections = [
  {heading:'About',secs:[{name:"About me",url:'#about'},{name:"Portfolio",url:'#'},{name:"Resume",url:'https://drive.google.com/file/d/1PzVyWC7uRA6i-maeiIfmSFuYxlg3N7PJ/view?usp=drive_link'}]},
  {heading:'Contact',secs:[{name:"Email",url:'https://mail.google.com/mail/?view=cm&fs=1&to=talhariaz5425869@gmail.com&su=Hire&body=Hi+I+want+to+hire+you'},{name:"Linkedin",url:'https://www.linkedin.com/in/talha-riaz-46987628a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},{name:"Github",url:'https://github.com/talhary'}]},
  // {heading:'Legal',secs:[{name:"Privacy Policy",url:''},{name:"Terms & services",url:'/'}]},
  // {heading:'Follow',secs:[{name:"Twitter",url:''},{name:"Instagram",url:''},{name:"Facebook",url:''}]},
]
export const Contact = () => {
  return (
    <div className=''>
      <div className=' text-black gap-y-10 dark:text-white flex flex-wrap max-sm:px-3 sm:px-4 md:px-2  lg: px-20 items-start h-20 py-20  max-h-20 justify-between'>
       {sections.map((section,i)=>{
        return <div key={i+1}>
           <h2 className='text-4xl cursor-default font-semibold dark:text-white'>{section.heading}</h2>
          <div className='flex flex-col gap-y-3 mt-5'>
          {section.secs.map((sec,i)=>{
            return <div key={i+1} className='min-w-[200px] dark:text-white'>
               <h3>
                <Link href={sec.url} className='text-xl hover:scale-[1.-'> {sec.name}</Link>
               </h3>

            </div>
           })}
          </div>
        </div>
       })}
      </div>
    
    </div>
  )
}

