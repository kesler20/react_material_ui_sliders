import Pages from "./pages/Pages";
import { Link, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../src/components/Navbar"
import { GiKnifeFork } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <GiKnifeFork />
          <FaPizzaSlice />
          <Logo to={"/"}>Site Title</Logo>
        </Navbar>
        <Pages />
      </BrowserRouter>
    </div>

  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size:1.5rem;
  font-weight:400;
  font-family: 'Lobster Two', cursive;
`;

export default App;
