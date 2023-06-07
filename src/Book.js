function Book(props) {
  console.log("Here is props: ", props);
  return (
    <div className="card">
      <h1>{props.book.title}</h1>
      <h3>Author: {props.book.author}</h3>
      <p>Description: {props.book.shortDescription}</p>
      <img
        className="image"
        alt="coverimage"
        src={props.book.coverImageUrl}
      ></img>
    </div>
  );
}

export default Book;
