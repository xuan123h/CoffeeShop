import React from "react";
import ProductThreeList from "../../Filter/ProductThreeList";
import "./styles.scss";
function ProductThreeFeature(props) {
  const productThreeList = [
    {
      id: 1,
      name: "CÀ PHÊ ARABICA",
      price: "100,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/ebcc7aa0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe goi"
    },
    {
      id: 2,
      name: "CÀ PHÊ PHIN",
      price: "60,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/00db41b0-3c0e-11eb-ba29-331199710a1e.png",
      status: "ca phe goi"
    },
    {
      id: 3,
      name: "Cold Brew Phúc Bồn Tử",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cold-brew-pbt_130351_400x400_ca074b4907aa492bbf838082c4a82a35_large.jpg"
    },
    {
      id: 4,
      name: "Cold Brew Sữa Tươi",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cold-brew-sua-tuoi_379576_400x400_fd791b0775f846e193ff35739cc51ff2_large.jpg"
    },
    {
      id: 5,
      name: "Cold Brew Truyền Thống",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/classic-cold-brew_239501_400x400_5ba92cfd66bd412996c28acc3a346b75_large.jpg"
    }
  ];
  return (
    <div>
      <ProductThreeList productThreeList={productThreeList} />
    </div>
  );
}
export default ProductThreeFeature;
