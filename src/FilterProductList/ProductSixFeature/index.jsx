import React from "react";
import ProductSixList from "../../Filter/ProductSixList";
import "./styles.scss";
function ProductSixFeature(props) {
  const productSixList = [
    {
      id: 1,
      name: "COLD BREW TRUYỀN THỐNG",
      price: "45,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/8e00ca70-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "brew"
    },
    {
      id: 2,
      name: "PHÚC BỒN TỬ",
      price: "50,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/aef9a5d0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "brew"
    },
    {
      id: 3,
      name: "COLD BREW SỮA TƯƠI",
      price: "50,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/c8f605a0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "brew"
    },
    {
      id: 4,
      name: "Cà Phê Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cf-da-xay-_1__158038_400x400_aee86b1c0779491f8c2778ddadf41f15_large.jpg"
    },
    {
      id: 5,
      name: "Chanh Sà Đá Xay",
      price: "49,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chanh-sa-da-xay_170980_400x400_2c8af8d0cfff43b78a93924d28a1215f_large.jpg"
    },
    {
      id: 6,
      name: "Chocolate Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg"
    },
    {
      id: 7,
      name: "Cookie Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_7684d0c7dcb04317a798de76126341c2_large.jpg"
    },
    {
      id: 8,
      name: "Đào Việt QUất Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/daovietquat_033985_400x400_20bfc56b971c47dca8734514a4765675_large.jpg"
    },
    {
      id: 9,
      name: "Matcha Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg"
    },
    {
      id: 10,
      name: "Sinh Tố Việt Quất",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/sinh-to-viet-quoc_145138_400x400_ab271b0cd8be42089cd7e25f985c273e_large.jpg"
    }
  ];
  return (
    <div>
      <ProductSixList productSixList={productSixList} />
    </div>
  );
}
export default ProductSixFeature;
