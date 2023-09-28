import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Program from "../components/program"

import { StaticImage, getImage } from 'gatsby-plugin-image'

const Team = ({ pageContext }) => {

    const { first, last, biography, works, work } = pageContext;
    const programs = require('../../data/programs.json').programs;

    const photo = (`/members/${`${first} ${last}`.toLowerCase().replace(/\s/g, '-')}.jpeg`)

    return <Layout>
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-16">
                <img src={photo} alt={`A photo of ${first} ${last}.`} class="rounded-full h-48 mb-4 aspect-square object-cover" />
                <h1 className="font-bold text-4xl mb-4">{first} {last}</h1>
                <p className="text-xl mb-16 max-w-2xl" dangerouslySetInnerHTML={{ __html: biography }} />
                <h2 className="font-bold text-3xl mb-4">{first}'s Work</h2>
                <p className="text-xl mb-16 w-full" dangerouslySetInnerHTML={{ __html: works }} />
                <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
                    {
                        work.map(item => Program(programs[item]))
                    }
                </div>
            </div>
        </section>
    </Layout>
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.first} ${pageContext.last}`} 
    description={pageContext.biography} 
    image={pageContext.photo} 
    breadcrumbs={{ "Home": "https://about.fairfieldprogramming.org/", "Our Team": "https://about.fairfieldprogramming.org/team", [`${pageContext.first} ${pageContext.last}`]: `https://about.fairfieldprogramming.org/team/${pageContext.slug}` }} />

export default Team
