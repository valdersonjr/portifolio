import { motion } from 'framer-motion';
import { IExperienceCard } from '@/model/DataView';

export default function ExperienceCard(props: IExperienceCard) {
    return(
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity durantion-200 overflow-hidden'>
            <motion.img 
                initial={{ y:-100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
                src='../../assets/bentoLogo.png' 
                alt='Bento Tecnologia logo' />
            
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{props.post}</h4>
                <p className='font-bold text-2xl mt-1'>{props.company}</p>
                <div className='flex space-x-2 my-2'>
                    {props.stackIconsLink.map((link:string) => (
                        <img 
                            className='w-10 h-10' 
                            src={link} 
                            alt='React Icon' />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>{props.startDate} - {props.endDate ? props.endDate : "Emprego Atual"}</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {props.summary.map((summarySection) => (<li>{summarySection}</li>))}
                    {props.linkProjeto && (<li><a target='_blank' className='hover:text-[#F7AB0A]/40 decoration-[F7AB0A]/50 underline'>{props.linkProjeto}</a></li>)}
                </ul>
            </div>
        </article>
    )
}