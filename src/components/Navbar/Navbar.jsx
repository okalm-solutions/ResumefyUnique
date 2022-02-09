import { HeaderContainer, HeaderLogo, LogoImage } from './Navbar.styles';

import Logo from '../../assets/file-solid.svg';

function Navbar() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <LogoImage src={Logo} alt='Logo' /> Resumefy
      </HeaderLogo>
    </HeaderContainer>
  );
}

export default Navbar;
