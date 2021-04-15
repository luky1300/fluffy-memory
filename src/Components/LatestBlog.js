import React from 'react';
import '../style/LatestBlog.css';

function LatestBlog(){
    return (

        <section className="blog-post">

        <h2>Latest Blog Posts</h2>
        
    
        <div className="container">
        <div className="card">
        <article>
          <a href=""><img src="./img/post-1.jpg" alt=""/>
            <div className="post-time">
          <time datetime="2021-5-19"><span className="post-month">05/</span><span className="post-number">19</span></time>
            </div>
          </a>
          <h4 className="post-title"><a href="#">Benefits Of Async/Await</a></h4>
          <p className="post-text">Asynchronous functions are a good and bad thing in JavaScript. The good side is that asynchronous functions are non-blocking and…</p>
        </article>
        </div>
      </div>
  
    
        <div class="container">
        <div className="card">
        <article>
          <a href=""><img src="./img/post-2.jpg" alt=""/>
            <div className="post-time">
          <time datetime="2021-6-19"><span className="post-month">06/</span><span className="post-number">19</span></time>
            </div>
          </a>
          <h4 className="post-title"><a href="#">Key Considerations Of iPaaS</a></h4>
          <p className="post-text">Digital transformation requires cloud appropriate adoption, legacy IT systems modernization, and Agile-based methodologies for faster…</p>
          </article>
        </div>
      </div>
  
       
      <div className="container">
        <div className="card">
        <article>
          <a href=""><img src="./img/post-3.jpg" alt=""/>
            <div className="post-time">
          <time datetime="2021-7-19"><span className="post-month">07/</span><span className="post-number">19</span></time>
            </div>
          </a>
          <h4 className="post-title"><a href="#">Hibernate Query Language</a></h4>
          <p className="post-text">In this tutorial, we will discuss the Hibernate Query Language. HQL is an object-oriented query language. Hibernate Query...</p>
        </article>
        </div>
      </div>
      </section>



    );
};

export default LatestBlog;