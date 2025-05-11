import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaRedditSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const handleSendMessage = () => {
    window.open("https://www.facebook.com/blusteryrisers", "_blank");
  };

  return (
    <footer className="footer footer-horizontal footer-center text-base-content rounded mt-20 mb-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover font-grotesk text-gray-600 font-medium">Fixture</a>
        <a className="link link-hover font-grotesk text-gray-600 font-medium">Jersey</a>
        <a className="link link-hover font-grotesk text-gray-600 font-medium">Achievement</a>
        <a className="link link-hover font-grotesk text-gray-600 font-medium">Old Squad</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <button onClick={handleSendMessage} className="btn bg-neutral text-white border-neutral">
            <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
              Follow us on Facebook
          </button>
        </div>
      </nav>
      <aside>
        <p className="font-grotesk text-gray-600 font-medium">
          Copyright © {new Date().getFullYear()} - All right reserved by Blustery Risers
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
