import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getRelatedProducts } from "../../../services/productServices";

import {
  RelatedProductList,
  RelatedProductCard,
  ProductImageWrapper,
  CartButton,
  BuyButton,
} from "./RelatedProductStyle";

import useToast from "../../../hooks/useToast";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../../loader/Loader";

export default function RelatedProducts({ productId, onAddCart, onBuyNow }) {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (!productId) {
      return;
    }

    const fetchRelatedProducts = async () => {
      try {
        setIsLoading(true);

        const result = await getRelatedProducts(productId);

        if (!result.success) {
          throw new Error(result.message || "관련 상품 조회에 실패했습니다.");
        }

        setRelatedProducts(result.products);
      } catch (error) {
        console.error("관련 상품 조회 실패:", error);

        setRelatedProducts([]);

        showToast(error.message || "관련 상품 조회에 실패했습니다.", false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [productId, showToast]);

  const handleProductClick = (relatedProductId) => {
    navigate(`/products/${relatedProductId}`);
  };

  const handleAddCart = (event, product) => {
    event.stopPropagation();

    onAddCart?.(product);
  };

  const handleBuyNow = (event, product) => {
    event.stopPropagation();

    onBuyNow?.(product);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (relatedProducts.length === 0) {
    return <p>현재 함께 추천할 상품을 준비하고 있습니다.</p>;
  }

  return (
    <RelatedProductList>
      {relatedProducts.map((product) => (
        <RelatedProductCard
          key={product.productId}
          onClick={() => handleProductClick(product.productId)}
        >
          <ProductImageWrapper>
            <ProductCard
              image={product.thumbnail}
              name={product.name}
              badge=""
              showHeart
            />
          </ProductImageWrapper>

          <div className="product-info">
            <p className="product-name">{product.name}</p>

            <strong className="product-price">
              {product.price.toLocaleString()}원
            </strong>
          </div>

          <div className="button-wrapper">
            <CartButton
              type="button"
              onClick={(event) => handleAddCart(event, product)}
            >
              장바구니 담기
            </CartButton>

            <BuyButton
              type="button"
              onClick={(event) => handleBuyNow(event, product)}
            >
              바로 구매하기
            </BuyButton>
          </div>
        </RelatedProductCard>
      ))}
    </RelatedProductList>
  );
}
