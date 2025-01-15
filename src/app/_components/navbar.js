"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { IoMdHome, IoMdInformationCircle, IoMdSchool } from "react-icons/io";
import { FaBlog, FaUniversity, FaPhotoVideo, FaPhoneAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Head from "next/head";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const menuRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close the menu if it's already open
    } else {
      setActiveDropdown(index); // Open the menu for the given index
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event, index, dropdownIndex) => {
    const { key } = event;
    const dropdown = menuItems[dropdownIndex]?.dropdown;

    if (key === "ArrowDown" && dropdown) {
      const nextItem = dropdown[0];
      setActiveItem(nextItem);
    } else if (key === "ArrowUp" && dropdown) {
      const prevItem = dropdown[dropdown.length - 1];
      setActiveItem(prevItem);
    } else if (key === "Enter") {
      if (activeItem) {
        window.location.href = activeItem.href;
      }
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: <IoMdHome className="text-xl text-gray-900" />,
    },
    {
      label: "About",
      href: "#about",
      icon: <IoMdInformationCircle className="text-xl text-gray-900" />,
      dropdown: [
        { label: "˃˃   Why Uzbekistan Medi", href: "/about#our-story" },
        { label: "˃˃ Serivices offered", href: "/about#mission" },
        { label: "˃˃  Vision", href: "/about#team" },
        { label: "˃˃  Careers", href: "/about#careers" },
      ],
    },
    {
      label: "MBBS in Uzbekistan",
      href: "/mbbs-in-uzbekistan",
      icon: <IoMdSchool className="text-xl text-gray-900" />,
    },
    {
      label: "Universities",
      href: "#universities",
      icon: <FaUniversity className="text-xl text-gray-900" />,
      dropdown: [
        {
          label: "˃˃  Andijan State Medical Institute",
          href: "/universities#university1",
        },
        {
          label: "˃˃  Tashkent Medical Academy",
          href: "/universities#university2",
        },
        {
          label: "˃˃ Bukhara State Medical Institute",
          href: "/universities#university3",
        },
        {
          label: "˃˃  Samarkand State Medical University",
          href: "/universities#university4",
        },
      ],
    },
    {
      label: "Blogs",
      href: "#blogs",
      icon: <FaBlog className="text-xl text-gray-900" />,
    },
    {
      label: "Gallery",
      href: "#gallery",
      icon: <FaPhotoVideo className="text-xl text-gray-900" />,
    },
    {
      label: "Contact Us",
      href: "#contact-us",
      icon: <FaPhoneAlt className="text-xl text-gray-900" />,
    },
  ];

  return (
    <>
      {/* Meta Information for SEO */}
      <Head>
        <title>Uzbekistan Medi | Top Medical Universities in Uzbekistan</title>
        <meta
          name="description"
          content="Explore top medical universities in Uzbekistan with Uzbekistan Medi. Find MBBS programs, admission guidance, and scholarship opportunities."
        />
        <meta
          name="keywords"
          content="MBBS in Uzbekistan, medical universities, Andijan State Medical Institute, Tashkent Medical Academy, Uzbekistan medical schools"
        />
        <meta name="author" content="Uzbekistan Medi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.uzbekistanmedi.com" />
        <link rel="icon" href="/images/favicon.ico" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Uzbekistan Medi | Top Medical Universities in Uzbekistan"
        />
        <meta
          property="og:description"
          content="Explore top medical universities in Uzbekistan with Uzbekistan Medi."
        />
        <meta
          property="og:image"
          content="https://www.uzbekistanmedi.com/images/logo.png"
        />
        <meta property="og:url" content="https://www.uzbekistanmedi.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Uzbekistan Medi | Top Medical Universities in Uzbekistan"
        />
        <meta
          name="twitter:description"
          content="Explore top medical universities in Uzbekistan with Uzbekistan Medi."
        />
        <meta
          name="twitter:image"
          content="https://www.uzbekistanmedi.com/images/logo.png"
        />
        <meta name="twitter:site" content="@uzbekistanmedi" />
      </Head>

      <header className="w-full bg-[#00000080] backdrop-blur-md fixed top-0 left-0 z-50">
        <nav className="w-[90%] md:w-[80%] mx-auto flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <h1 className="text-[16px] md:text-3xl font-bold text-white">
            Uzbekistan <br className="md:hidden" /> Medi
          </h1>

          {/* Desktop Navigation */}
          <ul
            className="hidden xl:flex flex-wrap gap-4 md:gap-6 mt-2 lg:mt-0"
            ref={menuRef}
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <div className="relative">
                  <Link
                    href={item.href}
                    className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer flex items-center gap-1"
                    onClick={() => {
                      if (item.dropdown) toggleDropdown(index);
                    }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <RiArrowDropDownLine
                        className={`text-white text-3xl transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    )}
                  </Link>
                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 bg-white text-black mt-2 shadow-lg rounded-md z-10 w-[300px]">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-base text-black hover:bg-gray-200 transition duration-200 ease-in-out border-b border-gray-300 pb-2 "
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Call-to-Action & Mobile Menu Icon */}
          <div className="flex items-center gap-2 xl:hidden">
            <button className="text-base py-1 px-3 bg-[#0da9b0] text-white rounded-md hover:bg-teal-600">
              Apply Now
            </button>
            <IoMdMenu
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>

          {/* Mobile Navigation */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-500`}
          >
            <div className="flex justify-between items-center px-4 py-5 border-b border-gray-400">
              <h2 className="text-xl font-bold">Uzbekistan Medi</h2>
              <IoMdClose
                className="text-3xl cursor-pointer"
                onClick={toggleMobileMenu}
              />
            </div>
            <nav className="flex flex-col gap-6 mt-6 px-2 w-[500px] ">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center font-semibold   gap-3 text-lg hover:bg-gray-200 transition duration-200 ease-in-out border-b  border-gray-400 pb-2 "
                    onClick={() => {
                      if (item.dropdown) toggleDropdown(index);
                    }}
                  >
                    {item.icon} {item.label}
                    {item.dropdown && (
                      <RiArrowDropDownLine
                        className={`text-black text-3xl transition-transform ${
                          activeDropdown === index ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    )}
                  </Link>
                  {item.dropdown && activeDropdown === index && (
                    <ul className="pl-3 mt-2    hover:bg-gray-200 transition duration-200 ease-in-out pb-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className=" text-lg pb-3 flex font-medium   border-b border-gray-400 text-black hover:text-black transition duration-200 ease-in-out"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
