import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'

const Footer=() => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col">
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ol className="space-y-2">
              <li><a href="/home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/aboutme" className="hover:text-blue-400 transition">About Me</a></li>
              <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
            </ol>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-black transition">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="hover:text-red-400 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        <p className="text-gray-400">© 2024 Made with ❤️ by Fayaz ALI .</p>
      </div>
    </footer>
  );
};

export default Footer;
