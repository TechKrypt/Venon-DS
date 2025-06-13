'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover bg-[left_-150px] flex items-center justify-start px-6 md:px-28 text-white"
      style={{ backgroundImage: "url('/VRNG (6).png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl space-y-6 text-left">
        <h1 className="text-[2rem] sm:text-5xl md:text-7xl xl:text-8xl font-extrabold font-poppins leading-[1.1] tracking-tight">
          <span className="block">BOLD.</span>
          <span className="block">FUNCTIONAL.</span>
          <span className="block">POWERFUL.</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-inter text-white/90 max-w-2xl relative">
          From strategy to screen, we design websites that engage, convert, and deliver impact.
        </p>

        <a
          href="https://calendly.com/venon/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#bc1823] hover:bg-[#a7141e] text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl transition"
        >
          Schedule A Consultation
        </a>
      </div>
    </section>
  );
}
