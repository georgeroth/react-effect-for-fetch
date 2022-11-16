import ArtListItem from "./ArtListItem"

export default function ArtList({artworks}) {
    return (
        <section>
        <h2>Arts Section</h2>
        <div className="scroll-container">
          <ul className="art-list">
        {artworks.map((artwork, index) => {
          return (
            <ArtListItem artwork={artwork} index={index} key={index}/>
          )
        })}
        </ul>
      </div>
    </section>
    )
}