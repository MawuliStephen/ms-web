import Link from 'next/link';
import Image from 'next/image';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import SvgIcons from './svgIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // p-4 border rounded-lg bg-surface
    <footer className="bg-surface pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="grid">

          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={120}
                height={60}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-400">
              Making the world a better place through technology and innovation.
            </p>

           
            <div className="flex space-x-4">
              <Link href="https://facebook/mawulistephens" className="text-gray-400 hover:text-white transition-colors">
                <SvgIcons.Facebook />
              </Link>
              < Link href="https://x.com/mawulistephen" className="text-gray-400 hover:text-white transition-colors">
                <SvgIcons.Twitter />
              </Link>
              <Link href="https://github.com/MawuliStephen" className="text-gray-400 hover:text-white transition-colors">
                <SvgIcons.GitHub />
              </Link>
              <Link href="https://linkedin/in/mawuli-stephen" className="text-gray-400 hover:text-white transition-colors">
                <SvgIcons.LinkedIn />
              </Link>
            </div>
          </div>


        </div>



        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold nav-text mb-4">Contact </h3>
          <address className="not-italic text-gray-400 space-y-2">
            <p>Yaa Asantewaa II Street</p>
            <p>Kumasi - Ashanti</p>
            <p>Email: stephen.mawuli.dormekpor.com</p>
            <p>Phone: +233(571) 697172</p>
          </address>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold nav-text mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-l focus:outline-none nav-text"
              required
            />
            <button
              type="submit"
              className="btn  px-4 py-2  rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 py-3 text-center text-gray-400">
        <p>&copy; {currentYear} Mawuli Stephen. All rights reserved.</p>
        {/* <div className="flex justify-center space-x-6 mt-4">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
        </div> */}
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;