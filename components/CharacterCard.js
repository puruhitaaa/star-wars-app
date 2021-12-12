import Head from 'next/head';
import styled from 'styled-components';

const CharacterCard = ({ character }) => {
  const locations = [
    character?.bornLocation,
    character?.diedLocation,
    character?.homeworld,
  ];

  const updateLocations = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  return (
    <>
      <Head>
        <title>{character?.name} | StarWars.com</title>
      </Head>
      <CardContainer>
        <img src={character?.image} alt={`image-${character?.name}`} />
        <CharacterInfo>
          <h1>{character?.name}</h1>
          <h4>{character?.affiliations.length > 0 && 'AFFILIATIONS'}</h4>
          {character?.affiliations.map((affiliation, index) => (
            <p key={index}>{affiliation}</p>
          ))}
        </CharacterInfo>
      </CardContainer>
    </>
  );
};

export default CharacterCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 6px;

  > img {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 50vw;
    object-fit: contain;
    border-right: 2px solid #9e4f60;
    background-color: #151515;
  }
`;

const CharacterInfo = styled.div`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 30vw;
  padding: 20px;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/shared/bg_hash@2x-bd5b31294ea9.png');
  background-size: 7px;
  background-repeat: repeat-x;
  background-position: top left;
  background-color: #282727;
  > h1 {
    width: 100%;
    margin: 0 auto;
    color: #ddd;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  > h4 {
    color: #ddd;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  > p,
  a {
    color: #9e4f60;
    transition: color 125ms;
    text-transform: capitalize;
    text-decoration: none;
    :hover {
      color: rgb(183, 104, 121);
      cursor: pointer;
    }
  }
  > span {
    color: #aaa;
    text-transform: capitalize;
  }
`;
