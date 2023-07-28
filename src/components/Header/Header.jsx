import styled from 'styled-components';
import logoIcon from 'assets/logo.svg';
import menuIconLight from 'assets/menu-icon-light.svg';
import { Button } from 'components/Button';
import { Link, useNavigate } from 'react-router-dom';
import avatar from 'assets/avatar.svg'

const StyledHeader = styled.div`
    .header {
        background-color: #190401;
        width: 1440px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 17px;
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
    }
    .c {
        filter: brightness(0) saturate(100%) invert(13%) sepia(70%) saturate(7479%) hue-rotate(22deg) brightness(91%) contrast(118%);
    }
    
    .menu-nav {
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
        }
        ul li {
            text-decoration: none;
            display: inline-block;
            margin-left: 12px;
        }
        a {
            text-decoration: none;
        }
    }
    .login {
        display: flex;
        gap: 5px;
    }
    .line-white {
        border: 1px solid white;
        margin: 0;
    }
    .logout {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`
export const Header = () => {
    const userToken = localStorage.getItem("userToken");
    const nav = useNavigate();
    const profile = () => {
        nav("/userprofile");
    }
    const logout = () => {
        localStorage.removeItem("userToken");
        nav("/login");
    }
    return (
        <StyledHeader>
            <div className='header'>
                <div className='menuicon'>
                    <img src={menuIconLight} alt=""  className='c'/>
                </div>
                <div className='menu-nav'>
                    <ul>
                        <li> <Link to={'/'}><Button title={"HOME"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}> </Button> </Link></li>
                        <li> <Link to={'/movies'}><Button title={"MOVIES"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}> </Button> </Link></li>
                        <li className='logo'> <Link to={'/'}><img src={logoIcon} alt="" /></Link></li>
                        <li> <Link to={'/aboutus'}><Button title={"ABOUT"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}> </Button> </Link></li>
                        <li> <Link to={'/pricing'}><Button title={"PRICING"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}> </Button> </Link></li>
                    </ul>
                </div>
                {!userToken ?
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
            <hr className='line-white'/>
        </StyledHeader>
    )
}