import Hero from "./components/Hero"
import About from "./components/About"
import DeemModel from "./components/DeemModel"
import CoursesPreview from "./components/CoursesPreview"
import Methodology from "./components/Methodology"
import VacationLearning from "./components/VacationLearning"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <DeemModel />
      <CoursesPreview />
      <Methodology />
      <VacationLearning /> 
      <CTA />
      <Footer />
    </main>
  )
}