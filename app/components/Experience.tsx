import Image from "next/image";

export default function Experience() {
  const companies = [
    { name: "Sky", logo: "logo-sky.svg" },
    { name: "BBC", logo: "logo-bbc.svg" },
    { name: "Woolworths Group", logo: "logo-woolworths.svg" },
    { name: "Virgin Money", logo: "logo-vm.svg" },
    { name: "C&B", logo: "logo-cb.svg" },
    { name: "Pru", logo: "logo-pru.svg" },
    { name: "RBS", logo: "logo-rbs.svg" },
    { name: "Blackhorse", logo: "logo-blackhorse.svg" },
    { name: "JP Morgan", logo: "logo-jpmorgan.svg" },
    { name: "Shawbrook", logo: "logo-shawbrook.svg" },
    { name: "Miller", logo: "logo-miller.svg" },
    { name: "This Place", logo: "logo-thisplace.svg" },
    { name: "Foods Connected", logo: "logo-foodsconnected.svg" },
    { name: "Channel 4", logo: "logo-channel4.svg" },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 tracking-tight">
            Two decades of experience
          </h2>
          <p className="font-sans text-muted-foreground text-lg">
            I've worked on various projects with some of the biggest companies in the world.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {companies.map((company) => (
            <div
              key={company.logo}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <Image
                src={`/${company.logo}`}
                alt={company.name}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
