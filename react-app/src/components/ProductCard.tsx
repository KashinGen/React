import React from 'react';
import { CartItem } from '../types';

interface Props {
  cartItem: CartItem;
}

const ProductCard = ({ cartItem }: Props) => {
  const backgroundStyle = `url('${cartItem.thumbnail}') center/cover`;
  return (
    <div className="product-card">
      <div className="product-card__img-wrapper">
        <div className="product-card__img" style={{ background: backgroundStyle }}></div>
      </div>

      <div className="product-card__content">
        <div className="product-card__reviews-container">
          <div className={['product-card__rating', cartItem.rating >= 4.5 ? 'blue' : ''].join(' ')}>
            <span className="product-card__rating-star"></span>
            <span className="product-card__rating-number">{cartItem.rating.toFixed(1)}</span>
          </div>
          <div className="product-card__price">{cartItem.price} €</div>
        </div>
        <div className="product-card__name">{cartItem.title}</div>
        <ul className="product-card__info">
          <li>
            <span>Бренд</span>
            <span></span>
            <span>{cartItem.brand}</span>
          </li>
          <li>
            <span>Категория</span>
            <span></span>
            <span>{cartItem.category}</span>
          </li>
          <li>
            <span>В наличии</span>
            <span></span>
            <span>{cartItem.in_stock ? 'Да' : 'Под заказ'}</span>
          </li>
          <li>
            <span>Оплата</span>
            <span></span>
            <span>
              {cartItem.pay_method.map((pay, index) => {
                return (
                  <span key={pay}>
                    {pay} {index < cartItem.pay_method.length - 1 ? ',' : ''}
                  </span>
                );
              })}
            </span>
          </li>
        </ul>
        <div style={{ flex: '1 1 0%' }}></div>
      </div>
      <button className="product-card__add-btn">
        <span className="product-card__add-btn-text">В корзину</span>
        <span className="product-card__add-btn-icon"></span>
      </button>
    </div>
  );
};

export default ProductCard;
