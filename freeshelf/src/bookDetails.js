// import React from 'react'
import { useState } from 'react'
import { TriangleDownIcon, TriangleRightIcon } from '@primer/octicons-react'

// function BookDetails(props) {
//     return (
//         <button className={props.color} onClick={() => props.setColor(props.color)}>
//             {props.color}
//         </button>
//     )
// }

// export default ColorChangeButton

export default function BookDetails({ book, index }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <div onClick={() => setExpanded(!expanded)}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.shortDescription}</p>
            {expanded ? (
                <>
                    <div
                        className="disclosure-control"
                        role="button"
                        aria-expanded={expanded}
                    >
                        <TriangleDownIcon size={24} aria-label="Show less" />
                        <span>Show less</span>
                    </div>

                    <p>{book.url}:</p>
                    <p>{book.publisher}:</p>
                    <p>{book.publicationDate}:</p>
                    <p>{book.detailedDescription}:</p>

                </>
            ) : (
                <div
                    className="disclosure-control"
                    role="button"
                    aria-expanded={expanded}
                >
                    <TriangleRightIcon size={24} aria-label="Show more" />
                    <span>Show more</span>
                </div>
            )}
        </div>
    )
}