import React from 'react';

const ContactSection = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-wrap justify-center items-stretch gap-8">
        <div className="flex-1 text-center border-r border-gray-300 pr-8">
          <h3 className="text-xl font-semibold">Reach Out to Me</h3>
          <p>Email: <a href="mailto:example@example.com" className="text-blue-500 hover:text-blue-700 transition duration-300">example@example.com</a></p>
          <p>Phone: <a href="tel:+14037777777" className="text-blue-500 hover:text-blue-700 transition duration-300">+1 403 777 7777</a></p>
        </div>
        
        <div className="flex-1 text-center pl-8">
          <h3 className="text-xl font-semibold">Follow Me</h3>
          <a href="https://www.linkedin.com/in/arshpreet-singh-648848261/" className="text-blue-500 hover:text-blue-700 transition duration-300">LinkedIn</a><br />
          <a href="https://github.com/Arshpreet77" className="text-blue-500 hover:text-blue-700 transition duration-300">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
