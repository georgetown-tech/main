module.exports = function generateFile(members) {

    let output = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//hacksw/handcal//NONSGML v1.0//EN",
        "URL:http://gtowntech.org/api/events",
        "NAME:GDT Birthdays",
        "X-WR-CALNAME:GDT Birthdays",
        "DESCRIPTION:The official calendar of GDT birthdays.",
        "X-WR-CALDESC:The official calendar of GDT birthdays.",
        "TIMEZONE-ID:America/New_York",
        "X-WR-TIMEZONE:America/New_York",
        "REFRESH-INTERVAL;VALUE=DURATION:PT12H",
        "X-PUBLISHED-TTL:PT12H",
        "COLOR:252:56:88",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH"
    ];

    members.forEach((i, n) => {

        if (i.birthdate == '') return;

        console.log(i)

        const start = new Date(Date.parse(i.birthdate))

        const slug = `${i.first} ${i.last}`.toLowerCase().replace(/\s/g, '-');

        // this is spaghetti but i dont care.
        const dateFormat = `${start.getFullYear().toLocaleString('en-US', {minimumIntegerDigits: 4, useGrouping:false})}${(start.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}${start.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
        const alternateFormat = start.toISOString().replace(/(\.|\:|\-)/g, '').slice(0, -4);

        output.push(
            "BEGIN:VEVENT",
            `UID:${slug}@gtowntech.org`,
            "ORGANIZER;CN=Georgetown Disruptive Tech:MAILTO:disruptivetech@georgetown.edu",
            `DTSTART;VALUE=DATE:${dateFormat}`,
            `DTEND;VALUE=DATE:${dateFormat}`,
            `SUMMARY:${i.first} ${i.last}'s Birthday`,
            `DTSTAMP:${alternateFormat}`,
            "TRANSP:TRANSPARENT",
            `ATTACH:https://gtowntech.org/team/${slug}`,
            "END:VEVENT",
        );

    })

    output.push(
        "END:VCALENDAR"
    )

    return output.join('\r\n')

}
