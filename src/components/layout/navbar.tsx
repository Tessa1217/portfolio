import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNavClick = (href: string) => {
    const hash = href.slice(1);
    const element = document.getElementById(hash);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const menu = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <nav
      className={`fixed z-50 transition-colors duration-300 backdrop-blur-lg top-0 left-0 right-0 w-full
      ${
        scrolled
          ? "md:top-2 md:w-3/4 md:mx-auto md:rounded-3xl md:bg-light-background/30 md:dark:bg-dark-background/70 md:shadow-md"
          : "md:top-0 md:w-full md:bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-light-text dark:text-dark-text"
        >
          YK
        </a>

        {/* Desktop 메뉴 */}
        <ul className="hidden md:flex space-x-8 text-light-text dark:text-dark-text">
          {menu.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ y: -2 }}
              className="text-lg font-medium hover:text-accent transition-colors"
            >
              <button onClick={() => onNavClick(item.href)}>
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Call-to-Action 버튼 */}
        <div className="hidden md:block">
          {/* <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="
              px-6 py-2 rounded-full
              bg-accent text-[#0D1B2A] font-semibold
              hover:bg-accent/80 transition
            "
          >
            Contact
          </motion.a> */}
        </div>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden text-light-text dark:text-dark-text text-2xl"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* 모바일 드로어 메뉴 */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: mobileOpen ? "100vh" : 0 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="overflow-hidden bg-[#0D1B2A] text-white"
      >
        <ul className="flex flex-col items-center py-16 space-y-6">
          {menu.map((item) => (
            <li key={item.href} className="text-2xl">
              <a href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          {/* <li>
            <a
              href="#contact"
              className="
                px-8 py-3 rounded-full bg-accent text-[#0D1B2A]
                font-semibold hover:bg-accent/80
              "
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </li> */}
        </ul>
      </motion.div>
    </nav>
  );
}
