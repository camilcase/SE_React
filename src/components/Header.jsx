import './Header.css';
function Header() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo"></div>
            <span className="title">EIEMS</span>
          </div>
        </div>
        <div className="header-right">
          <i className="bi bi-bell icon"></i>
        </div>
      </div>
    );
  }

  export default Header;