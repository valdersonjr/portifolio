import { motion } from 'framer-motion';
import { ExperienceCard } from '.';

type Props = { }

export default function WorkExperience(props: Props) {
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
            >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:top-10">
                Experience
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                <ExperienceCard post='Desenvolvedor' company='Bento Tecnologia' stack={['']} startDate='' endDate='' />
            </div>
        </motion.div>
    )
}