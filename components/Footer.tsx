import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="w-full h-14 mt-5 border-t border-gray-200 flex flex-shrink-0 justify-center items-center gap-10">
    <a href="https://github.com/pedr0fontoura" className="hover:opacity-80">
      <FaGithub size={28} />
    </a>

    <a href="https://twitter.com/pedr0fontoura" className="hover:opacity-80">
      <FaTwitter size={28} />
    </a>

    <a href="https://www.linkedin.com/in/pffrd/" className="hover:opacity-80">
      <FaLinkedin size={28} />
    </a>
  </footer>
);

export default Footer;
