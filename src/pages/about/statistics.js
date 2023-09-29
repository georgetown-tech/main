import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import historyImage from "../../res/images/history.jpeg"
import partnersImage from "../../res/images/google.png"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function correlationCoefficient(X, Y)
{
     
    let n = Math.min(X.length, Y.length);
    let sum_X = 0, sum_Y = 0, sum_XY = 0;
    let squareSum_X = 0, squareSum_Y = 0;
    
    for(let i = 0; i < n; i++)
    {
         
        // Sum of elements of array X.
        sum_X = sum_X + X[i];
    
        // Sum of elements of array Y.
        sum_Y = sum_Y + Y[i];
    
        // Sum of X[i] * Y[i].
        sum_XY = sum_XY + X[i] * Y[i];
    
        // Sum of square of array elements.
        squareSum_X = squareSum_X + X[i] * X[i];
        squareSum_Y = squareSum_Y + Y[i] * Y[i];
    }
    
    // Use formula for calculating correlation
    // coefficient.
    return (n * sum_XY - sum_X * sum_Y)/
    (Math.sqrt((n * squareSum_X -
            sum_X * sum_X) *
               (n * squareSum_Y -
            sum_Y * sum_Y)));
}

function ContactPage({location}) {

    const members = require('../../../data/team.json')

    let heHim = 0;
    let sheHer = 0;
    let theyTheir = 0;

    let sheHerTech = 27.6;
    let theyTheirTech = 1.10833333;
    let heHimTech = 100 - sheHerTech - theyTheirTech;

    let sheHerGeorgetown = 56;
    let heHimGeorgetown = 44;
    let theyTheirGeorgetown = 0;

    members.forEach(i => {

        if (i.gender == 'M') heHim++;
        if (i.gender == 'F') sheHer++;
        if (i.gender == 'O') theyTheir++;

    })

    let techCorrelation = correlationCoefficient([ heHim, sheHer, theyTheir ], [ heHimTech, sheHerTech, theyTheirTech ]);
    let sheHerPercent = (sheHer / (sheHer + heHim + theyTheir)) * 100;

    let genderDistance = Math.abs(sheHerPercent - 50) - Math.abs(sheHerGeorgetown - 50);

    return (
        <Layout location={location} crumbLabel="Contact">
            <section>
                <div
                class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
                >
                    <div class="mx-auto max-w-4xl text-center">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            Statistics About GDT
                        </h1>
                        <p className="text-xl mt-4 mb-16 max-w-2xl">Learn about Georgetown Disruptive Tech's founding, history, operations, structure, finances, and more.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-6xl mx-auto pb-16 px-4 flex gap-8">
                    <div className="w-1/3 hidden text-slate-200 md:block">
                        <Pie data={{
                            labels: ['He/Him', 'She/Her', 'They/Their'],
                            datasets: [
                                {
                                    label: 'Gender Distribution at GDT',
                                    data: [heHim, sheHer, theyTheir],
                                    backgroundColor: [
                                        'rgba(54, 162, 235, 0.4)',
                                        'rgba(255, 99, 132, 0.4)',
                                        'rgba(132, 132, 132, 0.4)',
                                    ],
                                    borderWidth: 0,
                                },
                            ],
                        }} />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="font-bold text-4xl mb-4">Gender Diversity at GDT</h2>
                        <p className="mb-2 text-lg">
                            Georgetown Disruptive Tech is one of the most gender-diverse technology clubs in the industry. Our 
                            data has a correlation of {Math.floor(techCorrelation * 100)}% to the tech industry, because we have {sheHerPercent}% women,
                            whereas the tech industry sits at {sheHerTech}%.
                        </p>
                        <p className="mb-2 text-lg">
                            Compared to Georgetown University, we still have a way to go. At last estimate, Georgetown has {sheHerGeorgetown}% female representation
                            from its undergraduate students. In comparison, our {sheHerPercent}% is {genderDistance}% further from 50% than Georgetown, and
                            we have made a commitment to fix that.
                        </p>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="max-w-6xl mx-auto pb-16 px-4 flex gap-2">
                <div className="w-full md:w-2/3">
                    <h2 className="font-bold text-4xl mb-4">From Hoyas to the Hilltop.</h2>
                    <p className="mb-2 text-lg">Georgetown Disruptive Technology is the leading technology-oriented club at Georgetown University. Our goal is to provide students with the resources they need to succeed in the ever-changing world of technology. From programming to cyber security, we offer a wide range of workshops and events to help you stay ahead of the curve.</p>
                    <p className="mb-2 text-lg">Whether it's software development, machine learning, data analytics, or graphic design, GDT is your "one stop shop" to pursue your passions and explore new interests.</p>
                </div>
                <div className="w-1/3 hidden text-slate-200 md:block">
                    {
                    // <img className="w-full rounded" src={generalData.images?.general[0].src} alt={generalData.images?.general[0].alt} />
                    }
                </div>
                </div>
            </section>
            <section className="w-full px-16 py-8 my-16">
                <div className="max-w-6xl mx-auto pb-16 px-4 flex gap-2">
                <div className="w-1/3 hidden text-slate-200 md:block">
                    {
                    // <img className="w-full rounded" src={generalData.images?.general[0].src} alt={generalData.images?.general[0].alt} />
                    }
                </div>
                <div className="w-full md:w-2/3">
                    <h2 className="font-bold text-4xl mb-4">A Community Driven Approach.</h2>
                    <p className="mb-2 text-lg">One of our main focuses is the community that we create around Georgetown. All of our members are students at the University, and all of our projects are focused around the University and the surrounding area.</p>
                    <p className="mb-2 text-lg">Whether it's a new platform for the Hoya, a machine learning project for the Cherry Blossom Festival, or a whole new, tech-driven approach for a Georgetown club, GDT is ready to create it.</p>
                </div>
                </div>
            </section> */}
        </Layout>
    )
}

export const Head = () => <Seo title="Statistics About GDT"  />

export default ContactPage
