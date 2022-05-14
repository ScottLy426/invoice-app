import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";
import Avatar from "../assets/image-avatar.jpg";

const Section = styled.section`
  display: flex;
  width: 100%;
  background-color: var(--color-background-inverse);
`;

const LogoContainer = styled.div`
  border-top-right-radius: var(--border-radius-large);
  border-bottom-right-radius: var(--border-radius-large);
  background-color: var(--color-background-brand);

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.5rem;
  width: 4.5rem;

  position: relative;
`;

const ThemeBtn = styled.button`
  border: none;
  background-color: var(--color-background-inverse);
  cursor: pointer;
  padding-inline: var(--spacing-20);
  max-width: max-content;
  margin-left: auto;
`;

const AvatarContainer = styled.div`
  border-left: 0.01rem solid var(--color-purple-gray-900);
  background-color: var(--color-background-inverse);
  cursor: pointer;
  display: grid;
  place-items: center;
  padding-inline: var(--spacing-20);

  img {
    width: 2rem;
    border-radius: 50%;
  }
`;

export default function Navbar() {
  return (
    <Section>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>
      <ThemeBtn>
        <img src={Moon} alt="theme picker" />
      </ThemeBtn>
      <AvatarContainer>
        <img src={Avatar} alt="avatar" />
      </AvatarContainer>
    </Section>
  );
}
