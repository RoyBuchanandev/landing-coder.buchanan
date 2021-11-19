import logo from "./logo.svg";
import "./App.css";
import * as reactBootStrap from "react-bootstrap";
import CarWidget from "./CarWidget/CarWidget";
import ItemListContainer from "./ItemListContainer";

function App() {
  function greeting() {
    alert("Hola, somos Salad Clo.");
  }

  return (
    <div className="App">
      <reactBootStrap.Navbar bg="light" expand="lg">
        <reactBootStrap.Container>
          <reactBootStrap.Navbar.Brand href="#home">
            Salad Clo.
          </reactBootStrap.Navbar.Brand>
          <reactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <reactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <reactBootStrap.Nav className="me-auto">
              <reactBootStrap.Nav.Link href="#home">
                Nosotros
              </reactBootStrap.Nav.Link>

              <reactBootStrap.Nav.Link href="#link">
                Contacto
              </reactBootStrap.Nav.Link>
              <reactBootStrap.NavDropdown
                title="Prendas"
                id="basic-nav-dropdown"
              >
                <reactBootStrap.NavDropdown.Item href="#action/3.1">
                  Remeras
                </reactBootStrap.NavDropdown.Item>
                <reactBootStrap.NavDropdown.Item href="#action/3.2">
                  Gorras
                </reactBootStrap.NavDropdown.Item>
                <reactBootStrap.NavDropdown.Item href="#action/3.3">
                  Shorts
                </reactBootStrap.NavDropdown.Item>
                <reactBootStrap.NavDropdown.Divider />

                <reactBootStrap.NavDropdown.Item href="#action/3.4">
                  Contacto
                </reactBootStrap.NavDropdown.Item>
              </reactBootStrap.NavDropdown>
            </reactBootStrap.Nav>
            <CarWidget />
          </reactBootStrap.Navbar.Collapse>
        </reactBootStrap.Container>
      </reactBootStrap.Navbar>
      <ItemListContainer call={greeting}  />
    </div>
  );
}

export default App;
