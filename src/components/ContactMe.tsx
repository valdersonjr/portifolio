import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {

};

export default function ContactMe(props: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:valdersonpontes@gmail.com?subject=${formData.subject}&body=Hi, ${formData.name} sent you a message: ${formData.message} (${formData.email})})`
    };

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contato</h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    Ficou interessado?. {" "}
                    <span className="decoration-[F7AB0A]/50 underline">Vamos conversar!</span>
                </h4>

                <div className="flex flex-col space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0a] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+55 62 984675176</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0a] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">valdersonpontes@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0a] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">Brasília, DF</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input {...register('name')} placeholder="Nome" className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7Ab0A]/40 focus:text-[#F7Ab0A]/40" type="text" />
                        <input {...register('email')} placeholder="Email" className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7Ab0A]/40 focus:text-[#F7Ab0A]/40" type="email" />
                    </div>
                    <input {...register('subject')} placeholder="Assunto" className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7Ab0A]/40 focus:text-[#F7Ab0A]/40" type="text" />
                    <textarea {...register('message')} placeholder="Mensagem" className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7Ab0A]/40 focus:text-[#F7Ab0A]/40"></textarea>
                    <button type="submit" className="bg-[#F7Ab0A] py-5 px-10 rounded-md text-black font-bold text-lg">Enviar</button>
                </form>
            </div>
        </div>
    )
}