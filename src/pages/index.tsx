import Head from 'next/head'
import { Hero } from '../components/Home/Hero';
import { SectionBenefits } from '../components/Home/SectionBenefits';
import { SectionBlog } from '../components/Home/SectionBlog';
import { SectionCourses } from '../components/Home/SectionCourses';
import { SectionDepoiments } from '../components/Home/SectionDepoiments';
import { SectionFaq } from '../components/Home/SectionFaq';

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
