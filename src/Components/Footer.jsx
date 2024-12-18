import React from 'react';

const Footer = () => {
  return (
    <div className="md:mx-10">
      {/* Grid container */}
      <div className="grid sm:grid-cols-[3fr_1fr_1fr] mt-40 text-sm gap-14 my-10">
        {/* Left Side */}
        <div>
          <img
            className="w-40"
            src="/Images/logo 1.jpg"
            alt="logo"
            width={150}
            height={150}
          />
          <p className="w-full md:w-2/3 text-primary leading-6">
            TELEM hires the best doctors and work with them to deliver exceptional virtual care.
            TELEM's Doctor Network includes board-certified doctors in 147 different specialties.
          </p>
        </div>

        {/* Center */}
        <div>
          <p className="text-xl font-medium mb-5">Quick links</p>
          <ul className="flex flex-col gap-2 text-primary">
            <li>Home</li>
            <li>About</li>
            <li>Doctors</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-primary">
            <li>+254789056431</li>
            <li>telem@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div>
        <hr className="my-5" />
        <p className="text-center text-sm">© 2024 Telem - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
