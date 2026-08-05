"use client";

import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import styles from "./Header.module.css";

import { ColorButton } from "@/components/ui/colorButton/ColorButton";
import { IconBurger, IconClose, IconLogo } from "@/components/ui/icons/Icons";
import Link from "next/link";

const links = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "RESIPES",
    href: "/recipes",
  },
  {
    name: "COOKING TIPS",
    href: "/cooking-tips",
  },
  {
    name: "ABOUT US",
    href: "/about",
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const bottomContainer = clsx({
    [styles.bottomContainer]: true,
    [styles.bottomContainerOpen]: isMenuOpen,
  });

  const header = clsx({
    [styles.header]: true,
    [styles.headerOpen]: isMenuOpen,
  });

  const handleClickClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={header}>
      <div className={styles.topContainer}>
        <Link href="/">
          <div className={styles.logo}>
            <IconLogo />
            <div>
              Cooks <br /> Delight
            </div>
          </div>
        </Link>
        <button
          className={styles.burger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IconClose /> : <IconBurger />}
        </button>
      </div>
      <div className={bottomContainer}>
        <nav className={styles.menu}>
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx({ [styles.active]: pathname === link.href })}
                onClick={handleClickClose}
              >
                {link.name}
              </Link>
            );
          })}
          {/* <Link
            href="/"
            className={clsx({ [styles.active]: pathname === link.href })}
            onClick={handleClickClose}
          >
            HOME
          </Link> */}
          {/* <Link
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleClickClose}
            href="/recipes"
          >
            RESIPES
          </Link>
          <Link
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleClickClose}
            href="/cooking-tips"
          >
            cooking tips
          </Link>
          <Link
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleClickClose}
            href="/about"
          >
            ABOUT US
          </Link> */}
        </nav>
        <div>
          <ColorButton name="Subscribe" bcgColor="dark" />
        </div>
      </div>
    </header>
  );
};
