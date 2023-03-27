import "./App.css";

import data from "./data";

export default function BookList() {
  return (
    <section className="book-list">
      {data.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

function Book(props) {
  const { id, title, author, img } = props.book;
  return (
    <article className="book">
      <h4>{id}</h4>
      <img src={`/images/${img}`} alt="" className="book--cover" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}
