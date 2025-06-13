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
        'service_dw24kqg', // ✅ your EmailJS service ID
        'template_w20n8jv', // ✅ your EmailJS template ID
        form.current,
        'OpACznDfCrG49-Awn' // ✅ your EmailJS public key
      );
      setSuccess('Message sent successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      window.grecaptcha.reset(); // Reset captcha
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-white text-white py-20 px-6 md:px-20 font-inter">
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>

      <div className="text-center mb-16">
        <h2 className="text-[#bc1823] text-5xl md:text-6xl font-extrabold font-poppins tracking-tight">
          CONTACT US
        </h2>
        <p className="mt-4 text-black text-lg md:text-xl max-w-2xl mx-auto">
          Have a project in mind? Let’s talk. Send us a message and we’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-10 gap-10">
        {/* Contact Info */}
        <div className="bg-black p-10 rounded-xl space-y-10 md:col-span-3 shadow-lg">
          <div>
            <h4 className="text-2xl font-extrabold text-white mb-2">Email Address</h4>
            <p className="text-white/80 text-base">support@venondigital.com</p>
          </div>
          <div>
            <h4 className="text-2xl font-extrabold text-white mb-2">Office Location</h4>
            <p className="text-white/80 text-base">13 New Cemetery Road, Onitsha, Nigeria</p>
          </div>
          <div>
            <h4 className="text-2xl font-extrabold text-white mb-2">Phone Number</h4>
            <p className="text-white/80 text-base">+234 816 201 5339</p>
          </div>
          <hr className="border-white/10 my-4" />
          <div>
            <h4 className="text-2xl font-extrabold text-white mb-4">Social Media</h4>
            <div className="flex items-center gap-6 text-white text-lg">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-black p-8 rounded-xl space-y-6 md:col-span-7"
        >
          {error && <p className="text-red-500 font-medium">{error}</p>}
          {success && <p className="text-green-500 font-medium">{success}</p>}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Full Name</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#bc1823]"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#bc1823]"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="+234 000 000 0000"
                className="w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#bc1823]"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 rounded-md bg-black border border-gray-600 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#bc1823]"
              />
            </div>
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

          {/* ✅ reCAPTCHA box (V2 checkbox) */}
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
