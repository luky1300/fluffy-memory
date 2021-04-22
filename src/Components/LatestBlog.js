import React from 'react';
import {
  Container,
  PostText,
  blog_post,
  PostTitle,
  PostNumber,
  PostMonth,
  Card,
  Heading,
} from '../StyledComponents/LatestBlogStyled';

function LatestBlog(){
    return (

        <blog_post>

        <Heading>Latest Blog Posts</Heading>
        
    
        <Container>
        <Card>
        <article>
          <a href=""><img src="./img/post-1.jpg" alt=""/>
            <div className="post-time">
          <time dateTime="2021-5-19"><PostMonth>05/</PostMonth><PostNumber>19</PostNumber></time>
            </div>
          </a>
          <PostTitle><a href="http://localhost:3000/">Benefits Of Async/Await</a></PostTitle>
          <PostText>Asynchronous functions are a good and bad thing in JavaScript. The good side is that asynchronous functions are non-blocking and…</PostText>
        </article>
        </Card>
      </Container>
  
    
        <Container>
        <Card>
        <article>
          <a href=""><img src="./img/post-2.jpg" alt=""/>
            <div className="post-time">
          <time dateTime="2021-6-19"><PostMonth>06/</PostMonth><PostNumber>19</PostNumber></time>
            </div>
          </a>
          <PostTitle><a href="http://localhost:3000/">Key Considerations Of iPaaS</a></PostTitle>
          <PostText>Digital transformation requires cloud appropriate adoption, legacy IT systems modernization, and Agile-based methodologies for faster…</PostText>
          </article>
        </Card>
      </Container>
  
       
      <Container>
        <Card>
        <article>
          <a href="http://localhost:3000/"><img src="./img/post-3.jpg" alt=""/>
            <div>
          <time dateTime="2021-7-19"><PostMonth>07/</PostMonth><PostNumber>19</PostNumber></time>
            </div>
          </a>
          <PostTitle><a href="#">Hibernate Query Language</a></PostTitle>
          <PostText>In this tutorial, we will discuss the Hibernate Query Language. HQL is an object-oriented query language. Hibernate Query...</PostText>
        </article>
        </Card>
      </Container>
      </blog_post>



    );
};

export default LatestBlog;