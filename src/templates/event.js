import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"

const Submit = (email, slug) => {

  return function (event) {

    alert(email)
    event.preventDefault();

    const form = new FormData()

    form.append("email", email);
    form.append("eventId", slug);

    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScfXqpz0wPKUIYmLHYgYvhl9gYbFYF_qJbZuTKHYAbNP9UuxA/formResponse', {
      method: "POST",
      body: form
    }).then((data) => {



    }).catch((error) => {

      console.log(error)
      return

    })

  }

}

const Event = ({ pageContext }) => {

  const { title, description, location, image, slug } = pageContext;
  const [ email, setEmail ] = React.useState("");

  return <Layout>
    <section className="relative overflow-hidden">
      <div class="mx-auto max-w-screen-xl px-4 py-16 z-40 opacity-100">
        <h1 className="font-bold text-4xl mb-4 z-40">{title}</h1>
        <p className="text-xl max-w-2xl z-40">{location}</p>
      </div>
      <img className="absolute left-0 right-0 top-0 bottom-0 opacity-40 z-20 w-full h-full object-cover" src={image} alt={`Image for the '${title}' event.`} />
    </section>
    <section>
      <div class="mx-auto max-w-screen-lg px-4 py-8 mt-8 z-40"> 
        <form class="w-full flex flex-row gap-2" 
          // onSubmit={Submit(email, slug)}
          method="POST"
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScfXqpz0wPKUIYmLHYgYvhl9gYbFYF_qJbZuTKHYAbNP9UuxA/formResponse"
          target="_self"
          >
          <input class="w-full bg-slate-100 p-4 text-md rounded border" placeholder="Email for RSVP" name="entry.996275753" type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
          <input name="entry.1105744832" type="hidden" value={slug} />
          <input class="bg-green-400 px-8 rounded font-black hover:cursor-pointer hover:bg-green-500" type="submit" value="RSVP" />
        </form>
      </div>
    </section>
    <section>
      <div class="mx-auto max-w-screen-lg px-4 py-8 mb-8 z-40"> 
        <p className="text-xl">{description}</p>
      </div>
    </section>
  </Layout> 
}

export const Head = ({ pageContext }) => <Seo title={`${pageContext.title}`} />

export default Event
