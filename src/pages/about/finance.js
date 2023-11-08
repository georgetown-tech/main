import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import historyImage from "../../res/images/history.jpeg"
import partnersImage from "../../res/images/google.png"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

function average(csv, header) {
  let sum = 0

  for (let i = 0; i < csv.length; i++) {
    sum += csv[i][header] || 0
  }

  return sum / csv.length
}

function sum(csv, header) {
  let sum = 0

  for (let i = 0; i < csv.length; i++) {
    sum += csv[i][header] || 0
  }

  return sum
}

function correlationCoefficient(X, Y) {
  let n = Math.min(X.length, Y.length)
  let sum_X = 0,
    sum_Y = 0,
    sum_XY = 0
  let squareSum_X = 0,
    squareSum_Y = 0

  for (let i = 0; i < n; i++) {
    // Sum of elements of array X.
    sum_X = sum_X + X[i]

    // Sum of elements of array Y.
    sum_Y = sum_Y + Y[i]

    // Sum of X[i] * Y[i].
    sum_XY = sum_XY + X[i] * Y[i]

    // Sum of square of array elements.
    squareSum_X = squareSum_X + X[i] * X[i]
    squareSum_Y = squareSum_Y + Y[i] * Y[i]
  }

  // Use formula for calculating correlation
  // coefficient.
  return (
    (n * sum_XY - sum_X * sum_Y) /
    Math.sqrt(
      (n * squareSum_X - sum_X * sum_X) * (n * squareSum_Y - sum_Y * sum_Y)
    )
  )
}

function maxHeader(csv, headers) {
  const sums = {}

  for (let i = 0; i < csv.length; i++) {
    for (const header of headers) {
      sums[header] += csv[header]
    }
  }

  return Object.keys(sums)
    .map(i => {
      return { key: i, value: sums[i] }
    })
    .sort((a, b) => a.value - b.value)[0].key
}

function formatCurrency(number) {
  let output = "$" + Math.floor(number * 100) / 100

  if (!output.includes(".")) output += "."
  output += "00"

  output = output.slice(0, output.indexOf(".") + 3)

  return output
}

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)

function ContactPage({ location }) {
  const transactions = require("../../../data/finances.json").filter(
    i =>
      i.status == "sent" &&
      i.bankDescription != "Transfer between your Mercury accounts"
  )
  const finances = []

  let floatingEndowment = 0

  for (let i = 0; i < 365; i++) {
    const dayTransactions = transactions.filter(
      m => dayOfYear(new Date(m.createdAt)) == i
    )

    const revenue = dayTransactions
      .filter(i => i.amount > 0)
      .map(i => i.amount)
      .reduce((partialSum, a) => partialSum + a, 0)

    const costs = dayTransactions
      .filter(i => i.amount < 0)
      .map(i => -i.amount)
      .reduce((partialSum, a) => partialSum + a, 0)

    floatingEndowment = floatingEndowment + revenue - costs

    function dateFromDay(year, day) {
      var date = new Date(year, 0) // initialize a date in `year-01-01`
      return new Date(date.setDate(day)) // add the number of days
    }

    const months = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    finances[i] = {
      date: months[dateFromDay(new Date().getFullYear(), i).getMonth()],
      revenue,
      costs,
      profit: revenue - costs,
      endowment: floatingEndowment,
    }
  }

  const year = new Date().getFullYear()

  const revenueCenters = { domains: 0, events: 0, social_dues: 0, servers: 0 }
  const costCenters = { domains: 0, events: 0, social_dues: 0, servers: 0 }
  const centers = {
    domains: {
      title: "Domains",
      description: "GDT manages several internet domains.",
    },
    events: {
      title: "Events",
      description: "Throughout the year, we host several events.",
    },
    social_dues: {
      title: "Social Dues",
      description: "We collect social dues from members.",
    },
    servers: {
      title: "Servers",
      description: "Our services require paying server hosts.",
    },
  }

  transactions.forEach(i => {
    if (i.bankDescription == "STRIPE; TRANSFER") {
      revenueCenters["social_dues"] += i.amount > 0 ? i.amount : 0
      costCenters["social_dues"] += i.amount < 0 ? -i.amount : 0
      return
    }

    if (i.bankDescription == "DIGITALOCEAN.COM") {
      revenueCenters["servers"] += i.amount > 0 ? i.amount : 0
      costCenters["servers"] += i.amount < 0 ? -i.amount : 0
      return
    }

    if (
      i.details?.debitCardInfo?.id == "816dbf1c-62f1-11ee-ab11-a32404e5cd35"
    ) {
      revenueCenters["domains"] += i.amount > 0 ? i.amount : 0
      costCenters["domains"] += i.amount < 0 ? -i.amount : 0
      return
    }

    if (
      i.details?.debitCardInfo?.id == "df647d48-7450-11ee-98ff-a39212f1749d"
    ) {
      revenueCenters["events"] += i.amount > 0 ? i.amount : 0
      costCenters["events"] += i.amount < 0 ? -i.amount : 0
      return
    }
  })
  return (
    <Layout location={location} crumbLabel="Contact">
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center">
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Finances for GDT
            </h1>
            <p className="text-xl mt-4 mb-16 max-w-2xl">
              Learn about Georgetown Disruptive Tech's founding, history,
              operations, structure, finances, and more.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex gap-8 flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4">
              The State of GDT in {year}
            </h2>
            <p className="mb-2 text-lg">
              In {year} alone, GDT grew from an endowment of{" "}
              {formatCurrency(finances[0].endowment)} to{" "}
              {formatCurrency(finances[finances.length - 1].endowment)}. This
              was realized through an average profit of{" "}
              {formatCurrency(average(finances, "profit"))} per day during this
              period, or {formatCurrency(sum(finances, "profit") / 12)} per
              month.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-slate-800"></div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto pb-64 px-4">
          <Line
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "GDT Endowment",
                },
                legend: {
                  display: false,
                },
              },
            }}
            data={{
              labels: finances.map(i => i.date),
              datasets: [
                {
                  fill: true,
                  label: "GDT Endowment",
                  data: finances.map(i => i.endowment),
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
              ],
            }}
          />
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto pb-8 px-4 flex gap-8 flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4">Sources of Revenue</h2>
            <p className="mb-2 text-lg">
              As GDT moved to a project-based structure, we needed to find a way
              to maintain our programs while staying independent. Because of
              this, we began generating revenue from the products we developed.
              Below are our main sources of revenue.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pb-32  p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.keys(revenueCenters).map(i => {
            if (revenueCenters[i] <= 0) return
            return (
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <h2 className="text-xl font-bold">{centers[i].title}</h2>
                <p className="">{centers[i].description}</p>
                <p>&nbsp;</p>
                <p className="text-xl font-light">
                  {formatCurrency(revenueCenters[i])}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto pb-8 px-4 flex gap-8 flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4">Operating Costs</h2>
            <p className="mb-2 text-lg">
              To operate, GDT requires a lot of capital. We categorize all of
              our spending first by project and then by function. Below, we've
              grouped together our largest costs.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pb-64 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.keys(costCenters).map(i => {
            if (costCenters[i] <= 0) return
            return (
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <h2 className="text-xl font-bold">{centers[i].title}</h2>
                <p className="">{centers[i].description}</p>
                <p>&nbsp;</p>
                <p className="text-xl font-light">
                  {formatCurrency(costCenters[i])}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4 flex gap-8 flex-col md:flex-row">
          <div className="w-full md:w-1/3 text-slate-800"></div>
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-4xl mb-4">
              Profits, Costs, and Revenue
            </h2>
            <p className="mb-2 text-lg">
              Throughout the year, Georgetown Disruptive Tech makes and loses
              hundreds of dollars, as all businesses do. Below is a graph of the
              daily gains and loses of GDT, and how they've impacted the overall
              endowment.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto pb-16 px-4">
          <Line
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Balance Sheet",
                },
                legend: {
                  display: true,
                },
              },
            }}
            data={{
              labels: finances.map(i => i.date),
              datasets: [
                {
                  fill: true,
                  label: "Profit",
                  data: finances.map(i => i.profit),
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
                {
                  fill: true,
                  label: "Revenue",
                  data: finances.map(i => i.revenue),
                  borderColor: "rgb(162, 235, 53)",
                  backgroundColor: "rgba(162, 235, 53, 0.5)",
                },
                {
                  fill: true,
                  label: "Costs",
                  data: finances.map(i => -i.costs),
                  borderColor: "rgb(235, 53, 162)",
                  backgroundColor: "rgba(235, 53, 162, 0.5)",
                },
              ],
            }}
          />
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Finances for GDT" />

export default ContactPage
