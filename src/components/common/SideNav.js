import SideNavRow from './SideNavRow'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import styled from 'styled-components'

const Container = styled.div`
`

function SideNav() {
  return (
    <Container>
        <SideNavRow ButtonIcon={CreateOutlinedIcon} ButtonTitle="Inbox" />
        <SideNavRow ButtonIcon={CreateOutlinedIcon} ButtonTitle="Starred" />
        <SideNavRow ButtonIcon={CreateOutlinedIcon} ButtonTitle="Snoozed" />
        <SideNavRow ButtonIcon={CreateOutlinedIcon} ButtonTitle="Important" />
        <SideNavRow ButtonIcon={CreateOutlinedIcon} ButtonTitle="Sent" />
        <SideNavRow ButtonIcon={CreateOutlinedIcon} ButtonTitle="Drafts" />
    </Container>
  )
}

export default SideNav