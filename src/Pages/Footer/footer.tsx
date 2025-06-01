import HeaderSocials from '../home/Socials';
import './footer.css';
function Footer() {
    
    return (
      <footer className="footer-page">
        <div className="footer-content">
          <div className="rights">
            © 2025 Mayer Mamdouh. All rights reserved.
          </div>
          <div className="soicals"> 
            {" "}
            <HeaderSocials footer={true}/>
          </div>
        </div>
      </footer>
    );
}

export default Footer;