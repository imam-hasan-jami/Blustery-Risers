import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaRedditSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const LowerFooter = () => {
    return (
      <div className="bg-base-300 py-5">
        <h1 className="font-grotesk text-lg font-semibold text-center text-gray-600">
          Developed By Imam Hasan Sadi
        </h1>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.facebook.com/BlusteryRisers" target="_blank">
            <FaFacebookSquare size={25} />
          </a>
          <a href="https://www.instagram.com/chainless_slave1.0/" target="_blank">
            <FaInstagramSquare size={25} />
          </a>
          <a href="https://github.com/imam-hasan-jami" target="_blank">
            <FaGithubSquare size={25} />
          </a>
          <a href="https://www.linkedin.com/in/imam-hasan-jami/" target="_blank">
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    );
};

export default LowerFooter;