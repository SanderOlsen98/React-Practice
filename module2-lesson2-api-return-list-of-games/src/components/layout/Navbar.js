import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function GameNavbar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">GameList</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Sander Lindberg Olsen</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default GameNavbar;
