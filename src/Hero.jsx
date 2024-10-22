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
