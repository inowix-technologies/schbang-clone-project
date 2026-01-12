import { BackgroundBeams } from "./ui/background-beams";

export const BannerSection = () => {
    return (
        <section className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-4xl mx-auto p-4 relative z-10">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Ready to Transform Your Digital Presence?
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Join 300+ global brands and start your journey towards excellence with Inowix.
                    Our specialists are ready to turn your vision into reality.
                </p>
                <div className="flex justify-center mt-10">
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        Start a Project
                    </button>
                </div>
            </div>
            <BackgroundBeams />
        </section>
    );
};
