import React from "react";
import ProductOneList from "../../Filter/ProductOneList";
import "./styles.scss";
function ProductOneFeature(props) {
  const productOneList = [
    {
      id: 1,
      name: "Cà Phê Đen Đá",
      price: "45,000 đ",
      thumbnailUrl:
        "https://minio.thecoffeehouse.com/image/admin/1639377798_ca-phe-den-da_400x400.jpg"
    },
    {
      id: 2,
      name: "Cà Phê Đen Nóng",
      price: "89,000 đ",
      thumbnailUrl:
        "https://minio.thecoffeehouse.com/image/admin/1639377816_ca-phe-den-nong_400x400.jpg"
    },
    {
      id: 3,
      name: "Latte Táo Lê Quế Lạnh",
      price: "50,000 đ ",
      thumbnailUrl:
        "https://minio.thecoffeehouse.com/image/admin/1638267966_latte-tao-le-que-lanh_400x400.jpg"
    },
    {
      id: 4,
      name: "Bạc Sỉu Đá",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bac-siu-da_9bf82220a1a54847aa7357de541e7552_large.jpg"
    },
    {
      id: 5,
      name: "Bạc Sỉu Nóng ",
      price: "35,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bac-xiu-nong_fa679e04523c4f138354e852745b223e_large.jpg"
    },
    {
      id: 6,
      name: "Cà Phê Đen Đá",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg"
    },
    {
      id: 7,
      name: "Cà Phê Đen Nóng",
      price: "35,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-den-nong_34c4834cd4094d7e8659ad8d3c4fa6fc_large.jpg"
    },
    {
      id: 8,
      name: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40*16G",
      price: "99,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-dam-vi-viet_tui_new_a1aa44c96ea84412a71bfb94e5817473_large.jpeg"
    },
    {
      id: 9,
      name: "Cà Phê Sữa Đá",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg"
    },
    {
      id: 10,
      name: "Cà Phê Sữa Đá Chai Fresh 250ml",
      price: "79,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bottlecfsd_496652_400x400_c673691fc1de4b359ee22dcf0c9c614f_large.jpg"
    },
    {
      id: 11,
      name: "Cà Phê Sữa Nóng",
      price: "36,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-sua-nong_0beecc27870549a5bf016dc6a8fac60e_large.jpg"
    }
  ];
  return (
    <div>
      <ProductOneList productOneList={productOneList} />
    </div>
  );
}
export default ProductOneFeature;
