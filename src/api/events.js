export default function handler(req, res) {
    
    let events = require('../../data/events.json')

    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Content-Type', 'text/calendar');
    res.setHeader('Content-Type', 'text/plain');
  
    let output = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//hacksw/handcal//NONSGML v1.0//EN",
    ];

    events.forEach((i, n) => {

        console.log(i)

        const start = new Date(i.startTime).toISOString().replace(/(\.|\:|\-)/g, '').slice(0, -4);
        const end = new Date(i.endTime).toISOString().replace(/(\.|\:|\-)/g, '').slice(0, -4);

        const _start = new Date(i.start)

        const slug = n + "-" + i.title.toLowerCase().replace(/\s/g, '-').replace(/[^a-zA-Z0-9\-]/g, '')

        output.push(
            "BEGIN:VEVENT",
            `UID:${slug}@gtowntech.org`,
            `DTSTAMP:${start}`,
            "ORGANIZER;CN=Georgetown Disruptive Tech:MAILTO:disruptivetech@georgetown.edu",
            `DTSTART:${start}`,
            `DTEND:${end}`,
            `SUMMARY:${i.title}`,
            `LOCATION:${i.location}`,
            "TRANSP:OPAQUE",
            `ATTACH:https://gtowntech.org/events/${slug}`,
            "END:VEVENT",
        );

    })

    output.push(
        "END:VCALENDAR"
    )

    res.status(200).send(output.join('\n'))
}