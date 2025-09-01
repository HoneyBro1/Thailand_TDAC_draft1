import HeroSection from '../components/HomePage/HeroSection'
import AdvantagesSection from '../components/HomePage/AdvantagesSection'
import CountryGrid from '../components/HomePage/CountryGrid'
import FaqSection from '../components/HomePage/FaqSection'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AdvantagesSection />
      <CountryGrid />
      <FaqSection />
    </div>
  )
}

export default HomePage
