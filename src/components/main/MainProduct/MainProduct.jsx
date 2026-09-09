/** @jsxImportSource @emotion/react */
import ProductCard from "../../product/ProductCard/ProductCard";
import * as S from "./MainProduct.style";

const products = [
  {
    id: 1,
    name: "상품명",
    price: 12000,
  },
  {
    id: 2,
    name: "상품명",
    price: 15000,
  },
  {
    id: 3,
    name: "상품명",
    price: 18000,
  },
  {
    id: 4,
    name: "상품명",
    price: 20000,
  },
];

const MainProduct = ({
  showHeart = true,
  badge = "bestBrown",
  showInfo = true,
}) => {
  return (
    <div css={S.productList}>
      {products.map((product) => (
        <div css={S.productItem} key={product.id}>
          <ProductCard
            name={product.name}
            badge={badge}
            showHeart={showHeart}
          />
          {showInfo && (
            <div css={S.productInfo}>
              <p css={S.productName}>{product.name}</p>
              <p css={S.productPrice}>{product.price.toLocaleString()}원</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainProduct;
