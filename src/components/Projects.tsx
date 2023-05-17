import { IProjects } from "@/model/DataView";
import { motion } from "framer-motion";

type Props = {
   projects?: IProjects[];
};

export default function Projects({ projects }: Props) {
    return(
        <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> Projetos </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80z">
                {projects && projects.map((project, i) => (
                    <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            className="w-80 h-80"
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity:1, y:0 }}
                            viewport={{ once: true }}
                            src={project.logo} alt={`Imagem do projeto ${project.name}`} />

                        <div className="space-y-3 px-0 md:px-10 max-w-6xl text-center">
                            <h4 className="text-4xl font-semibold text-center uppercase">{project.name}</h4>
                            {project.descriptions.map((description, i) => <p key={i} className="max-w-lg">{description}</p>)}
                            <p className="max-w-lg">Gostaria de saber mais? <a href={project.link} target="_blank" className="underline hover:cursor-pointer text-[#F7AB0A]/50 hover:text-[#F7AB0A]">Clique aqui</a></p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    )
}