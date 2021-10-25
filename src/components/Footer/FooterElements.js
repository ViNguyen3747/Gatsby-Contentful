import styled from "styled-components";
import * as palette from "../../styles/Variables";

export const FooterContainer = styled.footer`
  background-color: ${palette.DARK};
  width: 100vw;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 80vw;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  margin: 40px auto 0 auto;

  @media screen and (max-width: ${palette.BP_LARGE}) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.div`
  color: ${palette.LIGHT};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  transition: all 0.4s ease-out;
  &:hover {
    color: ${palette.LIGHT_GREEN};
  }
`;

export const WebsiteRights = styled.small`
  color: ${palette.LIGHT};
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: ${palette.LIGHT};
  font-size: 24px;
  transition: all 0.2s ease-out;
  &:hover {
    color: ${palette.LIGHT_GREEN};
  }
`;
