import { Gallery } from "../components";
import "./works.css";

export const Works = () => {
  return (
    <>
      <div className="works-banner">
        <div className="works-banner__inner">
          <h1 className="title">HANNS HOLTWIESCHE</h1>
        </div>
        <div className="works-banner__inner">
          <div className="text">
            <p className="intro">
              Hier gibt es eine Übersicht des künstlerischen Schaffens von Hanns
              Holtwiesche, gegliedert in Alben zu den Bereichen Plastik,
              Gemälde, Aquarelle und Sakralbau sowie eine Pressemappe mit
              gesammelten Zeitungsartikeln. Ein Doppelklick auf eines der Alben
              öffnet die jeweilige Bildergalerie. Eine fachkundige „Führung“
              durch das Werk von Hanns Holtwiesche gegeben durch Prof. Dr.
              Christian Theuerkauff, finden Sie hier: Zur Führung
            </p>
          </div>
        </div>
        <Gallery />
      </div>
    </>
  );
};
