import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import android from './icons/android.svg';
import java from './icons/java.svg';
import javascript from './icons/javascript.svg';
import node from './icons/node.svg';
import reactnative from './icons/react-native.svg';
import react from './icons/react.svg';
import headshot from './icons/headshot.jpeg';

const ResponsiveRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* max-height: 60vh; */
  /* overflow-y: scroll; */
`;

const AboutRoot = styled.article`
  width: 100%;
  /* max-width: 400px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h3`

`;

const Content = styled.p`
  width: 100%;
`;

const RandomFactTitle = styled.div`
  /* padding-inline-start: 10px; */
`;


const Skills = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SkillTitle = styled.h2`
  margin-bottom:12px;
  margin-top: 2px
`;

const SkillBody = styled.div`
  width: 100%;
`;

const SkillTable = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  width:100%;
`;

const SocialRoot = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  width : 50%;
  margin: 0 auto;
  white-space: nowrap;
`;

const Icon = styled.img`
  height:30px;
  width:30px;
`;

const SkillRowTitle = styled.strong`
  margin-left:8px;
`;

const TableD = styled.td`
  width:50%;
  padding-bottom:16px;
  /* padding-left: 2em; */
`;

const AboutBodyRoot = styled.div`
  padding:8px;
  width: 100%;
  /* padding-left: 2em; */
  /* padding-right: 2em; */
`;

const Description = styled.div`
  line-height: 1.7em;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding-inline-start: 20px; */
`;

const ListItem = styled.li`
  /* white-space: nowrap; */
`;

const HeadShot = styled.img`
  height: 30%;
  width: 30%;
  border-radius: 4em;

`;

function SkillItem({ title, icon, alt }) {
  return (
    <SocialRoot>
      <Icon
        src={icon}
        alt={alt}
      />

      <SkillRowTitle>
        {title}
      </SkillRowTitle>
    </SocialRoot>
  );
}

SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function AboutBody() {
  return (
    <ResponsiveRoot>
      <AboutBodyRoot>
        <AboutRoot>
          <HeadShot alt="Profile pic" src={headshot} />
          <Title>
          Harish Rana
          </Title>

          <Description>
            <div>
              I am software developer from India
              <span role="img" aria-label="India"> 🇮🇳</span>
              with an experience of 4 years.
              Currently, I am an Engineering Fellow at
              <span> </span>
              <span> </span>
              <a href="https://www.pesto.tech">Pesto</a>
            </div>
            <div>
              I enjoy working on Mobile
              <span role="img" aria-label="mobile"> 📱</span>
                and Web
              <span role="img" aria-label="web"> 🕸️</span>
                  .
            </div>
          </Description>

          <Content>
            <RandomFactTitle>
             Few random facts about me:
            </RandomFactTitle>
            <ul>
              <ListItem>
              Working-out
                <span role="img" aria-label="work out"> 💪</span>
              for the last 14 months and counting.
              </ListItem>
              <ListItem>
              Yoga enthusiast
                <span role="img" aria-label="yoga"> 🧘‍♂️</span>
              and can do a head-stand
                <span role="img" aria-label="head-stand">🤸‍♂️</span>
                .
              </ListItem>
            </ul>
          </Content>
        </AboutRoot>
        <Skills>
          <SkillTitle>Skills</SkillTitle>
          <SkillBody>
            <SkillTable>
              <tbody>
                <TableRow>
                  <TableD>
                    <SkillItem title="Android" icon={android} alt="Android" />
                  </TableD>
                  <TableD>
                    <SkillItem title="React" icon={react} alt="React" />
                  </TableD>
                </TableRow>
                <TableRow>
                  <TableD>
                    <SkillItem title="React Native" icon={reactnative} alt="React Native" />
                  </TableD>
                  <TableD>
                    <SkillItem title="Node" icon={node} alt="Node" />
                  </TableD>
                </TableRow>
                <TableRow>
                  <TableD>
                    <SkillItem title="Javascript" icon={javascript} alt="Javascript" />
                  </TableD>
                  <TableD>
                    <SkillItem title="Java" icon={java} alt="Java" />
                  </TableD>
                </TableRow>
              </tbody>
            </SkillTable>
          </SkillBody>
        </Skills>
      </AboutBodyRoot>
    </ResponsiveRoot>
  );
}

export default AboutBody;
