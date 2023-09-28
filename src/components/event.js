import { Link } from "gatsby"
import * as React from "react"

const Event = ({ title, startTime, location }) => {
  
  const slug = ''

  const suffix = [
    "",
    "st",
    "nd",
    "rd",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "st",
    "nd",
    "rd",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
    "st",
  ];

  const date = new Date(Date.parse(startTime))

  return (
    <Link to={`/events/${slug}`} className="hover:shadow-lg transition-shadow ">
      <article className="relative w-full bg-slate-100 rounded-lg h-32 flex justify-center p-4 flex-col">
          <h3 className="font-bold">{title}</h3>
          <p className="font-light text-sm">{location}</p>
          <span className="absolute right-4 top-4">{date.getDate()}{suffix[date.getDate()]}</span>
      </article>
    </Link>
  )
}

export default Event
