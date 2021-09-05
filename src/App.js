import styled from 'styled-components';
import './App.css';
import Navbar from './Navbar';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      
    {/* Navbar */}
      <NavbarSpace />
      <Navbar />

    {/* Portfolio */}
      <Portfolio />
    </div>
  );
}

export default App;

const NavbarSpace = styled.div`
  width: 18%;
  flex: 0.2;
  min-width: 300px;

`