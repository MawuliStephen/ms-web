import Link from 'next/link';
import Image from 'next/image';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import SvgIcons from './svgIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SvgIcons.Facebook />
              </Link>
              < Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SvgIcons.Twitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SvgIcons.Instagram />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SvgIcons.LinkedIn />
              </Link>
            </div>
          </div>


        </div>

        {/* Quick Links */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div> */}

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact </h3>
          <address className="not-italic text-gray-400 space-y-2">
            <p>Yaa Asantewaa II Street</p>
            <p>Kumasi - Ashanti</p>
            <p>Email: info@example.com</p>
            <p>Phone: +233(571) 697172</p>
          </address>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt- text-center text-gray-400">
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