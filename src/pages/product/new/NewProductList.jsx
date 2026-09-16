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

export default function NewProductList() {
  const { showToast } = useToast();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        setIsLoading(true);

        const result = await productService.getNewProducts();

        if (!result.success) {
          throw new Error("신상품 조회에 실패했습니다.");
        }

        setProducts(result.products);
      } catch (error) {
        console.error("신상품 조회 실패:", error);

        showToast(error.message || "신상품 조회에 실패했습니다.", false);

        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewProducts();
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
          <h2>신상품</h2>

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
                  productId={product.productId}
                  image={product.thumbnail}
                  name={product.name}
                  badge="new"
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
