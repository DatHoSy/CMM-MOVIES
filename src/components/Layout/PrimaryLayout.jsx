import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledPrimaryLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #130303;
    @media screen and (max-width: 1439px){
        .header {
            width: 990px;
            .menu-nav {
                ul li button {
                    width: 80px;
                    span {
                        font-size: 10px;
                    }
                }
            }
            .login {
                margin-left: 10px;
                button {
                    width: 40px;
                    span {
                        font-size: 8px;
                    }
                }
            }
        }
        .footer {
            width: 1024px;
        }
    }
    @media screen and (max-width: 1023px){
        .header {
            width: 734px;
            .menu-nav {
                ul li button {
                    width: 80px;
                    span {
                        font-size: 10px;
                    }
                }
            }
            .login {
                margin-left: 10px;
                button {
                    width: 40px;
                    span {
                        font-size: 8px;
                    }
                }
            }
        }
        .footer {
            width: 768px;
        }
    }
    @media screen and (max-width: 767px){
        .header {
            width: 467px;
            .menu-nav {
                ul li button {
                    width: 60px;
                    span {
                        font-size: 10px;
                    }
                }
            }
            .login {
                margin-left: 10px;
                button {
                    width: 34px;
                    height: 15px;
                    span {
                        font-size: 5px;
                    }
                }
            }
        }
        .footer {
            width: 500px;
        }
    }
    @media screen and (max-width: 500px) {
        .header {
            flex-direction: column;
            width: 120px;
            align-items: flex-start;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            background: transparent;
            /* margin: 0; */
            .menuicon {
                    display: none;
            }
            .menu-nav {
                ul {
                    flex-direction: column;
                    gap: 5px;
                }
                ul li {
                    margin: 0;
                }
                ul li button {
                    width: 88px;
                    justify-content: flex-start;
                    border: none;
                    background: transparent;
                }
                .logo {
                    order: -1;
                    
                }
            }
            .login {
                margin-top: 3px;
                flex-direction: column;
                margin-left: 0;
                gap: 3px;
                button {
                    width: 88px;
                    justify-content: flex-start;
                    border: none;
                    background: transparent;
                }
            }
        }
        .footer {
            width: 375px;
        }
    }
    
`
export const PrimaryLayout = ({children}) => {
    return (
        <StyledPrimaryLayout>
            <Header/>
            <Outlet></Outlet>
            <Footer></Footer>
        </StyledPrimaryLayout>
    )
}