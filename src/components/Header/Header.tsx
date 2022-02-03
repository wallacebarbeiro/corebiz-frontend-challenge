import React from 'react';
import Icon from '../../../src/assets/icon-menu.svg';
import Logo from '../../../src/assets/site-logo-corebiz-preto-cinza-mobile.svg';
import Cart from '../../../src/assets/shopping-cart.svg';
import SearchIcon from '../../../src/assets/search-icon.svg';
import UserIcon from '../../../src/assets/user-icon.svg';
import { Input } from '../Input';
import { Button } from '../Button';
import { BoxAreaCliente, FormSearch, HeaderLogo, MenuButton, Wrapper } from './style';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <MenuButton>
          <img src={Icon} alt="" />
        </MenuButton>
        <HeaderLogo>
          <img src={Logo} alt="" />
        </HeaderLogo>
        <BoxAreaCliente>
          <Button className="btn__admin">
            <img src={UserIcon} alt="" />
            <span className="">Minha Conta</span>
          </Button>
          <Button className="btn__cart">
            <img src={Cart} alt="" />
            <span className="cart__counter">0</span>
          </Button>
        </BoxAreaCliente>
        <FormSearch>
          <form>
            <Input name="search__input" type="text" placeholder="O que está procurando?" />
            <Button>
              <img src={SearchIcon} alt="" />
            </Button>
          </form>
        </FormSearch>
      </div>
    </Wrapper>
  );
};

export default Header;
