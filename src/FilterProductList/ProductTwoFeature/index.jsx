import React from "react";
import ProductTwoList from "../../Filter/ProductTwoList";
import "./styles.scss";
function ProductTwoFeature(props) {
  const productTwoList = [
    {
      id: 1,
      name: "CARAMEL MACCHIATO",
      price: "54,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/3885db30-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe da xay"
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
      name: "Latte Táo Lê Quế Nóng",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte-tao-le-que-nong_f7ae97f81d634489bf5da01a64f7543a_large.jpg"
    },
    {
      id: 4,
      name: "Latte Táo Lê Quế Đá",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte-tao-le-que-da_77aca1462ea5478d93c6a41f15b1af59_large.jpg"
    },
    {
      id: 5,
      name: "Latte Táo Lê Quế Chai Fresh 500 ml",
      price: "109,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte-tao-le-que-chai-fresh-500ml_6e6f6032735d463b8f5a5de4ecb9d091_large.jpg"
    },
    {
      id: 6,
      name: "Mocha Nóng",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mochanong_433980_400x400_7d8231d596fc4ac39db757cd34250868_large.jpg"
    },
    {
      id: 7,
      name: "Mocha Đá",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mocha-da_538820_400x400_73100250cb904ad0aad79a36a59aeea7_large.jpg"
    },
    {
      id: 8,
      name: "Espresso Nóng",
      price: "40,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/espressonong_612688_400x400_8fdb6dc2f37a4445b43a7ce3ee4aebb0_large.jpg"
    },
    {
      id: 9,
      name: "Espresso Đá",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cfdenda-espressoda_185438_400x400_bc9c244c3c644eccb3edad8578569126_large.jpg"
    },
    {
      id: 10,
      name: "Cappuccino Nóng",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cappuccino_621532_400x400_67c12956866c442585a6d47d0771a978_large.jpg"
    },
    {
      id: 11,
      name: "Cappuccino Đá",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/capu-da_487470_400x400_e11f07c213814171b07a5801722e3bb3_large.jpg"
    },
    {
      id: 12,
      name: "Americano Nóng",
      price: "40,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/americano-nong-app_652009_400x400_c4cc077adacd4340bb41a6e1e4710a95_large.jpg"
    },
    {
      id: 13,
      name: "Latte Đá",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte-da_438410_400x400_a48fbcd0a33f4ceba1803acbbe1292f4_large.jpg"
    },
    {
      id: 14,
      name: "Caramel Macchiato Nóng",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/caramel-macchiato-nong_622b0363a2144bef9bb27bccd9f5e5b6_large.jpg"
    },
    {
      id: 15,
      name: "Caramel Macchiato Đá",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg"
    },
    {
      id: 16,
      name: "Latte Nóng",
      price: "40,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte_851143_400x400_7305aaa080df4202a26dedf898e7196b_large.jpg"
    },
    {
      id: 17,
      name: "Americano Đá",
      price: "40,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/classic-cold-brew_791256_400x400_b08cfc2d37a541c3893f654686b5474d_large.jpg"
    }
  ];
  return (
    <div>
      <ProductTwoList productTwoList={productTwoList} />
    </div>
  );
}
export default ProductTwoFeature;
