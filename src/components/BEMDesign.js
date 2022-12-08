import React from "react";
import "./BEMDesign.css";

const BEMDesign = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__headerDiv">
          <p className="header__items">ISSUE, JUNE</p>
          <p className="header__items">NEWS</p>
        </div>
        <hr className="header__items--hr"/>
        <div className="header__headerDiv header__headerDiv--nonflexed">
          <h1 className="header__head">NEWSPAPER</h1>
        </div>
      </header>
      <section className="sections">
        <div className="sections__sectionDivs sections__sectionDivs--small">
          <h3 className="sectionDivs__head">THIS IS A HEADING EXAMPLE WHICH IS SUPPOSED TO BE LONG</h3>
          <p className="sectionDivs__datestamp">16,June 2020</p>
          <p  className="sectionDivs__content">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
          </p>
        </div>
        <div className="sections__sectionDivs sections__sectionDivs--large  sections__sectionDivs--empty">
        <img className="sectionDivs__image" src="https://cdn.pixabay.com/photo/2016/05/13/13/33/newspaper-1389980__340.png" alt="newspaper reading man"/>
        </div>
      </section>
      <hr className="headerDiv__items__hr"/>
      <section className="sections">
        <div className="sections__sectionDivs sections__sectionDivs--small sections__sectionDivs--empty">
            <img className="sectionDivs__image" src="https://cdn.pixabay.com/photo/2016/05/13/13/33/newspaper-1389980__340.png" alt="newspaper reading man"/>
        </div>
        <div className="sections__sectionDivs sections__sectionDivs--large">
          <h3 className="sectionDivs__head">THIS IS A SHORT HEADING EXAMPLE</h3>
          <p className="sectionDivs__datestamp">16,June 2020</p>
          <p className="sectionDivs__content">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia,
          </p>
        </div>
      </section>
      <hr className="headerDiv__items__hr"/>
      <section className="sections">
        <div className="sections__sectionDivs sections__sectionDivs--xsmall">
          <h3 className="sectionDivs__head sectionDivs__head--small">YOUR TITLE HERE</h3>
          <p  className="sectionDivs__content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
        </div>
        <div className="sections__sectionDivs sections__sectionDivs--xsmall">
          <h3 className="sectionDivs__head sectionDivs__head--small">YOUR TITLE HERE</h3>
          <p className="sectionDivs__content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
        </div>
        <div className="sections__sectionDivs sections__sectionDivs--xsmall">
          <h3 className="sectionDivs__head sectionDivs__head--small">YOUR TITLE HERE</h3>
          <p className="sectionDivs__content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
        </div>
      </section>
    </div>
  );
};

export default BEMDesign;
