import React from 'react';
import { getProducts } from '../../services/getProducts';
import { ProductCard } from '../ProductCard';
import { ShowcaseWrapper } from './style';

interface Props {
  stars?: number;
  imageUrl?: string;
  listPrice?: number;
  price: number;
  productId: number;
  productName: string;
  installments?: Array<number>;
}

const Showcase: React.FC = () => {
  const [products, setProducts] = React.useState<Array<Props> | boolean>();
  const data = React.useCallback(async () => {
    const items = await getProducts();
    if (items) setProducts(items);
  }, []);

  React.useEffect(() => {
    data();
  }, []);

  return (
    <>
      <div className="container showcase__flex">
        <ShowcaseWrapper>
          {typeof products === 'object' &&
            products?.map((item) => (
              <ProductCard
                key={item.productId}
                starts={item.stars}
                imageUrl={item.imageUrl}
                listPrice={item.listPrice}
                price={item.price}
                productId={item.productId}
                productName={item.productName}
              />
            ))}
        </ShowcaseWrapper>
      </div>
    </>
  );
};

export default Showcase;
