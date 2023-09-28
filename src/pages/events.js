import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Program from "../components/program"
import EventMonth from "../components/eventMonth"

import generateBirthdaysFile from "../utility/birthdays"

const monthDiff = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function ProgramsPage({location}) {

  let team = require('../../data/team.json')
  console.log(generateBirthdaysFile(team))

  let events = require('../../data/events.json')
  let maxDate = new Date();

  events.forEach(i => {

    if (maxDate < new Date(i.startTime)) {

      maxDate = new Date(i.startTime)

    }

  })

  const startDate = new Date("September 2023")
  const monthCount = monthDiff(startDate, maxDate) + 1
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const dateOutput = []

  for (let i = 0; i < monthCount; i++) {
    
    const _minDate = new Date();
    _minDate.setFullYear(startDate.getFullYear() + Math.floor((startDate.getMonth() + i - 1) / 12))
    _minDate.setMonth((startDate.getMonth() + i - 1) % 12)

    const _maxDate = new Date();
    _maxDate.setFullYear(startDate.getFullYear() + Math.floor((startDate.getMonth() + i) / 12))
    _maxDate.setMonth((startDate.getMonth() + i) % 12)

    dateOutput.push({
      title: `${months[(startDate.getMonth() + i) % 12]} ${startDate.getFullYear() + Math.floor((startDate.getMonth() + i) / 12)}`,
      events: events.filter(i => {

        return new Date(i.startTime) >= _minDate && new Date(i.startTime) < _maxDate;

      })
    })

  }

  return (
    <Layout location={location} crumbLabel="programs" >
      <h1 className="hidden">Events</h1>
      <div>
        <a target="_blank" rel="noopener" href="/api/events.ics" class="">
          Add to Calendar
        </a>
      </div>
      {
        dateOutput.map(i => EventMonth(i))
      }
    </Layout>
  )
}

export const Head = () => <Seo title="Events" />

export default ProgramsPage
