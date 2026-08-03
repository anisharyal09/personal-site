import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from '../components/Nav.jsx';
import Intro from '../components/Intro.jsx';
import Projects from '../components/Projects.jsx';
import Education from '../components/Education.jsx';
import Extensions from '../components/Extensions.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import Avatar from '../components/Avatar.jsx';
import InteractiveBackground from './InteractiveBackground.jsx';

const Creations = lazy(() => import('../components/Creations.jsx'));
const Support = lazy(() => import('../components/Support.jsx'));
const Error404 = lazy(() => import('../components/OtherComponents/Error404.jsx'));

const HomeLayout = () => (
  <>
    <Intro />
    <Projects />
    <Education />
    <Extensions />
    <Contact />
  </>
);

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen relative w-full max-w-full overflow-x-hidden">
      <InteractiveBackground />
      <Nav />
      <Avatar />
      <main className="flex-1 w-full max-w-full flex flex-col gap-12 sm:gap-24 relative z-10">
        <Suspense fallback={<div className="route-loader" aria-label="Loading page" />}>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/creations" element={<Creations />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
