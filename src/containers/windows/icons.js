import React from "react";
import styled from "styled-components";
import account from "./icons/account.png";
import work from "./icons/work.png";
import mail from "./icons/mail.png";

const IconsContainer = styled.div`
  position: absolute;
  top: 38px;
  left: 45px;
`;

const IconButton = styled.button`
  text-decoration: none;
  text-align: center;
  display: block;
  margin-bottom: 50px;
  background-color: transparent;
  color: white;
  border: none;
  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.5);
`;

const IconImage = styled.img`
  width: 60px;
  display: block;
  margin-bottom: 15px;
`;

// <a target="_blank" href="/icons/set/windows-live-mail">Windows Live Mail icon</a> by <a target="_blank" href="https://icons8.com">Icons8</a>

// eslint-disable-next-line react/prop-types
function Icon({ title, image }) {
  return (
    <IconButton>
      <IconImage src={image} alt={title} />
      {title}
    </IconButton>
  );
}

export default function Icons() {
  return (
    <IconsContainer>
      <Icon title="About" image={account} />
      <Icon title="Work" image={work} />
      <Icon title="Contact" image={mail} />
    </IconsContainer>
  );
}
