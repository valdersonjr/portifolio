import { motion } from "framer-motion";

type Props = {

};

export default function About(props: Props) {
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center" 
            >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src="../../assets/valdersonImagem.jpeg" 
                alt="image of valderson" 
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]" />

                <div className="space-y-10 px-0 md:px-10">
                    <h4 className="text-4xl font-semibold">
                        Here is a little background
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis sem, molestie sit amet tellus gravida, iaculis finibus justo. Duis vel iaculis leo. Fusce auctor felis in orci tincidunt facilisis. Ut venenatis, mi tristique mollis volutpat, sapien enim varius urna, et tincidunt sapien nunc in dui. Sed laoreet ullamcorper facilisis. Sed rutrum condimentum justo, nec lacinia ipsum varius in. Mauris tincidunt tempor tincidunt. Aenean dignissim aliquet congue.
                    </p>
                </div>
        </motion.div>
    )
}