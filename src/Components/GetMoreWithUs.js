import React, { useState } from 'react';
import '../style/GetMoreWithUs.css';

function GetMoreWithUs() {
  // tracks which number tab to highlight
  const [selected, setSelected] = useState('01');
  const numTabs = ['01', '02', '03', '04'];

  const displayList = [
    {
      header: 'FREE APPS',
      body: `We regularly upload new free apps to our website, which is fully
      accessible to our clients and subscribers. You can also find out about
      free apps in our blog.`,
    },
    {
      header: 'GET SOCIAL',
      body: `Every app we develop has built-in social support that allows you 
      to stay connected to your accounts on Facebook, Instagram, Twitter and 
      other networks.`,
    },
    {
      header: 'CUSTOMER SERVICE',
      body: `Every customer of DreamSoft can get access to our friendly and 
      qualified 24/7 support via chat or phone. Feel free to ask us any questions!`,
    },
    {
      header: 'GREAT USABILITY',
      body: `All our apps are designed to have great usability in order to 
      easily operate our applications. That is why our software has high ratings 
      and lots of awards.`,
    },
  ];

  let displayItem = {};
  switch (selected) {
    case '02':
      displayItem = displayList[1];
      break;
    case '03':
      displayItem = displayList[2];
      break;
    case '04':
      displayItem = displayList[3];
      break;
    default:
      displayItem = displayList[0];
  }

  return (
    <section className="get-more-with-us-main-container">
      <div className="get-more-with-us-left-container">
        <h2>Get More With Us</h2>
        <div className="number-tabs">
          {numTabs.map((num, index) => {
            return (
              <p
                key={index}
                className={selected === num ? 'selected' : ''}
                onClick={() => setSelected(num)}
              >
                {num}
              </p>
            );
          })}
        </div>
        <h3>{displayItem.header}</h3>
        <p>{displayItem.body}</p>
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
