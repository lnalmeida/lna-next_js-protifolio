import React from 'react'
import Heading from './Heading';

const Skills = () => {
  return (
    <section id='skills' className='container px-10 py-10 mx-auto'>
        <Heading title='Minhas Skills'/>

        <p className='mt-10 mb-10 text-gray-600'>
        Entrando no paradigma de programação para web, tenho habilidades com HTML, CSS, Javascript, Typescript, NodeJS, Express, ReactJS, React Native, Docker, bancos de dados NoSql, Git/Github, Linux, AWS, Google Ads, Google Analytics, Gootle Tag Manager, sempre buscando evoluir e aprofundar os conhecimentos adiquiridos até o momento. <br/>
        Abaixo, algumas das minhas skills: 
        </p>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div>
                <p>C#</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='absolute bg-[#077c03] h-[4px] w-[85%]'></div>
                </div>
            </div>
            <div>
                <p>ASP .Net Core</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='absolute bg-[#6cb8b4] h-[4px] w-[85%]'></div>
                </div>
            </div>
            <div>
                <p>Entity Framework</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='absolute bg-[#e34c26] h-[4px] w-[85%]'></div>
                </div>
            </div>

            <div>
                <p>HTML/CSS</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='absolute bg-[#93d0f8] h-[4px] w-[90%]'></div>
                </div>
            </div>

            <div>
                <p>Javascript/Typescript</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='absolute bg-[#f0db4f] h-[4px] w-[80%]'></div>
                </div>
            </div>

            <div>
                <p>NodeJS</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='absolute bg-[#007acc] h-[4px] w-[70%]'></div>
                </div>
            </div>

            <div>
                <p>Angular 2+</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='absolute bg-[#8bc500] h-[4px] w-[75%]'></div>
                </div>
            </div>

            <div>
                <p>ReactJS</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='absolute bg-[#2376b8] h-[4px] w-[70%]'></div>
                </div>
            </div>

            <div>
                <p>SQL/NoSQL</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='absolute bg-[#62dbfc] h-[4px] w-[90%]'></div>
                </div>
            </div>

            <div>
                <p>SGDBs</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='absolute bg-[#46c3e6] h-[4px] w-[90%]'></div>
                </div>
            </div>

        </div>

    </section>
  );
};

export default Skills;
