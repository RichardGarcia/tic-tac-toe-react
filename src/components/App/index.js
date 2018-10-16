import React from 'react'
import styled from 'styled-components'

// import {CaretLeft} from 'styled-icons/fa-solid/CaretLeft'
// import {CaretRight} from 'styled-icons/fa-solid/CaretRight'

import * as faSolid from 'styled-icons/fa-solid'
import * as muiIcon from 'styled-icons/material'

import { Board, Square } from '..'

const CaretLeftIcon = styled(faSolid.CaretLeft)`
  color: #fff;
  padding: 0;
  margin: 0;
  border-radius: 6px;
  background: #7abcff;
  background: -moz-linear-gradient(top, #7abcff 0%, #60abf8 44%, #335fbf 100%);
  background: -webkit-linear-gradient(
    top,
    #7abcff 0%,
    #60abf8 44%,
    #335fbf 100%
  );
  background: linear-gradient(to bottom, #7abcff 0%, #60abf8 44%, #335fbf 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#7abcff',
      endColorstr='#335fbf',
      GradientType=0
    );
  &:hover {
    background: #335fbf;
    background: -moz-linear-gradient(
      top,
      #335fbf 0%,
      #60abf8 56%,
      #7abcff 100%
    );
    background: -webkit-linear-gradient(
      top,
      #335fbf 0%,
      #60abf8 56%,
      #7abcff 100%
    );
    background: linear-gradient(
      to bottom,
      #335fbf 0%,
      #60abf8 56%,
      #7abcff 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#335fbf',
        endColorstr='#7abcff',
        GradientType=0
      );
  }
`
const CaretRightIcon = styled(faSolid.CaretRight)`
  color: green;
  border: 2px solid green;
  border-radius: 6px;
  &:hover {
    color: red;
    border: 2px solid red;
  }
`
const AndroidIcon = styled(muiIcon.Android)`
  color: green;
`

const StyledApp = styled.div`
  display: grid;
  font-family: 'Verdana', sans-serif;
  grid-template-areas: 'board';
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`
StyledApp.displayName = 'StyledApp'

const SmallBtn = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 220px;
  ::before {
    content: '🚀';
  }
`
export default function App () {
  return (
    <StyledApp>
      <Board>
        <Square index={0} player='x' />
        <Square index={1} player='o' />
        <Square index={2} player='x' />
        <Square index={3} player='o' />
        <Square index={4} player='x' />
        <Square index={5} player='o' />
        <Square index={6} player='x' />
        <Square index={7} player='o' />
        <Square index={8} player='x' />
      </Board>

      <p>testing icon</p>
      <CaretLeftIcon size='36' title='Caret left icon' />
      <br />
      <CaretRightIcon size='36' title='Caret right icon' />
      <br />
      <AndroidIcon size='48' title='Caret right icon' />
      <br />
      <SmallBtn>this is a button</SmallBtn>
      <br />
      <br />
    </StyledApp>
  )
}
