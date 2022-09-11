import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GmailLogoSrc from './../../assets/img/gmail_logo.png';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
`
const Left = styled.div`
  flex: .2;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: .6;
`
const Right = styled.div`
  flex: .2;
  align-items: center;
  text-align: right;
`
const LogoImg = styled.img`
  width: 100px;
`
const SearchArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background-color: #0000003b;
  width: 80%;
  padding: 8px 12px;
  border-radius: 10px;
`
const SearchInput = styled.input`
  flex: 100%;
  background-color: transparent;
  border: 0;
  padding: 8px;
  color: #3d3d33;
  font-size: 18px;
  &:focus{
    outline: none;
  }
`
const ProfileOption = styled.div``
const ActionButton = styled.button`
  border-radius: 50%;
  border: 0;
  padding: 6px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  &:hover{
    background-color: #F0F0F0;
  }
`

function Header() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ActionButton><MenuIcon /></ActionButton>
          <LogoImg
            src={GmailLogoSrc}
            alt="Gmail Logo"
          />
        </Left>
        <Center>
          <SearchArea>
            <ActionButton><SearchIcon /></ActionButton>
            <SearchInput type="text" placeholder='Search in mail'/>
            <ActionButton><CloseIcon /></ActionButton>
            <ActionButton><TuneIcon /></ActionButton>
          </SearchArea>
        </Center>
        <Right>
          <ProfileOption>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
              <ActionButton><HelpOutlineIcon /></ActionButton>
              <ActionButton><SettingsIcon /></ActionButton>
              <ActionButton><AppsRoundedIcon /></ActionButton>
              <Avatar
                alt="Rafikul Islam"
                src="https://lh3.googleusercontent.com/a-/AFdZucoCGoqTgoaGcYPws3jF3m_u7t7ZqhZhQLTmF3eJ=s192-c-mo"
                sx={{ width: 40, height: 40 }}
              />
            </Stack>
          </ProfileOption>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Header