import React, { useState } from 'react';
import styled from 'styled-components';

import { Row } from './PassportDashboard';

import { EMAIL_REGEX } from '../../utilities/hooks/ModalPaymentContext/constants';

import CrawlInsta from './CrawlInsta.png';

interface Props {
  setCurrentScreenView: Function;
};

const Track = ({ setCurrentScreenView }: Props) => {
  const [email, setEmail] = useState('');
  const [ticketCode, setTicketCode] = useState('');
  // TODO(Athena): Check error code validity --> send to BE first then process?
  // Follow up to see how this part works
  const [isTicketValid, setIsTicketValid] = useState(true);
  const [instagramHandle, setinstagramHandle] = useState('');

  return (
    <Container>
      <InputContainer className="trackScreen top">
        <Title>PASSPORT TO CHINATOWN</Title>
        <FinePrint className="center">
          Enter your ticket code to start accumulating rewards you can use in
          Chinatown
        </FinePrint>

        <Column>
          <Label htmlFor="email-input">Email Address</Label>
          <InputField
            name="email-input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            pattern={EMAIL_REGEX.source}
          />
          {!!email && !EMAIL_REGEX.test(email) && (
            <ErrorMessage>Please enter a valid email address.</ErrorMessage>
          )}
        </Column>

        <Column>
          <Label htmlFor="ticket-code">Ticket Code</Label>
          <InputField
            name="ticket-code"
            type="text"
            onChange={(e) => setTicketCode(e.target.value)}
            value={ticketCode}
          />

          {/* TODO: need to sync up to something to check error code validity */}
          {!isTicketValid && (
            <ErrorMessage>
              This is not a valid Ticket Code. Please check your ticket again
              and make sure you haven’t added this ticket before.
            </ErrorMessage>
          )}
        </Column>
      </InputContainer>
      
      <InputContainer className="bottom">
        <Row>
          <FinePrint className="smallText">
            To be entered into our weekly giveaway, share your food crawl
            pictures on Instagram and tag @sendchinatownlove{' '}
          </FinePrint>
          <img src={CrawlInsta} alt="social-media-logo" width="40px"></img>
        </Row>

        <Label htmlFor="instagram-handle">Instagram Handle (Optional)</Label>
        <InputField
          name="instagram-handle"
          type="text"
          onChange={(e) => setinstagramHandle(e.target.value)}
          value={instagramHandle}
        />
      </InputContainer>

      <Button
        value="track-screen-button"
        className="button--red-filled"
        disabled={!email || !ticketCode}
        onClick={() => setCurrentScreenView(1)}
      >
        Add Ticket
      </Button>
    </Container>
  );
};

export default Track;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

export const InputContainer = styled.div`
  background-color: white;
  border: 1px solid #dedede;
  padding: 25px 20px;
  box-sizing: border-box;
  overflow:hidden;

  &.trackScreen {
    padding-top: 60px;
  }

  &.top {
    border-radius: 20px 20px 0px 0px;
    border-bottom: 1px dashed #dedede;
  }

  &.bottom {
    padding-top: 25px;
    border-radius: 0px 0px 20px 20px;
    border-top: 1px dashed #dedede;
  }
`;

export const FinePrint = styled.p`
  &.center {
    text-align: center;
    padding: 0 20px;
  }

  &.bold {
    font-weight: bold;
    width: 250px;
  }

  &.smallText {
    font-size: 10px;
  }

  &.red {
    color: #A8192E;
  }
`;

const Label = styled.label`
  font-size: 13px;
`;

const Column = styled.div`
  margin: 25px 0;
`;

const Title = styled.p`
  color: #a8192e;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  letter-spacing: .15em;
`;

export const Button = styled.button`
  margin: 20px 0 10px;

  &.linkButton {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    line-spacing: .1em;
    font-weight: bold;
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #dadada;
  margin-top: 8px;
  padding-left: 1em;
  border-radius: 5px;

  :invalid {
    border: 1px solid red;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  padding-top: 5px;
`;
