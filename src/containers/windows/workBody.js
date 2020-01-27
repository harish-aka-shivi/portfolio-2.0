import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import vistoso from './icons/vistoso.png';
import fashin from './icons/fashin.png';
import snake from './icons/snake.svg';

const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width:600px;
  background-color: white;
  > * + *{
    margin-top: 0.5em;
  }
`;

const ProjectRoot = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const ImageContainer = styled.div`
  /* flex-grow: 0.3; */
  display:flex;
  padding: 0.4em;
`;

const DescriptionContainer = styled.div`
  flex-grow: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 2em;
  padding-right: 0.4em;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
`;

const Image = styled.img`
  height: 17vw;
  width: 17vw;
  max-width: 90px;
  max-height: 90px;
  object-fit: cover;
  padding: 0.1em;
  /* box-shadow: -1px -1px 0 #f2f2f2, inset -2px -2px 0 rgba(0, 0, 0, 0.25); */
`;

const Link = styled.a`
  text-decoration: none;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.3em;
`;

const Content = styled.div`
`;

// const TitleContainer = styled.div`
//   font-weight: 600;
//   font-size: 1.3em;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

const ProjectSummary = styled.div`
  padding: 8px;
`;

function ProjectItem({
  imageSrc,
  title,
  description,
  openUrl,
}) {
  return (
    <ProjectRoot>
      <ImageContainer>
        <Link href={openUrl} target="_blank" rel="noopener noreferrer">
          <Image alt={title} src={imageSrc} />
        </Link>
      </ImageContainer>

      <DescriptionContainer>
        <Link href={openUrl} target="_blank" rel="noopener noreferrer">
          <Title>
            {title}
          </Title>
        </Link>
        <Content>
          {description}
        </Content>
      </DescriptionContainer>

    </ProjectRoot>
  );
}

ProjectItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  openUrl: PropTypes.string.isRequired,
};

function WorkBody() {
  return (
    <RootDiv>
      <ProjectSummary>
        These are a collection of some projects I worked on professionally and personally
      </ProjectSummary>

      <ProjectItem
        imageSrc={vistoso}
        title="Vistoso 🖌️ 📷"
        openUrl="https://play.google.com/store/apps/details?id=com.staqu.vistoso"
        description="An android app to apply fun filters and stickers on your image"
      />

      <ProjectItem
        imageSrc={fashin}
        title="Fashin 👗 👖"
        openUrl="https://play.google.com/store/apps/details?id=com.fashin.android"
        description="Fashin is an android app where you can get recommendation of clothes just by clicking the picture of the clothes you like"
      />

      <ProjectItem
        imageSrc={snake}
        title="Snake Game 🎮 🕹️"
        openUrl="https://harish-aka-shivi.github.io/snake/"
        description="Classic retro snake game. Enjoy"
      />

    </RootDiv>
  );
}

export default WorkBody;
