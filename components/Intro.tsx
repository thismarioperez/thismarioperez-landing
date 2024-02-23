export default function Intro() {
    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            <div className="relative w-full h-full">
                <div className="relative w-full h-full flex items-center justify-center flex-col">
                    <div className="relative flex flex-col items-center max-w-[400px]">
                        {/* bg */}
                        <div className="absolute top-0 left-0 w-full h-full rounded-sm bg-black opacity-50"></div>
                        <div className="relative p-4 text-shadow shadow-black text-left">
                            <p>Hi!</p>
                            <p>
                                I'm Mario, a software developer based out of
                                Chatanooga, TN.
                            </p>
                            <p>Pardon my dust while I build out my new site.</p>
                            <p>Until then, here's how you can reach me:</p>
                        </div>
                        <div className="relative p-4">
                            <ul className="flex row gap-3 justify-center items-center w-full flex-wrap">
                                <li>
                                    <a
                                        className="pointer-events-auto bg-yellow py-1 px-2 text-black font-bold shadow-none rounded-sm"
                                        href="https://github.com/thismarioperez"
                                    >
                                        github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="pointer-events-auto bg-yellow py-1 px-2 text-black font-bold shadow-none rounded-sm"
                                        href="https://www.linkedin.com/in/thismarioperez/"
                                    >
                                        linkedin
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="pointer-events-auto bg-yellow py-1 px-2 text-black font-bold shadow-none rounded-sm"
                                        href="https://instagram.com/thismarioperez"
                                    >
                                        instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="pointer-events-auto bg-yellow py-1 px-2 text-black font-bold shadow-none rounded-sm"
                                        href="tel:18637974829"
                                    >
                                        (863)797-4829
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="pointer-events-auto bg-yellow py-1 px-2 text-black font-bold shadow-none rounded-sm"
                                        href="mailto:hello@thismarioperez.com"
                                    >
                                        hello@thismarioperez.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
