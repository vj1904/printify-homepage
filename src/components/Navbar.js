import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <nav className="bg-white shadow-lg p-3 m-1 sticky top-0 z-50">
      <div className="w-4/5 md:w-11/12 lg:mx-auto flex justify-between items-center">
        {/* Hamburger Menu & Brand */}
        <div className="flex items-center">
          <div className="md:hidden">
            <RxHamburgerMenu className="h-6 w-6 text-green-500" />
          </div>
          <div className="text-3xl text-green-500 font-bold">Printify</div>
        </div>

        {/* Links for large screens */}
        <ul className="hidden md:flex space-x-5 ml-16">
          <li className="hover:text-green-500 text-gray-700">Catalog</li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("howItWorks")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-green-500 text-gray-700">
              <span>How it works</span>
              <IoMdArrowDropdown className="ml-1 h-4 w-4" />
            </button>
            {dropdown === "howItWorks" && (
              <div className="absolute bg-white shadow-lg mt-2 p-2 min-w-[200px]">
                <div className="whitespace-nowrap">How Printify Works</div>
                <div className="whitespace-nowrap">Print On Demand</div>
                <div className="whitespace-nowrap">
                  Printify Quality Promise
                </div>
                <div className="whitespace-nowrap">What To Sell?</div>
              </div>
            )}
          </li>
          <li className="hover:text-green-500 text-gray-700">Pricing</li>
          <li className="hover:text-green-500 text-gray-700">Blog</li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-green-500 text-gray-700">
              <span>Services</span>
              <IoMdArrowDropdown className="ml-1 h-4 w-4" />
            </button>
            {dropdown === "services" && (
              <div className="absolute bg-white shadow-lg mt-2 p-2 min-w-[200px]">
                <div>Printify Studio</div>
                <div>Printify Express Delivery</div>
                <div>Order in Bulk</div>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("useCases")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-green-500 text-gray-700">
              <span>Use Cases</span>
              <IoMdArrowDropdown className="ml-1 h-4 w-4" />
            </button>
            {dropdown === "useCases" && (
              <div className="absolute bg-white shadow-lg mt-2 p-2 min-w-[200px]">
                <div>Merch for fans</div>
                <div>Merch for Ecommerce</div>
                <div>Merch for Enterprises</div>
              </div>
            )}
          </li>

          <li className="hover:text-green-500 text-gray-700">Need-help?</li>
        </ul>

        {/* Login/Signup */}
        <div className="flex space-x-2 ml-96">
          <button className="border border-gray-700 px-2 py-2 w-[75px] text-center rounded">
            Login
          </button>
          <button className="bg-green-500 text-white px-2 py-2 w-[75px] text-center rounded hover:bg-green-600">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}
