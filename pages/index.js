import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Character from '../components/Character';

export default function Characters({ characters }) {
  const [value, setValue] = useState(12);

  const handleShowMore = () => {
    setValue(value + 12);
  };

  return (
    <>
      <Head>
        <title>Star Wars Characters | StarWars.com</title>
      </Head>

      <HomeScreenContainer>
        <StarFieldLeft />
        <CharactersContainer>
          {characters
            .filter((character) => character.id !== 28 && character.id !== 77)
            .map(
              (character, idx) =>
                idx < value && (
                  <Character key={character.id} character={character} />
                )
            )}
        </CharactersContainer>
        {value < characters.length ? (
          <Button onClick={handleShowMore}>Show More</Button>
        ) : null}
        <StarFieldRight />
      </HomeScreenContainer>
    </>
  );
}

export async function getStaticProps(context) {
  const characters = await (
    await fetch('https://akabab.github.io/starwars-api/api/all.json')
  ).json();

  return {
    props: {
      characters,
    },
  };
}

const CharactersContainer = styled.div`
  display: flex;
  margin-top: 200px;
  padding: 30px;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  background-color: #151515;
`;
const HomeScreenContainer = styled.div``;

const StarField = styled.div`
  position: fixed;
  width: 200px;
  top: 0;
  background-repeat: repeat-y;
`;

const StarFieldLeft = styled(StarField)`
  left: 0;
  height: 1700px;
  background-position: left center;
  background-size: 100% auto;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg');
`;
const StarFieldRight = styled(StarField)`
  right: 0;
  height: 1700px;
  background-position: right center;
  background-size: auto 100%;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg');
`;

const Button = styled.button`
  display: block;
  text-transform: uppercase;
  color: #aaa;
  background-color: transparent;
  border: none;
  font-family: inherit;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 18.4px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  :hover {
    color: #fff;
    cursor: pointer;
  }

  :hover::after {
    border-bottom-color: #fff;
    width: 100%;
  }

  ::after {
    content: '';
    display: block;
    width: 40%;
    margin 0 auto;
    opacity: .9;
    border-bottom: 1px solid transparent;
    
    -webkit-transition: border-color 200ms, width 250ms;
    -moz-transition: border-color 200ms, width: 250ms;
    transition: border-color 200ms, width: 250ms;
  }

`;
