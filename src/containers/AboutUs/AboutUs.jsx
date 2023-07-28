import "./AboutUs.css";
import image1 from "assets/02.jpg";
import facebookLogo from "assets/icons8-facebook.svg";
import twitterLogo from "assets/icons8-twitter.svg";
import googleplayLogo from "assets/icons8-google-play-50.svg";
import appStoreLogo from "assets/icons8-app-store.svg";
import BannerPricing from "components/BannerPricing";
import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  @media screen and (max-width: 1439px) {
  }
  @media screen and (max-width: 1023px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 500px) {
  }
`;

const AboutUs = () => {
    return (
        <Wrapper>
            <BannerPricing title="About Us">

            </BannerPricing>
            <div style={{ maxWidth: "1440px" }}>
                <div className="main">
                    <div className="content">Masterminds Team</div>
                    <div className="content2">Your streamit is built by one of the best and well experienced web developers and an awarded Envato Elite Author</div>
                    <div className="card1">
                        <div className="inside-card">
                            <img className="card-image" src={image1} alt="image 1" />
                            <div className="card-content">ceo</div>
                            <div className="author">Tony Smith</div>
                        </div>
                        <div className="inside-card">
                            <img className="card-image" src={image1} alt="image 1" />
                            <div className="card-content">ceo</div>
                            <div className="author">Tony Smith</div>
                        </div>
                        <div className="inside-card">
                            <img className="card-image" src={image1} alt="image 1" />
                            <div className="card-content">ceo</div>
                            <div className="author">Tony Smith</div>
                        </div>
                        <div className="inside-card">
                            <img className="card-image" src={image1} alt="image 1" />
                            <div className="card-content">ceo</div>
                            <div className="author">Tony Smith</div>
                        </div>
                    </div>

                </div>
                <div className="info">
                    <div className="info2">

                        <div className="text">
                            <div className="text1">Contact us here</div>
                            <div className="text2">Streamit is located in VN and you can contact us at hello@streamit.com</div>
                            <div className="inner-info">
                                <div className="inner-info1">
                                    <p className="number">4</p>
                                    <p className="cate">Branch</p>
                                </div>
                                <div className="inner-info1">
                                    <p className="number">4</p>
                                    <p className="cate">Branch</p>
                                </div>
                                <div className="inner-info1">
                                    <p className="number">4</p>
                                    <p className="cate">Branch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="footer">
                    <div className="footer-left">
                        <div className="footer-left-1">
                            <div>Terms of use</div>
                            <div>Privacy policy</div>
                            <div>FAQ</div>
                            <div>Watch list</div>
                        </div>
                        <div>
                            2023 STREAMIT.All rights reserved.All videos all show on this platform are trademarks of, and all related images and content are properties of Streamit.
                        </div>
                    </div>
                    <div className="footer-center">
                        <div style={{ marginBottom: '20px' }}>Follow us</div>
                        <img src={facebookLogo} alt="facebook" className="media-image" />
                        <img src={twitterLogo} alt="twitter" className="media-image" />
                    </div>
                    <div className="footer-center">
                        <div style={{ marginBottom: '20px' }}>Streamit App</div>
                        <img src={googleplayLogo} alt="google-play" className="media-image" />
                        <img src={appStoreLogo} alt="app store" className="media-image" />
                    </div>
                </div> */}
            </div>
        </Wrapper>
    )
}
export default AboutUs;