import { HeaderContainer, HeaderLogo, LogoImage, LogoText } from './Navbar.styles';
import { Link } from 'react-router-dom';

import Logo from '../../assets/file-solid.svg';

function Navbar() {
  return (
    <HeaderContainer>
   
        <HeaderLogo>
        <Link to="/">
            <LogoImage src={Logo} alt='Logo' />
        </Link>
            <LogoText>Resumefy</LogoText>
        </HeaderLogo>
    
    </HeaderContainer>
  );
}

export default Navbar;
