import { styled } from "styled-components";
import filmLalaLand from "assets/film-lala-land.svg";

const StyledCardVideo = styled.div`
    .cardVideo {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 10px;
        span {
            color: white;
            font-size: 12px;
            font-weight: 400;
        }
    }
`
export const CardVideo = ({isWatch, imgNumber}) => {
    const imgList  = {filmLalaLand, filmLalaLand};
    return (
        <StyledCardVideo>
            <div className="cardVideo">
                <div className="avatar">
                    <img src={imgList[imgNumber]} alt="Film photo"/>
                </div>
                {isWatch ? <p>Watch trailer</p> : ""}
            </div>
        </StyledCardVideo>
    )
}