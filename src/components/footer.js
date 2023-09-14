import * as React from "react"
import Logo from "../res/gdt.svg";
import { Link } from "gatsby"
const Footer = ({ siteTitle }) => {

  const programs = require('../../data/programs.json').programs

  return <footer aria-label="Site Footer" class="bg-white">
    <div
      class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div class="text-teal-600">
            <img class="h-16" src={Logo} alt="The Fairfield Programming Association Inc. Logo" />
          </div>

          <p class="max-w-xs mt-4 text-gray-500">
            37th and O St NW
          </p>
          <p class="max-w-xs text-gray-500">
            Washington, DC 20057
          </p>
          <a href="mailto:info@gtowntech.org" target="_top" class="max-w-xs text-gray-500 hover:underline">
            info@gtowntech.org
          </a>

          <ul class="flex gap-6 mt-8">
            {/* <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">Facebook</span>

                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li> */}

            {/* <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">Instagram</span>

                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li> */}

            <li>
              <a
                href="https://twitter.com/FairfieldCoding"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">Twitter</span>

                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/fairfield-programming/"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">GitHub</span>

                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/qtu2MXGhcf"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">Discord</span>

                <svg 
                class="w-8 h-9"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
               </svg>
              </a>
            </li>
          </ul>
        </div>

        <div
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
        >
          <div>
            <p class="font-medium text-gray-900">Programs</p>

            <nav aria-label="Footer Navigation - Services" class="mt-6">
              <ul class="space-y-4 text-sm">
                {
                  programs.filter((n, i) => i < 4).map(program => <li>
                    <Link to={`/programs/${program.slug}`} class="text-gray-700 transition hover:opacity-75">
                      {program.title}
                    </Link>
                  </li>)
                }
              </ul>
            </nav>
          </div>

          <div>
            <p class="font-medium text-gray-900">Organization</p>

            <nav aria-label="Footer Navigation - Organization" class="mt-6">
              <ul class="space-y-4 text-sm">
                <li>
                  <Link to="/mission" class="text-gray-700 transition hover:opacity-75">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/team" class="text-gray-700 transition hover:opacity-75">
                    Meet the Team
                  </Link>
                </li>

                <li>
                  <Link to="/contact" class="text-gray-700 transition hover:opacity-75">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p class="font-medium text-gray-900">Helpful Links</p>

            <nav aria-label="Footer Navigation - Company" class="mt-6">
              <ul class="space-y-4 text-sm">
                <li>
                  <Link to="/documents" class="text-gray-700 transition hover:opacity-75">
                    Documents
                  </Link>
                </li>

                <li>
                  <Link to="/press" class="text-gray-700 transition hover:opacity-75">
                    Press and Media
                  </Link>
                </li>

                <li>
                  <Link to="/faq" class="text-gray-700 transition hover:opacity-75">
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link to="/support" class="text-gray-700 transition hover:opacity-75">
                    Donate
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p class="font-medium text-gray-900">Legal</p>

            <nav aria-label="Footer Navigation - Legal" class="mt-6">
              <ul class="space-y-4 text-sm">
                <li>
                  <Link to="/accessibility" class="text-gray-700 transition hover:opacity-75">
                    Accessibility
                  </Link>
                </li>

                <li>
                  <Link to="/terms" class="text-gray-700 transition hover:opacity-75">
                    Terms and Conditions
                  </Link>
                </li>

                <li>
                  <Link to="/privacy" class="text-gray-700 transition hover:opacity-75">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <p class="text-xs text-gray-500">
        &copy; {new Date().getFullYear()}. The Fairfield Programming Association Inc. All rights reserved.
      </p>
    </div>
  </footer>

}

export default Footer
