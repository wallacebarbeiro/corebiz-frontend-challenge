import React from 'react';
import { NewsWrapper } from './style';
import { Button } from '../Button';
import { Input } from '../Input';
import { userNews } from '../../services/user';

interface Props {
  title: string;
}

type NameAndEmail = {
  name: string;
  email: string;
};

type InputErros = {
  name: boolean;
  email: boolean;
};

const FormNews: React.FC<Props> = ({ title }) => {
  const [values, setValues] = React.useState<NameAndEmail>({
    name: '',
    email: ''
  });

  const [errorValues, setErrorValues] = React.useState<InputErros>({
    name: false,
    email: false
  });

  const [isFormSended, setisFormSended] = React.useState<boolean>(false);

  const handleChange =
    (fieldName: keyof NameAndEmail) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.currentTarget;
      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value
      }));
    };

  const handleBlur =
    (fieldName: keyof NameAndEmail) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const validEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (e.currentTarget.value.length == 0) {
        setErrorValues((currentValues) => ({
          ...currentValues,
          [fieldName]: true
        }));
      } else if (!validEmail.test(e.currentTarget.value) && e.currentTarget.name === 'email') {
        setErrorValues((currentValues) => ({
          ...currentValues,
          [fieldName]: true
        }));
      } else {
        setErrorValues((currentValues) => ({
          ...currentValues,
          [fieldName]: false
        }));
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sendedForm = await userNews(values);
    if (sendedForm) {
      setisFormSended(true);
    }
  };

  return (
    <NewsWrapper>
      <div className="container">
        {!isFormSended ? (
          <>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
              <Input
                name="name"
                placeholder="Digite seu nome"
                type="text"
                hasError={errorValues.name}
                errorText="Preencha com seu nome completo"
                value={values.name}
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                required
              />
              <Input
                name="email"
                placeholder="Digite seu email"
                type="email"
                hasError={errorValues.email}
                errorText="Preencha com um e-mail válido"
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                required
              />
              {errorValues.name || errorValues.email ? (
                <Button disabled>Eu quero!</Button>
              ) : (
                <Button type="submit">Eu quero!</Button>
              )}
            </form>
          </>
        ) : (
          <div className="email__sended">
            <p className="mail__send--success">
              <b>Seu e-mail foi cadastrado com sucesso!</b>
              <br />A partir de agora você receberá as novidade e ofertas exclusivas.
            </p>
            <Button onClick={() => setisFormSended(false)}>Cadastrar novo email</Button>
          </div>
        )}
      </div>
    </NewsWrapper>
  );
};

export default FormNews;
