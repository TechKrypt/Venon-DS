'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-black text-white pt-6 md:pt-16 pb-16 px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-center gap-10"
    >
      {/* ABOUT Heading (Visible Only on Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:flex w-full md:w-1/3 justify-start md:pl-4"
      >
        <h2 className="text-[#bc1823] text-6xl md:text-[8rem] font-extrabold font-poppins transform -rotate-90 whitespace-nowrap">
          ABOUT
        </h2>
      </motion.div>

      {/* Mobile "ABOUT" Heading (Visible Only on Mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="block md:hidden w-full text-left"
      >
        <h2 className="text-[#bc1823] text-5xl font-extrabold font-poppins mb-6">
          ABOUT
        </h2>
      </motion.div>

      {/* About text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-2/3 space-y-6 font-inter text-white"
      >
        <p className="text-lg md:text-xl leading-relaxed">
          <span className="font-bold">At Venon Digital Solutions</span>, we don’t just design websites — we design with power, strategize with purpose, and deliver results for businesses ready to lead and dominate.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          By blending strategy, design, and education, we create platforms that don’t just look good — they work hard, connect deeper, and drive results.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          Your website isn’t just pixels and pages. It’s a powerful brand tool, built to reflect your identity, convert your audience, and scale your vision.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          Our job is to deliver fearless, future-ready websites backed by clarity, purpose, and partnership.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          And when we’re done, we don’t just hand you the keys — we empower you to grow. Because at Venon, it’s not just design.
        </p>
      </motion.div>
    </section>
  );
}
