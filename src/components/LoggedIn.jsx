import React from 'react'
import styled from '@emotion/styled'

const LoggedInWrapper = styled.aside`
  grid-area: li;
  background: #607d8b;
`

export default function LoggedIn() {
  return(
    <LoggedInWrapper></LoggedInWrapper>
  )
}