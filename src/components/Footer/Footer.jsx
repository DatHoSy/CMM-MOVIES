import { styled } from "styled-components";
import logoIcon from 'assets/logo.svg';

const StyledFooter = styled.div`
    margin: 15px 0;
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1440px;
        img {
            width: 133px;
            height: 113px;
        }
        p {
            color: white;
        }
    }
    .line-white {
        border: 1px solid white;
        margin: 0;
    }
`
export const Footer = () => {
    
    return (
        <StyledFooter>
            <hr className='line-white'/>
            <div className="footer">
                <img src={logoIcon} alt="" />
                <p>M CINEMA © 2023 by Leon</p>
            </div>
        </StyledFooter>
    )
}