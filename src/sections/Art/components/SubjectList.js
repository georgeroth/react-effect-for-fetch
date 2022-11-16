export default function SubjectList({artwork}) {
    return(
        {artwork.subject_titles.length === 0 ? 
            <li>No artistic subjects found</li>
            :              
             artwork.subject_titles.map((title, index) => {
                return (
                <li key={index}>{title}</li>   
                )
            })
          }
    )
}