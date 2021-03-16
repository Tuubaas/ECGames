import React from 'react'
import {StyledH1, StyledH2} from './Headers.styled'

const H1 = ({children}) => {
  return (
    <StyledH1>{children}</StyledH1>
  )
}

const H2 = ({children}) => {
  return (
    <StyledH2>{children}</StyledH2>
  )
}

export {H1, H2}