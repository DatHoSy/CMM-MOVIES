import menubar from "assets/menubar.svg"
import logo from "assets/logo.svg"
import account from "assets/account.svg"
import notification from "assets/notification.svg"
import mandobackbround from "assets/mandobackbround.svg"
import disneylogo from "assets/disneylogo.svg"
import MandoLogo from "assets/MandoLogo.svg"
import imgtrailer from "assets/imgtrailer.svg"
import dot from "assets/dot.svg"
import Line4 from "assets/Line4.svg"
import React, { useState } from "react";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import { Img } from "components/Img"
import { CardVideoTrailer } from "components/CardVideoTrailer"
import epidode2 from "assets/episode2.svg";
import epidode3 from "assets/episode3.svg";
import epidode4 from "assets/episode4.svg";
import rating from "assets/4stars1.svg";
import view from "assets/view.svg";
import share from "assets/shareico.svg";
import heart from "assets/heart.svg";
import plusico from "assets/plusico1.svg";
import avatar from "assets/avatarcmt.svg";
import redline from "assets/redline.png"


import '@brainhubeu/react-carousel/lib/style.css';
//import "./styles.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Footer } from "components/Footer"
import { Button } from "components/Button"
//import { Slider } from "components/Slider"



const StyleInfoPage = styled.div`
.showmore{
    width: 100vw;
    padding-left: 50px;
    color: white;
    display: flex;
    align-items: center;
    background-color: black;
    text-decoration:underline;
    gap:10px;
    
    img{
        height: 40px;
        width: 300px;
    }
}
.footer {
        width: inherit;
    }


    
`
const Header = styled.div`
    position: relative;
    padding: 20px;
    display:flex;
    justify-content: space-between;

    .account{
        .avatar {
            width: 25px;
            height: 25px;
            padding: 3px;
            border-radius: 50%;
            cursor: pointer;
            background-color: #ff7b7b;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .logout, .login {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
`
const Comments = styled.div`
padding-left: 50px;
color: white;
font-family: 'Blinker';

.name1{
    display: flex;
    gap:10px;
    font-size: 55px;
    
}
.category1{
    display: flex;
    gap:10px;
    font-size: 20px;
    align-items: center;


}
.view{
    align-items: center;
    
}
.time{
    display: flex;
    gap:10px;
    align-items: center;

}
.view{
    display: flex;
    justify-items: center;
    gap:10px;
}
.viewimg{
    background-color: white;
    border-radius: 50%;
}
.ico{
    display: flex;
    gap: 15px;
}
.tag{
    display: flex;
    gap:5px;
}
.nameemail{
    display: flex;
    gap:150px;
    padding-top: 20px;
}
.btnsubmit{
    width: 100px;
    height: 40px;
    background-color: red;
    color: white;
    margin-top: 20px;
    cursor: pointer;
}
.review{
    width: 700px;
    height: 200px;
}
.review1{
    width: 500px;
    height: 50px;
}
.score{
    display: flex;
    gap:15px;
}
.tag{
    text-decoration:underline;
    color: red;
    font-size: 20px;
    padding-top:20px;
}
.ico{
    margin-top: 10px;
    padding-top: 15px;
    background-color: white;
    width: 140px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding-bottom: 9px;
}
.comment{
    padding-top: 20px;
}
.review2{
    padding-top:20px ;
}
.nameemail{
    padding-top: 20px;
}
.ratingtxt{
    padding-top: 5px;
}
.save{
    padding-top: 10px;
}
.comment-movie {
        padding-left: 60px;
    }

`
const Banner = styled.div`
@media screen and (min-width: 1441px){
    height : 100vh;
}
background-image: url(${mandobackbround});
background-size: cover;
/* width: 100vw; */
height: 200vh;
`
const ListComments = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    .list{
        margin-top: 15px;
        display: flex;
        gap: 60px;
        .avatarimg {
            display: flex;
            align-items: center;
            flex-basis: 20%;
            gap: 3px;
            img {
                width: 45px;
            }
        }
        .contenttxt{
            font-size: 20px;
        }
        .like {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            opacity: 0.7;
        }
    }
   
`

const Trailer = styled.div`

    height: 100vh;
    margin-left: 50px;
    width: 50%;
    //background-color: red;
    .season{
        font-family: 'Blinker';
        color: white;
        padding-top: 5px;
        padding-left: 25px;

    }
    .logo{
        display: flex;
        justify-content: center;
        //background-color: green;
        width: 100%;
        
    }
    .name{
        display: flex; 
        justify-content: center;
        scale: 0.95;
    }
    .trailer {
        display: flex;
        padding-bottom: 15px;
        padding-top: 10px;
        justify-content: flex-start ;
        font-family: 'Blinker';
        font-size: 15px;
        gap: 50px;
        margin-left: 50px;
        .categorytxt{
            display: flex;
            flex-direction: column;
            //background-color: yellow;
            width: 40%;
            justify-content: center;
            
            .yearcategory{
                color: white;
                display: flex;
                gap:10px;
                justify-content: center;
            }


        }
        .dot{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .trailervideo{
            width: 380px;
            height: 200px;
            border-radius: 25px;
            /* Đặt giá trị border-radius theo ý muốn */
            /* overflow: hidden; */
            /* scale: 1; */
            }
    }
        .line{
            display: flex;
            width: 100%;
            justify-content: flex-start;
        }
        .test {
            border: 5px solid red;
        }
        
        .BrainhubCarouselItem--active {
            .watchFilm {
                display: inline;
            }
            img {
                /* scale: 1.2; */
            }
        }
        .carousel, .BrainhubCarousel {
            height: 200px;
        }
        .BrainhubCarousel__arrowRight{
            border-radius: 50px;
            margin-left: 10px;
            background-color: red;
        }
        .BrainhubCarousel__arrowLeft{
            border-radius: 50px;
            margin-right: 10px;
            background-color: red;
        }
        .video-container {
            video {
                height: 400px;
                width: 700px;
                border-radius: 15px;
            }
        }
`


const InfoPage = () => {
    const SRC_DEFAULT = "https://drive.google.com/uc?export=download&id=";
    const movieId = localStorage.getItem("movieId");
    const token = localStorage.getItem("userToken");
    const nav = useNavigate();
    const dispatch = useDispatch();
    let rawData = useSelector(state => state.movie.movies);
    let reviews = useSelector(state => state.movie.reviews);
    const [reloadMore, setReloadMore] = useState(false);
    useEffect(() => {
        dispatch.movie.getAll();
        dispatch.movie.getReviews(movieId);
    }, [movieId, reloadMore]);
    let listReviewComp = [];
        for (const review of reviews) {
            listReviewComp.push(
                <div className="list" key={review.id}>
                <div className="avatarimg">
                    <img src={avatar} />
                    <span>{review.userName}</span>
                </div>
                <div className="contentFilm">
                    <div>
                        <div className="contenttxt">
                            {review.content}
                        </div>
                        <div className="like">
                            <div>
                                Like
                            </div>
                            <img width="2px" height="2px" src={dot}></img>
                            <div>
                                Reply
                            </div>
                            <img width="2px" height="2px" src={dot}></img>
                            <div>
                                20 weeks
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (!movieId) {
        nav("/");
    }
    const m = rawData?.filter(movieObj => movieObj.id == movieId);
    const customLink = (driveLink) => {
        const fileId = driveLink.match(/[-\w]{25,}/);
        let src = SRC_DEFAULT + fileId[0];
        if (!driveLink) { src = SRC_DEFAULT }
        return src;
    }
    const writeReview = async () => {
        if (!token) {
            let isNav = confirm("Go to login page!");
            if (isNav) {
                nav("/login");
            }
            return;
        }
        let content = document.getElementById("content").value;
        const obj = {
            movieId : movieId,
            content: content,
            token : token
        }
        await dispatch.movie.reviewMovie(obj);
        setReloadMore(!reloadMore);
        reloadMore ? nav("/watch" + " ") : nav("/watch" + "  ");
    }
    const profile = () => {
        nav("/userprofile");
    }
    const logout = () => {
        localStorage.removeItem("userToken");
        nav("/login");
    }
    if (m) {
        // const date = new Date(m[0]?.releaseDate);
        // const options = { day: "numeric", month: "long", year: "numeric" };
        // const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
        return (
            <StyleInfoPage>
                <Banner>
                    <Header>
                        <div>
                            <img src={menubar}></img>
                        </div>
                        <div>
                            <Link to={'/'}><img src={logo}></img></Link>
                        </div>
                        <div className="account">
                            {!token ?
                                <div className='login'>
                                    <Link to={'/login'}><Button title={"SIGNIN"} text_color={"white"} width={"49px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"11px"}></Button></Link>
                                    <Link to={'/signup'}><Button title={"SIGNUP"} text_color={"white"} width={"49px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"11px"}></Button></Link>
                                </div> :
                                <div className='logout'>
                                    <div className="avatar"><img onClick={() => profile()} src={avatar} alt="" /></div>
                                    <Button onClick={() => logout()} title={"LOGOUT"} text_color={"white"} width={"55px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"11px"}></Button>
                                </div>
                            }
                        </div>

                    </Header>

                    <Trailer>
                        <div className="logo">
                            <img src={disneylogo}></img>
                        </div>
                        <div className="name">
                            <img src={MandoLogo}></img>
                        </div>
                        <div className="trailer">
                            <div >
                                <div className="video-container">
                                    <video controls>
                                        <source
                                            src={m[0] ? customLink(m[0]?.movieLink) : ""}
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <img src={Line4}></img>
                        </div>

                        <Comments>
                            <div className="comments">
                                <div className="name1">
                                    <div>
                                        {m[0]?.title}
                                    </div>
                                </div>
                                <div className="score">
                                    <div>
                                        <img src={rating}></img>
                                    </div>
                                    <div>
                                        3.5 (lmdb)
                                    </div>
                                </div>
                                <div className="category1">
                                    {m[0]?.genreName.toString()}
                                </div>
                                <div className="time">
                                    <div>
                                        {m[0]?.duration} mins
                                    </div>
                                    <img width="2px" height="2px" src={dot}></img>
                                    <div>
                                    {
                                        // formattedDate
                                    }
                                    </div>

                                    {/* <img width="2px" height="2px" src={dot}></img>
                                    <div className="view">
                                        <img className="viewimg" width="30px" src={view}></img>
                                        2112 views
                                    </div> */}
                                </div>
                            </div>
                        </Comments>
                    </Trailer>
                </Banner>
                <Comments>
                    <div className="comment-movie">
                        <ListComments>
                            <h3>COMMENTS ({listReviewComp.length})</h3>
                            {listReviewComp}
                        </ListComments>
                        <div className="comment">
                            <div>
                                Your email address will not be published. Required fields are marked *
                            </div>
                            <div className="review2">
                                <div>
                                    Your review *
                                </div>
                                <input id="content" type="text" className="review" />
                            </div>
                            <button style={{borderRadius: "20px"}} className="btnsubmit" onClick={() => writeReview()}>
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </Comments>
                <Footer></Footer>

            </StyleInfoPage>

        )
    }
}

export default InfoPage;