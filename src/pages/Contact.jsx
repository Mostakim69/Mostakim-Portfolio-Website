export const UserData = {
  name: "Md Mostakim Hosen",
  about :   `Hi, I’m Md Mostakim Hosen, a frontend developer with a passion for clean code and creative design. My journey in programming started with curiosity, and over time, it became something I truly love. I enjoy building responsive, user-friendly interfaces using technologies like React.js, Tailwind CSS, and JavaScript.

I love solving real-world problems through code and turning ideas into functional web applications. Whether it’s a simple landing page or a dynamic user dashboard, I always focus on performance, design, and user experience.

Outside of coding, I enjoy music, especially emotional songs, watching football, and spending time with my thoughts. I also dream of becoming a teacher — someone who can inspire and guide the next generation.

Let’s build something meaningful together!`,
  resumeUrl : "Google docks",
  FooterLink : "https://github.com/Mostakim69",
  socialMedia: [
    {
      socialMediaName: "github",
      url: "https://github.com/Mostakim69",
      icon: "AiFillGithub",
    },
    {
      socialMediaName: "linkedin",
      url: "https://www.linkedin.com/in/mostakim-hosen9/",
      icon: "FaLinkedinIn",
    },
    {
      socialMediaName: "facebook",
      url: "https://www.facebook.com/MostakimHosennnn",
      icon: "AiFillFacebook",
    },
    {
      socialMediaName: "twitter",
      url: "https://x.com/mostakim14467",
      icon: "AiOutlineTwitter",
    },
    {
      socialMediaName: "instagram",
      url: "https://www.instagram.com/posterboy3369/#",
      icon: "AiFillInstagram",
    },
  ],
  typewriterOptions: {
    strings: [
      "Frontend Developer",
      "React Developer",
      "Tailwind CSS Specialist",
      "JavaScript Lover",
      "Responsive Web Design",
      "MERN Stack Developer",
      "Javascript Developer",
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 30,
  },
};

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const iconMap = {
  AiFillGithub: AiFillGithub,
  FaLinkedinIn: FaLinkedinIn,
  AiFillFacebook: AiFillFacebook,
  AiOutlineTwitter: AiOutlineTwitter,
  AiFillInstagram: AiFillInstagram,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.request.trim() === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Information',
        text: 'Please fill out all required fields.',
        confirmButtonColor: '#22c55e'
      });
    } else if (!validateEmail(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        confirmButtonColor: '#22c55e'
      });
    } else {
      console.log('Form submitted:', formData);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Thank you! I will get back to you soon.',
        confirmButtonColor: '#22c55e'
      });

      setFormData({
        name: '',
        email: '',
        request: ''
      });
    }
  };

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Contact Me
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Have a question or want to work together? Let’s talk.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border border-gray-300 px-4 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-gray-800 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 px-4 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-gray-800 text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="request" className="text-sm font-medium text-gray-700 mb-1 block">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="request"
                id="request"
                value={formData.request}
                onChange={handleChange}
                placeholder="Let me know how I can help you..."
                className="w-full border border-gray-300 px-4 py-3 sm:px-5 sm:py-4 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 h-32 sm:h-40 resize-none placeholder-gray-400 text-gray-800 text-sm sm:text-base"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-lg sm:rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="bg-green-50 rounded-lg sm:rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 flex flex-col justify-center shadow-inner">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Let’s Connect</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              You can also reach me directly through the following details.
            </p>
            <div className="text-gray-700 space-y-2 sm:space-y-3 text-sm sm:text-base">
              <p><span className="font-semibold">Whatsapp:</span> +880-1821-023369</p>
              <p><span className="font-semibold">Email:</span> mdmostakimhosen35@gmail.com</p>
            </div>
            <div className="mt-4 flex space-x-4">
              {UserData.socialMedia.map((social, index) => {
                const Icon = iconMap[social.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;