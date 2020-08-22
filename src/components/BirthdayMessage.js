
import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 4rem;
  @media screen and (max-width: 900px) {
    white-space: default;
    font-size: 2rem;
  }
`

const Container = styled.div`
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Wisher = styled.div`
  display: block;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 2rem;
  margin-top: 1rem;
  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
    white-space: default;
  }
`

class BirthdayMessage extends React.Component {
  render() {
    return (
      <Container>
        <img width={450} src={require('../danko.png')}/>
        <Message style={{ color: this.props.birthdayData.textColor }}>
          С ДР, {this.props.birthdayData.wishee}!
        </Message>
        <Wisher style={{ color: this.props.birthdayData.textColor }}>
          {this.props.birthdayData.wisher}&#128540;
        </Wisher>
      </Container>
    )
  }
}

export default BirthdayMessage
