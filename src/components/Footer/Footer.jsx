import { FooterSection, FooterDetails, FooterImage } from './Footer.styles';
import Github from '../../assets/Vector.png'

function Footer() {
  return (
    <FooterSection>
      <FooterDetails style={{ paddingLeft: '10px' }}>
        &#169; 2022
      </FooterDetails>
      <FooterDetails style={{ paddingRight: '10px' }}>
        contribute
        <FooterImage src={Github} alt='github'/>
      </FooterDetails>
    </FooterSection>
  );
}

export default Footer;
