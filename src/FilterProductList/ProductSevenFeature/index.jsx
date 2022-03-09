import React from "react";
import ProductSevenList from "../../Filter/ProductSevenList";
import "./styles.scss";
function ProductSevenFeature(props) {
  const productSevenList = [
    {
      id: 1,
      name: "PHÚC BỒN TỬ",
      price: "50,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/aef9a5d0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "brew"
    },
    {
      id: 2,
      name: "COLD BREW SỮA TƯƠI",
      price: "50,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/c8f605a0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "brew"
    },
    {
      id: 3,
      name: "CÀ PHÊ ARABICA",
      price: "100,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/ebcc7aa0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe goi"
    },
    {
      id: 4,
      name: "Chocolate Đá",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chocolate-da_877186_400x400_30a43c54fe484ecfbd606937604ef351_large.jpg"
    },
    {
      id: 5,
      name: "Chocolate Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg"
    },
    {
      id: 6,
      name: "Chocolate Nóng",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chocolatenong_949029_400x400__1__eb5c9c7810024b7195999ac4aaf100ef_large.jpg"
    },
    {
      id: 7,
      name: "Matcha Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg"
    },
    {
      id: 8,
      name: "Matcha Latte Đá",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/matcha-latte-da_083173_400x400_5725292025844c5da25a91d6e9b05a4b_large.jpg"
    },
    {
      id: 9,
      name: "Matcha Latte Nóng",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/matcha-latte-_936022_400x400_4cb3c7a6feec46578f68e214af242b4e_large.jpg"
    }
  ];
  return (
    <div>
      <ProductSevenList productSevenList={productSevenList} />
    </div>
  );
}
export default ProductSevenFeature;
