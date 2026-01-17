import { BackgroundBeams } from "./ui/background-beams";
import { GradientMesh } from "./ui/gradient-mesh";
import { DecorativeElements } from "./ui/decorative-elements";
import { Link } from "react-router-dom";

export const BannerSection = () => {
    return (
        <section className="min-h-[50vh] sm:min-h-[35rem] md:h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased overflow-hidden py-10 sm:py-12 md:py-16 lg:py-0">
            <GradientMesh className="opacity-30" />
            <DecorativeElements />
            <div className="max-w-4xl mx-auto p-4 sm:p-6 relative z-10">
                <h1 className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-blue-200 to-purple-200 text-center font-sans font-bold px-2 sm:px-0 leading-tight">
                    Ready to Transform Your <br className="sm:hidden" /><span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Digital Presence</span>?
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-4 sm:my-5 md:my-6 text-xs sm:text-sm md:text-base text-center relative z-10 px-4 sm:px-0 leading-relaxed">
                    Join 300+ global brands and start your journey towards excellence with Inowix.
                    Our specialists are ready to turn your vision into reality.
                </p>
                <div className="flex justify-center mt-5 sm:mt-6 md:mt-8 lg:mt-10">
                    <Link to="/contact-us" className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-blue-600 text-white rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:bg-blue-700 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        Start a Project
                    </Link>
                </div>
            </div>
            <BackgroundBeams />
        </section>
    );
};
