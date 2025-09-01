import HeroSection from '../components/HomePage/HeroSection'
import AdvantagesSection from '../components/HomePage/AdvantagesSection'
import CountryGrid from '../components/HomePage/CountryGrid'
import VisaInfoSection from '../components/HomePage/VisaInfoSection'
import HowToGetSection from '../components/HomePage/HowToGetSection'
import FaqSection from '../components/HomePage/FaqSection'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VisaInfoSection />
      <AdvantagesSection />
      <CountryGrid />
      <HowToGetSection />
      <FaqSection />
    </div>
  )
}

export default HomePage
