import styled from 'styled-components';

import CharacterCard from '../../components/CharacterCard';

const Character = ({ character }) => {
  return (
    <CharacterContainer>
      <StarFieldLeft />
      <CharacterCard character={character} />
      <StarFieldRight />
    </CharacterContainer>
  );
};

export default Character;

export async function getStaticProps(context) {
  const character = await (
    await fetch(
      `https://akabab.github.io/starwars-api/api/id/${context.params.id}`
    )
  ).json();

  return {
    props: {
      character,
    },
  };
}

export async function getStaticPaths(context) {
  const characters = await (
    await fetch('https://akabab.github.io/starwars-api/api/all.json')
  ).json();

  const paths = characters.map((character) => `/id/${character.id}.json`);

  return {
    paths,
    fallback: false,
  };
}

const CharacterContainer = styled.div`
  padding: 40px;
  margin-top: 200px;
`;

const StarFieldLeft = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;
  left: 0;
  height: 1700px;
  background-position: left center;
  background-size: 100% auto;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg');
`;

const StarFieldRight = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;
  right: 0;
  height: 1700px;
  background-position: right center;
  background-size: auto 100%;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg');
`;
