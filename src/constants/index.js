import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    ass,
    drdo
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
   
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
   
   
];

export const experiences = [
    {
        title: "Research intern",
        company_name: "DRDO",
        icon: drdo,
        iconBg: "#accbe1",
        date: "May 2024 - June 2024",
        points: [
            "Research on ARINC664 (Aircraft data network protocol)",
            "fly-by-wire",
            "communication between various on-board components"
            
        ],
    },
    {
        title: "Assistant Professor",
        company_name: "Tesla",
        icon: ass,
        iconBg: "#fbc3bc",
        date: "Jan 2024 - Present",
        points: [
            "Drafting and reviewing research papers.", 
            "Research paper on Disruptive Technologies",
            "Research paper IOT in automatic cars"
            
        ],
    },
   
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/raps-05',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/divya-tadinada-6411b1294/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'News across the world website',
        description: 'Developed a web application that allows users to search for news articles across the world.',
        link: 'https://github.com/raps-05/News-app-API-and-React-',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Product Management Platform',
        description: 'Created a backend application using Java and JDBC, allowing users to manage their products and orders based on the max rating and best sellers.',
        link: 'https://github.com/raps-05/Product-Management-app',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'ldr-sensor in wakwi',
        description:'IOT project in wokwi using RaspberryPi,implemeting basic ldr sensor along with led.',
        link: 'https://github.com/raps-05/ldr-sensor-in-wakwi',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Diceroll project in wakwi',
        description: 'Project in wakwi using RasberryPi to roll a dice.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
   
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI-Image Generation using open Ai API',
        description: 'App that leverages AI to automatically generate images based on user input.',
        link: 'https://github.com/raps-05/AI-Image-generation-react-js-and-Open-Ai-',
    }
];