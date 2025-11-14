import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mobile Banking App",
      description: "Enterprise banking solution",
      image: "/images/projects/project-1.jpg",
    },
    {
      id: 2,
      title: "Content Platform",
      description: "Interactive media application",
      image: "/images/projects/project-2.jpg",
    },
    {
      id: 3,
      title: "Design System",
      description: "Component library",
      image: "/images/projects/project-3.jpg",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-[500px] bg-gradient-to-br from-muted to-muted/50 overflow-hidden group cursor-pointer"
            >
              {/* Placeholder - you'll need actual project images */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20">
                <div className="text-center p-8">
                  <div className="w-48 h-64 bg-white/80 rounded-lg shadow-2xl mb-4 mx-auto flex items-center justify-center">
                    <p className="font-display font-bold text-primary">
                      Project {project.id}
                    </p>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Uncomment when you have project images: */}
              {/* <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="font-display font-bold text-2xl mb-2">{project.title}</h3>
                  <p className="font-sans">{project.description}</p>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
