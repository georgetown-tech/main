import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"

const Event = ({ pageContext }) => {

  const { title, description, location, image } = pageContext;

  return <Layout>
    <section className="relative overflow-hidden">
      <div class="mx-auto max-w-screen-xl px-4 py-16 z-40 opacity-100">
        <h1 className="font-bold text-4xl mb-4 z-40">{title}</h1>
        <p className="text-xl max-w-2xl z-40">{location}</p>
      </div>
      <img className="absolute left-0 right-0 top-0 bottom-0 opacity-40 z-20 w-full h-full object-cover" src={image} alt={`Image for the '${title}' event.`} />
    </section>
    <section>
      <div class="mx-auto max-w-screen-lg px-4 py-16 z-40"> 
        <p className="text-xl">{description}</p>
      </div>
    </section>
  </Layout> 
}

export const Head = ({ pageContext }) => <Seo title={`${pageContext.title}`} />

export default Event
