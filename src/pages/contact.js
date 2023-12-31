import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

function ContactPage({location}) {

    return (
        <Layout location={location} crumbLabel="Contact">
            <section>
                <div
                class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
                >
                    <div class="mx-auto max-w-4xl text-center">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            Contact GDT
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-6xl mx-auto pb-16 px-4 flex flex-col">
                    <p className="text-lg">If you would like to contact GDT, please reach out to info@gtowntech.org.</p>
                </div>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage
