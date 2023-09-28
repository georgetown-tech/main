import { Link } from "gatsby"
import * as React from "react"

const Event = ({ title, description, location }) => {
  
  const slug = ''

  return (
    <Link to={`/events/${slug}`} className="hover:shadow-lg transition-shadow ">
      <article className="w-full bg-slate-100 rounded-lg h-32 flex justify-center p-4 flex-col">
          <h3 className="font-bold">{title}</h3>
          <p className="font-light text-sm">{location}</p>
      </article>
    </Link>
  )
}

export default Event
