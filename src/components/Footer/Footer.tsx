import React from 'react';
import HeadphoneIcon from '../../assets/heaphone-icon.svg';
import MailIcon from '../../assets/mail-icon.svg';
import FooterCorebizLogo from '../../assets/site-logo-corebiz-preto-cinza.svg';
import VtexLogo from '../../assets/vtex.svg';
import { Button } from '../Button';
import { FooterWrapper } from './style';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="box__Address">
          <h2>Localização</h2>
          <address>
            Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
            Alphavile SP <br />
            <a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag </a>
            <br />
            <a href="tel:+551130901039"> +55 11 3090 1039</a>
          </address>
        </div>
        <div className="box__contacts">
          <Button>
            <img src={MailIcon} alt="" />
            <span>ENTRE EM CONTATO</span>
          </Button>
          <Button>
            <img src={HeadphoneIcon} alt="" />
            <span>
              FALE COM O NOSSO
              <br /> CONSULTOR ONLINE
            </span>
          </Button>
        </div>
        <div className="box__devs">
          <ul>
            <li>
              <a href="https://www.corebiz.ag/pt/">
                <span>Created by</span>
                <img src={FooterCorebizLogo} alt="Corebiz" />
              </a>
            </li>
            <li>
              <a href="https://vtex.com/br-pt/">
                <span>Powered by</span>
                <img src={VtexLogo} alt="Vtex" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
