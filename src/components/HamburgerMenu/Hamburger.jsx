import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  return (
    <div className="relative">
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center justify-center gap-10">
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#contact">Contact</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#resume">Resume</NavItem>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-50 w-10 h-10 flex flex-col justify-center items-center"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.span
          className="w-6 h-0.5 bg-white mb-1.5"
          variants={topLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white mb-1.5"
          variants={middleLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white"
          variants={bottomLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center gap-8 z-40"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#contact">Contact</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#resume">Resume</NavItem>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hamburger;