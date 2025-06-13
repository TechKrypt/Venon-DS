'use client';

import { motion } from 'framer-motion';
import { PiMonitorPlayFill } from 'react-icons/pi';
import { TbSettingsAutomation } from 'react-icons/tb';
import { LuPenTool } from 'react-icons/lu';

export default function Services() {
  const services = [
    {
      icon: <PiMonitorPlayFill size={40} className="text-white mx-auto mb-6" />,
      title: 'Website Design & Development',
      description:
        'We create high-performing, conversion-focused websites that reflect your brand and deliver real results — from strategy to final code.',
    },
    {
      icon: <TbSettingsAutomation size={40} className="text-white mx-auto mb-6" />,
      title: 'CMS Customization',
      description:
        'Whether it’s WordPress or a custom CMS, we tailor content management systems to fit your workflow and business needs seamlessly.',
    },
    {
      icon: <LuPenTool size={40} className="text-white mx-auto mb-6" />,
      title: 'UI/UX Design',
      description:
        'We craft beautiful and intuitive interfaces that prioritize user experience, guiding visitors effortlessly through your site’s journey.',
    },
  ];

  return (
    <section id="services" className="bg-black text-white pt-16 md:pt-32 pb-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[#bc1823] text-5xl sm:text-6xl font-extrabold font-poppins mb-12 text-center md:text-right">
          WHAT WE DO
        </h2>

        {/* Grid of Services with Animation */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-[#bc1823] p-8 rounded-lg bg-[#0f0f0f] hover:shadow-md transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {service.icon}
              <h3 className="text-xl md:text-2xl font-bold font-poppins text-white mb-6">
                {service.title}
              </h3>
              <p className="text-lg md:text-xl font-inter text-white leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
