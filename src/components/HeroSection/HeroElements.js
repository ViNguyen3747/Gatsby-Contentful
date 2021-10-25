import styled, { keyframes } from "styled-components";
import * as palette from "../../styles/Variables";
const trackingInExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;
export const HeroContainer = styled.div`
  background: ${palette.DARK};
  display: flex;
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #233a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 100vw;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: ${palette.LIGHT};
  font-size: 70px;
  text-align: center;
  letter-spacing: 3px;
  -webkit-animation: ${trackingInExpand} 3s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: ${trackingInExpand} 3s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    font-size: 40px;
  }
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 25px;
  }
`;

export const HeroH2 = styled.h2`
  color: ${palette.LIGHT};
  font-size: 30px;
  text-align: center;
  line-height: 30px;
  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    font-size: 20px;
  }
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 15px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: ${palette.LIGHT};
  font-size: 24px;
  text-align: center;
  max-width: 60vw;
  line-height: 30px;

  @media screen and (max-width: ${palette.BP_MEDIUM}) {
    font-size: 20px;
  }
  @media screen and (max-width: ${palette.BP_SMALL}) {
    font-size: 15px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 50px;
  align-items: center;
`;
