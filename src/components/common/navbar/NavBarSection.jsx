import {Container, Image, Navbar}  from "react-bootstrap"
import Logo from "../../../assets/logo.svg";

function NavBarSection() {
    return(
        <Navbar expand="lg" variant="light">
        <Container className="justify-content-center w-50 py-5">
          <Navbar.Brand href="/"><Image src={Logo} alt="help beacon logo" fluid/> </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default NavBarSection;