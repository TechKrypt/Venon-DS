'use client';

const steps = [
  "Consultation Call",
  "Proposal and Quotation",
  "70% Deposit Payment",
  "UI Design, Feedback and Approval",
  "Development and Content Upload",
  "Testing and Optimization",
  "Final Review and Balance of Payment",
  "Delivery and Ongoing Support for One Year",
];

export default function Process() {
  return (
    <section
      id="process"
      className="w-full bg-black text-white px-6 md:px-20 py-20 font-inter"
    >
      <div className="text-center mb-16">
        <h2 className="text-[#bc1823] text-5xl md:text-7xl font-extrabold font-poppins tracking-tight">
          THE PROCESS
        </h2>
        <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
          From first call to final delivery, here’s how we build high-performing websites.
        </p>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-6 group">
            {/* Number */}
            <div className="flex-shrink-0">
              <div className="text-[#bc1823] border-2 border-[#bc1823] rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold group-hover:bg-[#bc1823] group-hover:text-white transition duration-300">
                {index + 1}
              </div>
            </div>

            {/* Step Description */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                {step}
              </h3>
              <div className="w-10 h-[2px] bg-[#bc1823] mb-2" />
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {/* Optional: You can add a short explanation here for each step if you want. */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}