import { styled } from "styled-components";
import searchIcon from "assets/searchIcon.svg";
import { Genres } from "components/Genres";
import { Card } from "components/Card";
import { Button } from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BestSeller } from "components/Seller/Seller";
import { useNavigate } from "react-router-dom";

const StyleMovies = styled.div`
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
            .trGenres3, .trGenres4 {
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
    }
    .genres {
        .buttonGenres {
            display: none;
        }
    }
    .search-input {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 30px;
        input {
            flex-basis: 30%;
            border-radius: 5px;
            height: 32px;
            color: #da9999;
            text-indent: 10px;
            font-size: 20px;
        }
    }
    .searchIcon {
        margin-top: 20px;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        img {
            padding: 5px;
            position: absolute;
            right: 650px;
            top: 2px;
        }
    }
    .moives {
        margin-top: 30px;
        div.title {
            span {
                margin-left: 50px ;
                font-size: 24px;
                font-weight: 400;
                line-height: 22px;
                border-bottom: 1px solid #ffff;
                color: #ffff;
            }
        }
        .flex-movie {
            width: 1340px;
            margin: 0 50px;
            margin-top: 30px;
            display: flex;
            gap: 50px;
            flex-wrap: wrap;
        }
        #load-more {
            margin-top: 20px;
            display: flex;
            justify-content: space-evenly;
        }
    }
    .card:hover {
        transform: scale(1.1);
        transition: all 0.5s ease-out ;
    }
`

export const MoviesPage = () => {
    const SRC_DEFAULT = "https://drive.google.com/uc?export=download&id=";
    const nav = useNavigate();
    const dispatch = useDispatch();
    let rawData = useSelector(state => state.movie.movies);
    let rawDataFilter = useSelector(state => state.movie.filterData);
    const [limit, setLimit] = useState(10);
    useEffect(() => {
        dispatch.movie.getAll();
    }, [])
    const viewFilm = (id, title) => {
        localStorage.setItem("movieId", id);
        nav("/detail?" + title);
    }
    const searchMovies = () => {
        let nameStr = document.getElementById("name").value;
        let actorStr = document.getElementById("actor").value;
        let newData = [];
        if (actorStr != "") {
            rawData.map(data => {
                data.actorName.map(actor => {
                    if (actor.toUpperCase().includes(actorStr.toUpperCase())) {
                        newData.push(data);
                    }
                })
            });
        } else {
            newData = rawData;
        }
        newData = newData.filter(data => data.title.toUpperCase().includes(nameStr.toUpperCase()));
        console.log("NewData: " + newData);
        dispatch.movie.setDataMoviesFilterData(newData);
    }
    let data = rawDataFilter.slice(0, limit);
    const loadMore = () => {
        setLimit(limit + 5);
        if (limit >= rawDataFilter.length ) {
            setLimit(rawDataFilter.length);
            data = rawDataFilter.slice(0, limit);
            let button = document.getElementById("load-more");
            button.style.display = "none";
        } else {
            data = rawDataFilter.slice(0, limit);
        }
    }
    const addToList = (title, src, genres, id, price) => {
        return <Card onClick={() => viewFilm(id, title)} fee={price} className={"flex-basis-card"} title={title} srcImg={src} width={"210px"} height={"301px"} genres={genres} isGrid={true} font_size={"24px"} font_weight={"400"} line_height={"22px"} radius={"20px"}></Card>
    }
    const customLink = (driveLink) => {
        const fileId = driveLink.match(/[-\w]{25,}/);
        let src = SRC_DEFAULT + fileId[0];
        if (!driveLink) { src = SRC_DEFAULT}
        return src;
    }
    var listCard = [];
    for (var movie of data) {
        const driveLink = movie.movieImage;
        let src = customLink(driveLink);
        let genres = movie.genreName.toString();
        listCard.push(addToList(movie.title, src, genres, movie.id, movie.price));
    }
    return (
        <StyleMovies>
            <BestSeller></BestSeller>
            <Genres></Genres>
            <div className="search-input">
                <input id="name" type="text" placeholder="Enter Name. ex: Spider"/>
                <input id="actor" type="text" placeholder="Enter Actor. ex: Robert"/>
            </div>
            <div className="searchIcon">
                    <Button 
                        title={"Search"}
                        text_color={"#f88c8c"}
                        width={"140px"}
                        height={"40px"}
                        radius={"10px"}
                        border_custom={"none"}
                        font_size_text={"16px"}
                        bg_color={"#171616"}
                        onClick={() => searchMovies()} >
                    </Button>
                    <img src={searchIcon} alt="iconSearch" />
                </div>
            <div className="moives">
                <div className="title">
                    <span>Movies</span>
                </div>
                <div className="flex-movie">
                    {listCard}
                </div>
                <div id="load-more">
                    <Button
                        title={"Load More"}
                        text_color={"#f88c8c"}
                        width={"140px"}
                        height={"40px"}
                        radius={"10px"}
                        border_custom={"none"}
                        font_size_text={"16px"}
                        bg_color={"#171616"}
                        onClick={() => loadMore()} >
                    </Button>
                </div>
            </div>
        </StyleMovies>
    )
}