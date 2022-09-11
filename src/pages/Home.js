import Header from './../components/common/Header';
import Sidebar from './../components/common/Sidebar';
import styled from 'styled-components'

const Container = styled.div``
const WrapContent = styled.div`
  display: flex;
`
const Sidebarss = styled.div``

function Home() {
  return (
    <Container>
        {/* Header */}
        <Header />
        {/* Body */}
        <WrapContent>
          <Sidebar />
          <Sidebarss />
        </WrapContent>
        {/* Body - Sidebar */}
        {/* Body - Sidebar - Nav */}
        {/* Body - Sidebar - Lables */}
        {/* Body - Contents */}
        {/* Body - Contents - Header Top */}
        {/* Body - Contents - Header Section */}
        {/* Body - Contents - Single Item */}
    </Container>
  )
}

export default Home