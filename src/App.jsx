import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from '../components/Nav.jsx';
import Intro from '../components/Intro.jsx';
import Stack from '../components/Stack.jsx';
import Projects from '../components/Projects.jsx';
import Education from '../components/Education.jsx';
import Extensions from '../components/Extensions.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import Analysis from '../components/Analysis.jsx';
import Avatar from '../components/Avatar.jsx';

import Error404 from '../components/OtherComponents/Error404';

const HomeLayout = () => (
  <>
    <Intro />
    <Stack />
    <Projects />
    <Education />
    <Extensions />
    <Contact />
  </>
);

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen relative">
      <Nav />
      <Avatar />
      <main className="flex-1 w-full flex flex-col gap-12 sm:gap-24 relative z-10">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
