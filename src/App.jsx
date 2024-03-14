/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react"

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Project from './components/project/Project';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import BackToTop from './components/backtotop/BackToTop';


export default function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Project />
    <Experience />
    <Skills />
    <Blog />
    <Contact />
    <Footer />
    <BackToTop />
    </>
  )
}
