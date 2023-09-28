const fs = require('fs')
const path = require('path')
const fetch = require("node-fetch");

let headers = []

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function readCSV(filedata) {

    const lines = filedata.slice(1, filedata.length - 1).split('"\n"')
    const output = []

    const headerLine = lines[0]
    headers = headerLine.split('","')

    const valueLines = lines.slice(1)

    for (const line of valueLines) {
        
        const lineData = line.split('","')
        let lineOutput = {}

        lineData.forEach((element, i) => {
            
            if (isNumeric(element)) {

                lineOutput[headers[i]] = parseInt(element);

            } else if (element == 'TRUE') {

                lineOutput[headers[i]] = true

            } else if (element == 'FALSE') {

                lineOutput[headers[i]] = false

            } else {
            
                lineOutput[headers[i]] = element

            }


        });

        output.push(lineOutput);

    }

    return output

}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {

    //   https://docs.google.com/spreadsheets/d/19cVdMPmb5pjcp-PkmXeIYhRq3xKxR4pNv3eXgvBPMbA/gviz/tq?tqx=out:csv&sheet=Cleaned+Responses

    const memberData = await fetch('https://docs.google.com/spreadsheets/d/19cVdMPmb5pjcp-PkmXeIYhRq3xKxR4pNv3eXgvBPMbA/gviz/tq?tqx=out:csv&sheet=Cleaned+Responses')
    const memberDataRaw = await memberData.text()
    const team = readCSV(memberDataRaw)

    const programsData = await fetch('https://docs.google.com/spreadsheets/d/19cVdMPmb5pjcp-PkmXeIYhRq3xKxR4pNv3eXgvBPMbA/gviz/tq?tqx=out:csv&sheet=Projects')
    const programsDataRaw = await programsData.text()
    const programs = readCSV(programsDataRaw)

    const memberProjectsData = await fetch('https://docs.google.com/spreadsheets/d/19cVdMPmb5pjcp-PkmXeIYhRq3xKxR4pNv3eXgvBPMbA/gviz/tq?tqx=out:csv&sheet=Member+Teams')
    const memberProjectsDataRaw = await memberProjectsData.text()
    const memberProjects = readCSV(memberProjectsDataRaw)

    team.forEach((i, n) => {

      team[n].work = []

    })

    console.log(memberProjects)

    memberProjects.forEach(i => {

      team[i.memberId].work.push(i.projectId)

    })

    fs.writeFileSync('./data/team.json', JSON.stringify(team, null, 4))
    fs.writeFileSync('./data/programs.json', JSON.stringify({
      description: "Below is a list of projects that Georgetown Disruptive Tech has developed. If you would like to get involved with them, please reach out and let us know.",
      programs: programs
    }, null, 4))

  // const programs = require('./data/programs.json').programs
  const partners = require('./data/partners.json').partners
  
  const { createPage } = actions

  team.forEach(member => {

    const slug = `${member.first}-${member.last}`.toLowerCase();

    createPage({
      path: `/team/${slug}`,
      component: require.resolve("./src/templates/team.js"),
      context: member,
      defer: false,
    })

  })

  programs.forEach((program, index) => {

    createPage({
      path: `/projects/${program.slug}`,
      component: require.resolve("./src/templates/program.js"),
      context: { ...program, index },
      defer: false,
    })

    if (program.pages == undefined) return;

    program.pages.forEach(page => {
      
      createPage({
        path: `/programs/${program.slug}/${page.slug}`,
        component: require.resolve("./src/templates/programPage.js"),
        context: { program, ...page, index },
        defer: false,
      })

    });

  })
  
  partners.forEach((partner, index) => {

    createPage({
      path: `/partnerships/${partner.slug}`,
      component: require.resolve("./src/templates/partner.js"),
      context: { ...partner, index },
      defer: false,
    })

  })

}
