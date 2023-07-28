import { Card } from "components/Card/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledShowCase = styled.div`
    .showcase {
        display: flex;
        width: 100vw;
        justify-content: space-around;
        height: 213px;
        padding: 15px;
        align-items: flex-end;
        .card img {
            width: 100px;
            height: 140px;
        }
    }
    .card:hover {
        transform: translateY(-35px);
        transition: all 0.5s ease-out ;
    }
    .card .fee {
        top: 10px !important;
        width: 30px;
        height: 15px;
        font-size: 11px;
        left: 0px;
    }
   
`
export const ShowCase = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    let rawData = useSelector(state => state.movie.movies);
    useEffect(() => {
        dispatch.movie.getAll();
    }, [])
    const viewFilm = (id, title) => {
        localStorage.setItem("movieId", id);
        nav("/detail?" + title);
    }
    let data = [];
    if (rawData.length >= 12) {
        data = rawData.slice(0, 12);
    } else {
        data = rawData;
    }
    var listCard = [];
    for (var movieObj of data.entries()) {
        let [index, movie] = movieObj;
        const driveLink = movie.movieImage;
        const fileId = driveLink.match(/[-\w]{25,}/);
        let src = "https://drive.google.com/uc?export=download&id=" + fileId[0];
        if (!driveLink) { src = "https://drive.google.com/uc?export=download&id="}
        listCard.push(
            <Card onClick={() => viewFilm(movie.id, movie.title)} fee={movie.price} key={index} className={"showcard" + (index + 1)} title={movie.title} srcImg={src} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
        );
    }
    
    return (
        <StyledShowCase>
            <div className="showcase">
                {listCard}
                {/* <Card className="showcard1" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard2" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard3" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard4" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard5" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard6" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard7" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard8" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard9" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard10" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard11" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard12" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card> */}
            </div>
        </StyledShowCase>
    )
}