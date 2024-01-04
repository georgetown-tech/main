import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, Image } from "gatsby"

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

function Person({ first, last, biography, has_image, location = "", crumbLabel }) {
  let slug = `${first}-${last}`.toLowerCase()

  let photoEnd = `${`${first} ${last}`.toLowerCase().replace(/\s/g, '-')}.jpeg`
  const photo = has_image ? `/members/${photoEnd}` : `/members/placeholder.jpeg`

  return (<>
    <Link className="block w-full h-full" to={`/team/${slug}`}>
      <div className="rounded shadow p-4 h-full">
        <img 
            src={photo} 
            loading="lazy"
            class="rounded-full w-1/2 mb-4 aspect-square object-cover" />
        <h3 className="text-lg font-bold">
          {first} {last}
        </h3>
        <p className="text-md line-clamp-5" dangerouslySetInnerHTML={{ __html: biography }} />
      </div>
    </Link>
  </>
  )
}
export default Person
