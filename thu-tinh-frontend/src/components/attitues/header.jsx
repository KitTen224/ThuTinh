import logo from "../image/logo.jpg";
function Header() {
  return (
    <header className="header">
      <h1>Thư Tĩnh <span className="subtitle">- Lá thư im lặng</span></h1>
      <img src={logo} alt="avatar" className="avatarH" />
    </header>
  );
}

export default Header;