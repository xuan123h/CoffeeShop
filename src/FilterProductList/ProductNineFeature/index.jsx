import React from "react";
import ProductNineList from "../../Filter/ProductNineList";
import "./styles.scss";
function ProductNineFeature(props) {
  const productNineList = [
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
      name: "Mochi Kem Dừa Dừa",
      price: "19,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mochi-kem-dua-dua_f94d5cd4b40a4377937dcf84033d678e_large.jpg"
    },
    {
      id: 5,
      name: "Mochi Kem Phúc Bồn Tử",
      price: "19,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mochi-kem-phuc-bon-tu_894faa8a39fb43e0828f2125f6c1e8f9_large.jpg"
    },
    {
      id: 6,
      name: "Mochi Kem Việt Quất",
      price: "19,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mochi-kem-viet-quat_1072f38b098d4213889c25128a02bce6_large.jpg"
    },
    {
      id: 7,
      name: "Mochi Kem Xoài",
      price: "19,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mochi-kem-xoai_f402331583f942819b39a8fa2528d9a2_large.jpg"
    },
    {
      id: 8,
      name: "Mousse Gấu Chocolate",
      price: "39,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mousse-gau-chocolate_e25675d96c504dacb88f4e56a54ab48b_large.jpg"
    },
    {
      id: 6,
      name: "Mousse Passion Cheese",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/5d92fbc79e12b47db8cabbd0_chanh-day_994413_400x400_333c9a63c0f74d41a11333c637127328_large.jpg"
    },
    {
      id: 9,
      name: "Mousse Red Velvet",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mousse-red-velvet_e732a3a0ffa44f589c8455ab75bc0f60_large.jpg"
    },
    {
      id: 10,
      name: "Mousse Tiramisu",
      price: "32,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mousse-tiramisu_d396a927d9ba4af284450066bd391148_large.jpg"
    }
  ];
  return (
    <div>
      <ProductNineList productNineList={productNineList} />
    </div>
  );
}
export default ProductNineFeature;
