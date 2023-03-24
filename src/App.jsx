import "./App.css";

import data from "./data";

export default function BookList() {
  return (
    <section className="book-list">
      {data.map((book) => {
        const { id, title, author, imageLink } = book;
        return <Book book={book} />;
      })}
    </section>
  );
}

function Book(props) {
  const { id, title, author, imageLink } = props.book;
  return (
    <article className="book">
      <h4>{id}</h4>
      <img
        src={
          "D:/Learning React/react-app-vite/amazon/src/assets/images/things-fall-apart.jpg"
        }
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}
