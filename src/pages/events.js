import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import EventMonth from "../components/eventMonth"

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
    _minDate.setFullYear(startDate.getFullYear() + Math.floor((startDate.getMonth() + i) / 12))
    _minDate.setMonth((startDate.getMonth() + i) % 12)

    const _maxDate = new Date();
    _maxDate.setFullYear(startDate.getFullYear() + Math.floor((startDate.getMonth() + i + 1) / 12))
    _maxDate.setMonth((startDate.getMonth() + i + 1) % 12)

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
      <a href="webcal://gtowntech.org/api/events" className="fixed bottom-4 right-4 w-20 aspect-square bg-primary flex justify-center items-center rounded-3xl hover:shadow-xl transition-shadow z-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
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
