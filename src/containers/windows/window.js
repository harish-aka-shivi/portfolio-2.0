import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import close from './icons/close.png';

const WindowRoot = styled.div`
  width: 100vw;
  cursor: default;
  padding-bottom: 9px;
  background: #bdbdbd;
  display: inline-block;
  box-shadow: -3px -3px 0 #f2f2f2, inset -3px -3px 0 rgba(0, 0, 0, 0.25);
  position:absolute;
  left:0px;
  top:0px;
  /* transform: translate(198.882px, 51.4572px); */

  @media (min-width: 768px) {
    width:400px;
  }

`;

const ToolbarStyle = styled.div`
  padding: 5px 7px;
  position: relative;
  top: 2px;
  left: 3px;
  height: 30px;
  width: calc(100% - 24px);
  vertical-align: middle;
  background: linear-gradient(90deg, #de241e 0, #fff200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ToolbarTitle = styled.div`
  float: left;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: 16px;
  /* margin-top: 2px; */
  min-width: 160px;
  vertical-align: middle;
`;

const ContentStyle = styled.div`
  margin-top: 7px;
  width: calc(100% - 30px);
  /* position:relative; */
  /* width:100%;  */
  padding: 10px;
  min-height: 200px;
  margin-left: 3px;
  background: #fff;
  box-shadow: 3px 3px 0 hsla(0, 0%, 100%, 0.6), inset 3px 3px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.a`
  height: 30px;
  width: 30px;
`;

const CloseImage = styled.img`
  height: 30px;
  width: 30px;
`;

function Content({ children }) {
  return <ContentStyle>{children}</ContentStyle>;
}

function Toolbar({ children, onClose }) {
  return (
    <div className="handle">
      <ToolbarStyle>
        <ToolbarTitle>{children}</ToolbarTitle>
        <CloseButton
          onClick={(event) => {
            if (onClose) {
              onClose(event);
            }
          }}
        >
          <CloseImage src={close} alt="Close window" />
        </CloseButton>
      </ToolbarStyle>
    </div>
  );
}


function Window({ children }) {
  return <WindowRoot>{children}</WindowRoot>;
}

Content.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

Window.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

Toolbar.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  onClose: PropTypes.func.isRequired,
};

Window.Toolbar = Toolbar;
Window.Content = Content;
export default Window;
