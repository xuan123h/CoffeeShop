import React from "react";
import ProductDetailsList from "../../componentsOne/Details/ProductDetailsList";
function ProductDetailsBonus(props) {
  const productDetailsList = [
    {
      id: 1,
      name: "Cà Phê Đen Nóng",
      price: "24.500 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-den-nong_34c4834cd4094d7e8659ad8d3c4fa6fc_large.jpg"
    },
    {
      id: 2,
      name: "Cà Phê Đen Đá",
      price: "20.300 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg"
    },
    {
      id: 3,
      name: "Cà Phê Sữa Đá Chai",
      price: "55.300 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bottlecfsd_496652_400x400_c673691fc1de4b359ee22dcf0c9c614f_large.jpg"
    },
    {
      id: 4,
      name: "Cà Phê Sữa Đá",
      price: "20.300 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg"
    },
    {
      id: 5,
      name: "Bạc Sỉu Đá",
      price: "20.300 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bac-siu-da_9bf82220a1a54847aa7357de541e7552_large.jpg"
    }
  ];
  return (
    <div>
      <ProductDetailsList productDetailsList={productDetailsList} />
    </div>
  );
}
export default ProductDetailsBonus;
