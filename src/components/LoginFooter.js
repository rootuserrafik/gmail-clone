import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    color: #43474A;
`
const SelectLg = styled.select`
    outline: none;
    border: none;
    cursor: pointer;
    & option{
        cursor: pointer;
    }
`
const MenuItems = styled.ul`
    list-style: none;
    display: flex;
`
const MenuItem = styled.li`
    margin-left: 15px;
`
const FotNav = styled.a`
    color: #5f6368;
    text-decoration: none;
`
function LoginFooter() {
  return (
    <Wrapper>
        <SelectLg>
            <option >English (United States)</option>
            <option >English (United Kingdom)</option>
            <option >বাংলা (Bangladesh) </option>
        </SelectLg>
        <MenuItems>
            <MenuItem><FotNav href="/#">Help</FotNav></MenuItem>
            <MenuItem><FotNav href="/#">Privacy</FotNav></MenuItem>
            <MenuItem><FotNav href="/#">Terms</FotNav></MenuItem>
        </MenuItems>
    </Wrapper>
  )
}

export default LoginFooter