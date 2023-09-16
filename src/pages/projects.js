import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Program from "../components/program"

function ProgramsPage({location}) {

  let programData = require('../../data/programs.json')
  let programs = programData.programs;

  return (
    <Layout location={location} crumbLabel="programs" >
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 mt-24">
          <h2 className="font-bold text-4xl mb-4">Programs</h2>
          <p className="text-xl mb-16 max-w-2xl">{programData.description}</p>
          <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
            {
                programs.map(item => Program(item))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProgramsPage
