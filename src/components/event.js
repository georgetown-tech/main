import { Link } from "gatsby"
import * as React from "react"

const Event = ({ title, startTime, location, slug, image }) => {
  
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
      <article className="relative w-full bg-slate-700 rounded-lg h-32 flex justify-center p-4 flex-col overflow-hidden">
          <img className="absolute z-10 opacity-40 top-0 bottom-0 right-0 left-0 object-cover w-full h-full" src={image} alt={`Image for the '${title}' event.`} />
          <h3 className="font-bold z-20 text-white">{title}</h3>
          <p className="font-light text-sm z-20 text-white">{location}</p>
          <span className="absolute right-4 top-4 z-30 text-white">{date.getDate()}{suffix[date.getDate()]}</span>
      </article>
    </Link>
  )
}

export default Event
