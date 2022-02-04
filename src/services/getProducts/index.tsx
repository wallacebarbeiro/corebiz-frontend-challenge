const BASE_URL = 'https://corebiz-test.herokuapp.com/api/v1';

interface Props {
  stars?: number;
  imageUrl?: string;
  listPrice?: number;
  price: number;
  productId: number;
  productName: string;
  installments?: Array<number>;
}

export const getProducts = async (): Promise<Array<Props> | boolean> => {
  const url = `${BASE_URL}/products`;
  try {
    const response = await fetch(url);

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
