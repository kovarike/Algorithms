"use client";

import React, { useState, useEffect } from "react";
import { Download } from "./download";

interface PropsTranslate {
    id: string;
}

export function Translate({ id }: PropsTranslate) {
    const [language, setLanguage] = useState<string>("en");

    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        setLanguage(userLang.startsWith("pt") ? "pt" : "en");
    }, []);

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        // Aqui você pode armazenar a escolha do idioma, se necessário
        // Por exemplo, usar localStorage ou redirecionar para uma URL com um parâmetro de idioma
    };

    return (
        <div className="max-w-20 w-20">
            <div className="flex items-center mx-auto my-0">
                <button
                    onClick={() => handleLanguageChange("pt")}
                    className={`w-7 h-7 px-1 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 ${language === "pt" ? "bg-algorithms-color/45" : ""} rounded-l-md text-center`}
                >
                    pt
                </button>
                <button
                    onClick={() => handleLanguageChange("en")}
                    className={`w-7 h-7 px-1 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 ${language === "en" ? "bg-algorithms-color/45" : ""} text-center`}
                >
                    en
                </button>
                <Download id={id} />
            </div>
        </div>
    );
}


import { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    language: string;
}

const content = {
    en: {
        aboutMe: "Hello! My name is Danilo and I am a Computer Engineering student, with a strong focus on software development and a passion for technology...",
        skills: "I have developed solid skills in programming with C and in web development using JavaScript, Node.js and TypeScript...",
        myDifference: "What sets me apart is my passion for solving complex problems and my dedication to delivering high-quality solutions...",
        objective: "My main objective is the development of innovative and efficient applications...",
        letsTalk: "If you're interested in discussing a potential collaboration or want to know more about my work, I'm happy to chat..."
    },
    pt: {
        aboutMe: "Olá! Meu nome é Danilo e sou estudante de Engenharia da Computação, com forte foco em desenvolvimento de software e paixão por tecnologia...",
        skills: "Desenvolvi habilidades sólidas em programação com C e no desenvolvimento web usando JavaScript, Node.js e TypeScript...",
        myDifference: "O que me diferencia é minha paixão por resolver problemas complexos e minha dedicação a entregar soluções de alta qualidade...",
        objective: "Meu principal objetivo é o desenvolvimento de aplicações inovadoras e eficientes...",
        letsTalk: "Se você estiver interessado em discutir uma colaboração potencial ou quiser saber mais sobre meu trabalho, estou feliz em conversar..."
    }
};

export function Text({ language, ...props }: TextProps) {
    const { aboutMe, skills, myDifference, objective, letsTalk } = content[language] || content.en;

    return (
        <div className="text-slate-800 font-algorithms-font font-medium text-lg break-words" {...props}>
            <h3 className="my-1 text-xl font-semibold font-algorithms-font">About Me</h3>
            <p>{aboutMe}</p>

            <h3 className="my-1 text-xl font-semibold font-algorithms-font">Skills</h3>
            <p>{skills}</p>

            <h3 className="my-1 text-xl font-semibold font-algorithms-font">My Difference</h3>
            <p>{myDifference}</p>

            <h3 className="my-1 text-xl font-semibold font-algorithms-font">Objective</h3>
            <p>{objective}</p>

            <h3 className="my-1 text-xl font-semibold font-algorithms-font">Let's talk</h3>
            <p>{letsTalk}</p>
        </div>
    );
}


// pages/index.js

import React, { useState, useEffect } from "react";
import { Translate } from "../components/Translate";
import { Text } from "../components/Text";

export default function HomePage() {
    const [language, setLanguage] = useState<string>("en");

    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        setLanguage(userLang.startsWith("pt") ? "pt" : "en");
    }, []);

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        // Aqui você pode armazenar a escolha do idioma, se necessário
    };

    return (
        <div>
            <Translate id="unique-id" onLanguageChange={handleLanguageChange} />
            <Text language={language} />
        </div>
    );
}
