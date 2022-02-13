import {
  HeaderContainer,
  HeaderLogo,
  LogoImage,
  LogoText,
  MenuIcon,
} from './Navbar.styles';
import { Link } from 'react-router-dom';

import Logo from '../../assets/file-solid.svg';
import Menu from '../../assets/menu.png';

function Navbar() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link to='/'>
          <LogoImage src={Logo} alt='Logo' />
        </Link>
        <LogoText>
          Resume<strong style={{ color: '#86ECA3' }}>fly</strong>
        </LogoText>
      </HeaderLogo>
      <MenuIcon src={Menu} alt='Menu' />
    </HeaderContainer>
  );
}

export default Navbar;
