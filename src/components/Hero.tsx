import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { IHero } from "@/model/DataView";

type Props = {
    hero?: IHero;
}

export default function Hero({ hero }: Props) {
    const [text, count] = useTypewriter({
        words: hero && hero.descriptions ? hero?.descriptions : [''],
        loop: true,
        delaySpeed: 2000
    })

    return(
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img 
                className="relative rounded-full h-32 w-32 mx-auto"
                src={hero?.picture} 
                alt="Image of Valderson" 
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
                    Engenheiro de Software
                </h2>
                <h1 className="text-5xl  lg:text-6xl font-semibold px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5 ">
                    <Link href="#about">
                        <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Sobre</button>
                    </Link>
                    <Link href="#experience">
                        <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Experiência</button>
                    </Link>
                    <Link href="#skills">
                        <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Habilidades</button>
                    </Link>
                    <Link href="#projects">
                        <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Projetos</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}