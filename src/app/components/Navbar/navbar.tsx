"use client";
import Link from "next/link";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="who">
    <nav>
    
      <ul>
      <li> <p className="me">Marquis.</p></li>
        <li>
          
          <Link href="./">Home</Link>
        </li>
    
        <li>
          <Link href="/About">About</Link>
        </li>

        <li>
          <Link href="/projects/">projects</Link>
        </li>

        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}
