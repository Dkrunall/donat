import Link from "next/link";
import { OptimizedImage } from "../utils/cloudinary";

const CampingCard = ({ title, subtitle, mealsCount, buttonText, imageSrc, link }) => (
  <div className="relative w-[300px] h-[340px] sm:w-[320px] sm:h-[360px] md:w-[320px] md:h-[360px] rounded-3xl overflow-hidden group cursor-pointer flex-shrink-0 shadow-lg">
    <OptimizedImage
      src={imageSrc || "/bkr.png"}
      alt={title}
      fill
      className="object-cover z-0"
      sizes="(max-width: 640px) 300px, (max-width: 768px) 320px, 320px"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
    <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 text-white z-20">
      <div>
        <h2 className="text-xl sm:text-xl font-bold mb-1">{title}</h2>
        <p className="text-sm sm:text-base opacity-90">{subtitle}</p>
      </div>
      <div>
        <div className="mb-2">
          <span className="text-xl sm:text-xl font-bold">{mealsCount}</span>
          <Link
            href={link}
            className="mt-4 flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2 shadow-md"
          >
            <span className="text-[#323E7E] text-sm sm:text-base">
              {buttonText}
            </span>
            <OptimizedImage src="/file.svg" alt="icon" width={16} height={16} />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Campings = () => {
  const campaigns = [
    {
      title: "Babu Ki Rasoi",
      subtitle: "No one should sleep hungry.",
      mealsCount: "55,000+ Meals Served",
      buttonText: "Sponsor a meal",
      imageSrc: "/wwsf1.png",
      link: "/babu-ki-rasoi",
    },
    {
      title: "Cancer Awareness & Prevention",
      subtitle: "We go where others don't.",
      mealsCount: "Early help saves lives",
      buttonText: "Invite a session",
      imageSrc: "/cancer1.jpg",
      link: "/capp",
    },
    {
      title: "Friends of Anant Aman (FAA)",
      subtitle: "Join the club that cares.",
      mealsCount: "Young people. Big change",
      buttonText: "I want to join",
      imageSrc: "/foaa.jpg",
      link: "/friend-of-anat-aman",
    },
  ];

  return (
    <div className="overflow-x-auto md:overflow-visible pb-4 hide-scrollbar">
      <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-4 sm:gap-6 px-4 max-w-7xl mx-auto">
        {campaigns.map((campaign, index) => (
          <CampingCard key={index} {...campaign} />
        ))}
      </div>
    </div>
  );
};

export default Campings;
