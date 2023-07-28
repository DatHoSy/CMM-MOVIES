import { Genres } from "components/Genres/Genres";
import { GridMovie } from "components/Grid";
import { BestSeller } from "components/Seller/Seller";
import { ShowCase } from "components/ShowCase";
import SliderComponent from "components/SliderComponent";
import styled from "styled-components";

const StyledHomePage = styled.div`
  @media screen and (max-width: 1439px) {
    .banner {
      .banner-left {
        top: 100px;
        left: 35px;
        gap: 15px;
      }
      .movie-bg {
        width: 1024px;
      }
      .movie-name img {
        width: 400px;
      }
      .movie-logo img {
        width: 120px;
      }
      .movie-rate img {
        width: 120px;
      }
      .description {
        width: 385px;
        margin: 0;
      }
      .banner-right {
        top: 245px;
      }
    }
    .showcase {
      height: 160px;
      .showcard11,
      .showcard12 {
        display: none;
      }
      .card {
        .avatar img {
          width: 75px;
        }
      }
    }
    .genres {
      .title {
        padding: 30px 10px;
      }
      table td {
        padding: 10px 34px;
        button {
          span {
            font-size: 17px;
          }
        }
      }
      .buttonGenres {
        margin-top: 35px;
        button {
          height: 35px;
          width: 130px;
          border-radius: 15px;
          svg {
            top: 3px;
            right: -1px;
          }
        }
      }
      .genres-content {
        padding-bottom: 35px;
      }
    }
    .grid-movie {
      margin: 0 35px;
      .grid-content {
        .card img {
          width: 160px;
          height: 240px;
        }
        .card button {
          right: 75px;
        }
      }
    }
  }
  @media screen and (max-width: 1023px) {
    .banner {
      .banner-left {
        top: 100px;
        left: 35px;
        gap: 15px;
      }
      .movie-bg {
        width: 768px;
      }
      .movie-name img {
        width: 280px;
      }
      .movie-logo img {
        width: 100px;
      }
      .movie-rate img {
        width: 100px;
      }
      .description {
        display: none;
      }
      .banner-right {
        top: 175px;
      }
    }
    .showcase {
      height: 160px;
      .showcard9,
      .showcard10,
      .showcard11,
      .showcard12 {
        display: none;
      }
      .card {
        .avatar img {
          width: 75px;
        }
      }
    }
    .genres {
      .title {
        padding: 30px 10px;
      }
      table td {
        padding: 10px 20px;
        button span {
          font-size: 14px;
        }
      }
      .buttonGenres {
        margin-top: 10px;
        button {
          height: 25px;
          width: 100px;
          border-radius: 15px;
          span {
            font-size: 12px;
          }
          svg {
            top: -1px;
            right: -5px;
          }
        }
      }
      .genres-content {
        padding-bottom: 15px;
      }
    }
    .grid-movie {
      margin: 0 20px;
      .title {
        margin: 30px 0;
        span {
          font-size: 15px;
          padding: 0;
        }
      }
      .grid-content {
        gap: 20px;
        .card img {
          width: 125px;
          height: 190px;
          border-radius: 20px;
        }
        .card span.style-title {
          font-size: 15px;
          line-height: 20px;
        }
        .card span {
          font-size: 10px;
        }
        .card button {
          height: 20px;
          width: 35px;
          top: -10px;
          right: 45px;
        }

        .grid-block1,
        .grid-block2 {
          gap: 10px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .banner {
      .banner-left {
        top: 40px;
        left: 25px;
        gap: 15px;
      }
      .movie-bg {
        width: 500px;
      }
      .movie-name img {
        width: 240px;
      }
      .movie-logo img {
        width: 90px;
      }
      .movie-rate img {
        width: 90px;
      }
      .action {
        display: none;
      }
      .description {
        display: none;
      }
      .banner-right {
        top: 120px;
        img {
          width: 30px;
        }
      }
    }
    .showcase {
      height: 160px;
      padding: 5px;
      .showcard7,
      .showcard8,
      .showcard9,
      .showcard10,
      .showcard11,
      .showcard12 {
        display: none;
      }
      .card {
        .avatar img {
          width: 75px;
        }
      }
    }
    .genres {
      .title {
        padding: 30px 10px;
        button {
          height: 25px;
          border-radius: 5px;
          svg {
            top: -1px;
            right: -4px;
          }
        }
      }
      .trGenres4 {
        display: none;
      }
      table td {
        padding: 5px 8px;
        button {
          span {
            font-size: 10px;
          }
        }
      }
      .buttonGenres {
        margin-top: 10px;
        button {
          height: 25px;
          width: 80px;
          border-radius: 15px;
          span {
            font-size: 10px;
          }
          svg {
            top: -1px;
            right: -5px;
          }
        }
      }
      .genres-content {
        padding-bottom: 15px;
      }
    }
    .grid-movie {
      margin: 0 20px;
      .title {
        margin: 30px 0;
        span {
          font-size: 15px;
          padding: 0;
        }
      }
      .grid-content {
        gap: 20px;
        .card img {
          width: 110px;
          height: 175px;
          border-radius: 20px;
        }
        .card span.style-title {
          font-size: 15px;
          line-height: 20px;
        }
        .card span {
          font-size: 10px;
        }
        .card button {
          height: 20px;
          width: 35px;
          top: -10px;
          right: 45px;
        }

        .grid-block1,
        .grid-block2 {
          gap: 10px;
          .block1-movie5,
          .block2-movie5 {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    .banner {
      .banner-left {
        top: 60px;
        left: 150px;
        gap: 3px;
      }
      .movie-bg {
        width: 375px;
      }
      .movie-name img {
        width: 200px;
      }
      .movie-logo img {
        width: 100px;
      }
      .movie-rate img {
        width: 80px;
      }
      .action {
        display: none;
      }
      .description {
        display: none;
      }
      .banner-right {
        display: none;
      }
    }
    .showcase {
      height: 160px;
      padding: 5px;
      .showcard5,
      .showcard6,
      .showcard7,
      .showcard8,
      .showcard9,
      .showcard10,
      .showcard11,
      .showcard12 {
        display: none;
      }
      .card {
        .avatar img {
          width: 75px;
        }
      }
    }
    .genres {
      .title {
        padding: 30px 10px;
        button {
          height: 25px;
          border-radius: 5px;
          svg {
            top: -1px;
            right: -4px;
          }
        }
      }
      .trGenres3,
      .trGenres4 {
        display: none;
      }
      table td {
        padding: 5px 3px;
        button span {
          font-size: 9px;
        }
      }
      .buttonGenres {
        margin-top: 10px;
        button {
          height: 25px;
          width: 80px;
          border-radius: 15px;
          span {
            font-size: 10px;
          }
          svg {
            top: -1px;
            right: -5px;
          }
        }
      }
      .genres-content {
        padding-bottom: 15px;
      }
    }
    .grid-movie {
      margin: 0 20px;
      .title {
        margin: 30px 0;
        span {
          font-size: 12px;
          padding: 0;
        }
      }
      .grid-content {
        gap: 20px;
        .card img {
          width: 70px;
          height: 100px;
          border-radius: 20px;
        }
        .card span.style-title {
          font-size: 10px;
          line-height: 10px;
        }
        .card span {
          font-size: 8px;
          color: white;
        }
        .card button {
          height: 15px;
          width: 28px;
          top: -10px;
          right: 25px;
        }

        .grid-block1,
        .grid-block2 {
          gap: 10px;
          .block1-movie5,
          .block2-movie5 {
            display: none;
          }
        }
      }
    }
  }
 
  .BrainhubCarousel__trackContainer{
    width: 100px;
    
}
    .slide{
        display: flex;
        flex-direction: column;
        width: 100vw;
        align-items: center;
        
    }
    
    .BrainhubCarousel__trackContainer{
        padding-top: 30px;
        width: 65vw;
        padding-left: 30px;
        gap:10px;
        
    }
    .BrainhubCarouselItem{
        width: 300px;
        
       
    }
    .BrainhubCarousel__arrowRight{
        border-radius: 50%;
        margin-left: 10px;
        background-color:red;
    }
    .BrainhubCarousel__arrowLeft{
        border-radius: 50%;
        margin-right: 10px;
        background-color:red;
    }
    .BrainhubCarouselItem--active{
        scale: 1.2;
    }
    .carousel-wrapper{
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    }
`



const Item = styled.div` display: flex;
justify-content: center;
align-items: center;
height: 250px;
width: 100%;
background-color: #00008B;
color: #fff;
margin: 0 15px;
font-size: 4em;
`
const HomePage = () => {
  return (
    <StyledHomePage>
      <BestSeller></BestSeller>
      <ShowCase></ShowCase>
      <Genres></Genres>
      <SliderComponent />
      <GridMovie></GridMovie>
    </StyledHomePage>
  );
};

export default HomePage;