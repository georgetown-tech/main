import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Logo from "../res/favicon.svg"

import Person from "../components/person"
import { QRCode } from 'react-qrcode-logo';

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

  const { title, description, location, image, slug, startTime } = pageContext;
  const [ email, setEmail ] = React.useState("");

  return <Layout>
    <section className="relative overflow-hidden print:hidden">
      <div class="mx-auto max-w-screen-xl px-4 py-16 z-40 opacity-100">
        <h1 className="font-bold text-4xl mb-4 z-40">{title}</h1>
        <p className="text-xl max-w-2xl z-40">{location}</p>
      </div>
      <img className="absolute left-0 right-0 top-0 bottom-0 opacity-40 z-20 w-full h-full object-cover" src={image} alt={`Image for the '${title}' event.`} />
    </section>
    <section className="print:hidden">
      <div class="mx-auto max-w-screen-lg px-4 py-2 mt-4 z-40 flex flex-row justify-end">
        <button className="underline text-primary" onClick={() => navigator.clipboard.writeText(window.location.href)}>Copy Page Link</button>
        &nbsp;&#x2022;&nbsp;
        <button className="underline text-primary" onClick={() => window.print()}>Print as Flier</button>
      </div>
    </section>
    <section className="print:hidden">
      <div class="mx-auto max-w-screen-lg px-4 py-4 mt-2 z-40"> 
        <form class="w-full flex flex-row gap-2" 
            // onSubmit={Submit(email, slug)}
            method="POST"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScfXqpz0wPKUIYmLHYgYvhl9gYbFYF_qJbZuTKHYAbNP9UuxA/formResponse"
            target="_self"
          >
          <input class="w-full bg-slate-100 p-4 text-md rounded border" placeholder="Email for RSVP" name="entry.996275753" type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
          <input name="entry.1105744832" type="hidden" value={slug} />
          <input class="bg-primary text-white px-8 rounded font-black hover:cursor-pointer hover:bg-green-500" type="submit" value="RSVP" />
        </form>
      </div>
    </section>
    <section>
      <div class="mx-auto max-w-screen-lg px-4 py-8 mb-8 z-40 print:hidden"> 
        <p className="text-xl">{description}</p>
      </div>
    </section>
    <section class="hidden print:flex h-screen pt-32 flex-col justify-between">
      <div className="flex flex-col">
        <span className="uppercase font-bold text-xl">{new Date(startTime).getHours() % 12}:{new Date(startTime).getMinutes() < 10 ? '0' : ''}{new Date(startTime).getMinutes()}{new Date(startTime).getHours() > 12 ? "PM" : "AM"} @ {location}</span>
        <span className="text-6xl font-black leading-tight">GDT is Hosting <b className="text-primary">{title}</b></span>
        <p className="text-2xl mt-4 text-justify">{description}</p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-1/2">
          <span className="text-3xl font-black leading-tight"><b className="text-primary">Scan the QR Code</b> to View More Details About This GDT Event.</span>
          <svg className="w-full" viewBox="0 0 200 80">
            <defs>
              <marker 
                id='head' 
                orient="auto" 
                markerWidth='10' 
                markerHeight='8' 
                refX='0.1' 
                refY='2'
              >
                <path d='M0,0 V4 L4,2 Z' fill="black" />
              </marker>
            </defs>

            <path
              id='arrow-line'
              marker-end='url(#head)'
              stroke-width='8'
              fill='none' stroke='black'  
              d='M40,40, 120 40,120'
            />
                  
          </svg>
        </div>
        <div className="p-2">
          <QRCode className="block w-full" qrStyle="dots" size={250} value={`https://gtowntech.org/events/${slug}`}
           logoWidth={250 * 0.3} logoImage={Logo} removeQrCodeBehindLogo={true}
          />
        </div>
      </div>
    </section>
  </Layout> 
}

export const Head = ({ pageContext }) => <Seo title={`${pageContext.title}`} />

export default Event
