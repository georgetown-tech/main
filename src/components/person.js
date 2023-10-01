import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function aimForCharacterCount(sentence, count) {

  let i = 0;
  let words = sentence.split(' ');
  let output = '';

  for (const word of words) {
    
    i += word.length;
    if (count < i) return output + '...';

    output += ' ' + word;

  }

  return output;

}

function Person({ first, last, biography, location = "", crumbLabel }) {
  let slug = `${first}-${last}`.toLowerCase()

  const photo = (`/members/${`${first} ${last}`.toLowerCase().replace(/\s/g, '-')}.jpeg`)

  return (<>
    <Link className="block w-full h-full" to={`/team/${slug}`}>
      <div className="rounded shadow p-4 h-full">
        <img src={photo} loading="lazy" class="rounded-full w-1/2 mb-4 aspect-square object-cover" />
        <h3 className="text-lg font-bold">
          {first} {last}
        </h3>
        <p className="text-md" dangerouslySetInnerHTML={{ __html: aimForCharacterCount(biography, 300) || ""}} />
      </div>
    </Link>
  </>
  )
}
export default Person
