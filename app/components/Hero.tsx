import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-secondary min-h-[600px] flex items-center justify-center pt-24 pb-16 px-6">
      <div className="container max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted">
            <Image
              src="/alan-profile.avif"
              alt="Alan Brown"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Handwritten Hello */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <span className="font-handwriting text-4xl text-primary">Hello</span>
            <svg
              className="absolute -right-12 top-0 w-10 h-10 text-primary"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5 Q 15 15, 25 10 T 35 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M30 12 L 35 15 L 32 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
          I'm Alan. UI-Leaning Digital Product Designer with a focus on{" "}
          <span className="text-primary">Design Systems</span>
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Highly experienced in driving the creation of enterprise-scale Design Systems and leading design teams to success.
        </p>
      </div>
    </section>
  );
}
