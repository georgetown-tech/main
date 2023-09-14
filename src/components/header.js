import * as React from "react"
import Logo from "../res/gdt.svg";
import { Link } from "gatsby"

const Header = ({  }) => (
  <header aria-label="Site Header" class="shadow-sm">
    <div class="mx-auto max-w-screen-lg p-2 flex flew-row gap-4">
      <div class="flex items-center justify-center">
        <Link class="m-0 p-0" to="/">
          <img class="h-16 m-0" src={Logo} alt="The Fairfield Programming Association Logo" />
        </Link>
      </div>
      <div class="flex items-center justify-center gap-4 lg:gap-10">
        <nav
          aria-label="Site Nav"
          class="w-min gap-4 text-sm font-medium flex md:gap-8"
        >
          <Link class="text-gray-500 no-underline" to="/about">About</Link>
          <Link class="text-gray-500 no-underline" to="/projects">Projects</Link>
          <Link class="text-gray-500 no-underline" to="/team">Team</Link>
          <Link class="text-gray-500 no-underline" to="/contact">Contact</Link>
          <Link class="text-gray-500 no-underline whitespace-nowrap" to="/join">Join Us</Link>
        </nav>
      </div>
    </div>
  </header>

)

export default Header
