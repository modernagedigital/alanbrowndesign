export default function Skills() {
  const tools = [
    { name: "Figma", color: "bg-purple-500" },
    { name: "Framer", color: "bg-blue-500" },
    { name: "Principle", color: "bg-red-500" },
    { name: "Tailwind CSS", color: "bg-cyan-500" },
    { name: "React JS", color: "bg-blue-400" },
    { name: "Next.js", color: "bg-black" },
  ];

  return (
    <section className="bg-secondary py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Design, code and{" "}
              <span className="text-primary">everything</span> else
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              Solving real design problems goes far beyond drawing flat rectangles on static canvases. I use a wide range of tools and techniques such as animation and detailed interaction design to prototype and demonstrate my ideas to clients, stakeholders and developers.
            </p>
          </div>

          {/* Right: Floating Tool Cards */}
          <div className="relative h-80">
            <div className="absolute inset-0 grid grid-cols-3 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="text-center">
                    {/* Placeholder - you'll need actual tool icons/logos */}
                    <div className={`w-12 h-12 ${tool.color} rounded-lg mb-3 mx-auto`}></div>
                    <p className="font-sans text-sm font-medium text-foreground">
                      {tool.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
