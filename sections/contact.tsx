import Link from 'next/link'
const sections = [
  {heading:'About',secs:[{name:"About me",url:'#about'},{name:"Portfoli",url:'#'},{name:"Resume",url:''}]},
  {heading:'Contact',secs:[{name:"Email",url:''},{name:"Linkedin",url:''},{name:"Github",url:''}]},
  {heading:'Legal',secs:[{name:"Privacy Policy",url:''},{name:"Terms & services",url:'/'}]},
  {heading:'Follow',secs:[{name:"Twitter",url:''},{name:"Instagram",url:''},{name:"Facebook",url:''}]},
]
export const Contact = () => {
  return (
    <div className=''>
      <div className=' flex flex-wrap px-20 items-start h-20 py-20  max-h-20 justify-between'>
       {sections.map((section,i)=>{
        return <div key={i+1}>
           <h2 className='text-4xl font-semibold text-white'>{section.heading}</h2>
          <div className='flex flex-col gap-y-3 mt-5'>
          {section.secs.map((sec,i)=>{
            return <div key={i+1} className='min-w-[200px] text-white'>
               <h3>
                <Link href={sec.url} className='text-xl '> {sec.name}</Link>
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
