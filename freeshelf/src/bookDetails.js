// import React from 'react'
import { useState } from 'react';
import { TriangleDownIcon, TriangleRightIcon } from '@primer/octicons-react';


export default function BookDetails({ book, index }) {
    const [expanded, setExpanded] = useState(false)
    return (
        <div onClick={() => setExpanded(!expanded)} class="pl3 pv1">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.shortDescription}</p>
            <img src={book.coverImageUrl} alt="Book Cover" class="fr pr3 inline"></img>
            
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

                    <p>URL: <a href={book.url} rel="noreferrer noopener nofollow" target="_blank">{book.url}</a></p>
                    <p>Publisher: {book.publisher}</p>
                    <p>Publication Date: {book.publicationDate}</p>
                    <p>Full Description:</p>
                    <p>{book.detailedDescription}</p>

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