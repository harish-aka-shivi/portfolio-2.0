import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import android from './icons/android.svg';
import java from './icons/java.svg';
import javascript from './icons/javascript.svg';
import node from './icons/node.svg';
import reactnative from './icons/react-native.svg';
import react from './icons/react.svg';

const ResponsiveRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutRoot = styled.article`
  max-width: 400px;
`;

const Title = styled.h3`

`;

const Content = styled.p`
`;


const Skills = styled.div`
  margin-top:32px;
`;

const SkillTitle = styled.h3`
  margin-bottom:8px;
`;

const SkillBody = styled.div`

`;

const SkillTable = styled.table``;

const TableRow = styled.tr`
  width:100%;
`;

const SocialRoot = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
`;

const Icon = styled.img`
  height:30px;
  width:30px;
`;

const SkillRowTitle = styled.strong`
  margin-left:8px;
`;

const TableD = styled.td`
  width:30%;
  padding-bottom:16px;
`;

const AboutBodyRoot = styled.div`
  padding:8px;
`;

const ListItem = styled.li`
  white-space: nowrap;
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
          <Title>
          Harish Rana
          </Title>
          <Content>
          Hey there,
            <br />
          Few things about me:

            <ul>
              <ListItem>
                {' '}
              Likes to work on Mobile
                {' '}
                <span role="img" aria-label="mobile">📱</span>
                {' '}
              and Web
                <span role="img" aria-label="web"> 🕸️</span>
              </ListItem>
              <ListItem>
                {' '}
              Have been working-out since last 18 months
                <span role="img" aria-label="work out">💪</span>
              </ListItem>
              <ListItem>
                {' '}
              Fan of Yoga
                <span role="img" aria-label="yoga">🧘‍♂️</span>
              and can do a headstand.
                {' '}
                <span role="img" aria-label="head-stand">🤸‍♂️</span>
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
