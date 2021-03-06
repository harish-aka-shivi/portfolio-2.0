import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import close from './icons/close.png';

const WindowRoot = styled.article`
  width: 100vw;
  height:100vh;
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
    width: ${(props) => (props.width ? `${props.width}px` : '400px')};
    height:auto;
    /* height: ${(props) => (props.height ? `${props.height}px` : '400px')}; */
  }

`;

const ToolbarStyle = styled.div`
  padding: 5px 7px;
  position: relative;
  top: 2px;
  left: 3px;
  min-height: 20%;
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
  font-weight: 600;
  min-width: 160px;
  vertical-align: middle;
`;

const ToolbarIcon = styled.img`
  height:15%;
  width:15%;
  margin-right: 0.5em;
  user-select:none;
`;

const ContentStyle = styled.div`
  margin-top: 7px;
  width: calc(100% - 50px);
  padding: 20px;
  min-height:83%;
  margin-left: 3px;
  background: ${(props) => (props.backgroundColor)};
  overflow-y: scroll;
  max-height:60vh;
  box-shadow: 3px 3px 0 hsla(0, 0%, 100%, 0.6), inset 3px 3px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CloseButton = styled.a`
  height: 30px;
  width: 30px;
`;

const CloseImage = styled.div`
  height: 30px;
  width: 30px;
  display: inline-block;
  font-weight: 700;
  color: #000;
  font-size: 13px;
  font-family: sans-serif;
  background: #bdbdbd;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  box-shadow: inset -2px -2px 0 rgba(0,0,0,.25), inset 2px 2px 0 hsla(0,0%,100%,.8);
`;

function Content({ children, backgroundColor }) {
  return <ContentStyle backgroundColor={backgroundColor}>{children}</ContentStyle>;
}

function Toolbar({ children, icon, onClose }) {
  return (
    <div className="handle">
      <ToolbarStyle>
        <ToolbarTitle>
          {icon && <ToolbarIcon draggable={false} src={icon} />}
          {children}
        </ToolbarTitle>
        <CloseButton
          onClick={(event) => {
            if (onClose) {
              onClose(event);
            }
          }}
        >
          <CloseImage src={close} alt="Close window"> X </CloseImage>
        </CloseButton>
      </ToolbarStyle>
    </div>
  );
}


function Window({ children, height, width }) {
  return <WindowRoot height={height} width={width}>{children}</WindowRoot>;
}

Content.defaultProps = {
  backgroundColor: 'white',
};

Content.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  backgroundColor: PropTypes.string,
};

Window.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

Window.defaultProps = {
  height: 400,
  width: 400,
};

Toolbar.defaultProps = {
  icon: '',
};

Toolbar.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  onClose: PropTypes.func.isRequired,
  icon: PropTypes.string,
};

Window.Toolbar = Toolbar;
Window.Content = Content;
export default Window;
