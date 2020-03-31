import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import vistoso from './icons/vistoso.png';
import fashin from './icons/fashin.png';
import snake from './icons/snake.svg';
import github from './icons/github.svg';
import node from './icons/node.svg';
import reactnative from './icons/react-native.svg';
import react from './icons/react.svg';
import android from './icons/android.svg';
import java from './icons/java.svg';
import javascript from './icons/javascript.svg';
import mobile from './icons/iphone.svg';

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
`;

const Link = styled.a`
  text-decoration: none;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.3em;
  display: flex;
  flex-direction: row;
  flex-grow: 2;
`;

const Content = styled.div`
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ShowcaseContainer = styled.div`
  flex-grow:1;
  padding-left: 12px;
`;

const ProjectSummary = styled.div`
  padding: 8px;
`;

const Icon = styled.img`
  height:25px;
  width:25px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  > * + * {
    margin-left: 12px;
  }
`;

const SuperAppShowCase = () => (
  <IconContainer>
    <Icon
      src={reactnative}
      alt="React Native"
    />
    <Icon
      src={mobile}
      alt="Mobile"
    />
    <Icon
      src={javascript}
      alt="Javascript"
    />
  </IconContainer>
);

const TestingTutorShowCase = () => (
  <IconContainer>
    <Icon
      src={react}
      alt="React"
    />
    <Icon
      src={node}
      alt="Node"
    />
    <Icon
      src={javascript}
      alt="Javascript"
    />
  </IconContainer>
);

const SnakeShowCase = () => (
  <IconContainer>
    <Icon
      src={react}
      alt="React JS"
    />
    <Icon
      src={javascript}
      alt="Javascript"
    />
  </IconContainer>
);

const PortfolioShowcase = () => (
  <IconContainer>
    <Icon
      src={react}
      alt="React JS"
    />
    <Icon
      src={javascript}
      alt="Javascript"
    />
  </IconContainer>
);

const VistosoShowCase = () => (
  <IconContainer>
    <Icon
      src={android}
      alt="Android"
    />
    <Icon
      src={mobile}
      alt="Mobile"
    />
    <Icon
      src={java}
      alt="Java"
    />
  </IconContainer>
);

function ProjectItem({
  imageSrc,
  title,
  description,
  openUrl,
  renderShowcaseIcons,
}) {
  return (
    <ProjectRoot>
      <ImageContainer>
        <Link href={openUrl} target="_blank" rel="noopener noreferrer">
          <Image alt={title} src={imageSrc} />
        </Link>
      </ImageContainer>

      <DescriptionContainer>
        <TitleContainer>

          <Link href={openUrl} target="_blank" rel="noopener noreferrer">
            <Title>
              {title}
            </Title>
          </Link>
          {renderShowcaseIcons
          && (
          <ShowcaseContainer>
            {renderShowcaseIcons()}
          </ShowcaseContainer>
          )}
        </TitleContainer>
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
  renderShowcaseIcons: PropTypes.func.isRequired,
};

function WorkBody() {
  return (
    <RootDiv>
      <ProjectSummary>
        These are a collection of some projects I worked on professionally and personally
      </ProjectSummary>

      <ProjectItem
        imageSrc={github}
        title="Super app  "
        renderShowcaseIcons={() => (<SuperAppShowCase />)}
        openUrl="https://github.com/harish-aka-shivi/super-app"
        description="A React Native app experimenting with the different libraries. It also uses graphql and react-native-reanimated."
      />

      <ProjectItem
        imageSrc={github}
        title="Testing Tutor"
        renderShowcaseIcons={() => (<TestingTutorShowCase />)}
        openUrl="https://github.com/harish-aka-shivi/testing-tutor"
        description="A web app build using NextJS and NodeJS to teach users how to write tests."
      />

      <ProjectItem
        imageSrc={fashin}
        title="Fashin 👖"
        renderShowcaseIcons={() => (<VistosoShowCase />)}
        openUrl="https://play.google.com/store/apps/details?id=com.fashin.android"
        description="Fashin is an android app where you can get recommendation of clothes just by clicking the picture of the clothes you like"
      />

      <ProjectItem
        imageSrc={snake}
        renderShowcaseIcons={() => (<SnakeShowCase />)}
        title="Snake Game 🎮 "
        openUrl="https://harish-aka-shivi.github.io/snake/"
        description="Classic retro snake game. Enjoy."
      />

      <ProjectItem
        imageSrc={github}
        title="Portfolio"
        renderShowcaseIcons={() => (<PortfolioShowcase />)}
        openUrl="https://github.com/harish-aka-shivi/portfolio-2.0"
        description="This windows themed portfolio build using ReactJS."
      />

      <ProjectItem
        imageSrc={vistoso}
        title="Vistoso  📷"
        renderShowcaseIcons={() => (<VistosoShowCase />)}
        openUrl="https://play.google.com/store/apps/details?id=com.staqu.vistoso"
        description="An android app to apply fun filters and stickers on your image"
      />


    </RootDiv>
  );
}

export default WorkBody;
