import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {

    useGSAP(() => {
        document.fonts.ready.then(() => {
            const firstTextSplit = SplitText.create(".first-text-split h1", {
                type: "chars"
            });
            const secTextSplit = SplitText.create(".second-text-split h1", {
                type: "chars"
            });

            gsap.from(firstTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 33%",
                    // markers: true
                }
            });

            gsap.to(".flavor-text-scroll", {
                duration: 1,
                clipPath: "polygon(0% 0%,100% 0%,100% 100%, 0% 100%)",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 17%",
                    // markers: true
                }
            });

            gsap.from(secTextSplit.chars, {
                yPercent: 200,
                stagger: 0.02,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 3%",
                    // markers: true
                }
            });
        });

    });

    return (
        <div className="general-title col-center h-full text-nowrap 2xl:gap-3 xl:gap-2.5 gap-2" style={{ fontSize: "clamp(3.5rem, 7.5vw, 11.5rem)" }}>
            <div className="overflow-hidden py-0.5 first-text-split text-nowrap">
                <h1 className="text-nowrap whitespace-nowrap">We give</h1>
            </div>

            <div className="flavor-text-scroll text-nowrap">
                <div className="bg-mid-brown pb-1.5 pt-1 px-4 text-nowrap flex flex-col items-center">
                    <h2 className="text-INDIA text-nowrap whitespace-nowrap">Preloved</h2>
                    <h2 className="text-INDIA text-nowrap whitespace-nowrap">Items</h2>
                </div>
            </div>

            <div className="overflow-hidden py-0.5 second-text-split text-nowrap flex flex-col items-center">
                <h1 className="text-nowrap whitespace-nowrap">A New</h1>
                <h1 className="text-nowrap whitespace-nowrap">Home</h1>
            </div>
        </div>
    );
};

export default FlavorTitle;