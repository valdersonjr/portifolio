import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { IHeader } from "@/model/DataView";


type Props = {
  header?: IHeader;
};

export default function Header({header}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center">
      <motion.div 
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {header && header.socials.length > 0 && header.socials.map((social) => (
            <SocialIcon 
              target="_blank"
              url={social}
              fgColor="gray"
              bgColor="transparent" 
            />
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 1000, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link href="#hero" className="flex space-x-2 pr-4">
          <HomeModernIcon className="w-5 h-5 text-gray-400"/>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Início</p>
        </Link>

        <SocialIcon 
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          <Link href="#contact">Entrar em Contato</Link>
        </p>
      </motion.div>
    </header>
  );
}