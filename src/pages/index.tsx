import Head from 'next/head'
import { Hero } from './components/Hero';
import { SectionBenefits } from './components/SectionBenefits';
import { SectionBlog } from './components/SectionBlog';
import { SectionCourses } from './components/SectionCourses';
import { SectionDepoiments } from './components/SectionDepoiments';
import { SectionFaq } from './components/SectionFaq';
import styles from './home.module.scss';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | IAP Cursos</title>
      </Head>
      <main>
        <Hero />
        <SectionCourses />
        <SectionBenefits />
        <SectionDepoiments/>
        <SectionBlog />
        <SectionFaq />
      </main>
    </>
  )
}
