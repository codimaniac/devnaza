import { lazy } from 'react';

export { default as About } from './about/About';
export { default as Contact } from './contact/Contact';
export { default as Footer } from './footer/Footer';
export { default as Hero } from './hero/Hero';
export { default as NavBar } from './navbar/NavBar';
export const Projects = lazy(() => import('./projects/Projects'))
export const Skills = lazy(() => import('./skills/Skills'))