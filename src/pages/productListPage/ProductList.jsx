import { useEffect, useState } from "react";
import Pagination from "../../components/pagnation/Pagnation";
import BasicPage from "../basicPage/BasicPage";
import Loader from "../../components/loader/Loader";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import * as productService from "../../services/productServices";
import { CardContainer, PageTitleContainer } from "./ProductListStyle";
import useToast from "../../hooks/useToast";
import { useProductLimit } from "../../hooks/useProductLimit";
import ChatIcon from "../../components/ChatIcon/ChatIcon";

export default function ProductList() {
  const { showToast } = useToast();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const limit = useProductLimit();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const result = await productService.getProducts({
          page: currentPage,
          limit,
        });

        if (!result.success) {
          throw new Error("상품 목록 조회에 실패했습니다.");
        }

        setProducts(result.products);
        setTotalPages(result.totalPages);
        setTotalCount(result.totalCount);
      } catch (error) {
        console.error("상품 목록 조회 실패:", error);
        showToast(error.message, false);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, limit]);

  if (isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }
  return (
    <BasicPage>
      <PageTitleContainer>
        <h2>전체상품</h2>

        <p>총 {totalCount}개의 상품</p>
      </PageTitleContainer>

      <CardContainer>
        {products.map((product) => (
          <div key={product.productId} className="card-wrapper">
            <ProductCard
              image={product.thumbnail}
              name={product.name}
              badge=""
              showHeart={false}
            />

            <p>{product.name}</p>

            <strong>{product.price.toLocaleString()}원</strong>
          </div>
        ))}
      </CardContainer>
      <ChatIcon />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </BasicPage>
  );
}
