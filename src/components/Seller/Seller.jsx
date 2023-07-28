import { useState } from "react";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as SliderArrowRight } from 'assets/arrow-right.svg';
import backgroudFilm from 'assets/backgroud-film.svg';
import styled from "styled-components";
import marvelLogo from 'assets/marvel-logo.svg';
import blackWidowlogo from 'assets/black-widow.svg';
import rating from 'assets/4stars1.svg';
import line from 'assets/linei.svg';
import play from 'assets/play.svg';
import plus from 'assets/plus.svg';

const StyleBestSeller = styled.div`
    display: flex;
    justify-content: space-around;
    h2 {
        text-align: center;
        font-size: 50px;
        line-height: 59px;
    }
    .carousel {
        /* position: relative; */
        width: 1440px;
        height: 560px;
        overflow: hidden;
    }

    /* div.carousel > div:first-child + a {
        transform: rotateY(180deg);
    }
   */
    .productSale {
        display: flex;
        /* justify-content: space-between; */
        /* gap: 24px; */
    } 
    img {
        width: 1440px;
    }

    /* Next & previous buttons */
    .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 280px;
    width: auto;
    color: black;
    font-weight: bold;
    font-size: 45px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    }
    .prev {
        left: 30px;
        transform: rotate(180deg);
    }
    /* Position the "next button" to the right */
    .next {
        right: 100px;
        border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover, .next:hover {
    //background-color: #F0F0F0;
    }
    .movie-bg{
        position: relative;
        //z-index: 1;
    }
    .leftbanner{
        position: absolute;
        color: white;
        font-size: 50px;
        width: 150px;
        height: 150px;
        z-index: 1;
        padding-left: 100px;
        padding-top: 50px;
    }
    .logo1{
        width: 130px;
    }
    .logo2{
        width: 350px;
    }
    .logo3{
        width: 200px;
    }
    .txt{
        display: flex;
        justify-content: space-between;
        gap:10px;
        p{
            font-size: 30px;
            margin: 0;
        }
        img{
          scale: 1.8;
        }
    }
    .btn{
        width: 30px;
        display: flex;
        gap:5px;
        img{
            width: 60px;
            padding: -5px;
        }
    }
    .more{
        width: 450px;
        p{
            font-size: 18px;

        }
    }
`
export const BestSeller = ({ width }) => {
    const TOTAL_SLIDES = 5;
    const [current, setCurrent] = useState(1);
    const ref = useRef(null);
    const isPhone = useMediaQuery({ query: '(max-width: 425px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
    const isLaptop = useMediaQuery({ query: '(max-width: 1024px)' });

    const next = () => {
        if (current >= TOTAL_SLIDES) { setCurrent(1) }
        else setCurrent(current + 1)
    }

    const prev = () => {
        if (current === 1) { setCurrent(5) }
        else setCurrent(current - 1)
    }

    useEffect(() => {
        ref.current.style.transition = 'all 0.2s ease-in-out';
        let percent = 0;

        switch (true) {
            case isPhone:
                percent = 215;
                break;
            case isTablet:
                percent = 195;
                //257
                break;
            case isLaptop:
                percent = 255;
                break;
            default:
                percent = 336;
                break;
        }
        // let traslate = (current - 3) * percent;
        let traslate = current * 1440;
        ref.current.style.transform = `translateX(-${traslate}px)`;
    }, [current]);
    return (
        <StyleBestSeller width={width}>
            <div className="carousel">
                <div ref={ref} className="productSale">
                    <div id="0">
                        <div className="leftbanner">
                            <img className="logo1" src={marvelLogo}></img>
                            <img className="logo2" src={blackWidowlogo}></img>
                            <img className="logo3" src={rating}></img>
                            <div className="txt">
                                <p>
                                    Drama
                                </p>
                                <img src={line}>

                                </img>
                                <p>
                                    Drama
                                </p>
                                <img src={line}></img>
                                <p>
                                    Drama
                                </p>
                            </div>
                            <div className="btn">
                                <img src={play}></img>
                                <img src={plus}></img>
                            </div>
                            <div className="more">
                                <p>
                                    Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.
                                </p>
                            </div>
                        </div>
                        <img className='movie-bg' src={backgroudFilm} alt="avatar film" />
                    </div>
                    <div id="1">
                    <div className="leftbanner">
                            <img className="logo1" src={marvelLogo}></img>
                            <img className="logo2" src={blackWidowlogo}></img>
                            <img className="logo3" src={rating}></img>
                            <div className="txt">
                                <p>
                                    Drama
                                </p>
                                <img src={line}>

                                </img>
                                <p>
                                    Drama
                                </p>
                                <img src={line}></img>
                                <p>
                                    Drama
                                </p>
                            </div>
                            <div className="btn">
                                <img src={play}></img>
                                <img src={plus}></img>
                            </div>
                            <div className="more">
                                <p>
                                    Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.
                                </p>
                            </div>
                        </div>
                        <img className='movie-bg' src={backgroudFilm} alt="avatar film" />
                    </div>
                    <div id="2">
                    <div className="leftbanner">
                            <img className="logo1" src={marvelLogo}></img>
                            <img className="logo2" src={blackWidowlogo}></img>
                            <img className="logo3" src={rating}></img>
                            <div className="txt">
                                <p>
                                    Drama
                                </p>
                                <img src={line}>

                                </img>
                                <p>
                                    Drama
                                </p>
                                <img src={line}></img>
                                <p>
                                    Drama
                                </p>
                            </div>
                            <div className="btn">
                                <img src={play}></img>
                                <img src={plus}></img>
                            </div>
                            <div className="more">
                                <p>
                                    Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.
                                </p>
                            </div>
                        </div>
                        <img className='movie-bg' src={backgroudFilm} alt="avatar film" />
                    </div>
                    <div id="3">
                    <div className="leftbanner">
                            <img className="logo1" src={marvelLogo}></img>
                            <img className="logo2" src={blackWidowlogo}></img>
                            <img className="logo3" src={rating}></img>
                            <div className="txt">
                                <p>
                                    Drama
                                </p>
                                <img src={line}>

                                </img>
                                <p>
                                    Drama
                                </p>
                                <img src={line}></img>
                                <p>
                                    Drama
                                </p>
                            </div>
                            <div className="btn">
                                <img src={play}></img>
                                <img src={plus}></img>
                            </div>
                            <div className="more">
                                <p>
                                    Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.
                                </p>
                            </div>
                        </div>
                        <img className='movie-bg' src={backgroudFilm} alt="avatar film" />
                    </div>
                    <div id="4">
                    <div className="leftbanner">
                            <img className="logo1" src={marvelLogo}></img>
                            <img className="logo2" src={blackWidowlogo}></img>
                            <img className="logo3" src={rating}></img>
                            <div className="txt">
                                <p>
                                    Drama
                                </p>
                                <img src={line}>

                                </img>
                                <p>
                                    Drama
                                </p>
                                <img src={line}></img>
                                <p>
                                    Drama
                                </p>
                            </div>
                            <div className="btn">
                                <img src={play}></img>
                                <img src={plus}></img>
                            </div>
                            <div className="more">
                                <p>
                                    Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.
                                </p>
                            </div>
                        </div>
                        <img className='movie-bg' src={backgroudFilm} alt="avatar film" />
                    </div>
                    <div id="5">
                    <div className="leftbanner">
                            <img className="logo1" src={marvelLogo}></img>
                            <img className="logo2" src={blackWidowlogo}></img>
                            <img className="logo3" src={rating}></img>
                            <div className="txt">
                                <p>
                                    Drama
                                </p>
                                <img src={line}>

                                </img>
                                <p>
                                    Drama
                                </p>
                                <img src={line}></img>
                                <p>
                                    Drama
                                </p>
                            </div>
                            <div className="btn">
                                <img src={play}></img>
                                <img src={plus}></img>
                            </div>
                            <div className="more">
                                <p>
                                    Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.
                                </p>
                            </div>
                        </div>
                        <img className='movie-bg' src={backgroudFilm} alt="avatar film" />
                    </div>
                </div>
                <a className="prev" onClick={() => prev()}><SliderArrowRight /></a>
                <a className="next" onClick={() => next()}><SliderArrowRight /></a>
            </div>
        </StyleBestSeller>
    )
}