import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const WrapBtn = styled.button`
    display: flex;
    align-items: center;
    border: none;
    width: 100%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding: 5px 10px;
    padding-left: 20px;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    &:hover{
        background-color: aliceblue;
    }
    &:hover span{
        display: flex;
    }
`
const Heading = styled.h3`
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;
`
const HoverTag = styled.span`
    background-color: black;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    left: 100%;
    content: "";
    display: none;
`

function SideNavRow({ ButtonIcon, ButtonTitle }) {
  return (
    <Container>
        <WrapBtn>
            <ButtonIcon />
            <Heading>{ButtonTitle}</Heading>
            <HoverTag>{ButtonTitle}</HoverTag>
        </WrapBtn>
    </Container>
  )
}

export default SideNavRow