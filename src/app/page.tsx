import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ComparisonTable from '@/components/ComparisonTable';
import InfoSections from '@/components/InfoSections';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ComparisonTable />
        <InfoSections />
      </main>
      <Footer />
    </div>
  );
}