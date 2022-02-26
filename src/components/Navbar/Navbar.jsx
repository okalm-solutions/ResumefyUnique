import { HeaderContainer, HeaderLogo, LogoImage, LogoText } from './Navbar.styles';
import { Link } from 'react-router-dom';

import Logo from '../../assets/file-solid.svg';

function Navbar() {
  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <Link to="/">
          <LogoImage src={Logo} alt="Logo" />
        </Link>
        <Link to="/">
          <LogoText> Resumefy </LogoText>
        </Link>
      </HeaderLogo>
    </HeaderContainer>
  );
}

export default Navbar;
