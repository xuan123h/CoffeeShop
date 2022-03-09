import React from "react";
import ProductEightList from "../../Filter/ProductEightList";
import "./styles.scss";
function ProductEightFeature(props) {
  const productEightList = [
    {
      id: 1,
      name: "CÀ PHÊ PHIN",
      price: "60,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/00db41b0-3c0e-11eb-ba29-331199710a1e.png",
      status: "ca phe goi"
    },
    {
      id: 2,
      name: "CÀ PHÊ ĐÁ XAY",
      price: "59,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/62e2c6d0-3c0e-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe da xay"
    },
    {
      id: 3,
      name: "BÔNG LAN TRỨNG MUỐI",
      price: "29,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/9acd8bb0-3c0f-11eb-ba29-331199710a1e.jpeg",
      status: "snack"
    },
    {
      id: 4,
      name: "Bánh Mì Que Pate",
      price: "12,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg"
    },
    {
      id: 5,
      name: "Bánh Mì Que Pate Cay",
      price: "12,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/banhmique_683851_400x400_51f39f17da7046ff8ef76aa17c29225a_large.jpg"
    },
    {
      id: 6,
      name: "Bánh Mì VN Thịt Nguội",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg"
    },
    {
      id: 7,
      name: "Chà Bông Phô Mai",
      price: "32,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg"
    },
    {
      id: 8,
      name: "Croissant Trứng Muối",
      price: "35,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg"
    }
  ];
  return (
    <div>
      <ProductEightList productEightList={productEightList} />
    </div>
  );
}
export default ProductEightFeature;
