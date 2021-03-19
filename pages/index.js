import Head from "next/head";
import BoxDesktop from '../src/svg/BoxDesktop';
import SVGMobile from '../src/svg/SVGMobile';
import { FAQS } from "../src/constants";

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>FAQ Accordion</title>
      </Head>

      <main>
        <div className="container">
          <div className="card">
            <div className="section image">
              <div className="svg-mobile-container">
                <SVGMobile />
              </div>
              <div className="section image-inner">
                <BoxDesktop />
              </div>
            </div>
            <div className="section faq">
              <h1>FAQ</h1>
              <div className="accordion">
                {FAQS.map(({ question, answer, key }, i) => (
                  <div className="accordion-item" key={key}>
                    <input
                      defaultChecked={i === 1}
                      type="radio"
                      id={key}
                      name="faq"
                      className="accordion-checkbox"
                    />
                    <label htmlFor={key} name="faq" className="question">{question}</label>
                    <label htmlFor={key} name="faq" className="label" />
                    <p className="answer">{answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
