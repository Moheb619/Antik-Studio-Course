import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 sm:mb-0">
            <h4 className="text-lg font-medium text-white capitalize mb-8 relative after:absolute after:left-0 after:bottom-[-10px] after:bg-pink-500 after:h-0.5 after:w-12">
              company
            </h4>
            <ul className="list-none">
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  about us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  our services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  privacy policy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  affiliate program
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 sm:mb-0">
            <h4 className="text-lg font-medium text-white capitalize mb-8 relative after:absolute after:left-0 after:bottom-[-10px] after:bg-pink-500 after:h-0.5 after:w-12">
              get help
            </h4>
            <ul className="list-none">
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  shipping
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  returns
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  order status
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  payment options
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
            <h4 className="text-lg font-medium text-white capitalize mb-8 relative after:absolute after:left-0 after:bottom-[-10px] after:bg-pink-500 after:h-0.5 after:w-12">
              follow us
            </h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white bg-white bg-opacity-20 hover:bg-opacity-100 hover:text-gray-800 transition duration-300 ease-in-out rounded-full h-10 w-10 flex items-center justify-center"
              >
                <Facebook />
              </Link>
              <Link
                href="#"
                className="text-white bg-white bg-opacity-20 hover:bg-opacity-100 hover:text-gray-800 transition duration-300 ease-in-out rounded-full h-10 w-10 flex items-center justify-center"
              >
                <Instagram />
              </Link>
              <Link
                href="#"
                className="text-white bg-white bg-opacity-20 hover:bg-opacity-100 hover:text-gray-800 transition duration-300 ease-in-out rounded-full h-10 w-10 flex items-center justify-center"
              >
                <Youtube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
