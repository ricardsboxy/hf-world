"use client";
import Link from 'next/link';
import headerCSS from './headerCSS.module.css';
import { usePathname } from 'next/navigation';

export const HeaderList = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      href: '/',
      title: 'Hide And Seek',
      subtitle: 'Pat kaimiņš spēlē',
    },
    {
      href: '/Survival',
      title: 'HFW SMP',
      subtitle: 'Survival [coming soon]',
    },
  ];

  return (
    <ul className={headerCSS["nav__wrapper"]}>
      {navLinks.map(link => (
        <li
          key={link.href}
          className={
            headerCSS["nav__item"] +
            (pathname === link.href ? ' ' + headerCSS["active"] : '')
          }
        >
        <Link href={link.href} className={headerCSS["nav__link"]}>
            <h2 style={{ margin: 0 }}>{link.title}</h2>
            <span style={{ fontSize: "0.9rem", color: "#bbb" }}>{link.subtitle}</span>
        </Link>
        </li>
      ))}
    </ul>
  );
}