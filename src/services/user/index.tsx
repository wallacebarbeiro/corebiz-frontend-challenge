const BASE_URL = 'https://corebiz-test.herokuapp.com/api/v1';

interface Data {
  name: string;
  email: string;
}

export const userNews = async ({ name, email }: Data): Promise<boolean> => {
  const url = `${BASE_URL}/newsletter `;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ name, email })
    });

    if (!response.ok) {
      return false;
    }

    if (response.status === 404) {
      return false;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('Não conseguimos comunicação com o servidor');
  }
};
