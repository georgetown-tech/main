import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

// import {StlViewer} from "react-stl-viewer";
      
const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}

function IndexPage({location}) {

  let generalData = require('../../data/general.json')
  let currentFund = generalData.fund.lifetime;

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Layout location={location} crumbLabel="Home">
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              We Build Projects,
              <strong class="font-extrabold text-active sm:block">
                &nbsp;To Help Our Community.
              </strong>
            </h1>

            <p class="mt-4 sm:text-xl sm:leading-relaxed">
              Since 2017, Georgetown Disruptive Tech has changed the way that our school interacts with computer science.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                class="block w-full rounded bg-active px-12 py-3 text-sm font-medium text-white shadow hover:bg-active focus:outline-none focus:ring active:bg-active sm:w-auto"
                to="/projects"
              >
                Projects
              </Link>

              <Link
                class="block w-full rounded px-12 py-3 text-sm font-medium text-active shadow hover:text-active focus:outline-none focus:ring active:text-active sm:w-auto"
                to="/about"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex gap-2">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4">From Hoyas to the Hilltop.</h2>
            <p className="mb-2 text-lg">Georgetown Disruptive Technology is the leading technology-oriented club at Georgetown University. Our goal is to provide students with the resources they need to succeed in the ever-changing world of technology. From programming to cyber security, we offer a wide range of workshops and events to help you stay ahead of the curve.</p>
            <p className="mb-2 text-lg">Whether it's software development, machine learning, data analytics, or graphic design, GDT is your "one stop shop" to pursue your passions and explore new interests.</p>
            <div className="mt-4">
              <Link className="text-lg underline" to="/about">Learn More About What We Do.</Link>
            </div>
          </div>
          <div className="w-1/3 hidden text-slate-200 md:block">
            {
              // <img className="w-full rounded" src={generalData.images?.general[0].src} alt={generalData.images?.general[0].alt} />
            }
          </div>
        </div>
      </section>
      <section className="bg-active w-full px-16 py-8">
        <div class="text-center">
          <h2 className="text-xl uppercase text-white font-bold tracking-wider mb-4">Our Current Fund</h2>
          <p className="text-8xl font-bold text-white">{USDollar.format(currentFund)}</p>
          <p className="text-white">have been generated over our lifetime.</p>
          <Link className="block underline text-white mt-4" to="/about#fund">More About Our Fund</Link>
        </div>
      </section>
      <section className="w-full px-16 py-8 my-16">
        <div className="max-w-6xl mx-auto pb-16 px-4 flex gap-2">
          <div className="w-1/3 hidden text-slate-200 md:block">
            {
              // <img className="w-full rounded" src={generalData.images?.general[0].src} alt={generalData.images?.general[0].alt} />
            }
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4">A Community Driven Approach.</h2>
            <p className="mb-2 text-lg">One of our main focuses is the community that we create around Georgetown. All of our members are students at the University, and all of our projects are focused around the University and the surrounding area.</p>
            <p className="mb-2 text-lg">Whether it's a new platform for the Hoya, a machine learning project for the Cherry Blossom Festival, or a whole new, tech-driven approach for a Georgetown club, GDT is ready to create it.</p>
            
          </div>
        </div>
      </section>
      <section className="bg-white w-full px-16 py-8 flex align-center justify-center">
        <div class="text-center max-w-xl">
          <h2 className="text-xl uppercase text-black font-bold tracking-wider mb-4">From Our President</h2>
          <p className="text-3xl text-black font-light">"This is a really good sounding quote. It makes me sound smart."</p>
          <p className="text-xl font-black text-black mt-8 uppercase">Lucas Raskin<br /><b class="text-xl">Class of '25</b></p>
        </div>
      </section>
    </Layout>
  )
}


export const Head = () => <Seo title="Home" />

export default IndexPage


