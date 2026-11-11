import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '../pages/Home';
import { Layout } from './Layout';

// Home ships in the first bundle; everything else loads when visited.
const MyStory = lazy(() => import('../pages/MyStory'));
const Experience = lazy(() => import('../pages/Experience'));
const Persona = lazy(() => import('../pages/Persona'));
const Projects = lazy(() => import('../pages/Projects'));
const Concepts = lazy(() => import('../pages/Concepts'));
const ConceptDetail = lazy(() => import('../pages/ConceptDetail'));
const Awards = lazy(() => import('../pages/Awards'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="my-story" element={<MyStory />} />
        <Route path="experience" element={<Experience />} />
        <Route path="persona" element={<Persona />} />
        <Route path="projects" element={<Projects />} />
        <Route path="concepts" element={<Concepts />} />
        <Route path="concepts/:slug" element={<ConceptDetail />} />
        {/* The Wix site called this page "resume"; keep old links working. */}
        <Route path="resume" element={<Awards />} />
        <Route path="awards" element={<Awards />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}
