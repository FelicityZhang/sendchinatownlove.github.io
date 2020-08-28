import styled from 'styled-components';

type Props = {
  color?: string;
  bold?: string;
  align?: string;
  size?: string;
};

type PassportProps = {
  mainView?: boolean;
};

const PassportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 367px;
  // max-width: 367px;
  margin: 0 auto;
  background: #ffffff;

  border: 1px solid #dedede;
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;

  position: absolute;
  z-index: ${(props: PassportProps) => (props.mainView ? '10' : '0')};
  top: ${(props: PassportProps) => (props.mainView ? '40px' : '0')};
`;

const ExternalLink = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  color: black;
  font-size: 12px;
  margin: 20px;
  letter-spacing: .15em;

  &.faq {
      @media (max-width: 365px) {
          margin-left: 8px;
          margin-right: 8px;
  }
`;

const TitleRow = styled.div`
  text-align: center;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.15em;
  margin: 5px auto;
`;

const SubTitle = styled.span`
  color: ${(props: Props) => (props.color ? props.color : 'black')};
  font-size: ${(props: Props) => (props.size ? props.size : '12px')};
  font-weight: ${(props: Props) => (props.bold ? props.bold : '400')};
  text-align: ${(props: Props) => (props.align ? props.align : 'center')};
  letter-spacing: 0.11em;
`;

const Button = styled.button`
  margin: 20px auto 10px auto;

  &.linkButton {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    line-spacing: 0.1em;
    font-weight: bold;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  padding-top: 5px;
`;

export {
  PassportContainer,
  TitleRow,
  Title,
  SubTitle,
  Button,
  ErrorMessage,
  ExternalLink,
};