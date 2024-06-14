'use server'
import emailjs from '@emailjs/browser'
import 'dotenv/config'
import { z } from 'zod'
import { formSchema } from '@/utils/schemas'
export default async (values:z.infer<typeof formSchema>)=>{
    try {
        console.log(values)
        if(!process.env.SERVICE_ID || ! process.env.TEMPLATE_ID || !process.env.PUBLIC_KEY) 
        return {ok:false,msg:'',error:'Please Provide Credentials'}
        const res  = await emailjs.send(process.env.SERVICE_ID ,process.env.TEMPLATE_ID ,values,{
            publicKey:process.env.PUBLIC_KEY
        })
        console.log(res)
        return {ok:true , msg:'Email sended ',error:''}
    } catch (error) {
        console.log(error)
    }
}