import Image from 'next/image';

const CampingCard = ({ title, subtitle, mealsCount, buttonText }) => (
  <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black opacity-80"></div>
    <Image
      src="/herogif.png"
      alt={title}
      fill
      className="object-cover"
    />
    <div className="absolute bottom-0 left-0 p-6 text-white z-10 w-full">
      <h2 className="text-3xl font-bold font-platypi mb-2">{title}</h2>
      <p className="text-lg font-open-sans mb-4">{subtitle}</p>
      <div className="mb-4">
        <span className="text-4xl font-bold font-platypi">{mealsCount}</span>
        <p className="text-xl font-open-sans">Meals Served</p>
      </div>
      <button className="bg-white text-[#323E7E] px-6 py-2 rounded-full font-platypi hover:bg-opacity-90 transition-all flex items-center gap-2">
        {buttonText}
        <Image src="/file.svg" alt="icon" width={20} height={20} />
      </button>
    </div>
  </div>
);

const Campings = () => {
  const campaigns = [
    {
      title: 'Babu Ki Rasoi',
      subtitle: 'No one should sleep hungry.',
      mealsCount: '55k+',
      buttonText: 'Sponsor a meal for them'
    },
    {
      title: 'Babu Ki Rasoi',
      subtitle: 'No one should sleep hungry.',
      mealsCount: '55k+',
      buttonText: 'Cancer'
    },
    {
      title: 'Babu Ki Rasoi',
      subtitle: 'No one should sleep hungry.',
      mealsCount: '55k+',
      buttonText: 'Cancer'
    }
  ];

  return (
    <div className="flex justify-center gap-6">
      {campaigns.map((campaign, index) => (
        <CampingCard key={index} {...campaign} />
      ))}
    </div>
  );
};

export default Campings;