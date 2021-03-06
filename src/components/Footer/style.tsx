import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding-top: 27px;
  background-color: #000;
  border-bottom: 5px solid #c0c0c0;

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > div {
      flex: 1 1 100%;
      min-width: 100%;
    }
  }

  .box__Address h2 {
    font-weight: normal;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    position: relative;
    margin-bottom: 20px;

    &::after {
      content: '';
      position: absolute;
      width: 32px;
      height: 0px;
      left: 0px;
      bottom: -15px;
      border: 3px solid #ffffff;
    }
  }

  address {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    line-height: 190%;
    margin-top: 25px;
    margin-bottom: 27px;

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .box__contacts {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
  }

  .box__contacts button {
    padding: 0px 12px;
    cursor: pointer;
    border: 0px;
    width: 198px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    background-color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;

    img {
      margin-right: 8px;
    }
  }

  .box__contacts button:first-child {
    margin-bottom: 26px;
  }

  .box__devs ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .box__devs li {
    margin: 20px auto 10px auto;
  }

  .box__devs li a {
    text-decoration: none;
    cursor: pointer;
  }

  .box__devs li span {
    color: #fff;
    display: block;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media (min-width: 768px) {
    .container {
      > div {
        flex: 0 0 auto;
        min-width: auto;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .container {
      justify-content: space-between;
    }
    .box__devs li:first-child {
      margin-right: 15px;
    }
  }

  @media (min-width: 992px) {
    border-bottom: 10px solid #c0c0c0;

    .container {
      padding-left: 35px;
      padding-right: 35px;
      justify-content: space-between;
    }

    .box__contacts {
      padding-top: 0px;
    }

    .box__devs li:first-child {
      margin-right: 30px;
    }
  }
`;
