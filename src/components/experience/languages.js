import React from 'react'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {FaReact,FaAngular,FaNodeJs,FaPhp} from 'react-icons/fa'
import {BsBootstrap, BsWifi,BsPatchCheckFill} from 'react-icons/bs'
import {RiVuejsLine} from 'react-icons/ri'
import {TbBrandNuxt} from 'react-icons/tb'
import {SiMysql, SiArduino, SiMongodb, SiJavascript, SiCisco} from 'react-icons/si'

const languages_frontEnd = [
    ///////////FrontEnd///////////////
    {
        name: 'HTML',
        level: 'Experienced',
        icon: <AiOutlineHtml5/>,
    },
    {
        name: 'CSS',
        level: 'Experienced',
        icon: <DiCss3/>,
    },
    {
        name:'React',
        level:'Experienced',
        icon:<FaReact/>,
    },
    {
        name:'Bootstrap',
        level:'Experienced',
        icon:<BsBootstrap/>,
    },
    {
        name:'Vue',
        level:'Experienced',
        icon:<RiVuejsLine/>,
    },
    {
        name:'Angular',
        level:'Basic',
        icon:<FaAngular/>,
    },
    {
        name:'NuxtJs',
        level:'Experienced',
        icon:<TbBrandNuxt/>,
    },
]

const languages_backEnd = [
    {
        name:'Node JS',
        level:'Experienced',
        icon:<FaNodeJs/>,
    },
    {
        name:'Mongo DB',
        level:'Experienced',
        icon:<SiMongodb/>,
    },
    {
        name:'JavaScript',
        level:'Experienced',
        icon:<SiJavascript/>,
    },
    {
        name:'PHP',
        level:'Basic',
        icon:<FaPhp/>,
    },
    {
        name:'SQL',
        level:'Basic',
        icon:<SiMysql/>,
    },
    {
        name:'Arduino',
        level:'Advance',
        icon:<SiArduino/>,
    },
    {
        name:'IoT (Internet of Things)',
        level:'Advance',
        icon:<BsWifi/>,
    },
    {
        name:'Cisco Networking',
        level:'Basic',
        icon:<SiCisco/>,
    },
    {
        name:'.NET Core',
        level:'Experienced',
        icon:<BsPatchCheckFill/>,
    },
    {
        name:'C#',
        level:'Experienced',
        icon:<BsPatchCheckFill/>,
    },
    {
        name:'C++',
        level:'Experienced',
        icon:<BsPatchCheckFill/>,
    },
]

export {languages_frontEnd,languages_backEnd}