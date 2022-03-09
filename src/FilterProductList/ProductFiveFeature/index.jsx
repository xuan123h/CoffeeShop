import React from "react";
import ProductFiveList from "../../Filter/ProductFiveList";
import "./styles.scss";
function ProductFiveFeature(props) {
  const productFiveList = [
    {
      id: 1,
      name: "ESPRESSO",
      price: "30,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/47d38ce0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe may"
    },
    {
      id: 2,
      name: "LATTE",
      price: "40,000 VNĐ",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/646c6980-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe may"
    },
    {
      id: 3,
      name: "MOCHA",
      price: "49,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/7606f160-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe may"
    },
    {
      id: 4,
      name: "Hồng Trà Latte Macchiato",
      price: "55,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/hong-tra-latte_618293_400x400_8e7d0a023bfb4537913425ec6048e59b_large.jpg"
    },
    {
      id: 5,
      name: "Hồng Trà Sữa Nóng",
      price: "50.000đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/hong-tra-sua-nong_941687_400x400_dfe4a7a23ecd4ca49822fc553909828a_large.jpg"
    },
    {
      id: 6,
      name: "Hồng Trà Sữa Trân Châu",
      price: "55,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/hong-tra-sua-tran-chau_326977_400x400_30c57e67d1104ae4b7313cf5d40f3e87_large.jpg"
    },
    {
      id: 7,
      name: "Trà Đen Macchiato",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-den-matchiato_430281_400x400_88f47618a6b84c2d9ad633d3298fb390_large.jpg"
    },
    {
      id: 8,
      name: "Trà Sen Nhân Sum Vầy",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sen-nhan_a41ca1c176ee4b8c8afe7b868a239e86_large.jpeg"
    },
    {
      id: 9,
      name: "Trà Sữa Mắc Ca Trân Châu Trắng",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sua-mac-ca_377522_400x400_123ab6b1593d4e5c83776a54f6862bbd_large.jpg"
    },
    {
      id: 10,
      name: "Trà sữa Masala Chai Nóng",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sua-masala-chai-nong_146faf87d03f49799f5e4701a02c4575_large.jpg"
    },
    {
      id: 11,
      name: "Trà sữa Masala Chai Trân Châu Chai Fresh 500ml ",
      price: "109,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sua-masala-chai-tran-chau-chai-fresh-500ml_2c0b2192c08d4c6ebd6dc3f526f8b687_large.jpg"
    },
    {
      id: 12,
      name: "Trà sữa Masala Chai Trân Châu Đá",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sua-masala-chai-tran-chau-da_dcffebd30f104d29a5856cea9ae65fba_large.jpg"
    },
    {
      id: 13,
      name: "Trà Sữa Oolong Nướng Nóng",
      price: "50.000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/oolong-nuong-nong_948581_400x400_b735d799b4034667b54c61821caa5bb9_large.jpg"
    },
    {
      id: 14,
      name: "Trà Sữa Oolong Nướng Trân Châu",
      price: "55.000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/olong-nuong-tran-chau_017573_400x400_ae76ffea39cd42e4ad8e957678bf4f82_large.jpg"
    },
    {
      id: 15,
      name: "Trà Sữa Oolong Nướng Trân Châu Chai 500ml ",
      price: "99,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bottle_oolong_285082_400x400_406f221cbe6b4d01a885949c7d8f66ec_large.jpg"
    }
  ];
  return (
    <div>
      <ProductFiveList productFiveList={productFiveList} />
    </div>
  );
}
export default ProductFiveFeature;
