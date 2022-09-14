import React from 'react';
import SideNav from './SideNav'
import styled from 'styled-components'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const Container = styled.div`
  flex: 0.2;
`
const Wrapper = styled.div``
const Compose = styled.button`
  border: none;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ComposeTitle = styled.h2`
  margin-left: 10px;
`

function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <Compose>
          <CreateOutlinedIcon />
          <ComposeTitle>Compose</ComposeTitle>
        </Compose>
        <SideNav />
      </Wrapper>
    </Container>
  )
}

export default Sidebar