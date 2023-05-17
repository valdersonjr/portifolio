import { motion } from 'framer-motion';
import { ExperienceCard } from '.';
import React from 'react';
import { IExperienceCard } from '@/model/DataView';

type Props = {
    experiences: IExperienceCard[];
}

export default function WorkExperience({ experiences }: Props) {
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
            >
           <h3 className="absolute uppercase tracking-[20px] top-4 text-2xl xl:top-10 text-transparent md:text-gray-500"> Experiência </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {experiences && experiences.map((experience, i) => (
                    <React.Fragment key={i}>
                        <ExperienceCard
                            post={experience.post} 
                            company={experience.company} 
                            stackIconsLink={experience.stackIconsLink} 
                            startDate={experience.startDate} 
                            endDate={experience.endDate} 
                            summary={experience.summary} 
                            linkProjeto={experience.linkProjeto} 
                            companyLogo={experience.companyLogo} /> 
                    </React.Fragment>
                ))}
            </div>
        </motion.div>
    )
}