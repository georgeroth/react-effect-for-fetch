import { useEffect, useState } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artworks, setArtworks] = useState([])

useEffect(() => {
  fetch(`https://api.artic.edu/api/v1/artworks?limit=10`)
   .then((res) => res.json())
   .then((data) => setArtworks(data.data)); 
}, [])

  return (
    <ArtList artworks={artworks}/>
  )
}

export default ArtsSection
