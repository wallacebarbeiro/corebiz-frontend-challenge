import styled from 'styled-components';

export const CardProduct = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1 0 25%;
  min-width: 25%;
  max-width: 25%;
  justify-content: center;
  align-items: center;
  position: relative;

  a {
    position: relative;
    cursor: pointer;
    > div {
      position: relative;
    }
  }

  a ~ div {
    width: 100%;
    padding: 14px 0px;
    max-width: 216px;
  }

  .promo__flag {
    position: absolute;
    right: 0px;
    top: 0px;
    &::before {
      z-index: 1;
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 81px 72px 0;
      border-color: transparent #f8475f transparent transparent;
    }

    span {
      position: relative;
      z-index: 2;
      display: block;
      font-size: 16px;
      font-style: normal;
      font-weight: 900;
      line-height: 22px;
      color: #fff;
      text-align: right;
      text-transform: uppercase;
      margin-top: 10px;
      margin-right: 10px;
    }
  }

  em {
    display: block;
  }

  h3 {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: #7a7a7a;
  }

  .product__button {
    text-align: center;
  }

  button {
    opacity: 0;
    pointer-events: none;
    height: 32.418365478515625px;
    width: 125.27999114990234px;
    border-radius: 5px;
    background: #000000;
    border-radius: 5px;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    border: 0px;
    cursor: pointer;
    pointer-events: all;
  }

  .last__price {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    text-decoration: line-through;
    color: #7a7a7a;
  }

  .actual__price {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: #000;
    span {
      font-size: 16px;
      margin-right: 8px;
    }
  }

  &:hover {
    a ~ div {
      background-color: #e6e8ea;
      opacity: 1;
      padding: 14px 0px;

      button {
        opacity: 1;
      }
    }
  }
`;
