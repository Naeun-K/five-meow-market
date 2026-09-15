import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BasicPage from "../../basicPage/BasicPage";
import Loader from "../../../components/loader/Loader";
import ProductCard from "../../../components/product/ProductCard/ProductCard";
import * as productService from "../../../services/productServices";
import {
  CardContainer,
  PageTitleContainer,
  ProductPage,
} from "../productListPage/ProductListStyle";
import useToast from "../../../hooks/useToast";

export default function BestProductList() {
  const { showToast } = useToast();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        setIsLoading(true);

        const result = await productService.getBestProducts();

        if (!result.success) {
          throw new Error("베스트 상품 조회에 실패했습니다.");
        }

        setProducts(result.products);
      } catch (error) {
        console.error("베스트 상품 조회 실패:", error);

        showToast(error.message || "베스트 상품 조회에 실패했습니다.", false);

        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBestProducts();
  }, [showToast]);

  if (isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  return (
    <BasicPage>
      <ProductPage>
        <PageTitleContainer>
          <h2>베스트 상품</h2>

          <p>총 {products.length}개의 상품</p>
        </PageTitleContainer>

        <CardContainer>
          {products.map((product) => (
            <Link
              key={product.productId}
              to={`/products/${product.productId}`}
              className="product-link"
            >
              <div className="card-wrapper">
                <ProductCard
                  image={product.thumbnail}
                  name={product.name}
                  badge="bestOrange"
                  showHeart
                />

                <p>{product.name}</p>

                <strong>{product.price.toLocaleString()}원</strong>
              </div>
            </Link>
          ))}
        </CardContainer>
      </ProductPage>
    </BasicPage>
  );
}
