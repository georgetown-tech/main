import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Program from "../components/program"

const monthDiff = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function ProgramsPage({location}) {

  let events = require('../../data/events.json')
  let maxDate = new Date();

  events.forEach(i => {

    if (maxDate < new Date(i.startTime)) {

      maxDate = new Date(i.startTime)

    }

  })

  const monthCount = monthDiff(new Date(), maxDate)
  const months = [];

  return (
    <Layout location={location} crumbLabel="programs" >
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 mt-24">
          <h2 className="font-bold text-4xl mb-4">{monthCount}</h2>
          <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
            {
              // programs.map(item => Program(item))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Events" />

export default ProgramsPage
