import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="w-full h-16 mt-5 border-t border-gray-200 flex flex-shrink-0 justify-center items-center gap-10">
    <a href="https://github.com/pedr0fontoura">
      <FaGithub size={32} />
    </a>

    <a href="https://twitter.com/pedr0fontoura">
      <FaTwitter size={32} />
    </a>

    <a href="https://www.linkedin.com/in/pffrd/">
      <FaLinkedin size={32} />
    </a>
  </footer>
);

export default Footer;
