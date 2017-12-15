import React from 'react'
import styled from 'styled-components'

export default function Display (props) {
  return (

    <StyledDisplay>
      <p>{props.title}</p>
    </StyledDisplay>

  )
}

const StyledDisplay = styled.div`
background-color: black;
color: white;
height: 30px;
width: 60px;
display: flex;
justify-content: center;
align-items: center;
`
