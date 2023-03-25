import "./App.css";

import data from "./data";

export default function BookList() {
  return (
    <section className="book-list">
      {data.map((book) => {
        const { id, title, author, img } = book;
        return <Book book={book} />;
      })}
    </section>
  );
}

function Book(props) {
  const { id, title, author, img } = props.book;
  console.log(id, title, author, img);
  return (
    <article className="book">
      <h4>{id}</h4>
      <img src={`/images/${img}`} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}
