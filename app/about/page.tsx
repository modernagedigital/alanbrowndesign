import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function AboutPage() {
  const skills = [
    "Advanced knowledge and experience of building scalable design systems for large businesses.",
    "Leading large design teams and empowering creativity by driving innovative, efficient new workflows.",
    "Versatile hands-on skillset working across UX, UI and code.",
    "Strong UI coding skills in HTML, CSS and React with tools such as Next, Storybook, CSS Modules and Tailwind.",
    "Bringing interaction design visuals to life with animation in Adobe After Effects and similar tools.",
    "Very wide range of software skills in apps such as Figma, Framer, Sketch, Adobe CC, Protopie, Axure, Principle and Just-in-Mind.",
  ];

  const recentProjects = [
    {
      title: "One AZ / Experience Library",
      client: "AstraZeneca",
      date: "July 2023",
      role: "Leading the enterprise-level Design System for a global project, spanning multiple markets and design teams across Europe, Canada and the US.",
    },
    {
      title: "Foods Connected Design System",
      client: "Foods Connected",
      date: "March 2022",
      role: "Creation and setup of a Design System for a global supply chain management software company.",
    },
    {
      title: "Shawbrook Savings and Design System",
      client: "Shawbrook Bank",
      date: "May 2022",
      role: "Assisting in the setup of a new design function by creating Design System tokens, foundations, documentation and initial UX design concepts.",
    },
    {
      title: "Woolworths Group Privacy Center",
      client: "This Place",
      date: "December 2021",
      role: "Complete UX / UI Design and delivery of a bespoke concept for a global retailer's privacy centre and Design System from a re-brand.",
    },
    {
      title: "Polyconcept North America",
      client: "This Place",
      date: "October 2021",
      role: "UX / UI design on e-commerce features",
    },
  ];

  const experience = [
    {
      title: "Lead UI Designer",
      company: "Sky UK",
      dates: "November 2018 - July 2021",
      role: "Installing a UI capability into Sky's existing dev-led structure. Setting up a new design process with the creation of Sky's internal design system Spectrum. Creating a library of design assets and code with Framer, React and Emotion JS, empowering the UX Design team to use code assets for rapid prototyping and concept creation.",
    },
    {
      title: "Lead UI Designer",
      company: "Clydesdale and Yorkshire Bank",
      dates: "October 2016 - August 2018",
      role: "Leading a team of experienced designers to help meet tight deliverables on a digital roadmap across multiple platforms. Responsible for all sign-offs and peer reviews while creating innovative new workflows and processes within the UX team. Created the UX/UI concepts for CYBG's new internet banking platform which justified the extra investment needed to double the size of the design team. Led the initiative to create the bank's design system Clyde from the ground up, delivering a living online style-guide and code library.",
    },
    {
      title: "Senior Designer",
      company: "Prudential UK",
      dates: "March 2014 - October 2016",
      role: "Supporting Prudential's re-design and build of their flagship websites while implementing patterns and design standards for future. In 2015 I created the UX and UI design and build of the Oracle Paper app for iPad. This went on to be Prudential UK's first ever app to be launched on the Apple store. Made the case for UI development to sit within the UX team by creating a pattern library and methodology to modernise the design-to-dev handshake process. An entire UI Dev capability was then recruited into the team and followed my workflows.",
    },
    {
      title: "Lead UX and Design",
      company: "Spriing",
      dates: "September 2013 - March 2014",
      role: "Client facing role in a fast paced new studio. Leading the creative direction of projects and guiding a team of designers. In-depth mobile app and web UX journeys, wireframes and art direction for well funded start-up businesses and high profile clients such as JP Morgan.",
    },
    {
      title: "Senior Digital Designer",
      company: "D8",
      dates: "July 2011 - September 2013",
      role: "Concept to completion UX/UI work for large clients such as RBS, Scottish Power and many smaller businesses and startups.",
    },
    {
      title: "Digital Designer",
      company: "GRP",
      dates: "April 2010 - July 2011",
      role: "",
    },
    {
      title: "Digital Designer",
      company: "Castle Leisure Group",
      dates: "June 2004 - April 2010",
      role: "",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header spacing */}
      <div className="h-20"></div>

      <div className="container max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <div>
            {/* Profile Section */}
            <div className="mb-12">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
                <Image
                  src="/alan-profile.avif"
                  alt="Alan Brown"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              <h1 className="font-display font-bold text-4xl mb-8">About me</h1>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Hi, I'm Alan Brown - A freelance Digital Product Designer and Design Systems specialist, based in the UK. I have worked in the digital design and tech industry for nearly 2 decades, gaining experience at some of the top agencies in the country.
                </p>
                <p>Broad skillset in Visual Design, User Experience (UX) Design and Front-End Web Development.</p>
                <p>
                  I've been consulting as a Lead Designer since 2014, helping many large, global clients and teams across various sectors deliver projects of all sizes. My process is a systematic approach to every project I work with by creating best-in-class design systems for businesses. This helps teams innovate and deliver faster with more focus, organisation and consistent high standards.
                </p>
                <p>
                  I now run a small design and development consultancy called{" "}
                  <Link href="https://modernage.digital" className="text-primary hover:underline">
                    Modern Age
                  </Link>
                  , focusing on Design Systems, Digital Product Design and Front-End Web Development.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-12">
              <h2 className="font-display font-bold text-3xl mb-6">Skills</h2>
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li key={index} className="flex gap-3 text-foreground/80">
                    <span className="text-primary mt-1.5 flex-shrink-0">→</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Projects Section */}
            <div className="mb-12">
              <h2 className="font-display font-bold text-3xl mb-6">Recent projects</h2>
              <div className="space-y-8">
                {recentProjects.map((project, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-primary mt-1.5 flex-shrink-0">→</span>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-medium">Client:</span> {project.client}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-medium">Date:</span> {project.date}
                      </p>
                      <p className="text-foreground/80">
                        <span className="font-medium">My role:</span> {project.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-12">
              <h2 className="font-display font-bold text-3xl mb-6">Experience</h2>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-primary mt-1.5 flex-shrink-0">→</span>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1">{job.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-medium">Company:</span> {job.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-medium">Dates:</span> {job.dates}
                      </p>
                      {job.role && (
                        <p className="text-foreground/80">
                          <span className="font-medium">My role:</span> {job.role}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="font-display font-bold text-lg mb-4">More info</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block bg-primary text-primary-foreground text-center py-2.5 px-4 rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                  Download CV
                </a>
                <a
                  href="https://linkedin.com/in/alanbrown-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
