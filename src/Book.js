import { useState } from "react";

function Book(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card">
      <div>
        <h1>{props.book.title}</h1>
      </div>
      <h3>Author: {props.book.author}</h3>
      <p>Description: {props.book.shortDescription}</p>
      <div className="cardImage">
        <img
          className="image"
          src={props.book.coverImageUrl}
          alt="coverimages"
        ></img>
      </div>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Show More"}
      </button>
      {expanded && (
        <div>
          <a href={props.book.url}>{props.book.title}</a>
          <p>
            <strong>Publisher: </strong> {props.book.publisher}
          </p>
          <p>Publication Date: {props.book.publicationDate}</p>
          <p>Full description: {props.book.detailedDescription}</p>
        </div>
      )}
    </div>
  );
}

export default Book;

// onClick and useState
// petFacts.activities.map((activity) => "let's" + activity)
// returns let's walk, let's run, let's bark
