import { styled } from "styled-components";
const StyledCardVideoTrailer = styled.div`


 .cardVideo {
    
 }
 img {

    width: 300px;
    height: 170px;
    margin-bottom: 0px;
    padding-top: 25px;
    border-radius: 10px;
    
 }
 p{
    margin-top: 0;
    font-family: 'Blinker';
        color: white;
 }
`
export const CardVideoTrailer = ({ srcLink, movieName }) => {
    return (
        <StyledCardVideoTrailer>
        
            <img src={srcLink} />
            <p>{movieName}</p>

        </StyledCardVideoTrailer>
    )
}