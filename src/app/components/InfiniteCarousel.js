import Image from 'next/image';

const partners = [
  { src: '/partners/1.png', alt: 'Partner 1' },
  { src: '/partners/2.png', alt: 'Partner 2' },
  { src: '/partners/3.png', alt: 'Partner 3' },
  { src: '/partners/4.png', alt: 'Partner 4' },
  { src: '/partners/5.png', alt: 'Partner 5' },
  { src: '/partners/1.png', alt: 'Partner 6' },
  // Add more partners as needed
];

const InfiniteCarousel = ({ direction = 'forward' }) => {
  const animationClass = direction === 'reverse' ? 'animate-carousel-scroll-reverse' : 'animate-carousel-scroll';

  return (
    <div className="relative w-full overflow-hidden py-5">
      <div className={`flex ${animationClass} whitespace-nowrap`}>
        {/* Duplicate content multiple times to create seamless loop */}
        {[...partners, ...partners, ...partners].map((partner, index) => (
          <div key={index} className="mx-8 flex-shrink-0 border border-[#E3E3E3] px-3 rounded-3xl flex items-center justify-center">
            <Image src={partner.src} alt={partner.alt} width={150} height={100} style={{ objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;