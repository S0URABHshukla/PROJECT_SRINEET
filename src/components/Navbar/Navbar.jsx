import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import n from "./Navbar.module.css";


function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img style={{width:'100px'}} src="srineetlogo.png" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{margin:'0 auto'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="Srineet-Brochure.pdf" download
             className="border border-primary p-2 rounded text-primary"
             style={{
               transition: 'border-color 0.3s, box-shadow 0.3s',
             }}
             
             >Download Catalogues
             
             </Nav.Link> */}
             
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Table top</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Wall Hung Basin</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Basin With Pedestal</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">One Piece Closet</NavDropdown.Item><NavDropdown.Divider />    
              <NavDropdown.Item href="#action/3.5">Wall Hung White</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">European Closet</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.7">Pan & Trap</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.8">Dark Series</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.9">Urinal White</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.10">Other Products</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#why" >Why Choose Us?</Nav.Link>           
            <Nav.Link href="#foo">Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;