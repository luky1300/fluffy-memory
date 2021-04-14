import React from 'react';
import '../style/GetMoreWithUs.css';

function GetMoreWithUs() {
  return (
    <section className="get-more-with-us-container">
      <div>
        <h2>Get More With Us</h2>
        <div className="number-tabs">
          <p className="selected">01</p>
          <p>02</p>
          <p>03</p>
          <p>04</p>
        </div>
      </div>
      <div className="get-more-with-us-img">
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
