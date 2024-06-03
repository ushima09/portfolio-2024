import Image from 'next/image';
import styles from './page.module.css';
import Button from '@mui/material/Button';
import Header from '@/components/Header';
import { Container } from '@mui/material';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import HistoryAndExperience from '@/components/HistoryAndExperience';
import Skills from '@/components/Skills';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Container
        disableGutters
        maxWidth="lg"
      >
        <Hero />
        <HistoryAndExperience />
        <Skills />
        <Projects />
      </Container>
      <Footer />
    </>
  );
}
