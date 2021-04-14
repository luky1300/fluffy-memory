import React from 'react';
import '../style/GetMoreWithUs.css';

function GetMoreWithUs() {
  return (
    <section className="get-more-with-us-main-container">
      <div className="get-more-with-us-left-container">
        <h2>Get More With Us</h2>
        <div className="number-tabs">
          <p className="selected">01</p>
          <p>02</p>
          <p>03</p>
          <p>04</p>
        </div>
        <h3>FREE APPS</h3>
        <p className="get-more-with-us-text">
          We regularly upload new free apps to our website, which is fully
          accessible to our clients and subscribers. You can also find out about
          free apps in our blog.
        </p>
        <div className="bttn-container">
          <button className="get-in-touch-bttn">GET IN TOUCH</button>
          <button className="download-presentation-bttn">
            DOWNLOAD PRESENTATION
          </button>
        </div>
      </div>
      <div className="get-more-with-us-right-container">
        <img
          src="https://ld-wt73.template-help.com/wt_prod-18959/images/index-4-261x484.png"
          alt=""
        />
        <img
          src="https://ld-wt73.template-help.com/wt_prod-18959/images/index-5-261x484.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default GetMoreWithUs;
