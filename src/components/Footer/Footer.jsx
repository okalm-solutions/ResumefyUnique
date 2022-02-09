import { FooterSection, FooterDetails } from './Footer.styles';

function Footer() {
  return (
    <FooterSection>
      <FooterDetails style={{ paddingLeft: '128px' }}>
        &#169; 2022
      </FooterDetails>
      <FooterDetails style={{ paddingRight: '10px' }}>
        Project maintained by Okalm solution.
      </FooterDetails>
    </FooterSection>
  );
}

export default Footer;
