import { useEffect, useState } from "react"

function ArtsSection() {
  const [artworks, setArtworks] = useState([])


useEffect(() => {
  fetch(`https://api.artic.edu/api/v1/artworks?limit=10`)
   .then((res) => res.json())
   .then((data) => setArtworks(data.data)); 
}, [])

console.log(artworks)

  return (
    <section>
      <h2>Arts Section</h2>
        <div className="scroll-container">
          <ul className="art-list">
        {artworks.map((artwork, index) => {
          return (
            <li key={index}>
              <div className="frame">
                <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.title}/>
              </div>
              <h3>{artwork.title}</h3>
              <p>Artist: {artwork.artist_title}</p>
              <h4>Artistic Subjects:</h4>
              <ul>
              {artwork.subject_titles.length === 0 ? <li>No artistic subjects found</li>
              :              
              artwork.subject_titles.map((title, index) => {
                return (
                  <li key={index}>{title}</li>   
                )
              })
              }
              </ul>
            </li>
          )
        })}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
