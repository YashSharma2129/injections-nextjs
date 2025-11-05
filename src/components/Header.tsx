import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <>
      {/* Advertising Disclosure Banner */}
      <div className="bg-white border-b border-gray-200 text-center py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600">
            We earn a commission from the offers on this page, which influences which offers are displayed{' '}
            <Link href="/disclosure" className="underline hover:text-blue-600">
              Advertising Disclosure
            </Link>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/Best-weight-loss-logo-1.svg"
                  alt="BestWeightLossMeds Logo"
                  width={150}
                  height={38}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/knowledge" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Knowledge
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Reviews
              </Link>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
