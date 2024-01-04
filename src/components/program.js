import * as React from "react"
import { Link } from "gatsby"
const Program = ({ title, icon, slug, description }) => {

    return <Link className="block w-full h-full" to={`/projects/${slug}`}>
        <div className="rounded shadow p-4 h-full">
            <img className="h-12 w-40 object-contain object-left mb-2" src={icon} alt={`Icon for ${title}`}></img>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-md line-clamp-3">{description || ""}</p>
        </div>
    </Link>

}

export default Program
