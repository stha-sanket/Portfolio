import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import CV from "../../assets/SudeepFullel_cv.pdf";
import Don from "../../assets/123.jpg";
import Title from "../layouts/title";

const HeroAbout = () => {
    const [text] = useTypewriter({
        words: ["Data Science Enthusiast.", 
            "CS Bachelor Student.", 
            "Graphics designer.", 
            "Datacamp Moderator.", 
            "Friendly Guy."],
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 30,
        delaySpeed: 1000,
    });

        const info = [
        { text: "Degree", count: "Computer Science with AI" },
        { text: "Completed Projects", count: "4+" },
        { text: "College", count: "Sunway College" },
    ];

        return (
        <>
            {/* Hero Section */}
            <section id="home" className="container mx-auto min-h-screen flex lg:flex-row sm:py-20 py-10 flex-col sm:px-11 px-8 items-center text-black">
                <div className="flex-1">
                    <div className="py-5 md:text-6xl text-3xl text-center text-white">
                        <h1>Hello, I am <br/><span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent font-bold">Sanket Shrestha</span></h1>
                    </div>
                    <div className="py-5 sm:text-3xl text-xl text-center" style={{ color: "#b7245C" }}>
                        <strong>A {text}</strong>
                    </div>
                    <a href="/contact">
                        <div className="flex py-4 sm:text-3xl text-2xl text-[gradient-to-r from-green-400 to-blue-600] justify-center">
                            <button className="btn-primary hover:scale-95 sm:mt-5">Let's Connect</button>
                        </div>
                    </a>
                </div>
            </section>
            <section id="about" className="container mx-auto min-h-screen sm:py-10 py-0">
                <div className="text-center sm:mt-8 mt-16">
                    <Title title="About Me"/>
                    <div className="flex flex-col-reverse lg:flex-row items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                        <div className="md:mt-0 mt-8">
                            <div className="flex flex-col px-4 md:px-16 sm:my-4 text-center md:text-left text-white">

                                <p className="sm:text-xl text-sm">
                                    <strong>
                                    My introduction:<br/></strong><br/>
                                    Hi I am Sanket Kumar Shrestha, a CS student currently studying <strong> Bsc.(Hons) in Computer Science and Artificial Intelligence at Sunway college Kathmandu.</strong>. I love taking part in hackathons to solve real-world problems and constantly seeking opportunities to expand knowledge and skills in AI. Committed to making a positive impact by volunteering in events related to technology and data science, fostering collaboration and innovation within the community.
                                </p>
                                <div className="flex mt-10 md:justify-start justify-center gap-7">
                                    {info.map((col) => (
                                        <div key={col.text}>
                                            <h3 className="md:text-xl text-1xl font-semibold">{col.count}</h3>
                                            <span>{col.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <br />
                                <br />
                                <a href={CV} download>
                                    <button className="btn-primary hover:scale-95 sm:mt-5">Download CV</button>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center lg:pb-32 pb-0 justify-items-center">
                            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
                                <img src={Don} alt="don" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroAbout;
