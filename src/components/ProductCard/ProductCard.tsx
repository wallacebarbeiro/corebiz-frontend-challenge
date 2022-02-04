import React from 'react';
import { useCart } from '../../context/Cart';
import { Button } from '../Button';
import { CardProduct } from './style';

interface Props {
  starts?: number;
  imageUrl?: string;
  listPrice?: number;
  price: number;
  productId: number;
  productName: string;
}

const Showcase: React.FC<Props> = ({
  starts,
  imageUrl,
  listPrice,
  price,
  productId,
  productName
}) => {
  const { setCart } = useCart();
  return (
    <>
      <CardProduct className="card__product">
        <a>
          <div>
            <div className="promo__flag">
              <span>Off</span>
            </div>
            <picture>
              <img src={imageUrl} alt={productName} />
            </picture>
          </div>
        </a>
        <div>
          <h3>{productName}</h3>
          {/* <div className="starts">{starts}</div> */}
          <div className="Price">
            <em className="last__price">
              {listPrice &&
                listPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
            </em>
            <em className="actual__price">
              <strong>
                <span>por</span>
                {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </strong>
            </em>
          </div>
          <div className="product__button">
            <Button onClick={() => (setCart ? setCart((currentValues) => currentValues + 1) : '')}>
              Comprar
            </Button>
          </div>
        </div>
      </CardProduct>
    </>
  );
};

export default Showcase;
