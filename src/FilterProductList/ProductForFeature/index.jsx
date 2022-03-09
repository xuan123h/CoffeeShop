import React from "react";
import ProductForList from "../../Filter/ProductForList";
import "./styles.scss";
function ProductForFeature(props) {
  const productForList = [
    {
      id: 1,
      name: "BÔNG LAN TRỨNG MUỐI",
      price: "29,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/9acd8bb0-3c0f-11eb-ba29-331199710a1e.jpeg",
      status: "snack"
    },
    {
      id: 2,
      name: "Trà Dưa Đào Sung Túc",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-dao-dua-luoi_11411ec17f9a41c191ce85ab28364150_large.jpeg"
    },
    {
      id: 3,
      name: "Trà Sen Nhân Sum Vầy",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sen-nhan_a41ca1c176ee4b8c8afe7b868a239e86_large.jpeg"
    },
    {
      id: 4,
      name: "Caramel Macchiato Đá",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg"
    },
    {
      id: 5,
      name: "Latte Táo Lê Quế Đá",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte-tao-le-que-da_77aca1462ea5478d93c6a41f15b1af59_large.jpg"
    },
    {
      id: 7,
      name: "Hồng Trà Latte Macchiato",
      price: "55,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/hong-tra-latte_618293_400x400_8e7d0a023bfb4537913425ec6048e59b_large.jpg"
    },
    {
      id: 8,
      name: "Trà Long Nhân Hạt Chia",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-nhan-da_484810_400x400_446acb3ad76a48d38a98855cd7be54cd_large.jpg"
    },
    {
      id: 9,
      name: "Trà Hạt Sen Đá",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sen_905594_400x400_c82fd1b3786d45f380cf4c15e9af7ab9_large.jpg"
    },
    {
      id: 10,
      name: "Trà Đào Cam Sà Chai Fresh 500 ml ",
      price: "109.000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bottle_tradao_836487_400x400_82de6433bf5744c0a5dd9108d99191e1_large.jpg"
    },
    {
      id: 11,
      name: "Trà Đào Cam Sà Đá",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg"
    }
  ];
  return <ProductForList productForList={productForList} />;
}
export default ProductForFeature;
