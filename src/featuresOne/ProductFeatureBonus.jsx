import React from "react";
import ProductList from "../../src/componentsOne/Product/ProductList";
import ProductOneList from "../../src/componentsOne/Product/ProductOneList";
import ProductTwoList from "../../src/componentsOne/Product/ProductTwoList";
import ProductThreeList from "../../src/componentsOne/Product/ProductThreeList";
import ProductForList from "../../src/componentsOne/Product/ProductForList";
import ProductFiveList from "../../src/componentsOne/Product/ProductFiveList";
import ProductSixList from "../../src/componentsOne/Product/ProductSixList";
import ProductSevenList from "../../src/componentsOne/Product/ProductSevenList";
import ProductEightList from "../../src/componentsOne/Product/ProductEightList";
import ProductNineList from "../../src/componentsOne/Product/ProductNineList";
import ProductTenList from "../../src/componentsOne/Product/ProductTenList";
import ProductElevenList from "../../src/componentsOne/Product/ProductElevenList";
function ProductFeatureBonus(props) {
  const productList = [
    {
      id: 1,
      name: "Bạc Sỉu Đá",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bac-siu-da_9bf82220a1a54847aa7357de541e7552_large.jpg"
    },
    {
      id: 2,
      name: "Bạc Sỉu Nóng ",
      price: "35,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bac-xiu-nong_fa679e04523c4f138354e852745b223e_large.jpg"
    },
    {
      id: 3,
      name: "Cà Phê Đen Đá",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg"
    },
    {
      id: 4,
      name: "Cà Phê Đen Nóng",
      price: "35,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-den-nong_34c4834cd4094d7e8659ad8d3c4fa6fc_large.jpg"
    },
    {
      id: 5,
      name: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40*16G",
      price: "99,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-dam-vi-viet_tui_new_a1aa44c96ea84412a71bfb94e5817473_large.jpeg"
    },
    {
      id: 6,
      name: "Cà Phê Sữa Đá",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg"
    },
    {
      id: 7,
      name: "Cà Phê Sữa Đá Chai Fresh 250ml",
      price: "79,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bottlecfsd_496652_400x400_c673691fc1de4b359ee22dcf0c9c614f_large.jpg"
    },
    {
      id: 8,
      name: "Cà Phê Sữa Nóng",
      price: "36,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-sua-nong_0beecc27870549a5bf016dc6a8fac60e_large.jpg"
    }
  ];

  const productOneList = [
    {
      id: 1,
      name: "Latte Táo Lê Quế Nóng",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte-tao-le-que-nong_f7ae97f81d634489bf5da01a64f7543a_large.jpg"
    },
    {
      id: 2,
      name: "Latte Táo Lê Quế Đá",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte-tao-le-que-da_77aca1462ea5478d93c6a41f15b1af59_large.jpg"
    },
    {
      id: 3,
      name: "Latte Táo Lê Quế Chai Fresh 500 ml",
      price: "109,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte-tao-le-que-chai-fresh-500ml_6e6f6032735d463b8f5a5de4ecb9d091_large.jpg"
    },
    {
      id: 4,
      name: "Mocha Nóng",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mochanong_433980_400x400_7d8231d596fc4ac39db757cd34250868_large.jpg"
    },
    {
      id: 5,
      name: "Mocha Đá",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mocha-da_538820_400x400_73100250cb904ad0aad79a36a59aeea7_large.jpg"
    },
    {
      id: 6,
      name: "Espresso Nóng",
      price: "40,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/espressonong_612688_400x400_8fdb6dc2f37a4445b43a7ce3ee4aebb0_large.jpg"
    },
    {
      id: 7,
      name: "Espresso Đá",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cfdenda-espressoda_185438_400x400_bc9c244c3c644eccb3edad8578569126_large.jpg"
    },
    {
      id: 8,
      name: "Cappuccino Nóng",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cappuccino_621532_400x400_67c12956866c442585a6d47d0771a978_large.jpg"
    },
    {
      id: 9,
      name: "Cappuccino Đá",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/capu-da_487470_400x400_e11f07c213814171b07a5801722e3bb3_large.jpg"
    },
    {
      id: 10,
      name: "Americano Nóng",
      price: "40,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/americano-nong-app_652009_400x400_c4cc077adacd4340bb41a6e1e4710a95_large.jpg"
    },
    {
      id: 11,
      name: "Latte Đá",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte-da_438410_400x400_a48fbcd0a33f4ceba1803acbbe1292f4_large.jpg"
    },
    {
      id: 12,
      name: "Caramel Macchiato Nóng",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/caramel-macchiato-nong_622b0363a2144bef9bb27bccd9f5e5b6_large.jpg"
    },
    {
      id: 13,
      name: "Caramel Macchiato Đá",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg"
    },
    {
      id: 14,
      name: "Latte Nóng",
      price: "40,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte_851143_400x400_7305aaa080df4202a26dedf898e7196b_large.jpg"
    },
    {
      id: 15,
      name: "Americano Đá",
      price: "40,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/classic-cold-brew_791256_400x400_b08cfc2d37a541c3893f654686b5474d_large.jpg"
    }
  ];
  const productTwoList = [
    {
      id: 1,
      name: "Cold Brew Phúc Bồn Tử",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cold-brew-pbt_130351_400x400_ca074b4907aa492bbf838082c4a82a35_large.jpg"
    },
    {
      id: 2,
      name: "Cold Brew Sữa Tươi",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cold-brew-sua-tuoi_379576_400x400_fd791b0775f846e193ff35739cc51ff2_large.jpg"
    },
    {
      id: 3,
      name: "Cold Brew Truyền Thống",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/classic-cold-brew_239501_400x400_5ba92cfd66bd412996c28acc3a346b75_large.jpg"
    }
  ];
  const productThreeList = [
    {
      id: 1,
      name: "Trà Dưa Đào Sung Túc",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-dao-dua-luoi_11411ec17f9a41c191ce85ab28364150_large.jpeg"
    },
    {
      id: 2,
      name: "Trà Sen Nhân Sum Vầy",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sen-nhan_a41ca1c176ee4b8c8afe7b868a239e86_large.jpeg"
    },
    {
      id: 3,
      name: "Caramel Macchiato Đá",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/caramel-macchiato-da_fa2503073e5c4f7a98516f1c9d39253b_large.jpg"
    },
    {
      id: 4,
      name: "Latte Táo Lê Quế Đá",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/latte-tao-le-que-da_77aca1462ea5478d93c6a41f15b1af59_large.jpg"
    },
    {
      id: 6,
      name: "Hồng Trà Latte Macchiato",
      price: "55,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/hong-tra-latte_618293_400x400_8e7d0a023bfb4537913425ec6048e59b_large.jpg"
    },
    {
      id: 7,
      name: "Trà Long Nhân Hạt Chia",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-nhan-da_484810_400x400_446acb3ad76a48d38a98855cd7be54cd_large.jpg"
    },
    {
      id: 8,
      name: "Trà Hạt Sen Đá",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sen_905594_400x400_c82fd1b3786d45f380cf4c15e9af7ab9_large.jpg"
    },
    {
      id: 9,
      name: "Trà Đào Cam Sà Chai Fresh 500 ml ",
      price: "109.000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bottle_tradao_836487_400x400_82de6433bf5744c0a5dd9108d99191e1_large.jpg"
    },
    {
      id: 10,
      name: "Trà Đào Cam Sà Đá",
      price: "45,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg"
    }
  ];
  const productForList = [
    {
      id: 1,
      name: "Hồng Trà Latte Macchiato",
      price: "55,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/hong-tra-latte_618293_400x400_8e7d0a023bfb4537913425ec6048e59b_large.jpg"
    },
    {
      id: 2,
      name: "Hồng Trà Sữa Nóng",
      price: "50.000đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/hong-tra-sua-nong_941687_400x400_dfe4a7a23ecd4ca49822fc553909828a_large.jpg"
    },
    {
      id: 3,
      name: "Hồng Trà Sữa Trân Châu",
      price: "55,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/hong-tra-sua-tran-chau_326977_400x400_30c57e67d1104ae4b7313cf5d40f3e87_large.jpg"
    },
    {
      id: 4,
      name: "Trà Đen Macchiato",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-den-matchiato_430281_400x400_88f47618a6b84c2d9ad633d3298fb390_large.jpg"
    },
    {
      id: 5,
      name: "Trà Sen Nhân Sum Vầy",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sen-nhan_a41ca1c176ee4b8c8afe7b868a239e86_large.jpeg"
    },
    {
      id: 6,
      name: "Trà Sữa Mắc Ca Trân Châu Trắng",
      price: "50,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sua-mac-ca_377522_400x400_123ab6b1593d4e5c83776a54f6862bbd_large.jpg"
    },
    {
      id: 7,
      name: "Trà sữa Masala Chai Nóng",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sua-masala-chai-nong_146faf87d03f49799f5e4701a02c4575_large.jpg"
    },
    {
      id: 8,
      name: "Trà sữa Masala Chai Trân Châu Chai Fresh 500ml ",
      price: "109,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sua-masala-chai-tran-chau-chai-fresh-500ml_2c0b2192c08d4c6ebd6dc3f526f8b687_large.jpg"
    },
    {
      id: 10,
      name: "Trà Sữa Oolong Nướng Nóng",
      price: "50.000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/oolong-nuong-nong_948581_400x400_b735d799b4034667b54c61821caa5bb9_large.jpg"
    },
    {
      id: 11,
      name: "Trà Sữa Oolong Nướng Trân Châu",
      price: "55.000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/olong-nuong-tran-chau_017573_400x400_ae76ffea39cd42e4ad8e957678bf4f82_large.jpg"
    },
    {
      id: 12,
      name: "Trà Sữa Oolong Nướng Trân Châu Chai 500ml ",
      price: "99,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/bottle_oolong_285082_400x400_406f221cbe6b4d01a885949c7d8f66ec_large.jpg"
    }
  ];
  const productFiveList = [
    {
      id: 1,
      name: "Cà Phê Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cf-da-xay-_1__158038_400x400_aee86b1c0779491f8c2778ddadf41f15_large.jpg"
    },
    {
      id: 2,
      name: "Chanh Sà Đá Xay",
      price: "49,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chanh-sa-da-xay_170980_400x400_2c8af8d0cfff43b78a93924d28a1215f_large.jpg"
    },
    {
      id: 3,
      name: "Chocolate Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg"
    },
    {
      id: 4,
      name: "Cookie Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_7684d0c7dcb04317a798de76126341c2_large.jpg"
    },
    {
      id: 5,
      name: "Đào Việt QUất Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/daovietquat_033985_400x400_20bfc56b971c47dca8734514a4765675_large.jpg"
    },
    {
      id: 6,
      name: "Matcha Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg"
    },
    {
      id: 7,
      name: "Sinh Tố Việt Quất",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/sinh-to-viet-quoc_145138_400x400_ab271b0cd8be42089cd7e25f985c273e_large.jpg"
    }
  ];
  const productSixList = [
    {
      id: 1,
      name: "Chocolate Đá",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chocolate-da_877186_400x400_30a43c54fe484ecfbd606937604ef351_large.jpg"
    },
    {
      id: 2,
      name: "Chocolate Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg"
    },
    {
      id: 3,
      name: "Chocolate Nóng",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/chocolatenong_949029_400x400__1__eb5c9c7810024b7195999ac4aaf100ef_large.jpg"
    },
    {
      id: 4,
      name: "Matcha Đá Xay",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg"
    },
    {
      id: 5,
      name: "Matcha Latte Đá",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/matcha-latte-da_083173_400x400_5725292025844c5da25a91d6e9b05a4b_large.jpg"
    },
    {
      id: 6,
      name: "Matcha Latte Nóng",
      price: "59,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/matcha-latte-_936022_400x400_4cb3c7a6feec46578f68e214af242b4e_large.jpg"
    }
  ];
  const productSevenList = [
    {
      id: 1,
      name: "Bánh Mì Que Pate",
      price: "12,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg"
    },
    {
      id: 2,
      name: "Bánh Mì Que Pate Cay",
      price: "12,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/banhmique_683851_400x400_51f39f17da7046ff8ef76aa17c29225a_large.jpg"
    },
    {
      id: 3,
      name: "Bánh Mì VN Thịt Nguội",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg"
    },
    {
      id: 4,
      name: "Chà Bông Phô Mai",
      price: "32,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg"
    },
    {
      id: 5,
      name: "Croissant Trứng Muối",
      price: "35,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg"
    }
  ];
  const productEightList = [
    {
      id: 1,
      name: "Mochi Kem Dừa Dừa",
      price: "19,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mochi-kem-dua-dua_f94d5cd4b40a4377937dcf84033d678e_large.jpg"
    },
    {
      id: 2,
      name: "Mochi Kem Phúc Bồn Tử",
      price: "19,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mochi-kem-phuc-bon-tu_894faa8a39fb43e0828f2125f6c1e8f9_large.jpg"
    },
    {
      id: 3,
      name: "Mochi Kem Việt Quất",
      price: "19,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mochi-kem-viet-quat_1072f38b098d4213889c25128a02bce6_large.jpg"
    },
    {
      id: 4,
      name: "Mochi Kem Xoài",
      price: "19,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mochi-kem-xoai_f402331583f942819b39a8fa2528d9a2_large.jpg"
    },
    {
      id: 5,
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
      id: 7,
      name: "Mousse Red Velvet",
      price: "29,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mousse-red-velvet_e732a3a0ffa44f589c8455ab75bc0f60_large.jpg"
    },
    {
      id: 8,
      name: "Mousse Tiramisu",
      price: "32,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mousse-tiramisu_d396a927d9ba4af284450066bd391148_large.jpg"
    }
  ];

  const productNineList = [
    {
      id: 1,
      name: "Mít Sấy",
      price: "20,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/mit-say_666228_400x400_062954ca87384c13ab5044766afbec56_large.jpg"
    },
    {
      id: 2,
      name: "Giftset Trà Tearoma",
      price: "169,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/giftset-tra-tearoma_5bb77a734c2447839a593f18ef27730b_large.jpg"
    },
    {
      id: 3,
      name: "Combo 3 hộp trà Lài túi lọc Tearoma",
      price: "69,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/combo-3-hop-tra-lai-tui-loc-tearoma1_b09e7c68925e4a61997e9078d448b6f9_large.jpg"
    },
    {
      id: 4,
      name: "Combo 3 hộp trà Sen túi lọc Tearoma",
      price: "69,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/combo-3-hop-tra-sen-tui-loc-tearoma1_ab99e22473f045acadaaf2ffd5b700fd_large.jpg"
    },
    {
      id: 5,
      name: "Combo 3 hộp trà Đào túi lọc Tearoma",
      price: "69,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/combo-3-hop-tra-dao-tui-loc-tearoma1_9db99464a0d14cc791b858d21ab33c22_large.jpg"
    },
    {
      id: 6,
      name: "Combo 3 hộp trà Oolong túi lọc Tearoma",
      price: "69,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/combo-3-hop-tra-oolong-tui-loc-tearoma1_ecb5fe591f534cfd83eb37b988bea076_large.jpg"
    },
    {
      id: 7,
      name: "Trà Đào Túi Lọc Tearoma 20*2gr",
      price: "28,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-dao-tui-loc-tearoma_0283ea88d37c4685b309d3acda5e6e0e_large.jpg"
    }
  ];

  const productTenList = [
    {
      id: 1,
      name: "Cà Phê Rang Xay Original 1 Túi 1KG",
      price: "235,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ori-1-1kg_05857438c5694c2690957be9ca057e99_large.jpeg"
    },
    {
      id: 2,
      name: "Cà Phê Rang Xay Original 1 250gr",
      price: "60,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-rang-xay-original-1-250gr_f7dd7b4553a54cdaa6c7a4969b5bc10d_large.jpg"
    },
    {
      id: 3,
      name: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40*16G",
      price: "99,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-dam-vi-viet_tui_new_a1aa44c96ea84412a71bfb94e5817473_large.jpeg"
    },
    {
      id: 4,
      name: "Cà Phê Sữa Đá Hòa Tan Hộp 10 gói",
      price: "44,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/cpsd-3in1_971575_400x400_08af198ffd3b4107a1843a2e44e3e8be_large.jpg"
    },
    {
      id: 5,
      name: "Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói * 16gr",
      price: "48,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg"
    },
    {
      id: 6,
      name: "Cà Phê Sữa Đá Hòa Tan Túi 25*22gr",
      price: "99,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-tui_55b6d640e3594c1b9de982ff6823ebde_large.jpg"
    },
    {
      id: 7,
      name: "Cà Phê Rich Finish Gu Đậm Tinh Tế 350gr",
      price: "90,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/rich-finish-nopromo_485968_400x400_9662f8762f5e4adeb7616cb33a4ac5c3_large.jpg"
    },
    {
      id: 8,
      name: "Cà Phê Peak Flavor Hương Thơm Đỉnh Cao 350gr",
      price: "90,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/peak-plavor-nopromo_715372_400x400_a79f75d18c3949bab63669370424ac4a_large.jpg"
    },
    {
      id: 9,
      name: "Cà Phê Arabica",
      price: "100,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/arabica_1_109041_400x400_4b9c43c475574627b6615a70f2ef9086_large.jpg"
    },
    {
      id: 10,
      name: "Cà phê sữa đá pack 6 lon",
      price: "84,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/p6-lon-3in1_717216_400x400_1afcd0cb780e4749b8a638a839f61c99_large.jpg"
    },
    {
      id: 11,
      name: "Thùng 24 Lon Cà Phê Sữa Đá",
      price: "269,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/24-lon-cpsd_225680_400x400_331b2b7d4f21460a833bfe4cdf6452fa_large.jpg"
    },
    {
      id: 12,
      name: "Combo Quà Tết 2022",
      price: "249,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/1640270462_combo-qua-tet-2022_a11c523513a847899608f9196886554e_large.jpg"
    },
    {
      id: 13,
      name: "Combo 3 Hộp Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói * 16gr",
      price: "100,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/combo-3-hop-ca-phe-sua-da-hoa-tan-dam-vi_5bfc3fb23ebd4ec88f17c08794617b96_large.jpg"
    },
    {
      id: 14,
      name: "Combo 3 Hộp Cà Phê Sữa Đá Hòa Tan",
      price: "109,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/combo-3cfsd-nopromo_320619_400x400_29c134e6f3a8485d88d5d28a79a82f69_large.jpg"
    },
    {
      id: 15,
      name: "Combo 2 Cà Phê Rang Xay Original 1 250gr",
      price: "99,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/2combo2-cforiginal-1_da7ae7afcce047aab54d95699f3c98e0_large.jpg"
    }
  ];

  const productElevenList = [
    {
      id: 1,
      name: "Combo Quà Tết 2022",
      price: "249,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/1640270462_combo-qua-tet-2022_a11c523513a847899608f9196886554e_large.jpg"
    },
    {
      id: 2,
      name: "Giftset Trà Tearoma",
      price: "169,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/giftset-tra-tearoma_5bb77a734c2447839a593f18ef27730b_large.jpg"
    },
    {
      id: 3,
      name: "Combo 3 hộp trà Lài túi lọc Tearoma",
      price: "69,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/combo-3-hop-tra-lai-tui-loc-tearoma1_b09e7c68925e4a61997e9078d448b6f9_large.jpg"
    },
    {
      id: 4,
      name: "Combo 3 hộp trà Sen túi lọc Tearoma",
      price: "69,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/combo-3-hop-tra-sen-tui-loc-tearoma1_ab99e22473f045acadaaf2ffd5b700fd_large.jpg"
    },
    {
      id: 5,
      name: "Combo 3 hộp trà Đào túi lọc Tearoma",
      price: "69,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/combo-3-hop-tra-dao-tui-loc-tearoma1_9db99464a0d14cc791b858d21ab33c22_large.jpg"
    },
    {
      id: 6,
      name: "Combo 3 hộp trà Oolong túi lọc Tearoma",
      price: "69,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/combo-3-hop-tra-oolong-tui-loc-tearoma1_ecb5fe591f534cfd83eb37b988bea076_large.jpg"
    },
    {
      id: 7,
      name: "Trà Đào Túi Lọc Tearoma 20*2gr",
      price: "28,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-dao-tui-loc-tearoma_0283ea88d37c4685b309d3acda5e6e0e_large.jpg"
    },
    {
      id: 8,
      name: "Trà Đào Túi Lọc Tearoma 20*2gr",
      price: "28,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-lai-tui-loc-tearoma_40bb74e6f61d40a4b9d25e60d8ef48e5_large.jpg"
    },
    {
      id: 9,
      name: "Trà Oolong Túi Lọc Tearoma 20*2gr",
      price: "28,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-oolong-tui-loc-tearoma_25eb1abe370f496da4f3818529d9db19_large.jpg"
    },
    {
      id: 10,
      name: "Trà Sen Túi Lọc Tearoma 20*2gr",
      price: "28,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sen-tui-loc-tearoma_e2c0c29d6e7a4933b983f0758a7aa752_large.jpg"
    },
    {
      id: 11,
      name: "Trà Xanh Lá Tearoma 100gr",
      price: "75,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-xanh-la-tearoma_1c34305d05ea400396a35410b6057bc1_large.jpg"
    },
    {
      id: 12,
      name: "Trà Sen Lá Tearoma 100gr",
      price: "80,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-sen-la-tearoma_c7bf3d1ec9ff4bab8be9398c6dc34b0e_large.jpg"
    },
    {
      id: 13,
      name: "Trà Oolong Lá Tearoma 100gr",
      price: "100,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-oolong-la-tearoma_192a4d551aec4a1aa3df42f922c45b68_large.jpg"
    },
    {
      id: 14,
      name: "Trà Lài Lá Tearoma 100gr",
      price: "80,000 đ",
      thumbnailUrl:
        "https://product.hstatic.net/1000075078/product/tra-lai-la-tearoma_25bef8ca40a2489cacccf5ffea2db75c_large.jpg"
    }
  ];
  return (
    <div className="productfeaturebonus">
      <div className="productfeaturebonusone">
        <br />
        <br />
        <h3> Cà Phê Việt Nam </h3>
        <ProductList productList={productList} />
      </div>
      <div className="productfeaturebonustwo">
        <br />
        <br />
        <h3> Cà Phê Máy </h3>
        <ProductOneList productOneList={productOneList} />
      </div>
      <div className="productfeaturebonusthree">
        <br />
        <br />
        <h3> Cold Brew </h3>
        <ProductTwoList productTwoList={productTwoList} />
      </div>
      <div className="productfeaturebonusfor">
        <br />
        <br />
        <h3> Trà Trái Cây </h3>
        <ProductThreeList productThreeList={productThreeList} />
      </div>
      <div className="productfeaturebonusfive">
        <br />
        <br />
        <h3> Trà Sữa Macchiato </h3>
        <ProductForList productForList={productForList} />
      </div>
      <div className="productfeaturebonussix">
        <br />
        <br />
        <h3> Đá Xay </h3>
        <ProductFiveList productFiveList={productFiveList} />
      </div>
      <div className="productfeaturebonusseven">
        <br />
        <br />
        <h3> Matcha - Sô cô la </h3>
        <ProductSixList productSixList={productSixList} />
      </div>
      <div className="productfeaturebonuseight">
        <br />
        <br />
        <h3> Bánh mặn </h3>
        <ProductSevenList productSevenList={productSevenList} />
      </div>
      <div className="productfeaturebonusnine">
        <br />
        <br />
        <h3> Bánh ngọt </h3>
        <ProductEightList productEightList={productEightList} />
      </div>
      <div className="productfeaturebonuseleven">
        <br />
        <br />
        <h3> Cà phê tại nhà </h3>
        <ProductTenList productTenList={productTenList} />
      </div>
      <div className="productfeaturebonustel">
        <br />
        <br />
        <h3> Cà phê mới </h3>
        <ProductElevenList productElevenList={productElevenList} />
      </div>
    </div>
  );
}
export default ProductFeatureBonus;
