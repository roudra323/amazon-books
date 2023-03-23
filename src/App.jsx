import "./App.css";

export default function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg"
      alt=""
    />
  );
};

const Title = () => (
  <h1>
    Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man #11):
    From the Creator of Captain Underpants
  </h1>
);

const Author = () => <h4>Dav Pilkey</h4>;
