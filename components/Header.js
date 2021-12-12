import styled from 'styled-components';
import Link from 'next/link';

import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <SocialLinks />
      </div>
      <Link href="/">
        <a>
          <img
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt="starWarsLogo"
          />
        </a>
      </Link>

      <div>
        <HeaderSearch>
          <input type="text" placeholder="Search Star Wars" />
          <img
            src="https://static-mh.content.disney.io/starwars/assets/navigation/icon_search-957a123fdb62.svg"
            alt="searchIcon"
          />
        </HeaderSearch>
        <HeaderActions>
          <button>LOG IN</button>
          <span>//</span>
          <button>SIGN UP</button>
        </HeaderActions>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 0;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg');
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  > a > img {
    object-fit: contain;
    margin-top: -40px;
    margin-bottom: -20px;
    height: 180px;
    filter: brightness(0) invert(1);
  }
`;

const HeaderSearch = styled.div`
  width: 26px;
  min-width: 26px;
  border-radius: 4px;
  background-color: #343434;
  box-shadow: none;
  border: 0;
  position: relative;
  width: 248px;
  opacity: 0.7;
  height: 40px;
  transition: opacity 350ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  opacity: 0.7;
  :focus-within {
    opacity: 1;
  }
  > input {
    background: transparent;
    outline: none;
    border: none;
    font-weight: 400;
    font-family: inherit;
    font-size: 15px;
    color: white;
  }
  > input::placeholder {
    opacity: 1;
    color: gray;
  }
  > img {
    object-fit: contain;
    height: 20px;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
  color: #999;

  > button {
    background: transparent;
    font-family: inherit;
    font-weight: 600;
    border: none;
    color: #999;
    font-size: 14px;
    cursor: pointer;
    transition: color 200ms;
    letter-spacing: 2px;

    :hover {
      color: #ccc;
    }
  }

  > span {
    color: #343434;
    font-size: 1.125rem;
    font-weight: 500;
  }
`;
