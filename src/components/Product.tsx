import React from 'react';
import './Product.css';

export interface productProps {

  id: string,
  collectionId: string,
  product_name: string,
  product_img: string,
  brand_id?: string,
  price: number,
  discount?: number,
  product_description: string,
  karly_only?: number,
  limit?: number,
  category_id: string[],
  collectionName: string,
  created: string,
  delivery_type: string,
  etc?: object,
  packaging_type: string,
  product_detail_img: string,
  updated: string

}

const getProductImageURL = ( product:productProps ) => {
  return `${import.meta.env.VITE_PB_API}/files/${product.collectionId}/${product.id}/${product.product_img}`;
}


const Product = (product: productProps) => {

  return (
  <li className='product'>
    <a href="#">
      <Thumbnail {...product} />
      {product.brand_id && <p className="brand_id">{product.product_name}</p>}
      <p className="title">{product.product_name}</p>
      <Price {...product} />
      <span className="description">{product.product_description}</span>
      <Keyword {...product}/>
    </a>
  </li>  

  )
}

const Thumbnail = (product: productProps) => (
  <figure className='thumbnail'>
    <img src={`${getProductImageURL(product)}`} alt={product.product_name} />
    <figcaption className='cart' aria-label={`${product.product_name}을(를) 장바구니에 담기`}></figcaption>
  </figure>
)

const Price = (product: productProps) => {
  const realPrice = (
    Math.floor(
      (product.price * (1 - 0.01 * (product.discount ? product.discount : 0))) / 10) * 10
    ).toLocaleString('ko-KR');

  return (
    <>
      <p className="discount">
        {product.discount !=0? <span className="discount-rate">{product.discount}%</span>:''}
        <span className="real-price">{realPrice}원</span>
      </p>
      {product.discount !=0 ? <p className="regular-price">{product.price.toLocaleString('ko-KR')}원</p>:''}
    </>
  )
}

const Keyword = (product: productProps) => (
  <p className="keyword-list">
    {product.karly_only == 1? <span className="keyword only">Karly Only</span>
      : product.karly_only == 2? <span className="keyword only">희소가치 프로젝트</span>: ''}
    {product.limit == 1 ? <span className="keyword">한정수량</span>: ''}
  </p>
)

export default Product;