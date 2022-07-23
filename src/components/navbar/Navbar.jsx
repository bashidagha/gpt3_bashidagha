import Icon from '../../container/Icon';
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Icon name="logo"/>
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <Icon name="list"/>
        </button>
        

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              What is GPT?
            </a>
            <a className="nav-link" href="#">
              Open AI
            </a>
            <a className="nav-link" href="#">
              Case Studies
            </a>
            <a className="nav-link" href="#">
              Library
            </a>

          </div>

          
        </div>
        
        <div className='navbar-sign ms-auto'>
            <button className='gpt3_btn btn_signin'>Sign in</button>
            <button className='gpt3_btn btn_signup'>Sign up</button>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
