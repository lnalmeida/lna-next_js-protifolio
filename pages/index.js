import { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Hability from '../components/Hability';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer  from '../components/Footer';
import SideBar from '../components/SideBar';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div>
      <Head>
        <title>Luiz Almeida</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <SideBar isOpen={isOpen} toggleSidebar={toggleSideBar} />
        <Navbar toggleSidebar={toggleSideBar}/>
        <Hero />
        <About />
        <Hability />
        <Skills />
        <Projects /> 
        <Contact />
        <Footer />
      </header>
    </div>
  );
};
