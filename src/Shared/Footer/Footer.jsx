import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-12 w-12 mr-4"
              src="https://i.ibb.co/kDG45Zv/desktop-wallpaper-dance-high-quality-logo-of-dance-academy-background-dance-studio-removebg-preview.png"
              alt="Academy Of Dance Logo"
            />
            <div>
              <p className="text-lg font-semibold">Academy Of Dance</p>
              <p>Providing reliable tech since 1992</p>
            </div>
          </div>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 1C5.924 1 1 5.924 1 12c0 5.25 4.037 9.543 9.182 9.95v-7.036H7.35V12h2.832V9.618c0-2.797 1.664-4.344 4.216-4.344 1.22 0 2.41.22 2.41.22v2.653h-1.36c-1.338 0-1.754.832-1.754 1.68V12h2.987l-.478 3.914h-2.51V24C18.963 23.86 23 19.57 23 12c0-6.076-4.924-11-11-11z" />
              </svg>
            </a>
            <a href="#" className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20.27 7.183a7.442 7.442 0 01-2.17.595 3.717 3.717 0 001.633-2.052 7.464 7.464 0 01-2.358.902A3.718 3.718 0 0013 6.718a3.69 3.69 0 00-3.683 3.713c0 .29.033.572.097.845A10.579 10.579 0 012 7.546a3.71 3.71 0 001.15 4.946A3.676 3.676 0 012 12.066v.046a3.715 3.715 0 003.716 3.716 3.718 3.718 0 01-1.764.072 3.722 3.722 0 003.458 2.576A7.462 7.462 0 014 18.442a10.49 10.49 0 005.688 1.668c6.817 0 10.546-5.648 10.546-10.546 0-.16-.004-.32-.01-.48a7.54 7.54 0 001.865-1.925l.001-.002z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22 5.602v12.796c0 .848-.686 1.534-1.534 1.534H3.534C2.686 20.932 2 20.246 2 19.398V6.598c0-.848.686-1.534 1.534-1.534h16.932c.848 0 1.534.686 1.534 1.534zM9.399 17.453V7.546l8.445 4.454-8.445 4.453z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center text-gray-500">
          <p className="text-sm">
            © {new Date().getFullYear()} CulinaryCloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
