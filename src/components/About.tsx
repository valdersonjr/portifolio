import { IAbout } from "@/model/DataView";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
    aboutMe?:IAbout;
}

enum Section {
    ABOUT = 0,
    FACTS = 1
}

export default function About({ aboutMe }: Props) {
    const [selectedSection, setSelectedSection] = useState(Section.ABOUT);

    return(
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center" 
            >
            <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Sobre</h3>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src={aboutMe?.picture} 
                alt="Imagem de Valderson" 
                className="-mb-28 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]" />
                
                <div className="flex absolute top-32 space-x-2">
                    <button onClick={() => setSelectedSection(Section.ABOUT)} className={`px-2 md:px-6 py-2 border ${selectedSection === Section.ABOUT ? "border-[#F7AB0A]/70 text-[#F7AB0A]/70" : "border-[#242424]"} rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40`}>Sobre Mim</button>
                    <button onClick={() => setSelectedSection(Section.FACTS)} className={`px-2 md:px-6 py-2 border ${selectedSection === Section.FACTS ? "border-[#F7AB0A]/70 text-[#F7AB0A]/70" : "border-[#242424]"} rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40`}>Curiosidades</button>
                </div>
                
                <div className="space-y-4 px-0 md:px-10 -mt-32 md:-mt-0">
                    {selectedSection === Section.ABOUT && (<><h4 className="text-2xl md:text-4xl font-semibold"> Um pouco sobre mim... </h4> <p> {aboutMe?.aboutMeText} </p></>)}
                    {selectedSection === Section.FACTS && (<><h4 className="text-2xl md:text-4xl font-semibold">Curiosidades</h4><ul className="space-y-2 list-decimal pl-4">{aboutMe?.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul></>)}
                </div>
                
        </motion.div>
    )
}


                    {/* 
                        
                    </h4>
                    
                        
                    </ul> */}