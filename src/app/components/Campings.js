import Image from "next/image";
import Link from "next/link";

const CampingCard = ({ title, subtitle, mealsCount, buttonText, imageSrc, link }) => (
  <div className="relative w-[300px] h-[340px] sm:w-[320px] sm:h-[360px] md:w-[320px] md:h-[360px] rounded-3xl overflow-hidden group cursor-pointer flex-shrink-0 shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
    <Image
      src={imageSrc || "/bkr.png"}
      alt={title}
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 text-white z-10">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-1">{title}</h2>
        <p className="text-sm sm:text-base opacity-90">{subtitle}</p>
      </div>
      <div>
        <div className="mb-2">
          <span className="text-2xl sm:text-3xl font-bold">{mealsCount}</span>
          <p className="text-sm sm:text-base">Meals Served</p>
          <Link
            href={link}
            className="mt-4 flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2 shadow-md"
          >
            <span className="text-[#323E7E] text-sm sm:text-base">
              {buttonText}
            </span>
            <Image src="/file.svg" alt="icon" width={16} height={16} />
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
      mealsCount: "55k+",
      buttonText: "Sponsor a meal for them",
      imageSrc: "/bkr.png",
      link: "/babu-ki-rasoi",
    },
    {
      title: "Cancer",
      subtitle: "No one should sleep hungry.",
      mealsCount: "55k+",
      buttonText: "Cancer",
      imageSrc: "/bkr.png",
      link: "/capp",
    },
    {
      title: "Friends Of Anat Aman",
      subtitle: "No one should sleep hungry.",
      mealsCount: "55k+",
      buttonText: "Friends Of Anat Aman",
      imageSrc: "/bkr.png",
      link: "/friends-of-anat-aman",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 max-w-7xl mx-auto">
      {campaigns.map((campaign, index) => (
        <CampingCard key={index} {...campaign} />
      ))}
    </div>
  );
};

export default Campings;
