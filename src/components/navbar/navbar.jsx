import './Navbar.css';

function Navbar() {
  return (
    <header id='navbarContainer'>
      <div className='navbarLogoBox'>
        <img id="logo" src='/logo.png' alt='Logo'/>
      </div>
      <h1>DevInFood</h1>
      <a>Cardápio</a>
    </header>
  );
}

export default Navbar;