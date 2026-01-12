"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/ui/theme-toggle";

interface MenuType {
  label: string;
  sectionId: string;
}

interface NavItemProps extends MenuType {
  as: "li" | "div";
  isMobileMenu?: boolean;
  setMobileOpen?: (isOpen: boolean) => void;
  className?: string;
}

const menu = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Experience", sectionId: "experience" },
  { label: "Skills", sectionId: "skills" },
] as MenuType[];

export function NavItem({
  as,
  label,
  sectionId,
  isMobileMenu = false,
  setMobileOpen,
  className,
}: NavItemProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const router = useRouter();

  const onNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element)
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`/#${sectionId}`);
    }
    if (isMobileMenu && setMobileOpen) {
      setMobileOpen(false);
    }
  };

  const WrapperComponent = motion[as];

  return (
    <WrapperComponent whileHover={{ y: -2 }} className={className}>
      <button onClick={(e) => onNavClick(e, sectionId)}>{label}</button>
    </WrapperComponent>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <NavItem
          label="YK"
          as="div"
          sectionId="home"
          className="text-lg font-semibold text-light-text dark:text-dark-text transition-colors"
        ></NavItem>
        {/* Desktop 메뉴 */}
        <ul className="hidden md:flex space-x-8 text-light-text dark:text-dark-text">
          {menu.map((item) => (
            <NavItem
              as="li"
              className="text-lg font-medium hover:text-accent transition-colors"
              key={item.label}
              label={item.label}
              sectionId={item.sectionId}
            />
          ))}
        </ul>
        <ThemeToggle />
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
        className="overflow-hidden bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text"
      >
        <ul className="flex flex-col items-center py-16 space-y-6">
          {menu.map((item) => (
            <NavItem
              as="li"
              className="text-2xl"
              key={item.label}
              label={item.label}
              sectionId={item.sectionId}
              isMobileMenu={true}
              setMobileOpen={setMobileOpen}
            />
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
