import styled from 'styled-components';

const Container = styled.div`
float: left;
width: 33%;
padding: 0 5px;
`

const BlogPost = styled.section`
    margin: 0 8px;
    padding-left: 5.7em;
    padding-bottom: 6.2em;
    &:after {
        content: "";
        display: table;
        clear: both;
       }
`

const Heading = styled.h2`
   text-align: center;
   padding-bottom: 1.2em;
   padding-top: 2.2em;
   font-weight: normal;
   font-size: 2.9em;
   margin-right: 8%;
`

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: white;
`
const PostNumber = styled.span`
    float: left;
    font-size: 30px;
`

const PostMonth = styled.span`
    float: left;
    font-size: 30px;
`

const PostTitle = styled.h4`
    padding-bottom: 1.0em;
    padding-top: 3.0rem;
    margin-right: 10.0em;
    font-size: 1.0rem;
    font-weight: bold;
    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
`

const PostText = styled.p`
text-align: justify;
font-weight: normal;
color: gray;
`



export {
    Container,
    PostText,
    BlogPost,
    PostTitle,
    PostNumber,
    PostMonth,
    Card,
    Heading,
}