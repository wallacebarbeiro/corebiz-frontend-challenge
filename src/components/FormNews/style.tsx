import styled from 'styled-components';

export const NewsWrapper = styled.div`
  align-self: flex-end;
  background: #f2f2f2;
  flex: 0 1 100%;
  min-width: 100%;

  .container {
    padding: 25px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    display: block;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 19px;
    color: #333;
  }

  input[type='text'],
  input[type='email'] {
    height: 48px;
    width: 288px;
    left: 0px;
    top: 0px;
    border-radius: 5px;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    border: 0px;
    padding: 16px;
  }

  form {
    > :not(:first-child) {
      margin-top: 22px;
    }
  }

  p.alert--error {
    display: block;
    color: #d7182a;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 8px;
  }

  p.mail__send--success {
    font-size: 12px;
    font-style: normal;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;

    b {
      font-size: 14px;
      line-height: 14px;
    }
  }

  button {
    height: 48px;
    width: 288px;
    border-radius: 5px;
    background: #000000;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    border: 0px;
    cursor: pointer;
    :disabled {
      cursor: not-allowed;
      opacity: 0.8;
    }
  }

  div.input--error input[type='text'],
  div.input--error input[type='email'] {
    border: 1px solid #d7182a;
  }

  .email__sended {
    text-align: center;

    button {
      margin-top: 15px;
      height: 48px;
      width: 290px;
      left: 0px;
      top: 0px;
      border-radius: 5px;
      font-weight: normal;
    }
  }

  @media (min-width: 992px) {
    form {
      display: flex;
      flex-wrap: wrap;
      > :not(:first-child) {
        margin-top: 0px;
        margin-left: 8px;
      }
      button {
        width: 140px;
      }
    }

    .email__sended {
      button {
        width: 328px;
      }
    }
  }
`;
