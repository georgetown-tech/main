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
      <a href="webcal://gtowntech.org/api/events" className="fixed bottom-4 right-4 w-20 aspect-square bg-primary flex justify-center items-center rounded-3xl hover:shadow-xl transition-shadow z-999">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      </a>
      {
        dateOutput.map(i => EventMonth(i))
      }
    </Layout>
  )
}

export const Head = () => <Seo title="Events" />

export default ProgramsPage
