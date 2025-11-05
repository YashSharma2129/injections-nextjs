import Image from 'next/image';

interface Service {
  id: number;
  name: string;
  logo: string;
  logoPath: string;
  title: string;
  features: string[];
  score: number;
  stars: number;
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Ro",
    logo: "ro",
    logoPath: "/Roman-logo-1.svg",
    title: "Proven Weight Loss with Personalized Care",
    features: [
      "No Hidden Fees",
      "Fastest Working GLP-1 for Half the List Price",
      "Potential to lose up to 20% of body weight a year",
      "Get Qualified for Ozempic®, Wegovy®, or Zepbound®"
    ],
    score: 9.7,
    stars: 5,
    isPopular: true,
    ctaText: "Get Started Online for Just $45",
    ctaLink: "#"
  },
  {
    id: 2,
    name: "Remedy Meds",
    logo: "Remedy Meds",
    logoPath: "/Remedy-Meds-Logo-removebg-preview.svg",
    title: "Lose 10% in 4 months or your money back",
    features: [
      "Free 2-minute quiz to get pre-approved",
      "Prescriptions in 24 hr, medication shipped in 48 hr",
      "Same active ingredient as Ozempic® and Wegovy®"
    ],
    score: 9.4,
    stars: 4.5,
    ctaText: "Visit Site",
    ctaLink: "#"
  },
  {
    id: 3,
    name: "MEDVi",
    logo: "MEDVi",
    logoPath: "/Medvi_l.svg",
    title: "Budget-Friendly Weight Loss Backed by Experts",
    features: [
      "Save $120 and receive free shipping",
      "Trusted by over 500,000 weight loss patients",
      "Includes unlimited doctor visits and 24/7 support"
    ],
    score: 9.4,
    stars: 4.5,
    ctaText: "Visit Site",
    ctaLink: "#"
  },
  {
    id: 4,
    name: "ClinicSecret",
    logo: "ClinicSecret",
    logoPath: "/f465a33b-ef72-48b3-aac8-0fa967703660.svg",
    title: "$70 Off Your First Month",
    features: [
      "No Membership Fees",
      "Shipped in 1 week or less",
      "180 day satisfaction guarantee"
    ],
    score: 8.8,
    stars: 4.5,
    ctaText: "Visit Site",
    ctaLink: "#"
  },
  {
    id: 5,
    name: "Hims",
    logo: "Hims",
    logoPath: "/Hims-brown-logo.svg",
    title: "24/7 access to a care team",
    features: [
      "100% online, no office visits",
      "Personalized, doctor-trusted treatment plans",
      "GLP-1 injections & oral medication kits available"
    ],
    score: 7.3,
    stars: 3.5,
    ctaText: "Visit Site",
    ctaLink: "#"
  }
];

export default function ComparisonTable() {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg shadow-md border-2 card-hover ${
                service.isPopular ? 'border-green-500 ring-2 ring-green-100' : 'border-gray-200'
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  {/* Left side - Logo and Title */}
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center mb-3">
                      {service.isPopular && (
                        <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-4">
                          Most Popular
                        </span>
                      )}
                      <div className="flex items-center">
                        <Image
                          src={service.logoPath}
                          alt={`${service.name} Logo`}
                          width={100}
                          height={32}
                          className="h-6 w-auto"
                        />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h4>
                    
                    {/* Features */}
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right side - Rating and CTA */}
                  <div className="flex flex-col items-center lg:items-end space-y-3">
                    {/* Rating */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{service.score}</div>
                      <div className="flex items-center justify-center mb-1">
                        {renderStars(service.stars)}
                      </div>
                      <div className="text-xs text-gray-500">Our score</div>
                    </div>

                    {/* Social proof for popular service */}
                    {service.isPopular && (
                      <div className="text-center">
                        <div className="flex items-center justify-center text-xs text-gray-500 mb-2">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                          </svg>
                          42,731 people visited this site this month
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button className={`px-6 py-2 rounded-lg font-semibold text-white transition-colors duration-200 text-sm ${
                      service.isPopular 
                        ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                        : 'bg-gray-600 hover:bg-gray-700'
                    }`}>
                      {service.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
