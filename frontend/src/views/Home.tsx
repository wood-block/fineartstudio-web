import "./home.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="title banner__title">Fine art glass</div>
      </div>
      <div className="banner__inner">
        <div className="logo">
          <img className="logo__img" src="../images/signature.png" />
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <section className="home-content">
      <div className="content__main">
        <p className="main_intro">INTUITION, INSPIRATION, IMAGINATION ...</p>
        <p>
          <br />
        </p>
        <p>
          <br />
        </p>
        <p className="intro">
          Diese Seiten sind gewidmet dem Maler und Bildhauer:
        </p>
        <p>
          <br />
        </p>
        <p className="intro">Hanns Holtwiesche</p>
        <p>
          <br />
        </p>
        <p>
          <br />
        </p>
        <p>
          <br />
        </p>
        <p className="intro">Führung durch das Werk...</p>
      </div>
      <div className="content__side">
        <p className="quote">
          Diese Seiten wurden erstellt im Andenken an meinen Vater.
        </p>
        <p>
          <br />
        </p>
        <p className="quote">
          Diese Seiten sind der Anfang das Werk von Hanns Holtwiesche
          darzustellen. Sie werden im Laufe der Zeit weiter vervollständigt, um
          schließlich ein umfassendes Bild seines Schaffens wiederzugeben.
        </p>
        <p>
          <br />
        </p>
        <p className="quoteBy">Daniel Holtwiesche</p>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Banner />
      <Content />
    </>
  );
};
