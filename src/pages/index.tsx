import Image from "next/image";
import { Asap } from "next/font/google";
import book from "@/../public/assets/enviesados.png";
import background from "@/../public/assets/background.png";
import backgroundCell from "@/../public/assets/background_cell.png";
import { PiCertificateFill } from "react-icons/pi";
import perfil from "../../public/assets/perfil.jpg";
import { MdBusinessCenter } from "react-icons/md";

const bold = Asap({ weight: "800", subsets: ["latin"] });
const regular = Asap({ weight: "400", subsets: ["latin"] });

export default function Home() {
    return (
        <main
            className={`line-center items-start bg-mainLight-500 flex-wrap relative h-screen w-screen`}
        >
            <div className="w-full h-full hidden lg:block absolute">
                <img className="w-full h-full" src={background.src} />
            </div>
            <div className="w-full h-full lg:hidden block absolute">
                <img className="w-full h-full" src={backgroundCell.src} />
            </div>

            <div className="line-right hidden  xl:flex items-start  w-full">
                <a
                    href="https://www.amazon.com.br/ENVIESADOS-Psicologia-Cognitivos-produtos-servi%C3%A7os-ebook/dp/B0BMJPS4K3?asin=B0BMJPS4K3&revisionId=eff74988&format=2&depth=1"
                    target="_blank"
                    className="absolute drop-shadow-lg z-50 w-[500px] h-[500px]"
                >
                    <img src={book.src} alt="livro" />
                </a>
            </div>
            <div className="p-8 lg:p-0 w-full h-full line-center absolute">
                <div
                    className={`w-full h-full overflow-auto lg:w-3/4 lg:h-3/4 line-between flex-col items-start gap-4 relative bg-mainLight-100 shadow-2xl shadow-black rounded p-8`}
                >
                    <div className="w-full lg:w-3/4 text-4xl st:text-6xl text-center sm:text-left text-mainDark-500">
                        <h1 className={regular.className}>
                            Entenda os{" "}
                            <strong className={bold.className}>
                                segredos da mente
                            </strong>{" "}
                            para melhorar o seu{" "}
                            <strong className={bold.className}>design</strong>.
                        </h1>
                    </div>
                    <div className="line-center sm:line-left flex-wrap w-full gap-0 sm:gap-4">
                        <div>
                            <div
                                className={`line-center w-40 border-4 border-mainDark-500 h-40 rounded-full overflow-hidden`}
                            >
                                <img src={perfil.src} />
                            </div>
                        </div>
                        <div className="text-lg h-full line-left gap-4 pt-2 flex-col items-center sm:items-start text-mainDark-500">
                            <div
                                className={`text-4xl border-b-4 with-transition border-transparent hover:border-mainDark-500`}
                            >
                                <a
                                    href="https://www.instagram.com/designfromhuman/"
                                    target="_blank"
                                    className={bold.className}
                                >
                                    Rian Dutra
                                </a>
                            </div>
                            <div className={regular.className}>
                                <div className="line-center flex-wrap text-center sm:text-left w-full sm:w-auto sm:line-left gap-2">
                                    <PiCertificateFill
                                        className="text-mainLight-500"
                                        size={30}
                                    />
                                    <p className={"text-2xl"}>
                                        Designer de experiência humana
                                    </p>
                                </div>
                                <div className="line-center flex-wrap text-center sm:text-left w-full sm:w-auto sm:line-left gap-2">
                                    <MdBusinessCenter
                                        className="text-mainLight-500"
                                        size={30}
                                    />
                                    <p className="text-2xl">
                                        Fundador da{" "}
                                        <a
                                            href="https://www.linkedin.com/company/designfromhuman/jobs/"
                                            className="text-2xl with-transition border-b-2 border-transparent hover:border-mainDark-500"
                                        >
                                            <strong className={bold.className}>
                                                Design From Human
                                            </strong>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-center w-full gap-2 sm:gap-8 flex-wrap">
                        <a
                            target="_blank"
                            href="https://www.amazon.com.br/ENVIESADOS-Psicologia-Cognitivos-produtos-servi%C3%A7os-ebook/dp/B0BMJPS4K3?"
                            className={`w-64 h-14 relative button bg-mainLight-500 with-transition line-center`}
                        >
                            <div className={"text-xl text-mainDark-500"}>
                                <p className={regular.className}>
                                    Comprar na Amazon
                                </p>
                            </div>
                        </a>
                        <a
                            href="https://www.amazon.com.br/ENVIESADOS-Psicologia-Cognitivos-produtos-servi%C3%A7os-ebook/dp/B0BMJPS4K3?asin=B0BMJPS4K3&revisionId=eff74988&format=2&depth=1"
                            target="_blank"
                            className={`w-64 h-14 relative button bg-mainLight-500 rounded with-transition line-center`}
                        >
                            <div className={"text-xl text-mainDark-500"}>
                                <p className={regular.className}>
                                    Leia o 1º capitulo{" "}
                                    <strong className={bold.className}>
                                        • Grátis
                                    </strong>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
