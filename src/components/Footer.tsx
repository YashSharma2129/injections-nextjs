import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image
            src="/Best-weight-loss-logo-1.svg"
            alt="BestWeightLossMeds Logo"
            width={200}
            height={50}
            className="h-12 w-auto mx-auto mb-4"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/knowledge" className="text-gray-300 hover:text-white transition-colors">
            Knowledge
          </Link>
          <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
            Terms of Use
          </Link>
          <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/disclosure" className="text-gray-300 hover:text-white transition-colors">
            Advertiser Disclosure
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2025 BestWeightLossMeds. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
