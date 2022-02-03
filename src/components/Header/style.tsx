import styled from 'styled-components';

export const Wrapper = styled.header`
  .container {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;

export const MenuButton = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;

export const HeaderLogo = styled.div`
  position: relative;

  img {
    width: 109px;
    height: 25px;
  }

  @media (min-width: 992px) {
    order: 0;

    img {
      width: auto;
      height: auto;
    }
  }
`;

export const BoxAreaCliente = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  align-self: end;
  flex: 0 0 40px;
  min-width: 40px;
  max-width: 40px;

  .btn__admin {
    display: none;
    font-size: 13px;
    color: #7a7a7a;
  }

  button {
    padding: 0;
    border: none;
    border-radius: 5px;
    box-shadow: none;
    background: transparent;
  }

  .cart__counter {
    position: absolute;
    top: 1px;
    right: 1px;
    display: block;
    width: 14px;
    height: 14px;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    font-weight: 400;
    background-color: #f8475f;
    border-radius: 100%;
  }

  @media (min-width: 992px) {
    order: 2;
    flex: 0 0 160px;
    min-width: 160px;
    max-width: 160px;
    margin-top: 20px;

    .btn__admin {
      display: flex;
      align-items: center;
      margin-right: 15%;

      span {
        margin-left: 5px;
        line-height: 18px;
      }
    }

    .btn__cart {
      position: relative;

      .cart__counter {
        right: -20px;
      }
    }
  }
`;

export const FormSearch = styled.div`
  margin-top: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  align-self: end;
  flex: 0 0 100%;
  min-width: 100%;
  max-width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  form input[type='text'] {
    background-color: inherit;
    width: 100%;
    font-size: 13px;
    color: #000;
    border: none;
    padding: 5px;
    transition: opacity 0.3s ease-in-out;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #7a7a7a;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #7a7a7a;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #7a7a7a;
    }
  }

  form button {
    padding: 0;
    border: none;
    box-shadow: none;
    background: transparent;
  }

  @media (min-width: 992px) {
    order: 1;
    flex: 0 0 55.6%;
    min-width: 55.6%;
    max-width: 55.6%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    margin-left: 5%;
  }

  @media (min-width: 1200px) {
    margin-left: 7%;
  }
`;
