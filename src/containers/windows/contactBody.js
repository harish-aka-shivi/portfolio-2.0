import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import twitter from './icons/twitter.svg';
import github from './icons/github.svg';
import linkedIn from './icons/linkedin.svg';
import gmail from './icons/gmail.svg';
import medium from './icons/medium.svg';

const ContactBodyRoot = styled.div`
  display: flex;
  flex-direction:column;
`;

const List = styled.ul`
  list-style:none;
  padding-inline-start:12px;
`;

const ListItem = styled.li`
  margin-top:8px;
`;

const SocialRoot = styled.a`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
`;

const Icon = styled.img`
  height:30px;
  width:30px;
`;

const Title = styled.strong`
  margin-left:8px;
`;

const ContactTitle = styled.p`
  padding-left: 10px;
`;

function SocialItem({
  title, icon, url, alt,
}) {
  return (
    <SocialRoot href={url} target="_blank">
      <Icon
        src={icon}
        alt={alt}
      />

      <Title>
        {title}
      </Title>
    </SocialRoot>
  );
}

SocialItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default function ContactBody() {
  return (
    <ContactBodyRoot>
      <ContactTitle>Please contact me on these links:</ContactTitle>
      <List>
        <ListItem>
          <SocialItem icon={gmail} title="harish_rana9@outlook.com" url="mailto:harish_rana9@outlook.com" alt="Email" />
        </ListItem>
        <ListItem>
          <SocialItem icon={twitter} title="Twitter" url="https://twitter.com/harish_rana9" alt="Twitter" />
        </ListItem>
        <ListItem>
          <SocialItem icon={linkedIn} title="LinkedIn" url="https://in.linkedin.com/in/harishakashivi" alt="LinkedIn" />
        </ListItem>
        <ListItem>
          <SocialItem icon={medium} title="Medium" url="https://medium.com/@harishrana_794" alt="Medium" />
        </ListItem>
        <ListItem>
          <SocialItem icon={github} title="Github" url="https://github.com/harish-aka-shivi" alt="Github" />
        </ListItem>
      </List>
    </ContactBodyRoot>
  );
}
