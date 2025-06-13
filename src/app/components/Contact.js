'use client';

import { useRef, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recaptcha = document.querySelector('.g-recaptcha-response');
    if (!recaptcha || recaptcha.value === '') {
      setError('Please complete the reCAPTCHA.');
      return;
    }

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setError('All fields are required.');
      return;
    }

    try {
      await emailjs.sendForm(
        'service_dw24kqg',
        'template_w20n8jv',
        form.current,
        'OpACznDfCrG49-Awn'
      );
      setSuccess('Message sent successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      window.grecaptcha.reset();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-white text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 font-inter overflow-hidden">
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>

      <div className="text-center mb-12">
        <h2 className="text-[#bc1823] text-4xl md:text-6xl font-extrabold font-poppins">
          CONTACT US
        </h2>
        <p className="mt-4 text-black text-base md:text-lg max-w-2xl mx-auto">
          Have a project in mind? Let’s talk. Send us a message and we’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-10">
        {/* Contact Info */}
        <div className="bg-black p-6 md:p-10 rounded-xl space-y-8 md:col-span-3 shadow-lg">
          <div>
            <h4 className="text-xl font-extrabold mb-1">Email Address</h4>
            <p className="text-white/80 text-sm sm:text-base">support@venondigital.com</p>
          </div>
          <div>
            <h4 className="text-xl font-extrabold mb-1">Office Location</h4>
            <p className="text-white/80 text-sm sm:text-base">13 New Cemetery Road, Onitsha, Nigeria</p>
          </div>
          <div>
            <h4 className="text-xl font-extrabold mb-1">Phone Number</h4>
            <p className="text-white/80 text-sm sm:text-base">+234 816 201 5339</p>
          </div>
          <hr className="border-white/10" />
          <div>
            <h4 className="text-xl font-extrabold mb-2">Social Media</h4>
            <div className="flex gap-5 text-lg">
              <a href="https://facebook.com/venonds/"><FaFacebookF /></a>
              <a href="https://www.instagram.com/venondigital/"><FaInstagram /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="https://www.linkedin.com/company/venon-digital-solutions"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-black p-6 md:p-8 rounded-xl space-y-6 md:col-span-7"
        >
          {error && <p className="text-red-500 font-medium">{error}</p>}
          {success && <p className="text-green-500 font-medium">{success}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'fullName', type: 'text', placeholder: 'Your name', label: 'Full Name' },
              { name: 'email', type: 'email', placeholder: 'example@email.com', label: 'Email Address' },
              { name: 'phone', type: 'text', placeholder: '+234 000 000 0000', label: 'Phone Number' },
              { name: 'subject', type: 'text', placeholder: 'Project Inquiry', label: 'Subject' },
            ].map(({ name, type, placeholder, label }) => (
              <div key={name}>
                <label className="block mb-2 text-sm font-medium">{label}</label>
                <input
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  type={type}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#bc1823]"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#bc1823]"
            ></textarea>
          </div>

          <div className="g-recaptcha" data-sitekey="6LekYV8rAAAAAL1pXiXhM5YjN76A5IS9XWlPkQWs"></div>

          <button
            type="submit"
            className="bg-[#bc1823] hover:bg-[#a7141e] transition-all px-8 py-3 rounded-full font-bold text-white text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
