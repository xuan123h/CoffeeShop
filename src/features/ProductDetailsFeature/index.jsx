import React, { useState } from "react";
import ProductDetailsList from "../../components/ProductDetailsList";
import "./styles.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ProductDetailsFeature(props) {
  const productDetailsList = [
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
      name: "ESPRESSO",
      price: "30,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/47d38ce0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe may"
    },
    {
      id: 3,
      name: "LATTE",
      price: "40,000 VNĐ",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/646c6980-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe may"
    },
    {
      id: 4,
      name: "MOCHA",
      price: "49,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/7606f160-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe may"
    },
    {
      id: 5,
      name: "COLD BREW TRUYỀN THỐNG",
      price: "45,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/8e00ca70-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "brew"
    },
    {
      id: 6,
      name: "PHÚC BỒN TỬ",
      price: "50,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/aef9a5d0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "brew"
    },
    {
      id: 7,
      name: "COLD BREW SỮA TƯƠI",
      price: "50,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/c8f605a0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "brew"
    },
    {
      id: 8,
      name: "CÀ PHÊ ARABICA",
      price: "100,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/ebcc7aa0-3c0d-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe goi"
    },
    {
      id: 9,
      name: "CÀ PHÊ PHIN",
      price: "60,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/00db41b0-3c0e-11eb-ba29-331199710a1e.png",
      status: "ca phe goi"
    },
    {
      id: 10,
      name: "CÀ PHÊ ĐÁ XAY",
      price: "59,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/62e2c6d0-3c0e-11eb-ba29-331199710a1e.jpeg",
      status: "ca phe da xay"
    },
    {
      id: 11,
      name: "BÔNG LAN TRỨNG MUỐI",
      price: "29,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/9acd8bb0-3c0f-11eb-ba29-331199710a1e.jpeg",
      status: "snack"
    }
  ];
  // const handleClick=()=>{
  //   toast.success('🦄 Wow so easy!', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     });
  // }
  // const [todoList, setTodoList] = useState(initProductDetailsList);
  // const [filteredStatus, setFilteredStatus] = useState("all");
  // const handleAllClick = () => {
  //   setFilteredStatus("all");
  // };
  // const handleOne = () => {
  //   setFilteredStatus();
  // };
  return (
    <div>
      <ProductDetailsList productDetailsList={productDetailsList} />
    </div>
  );
}
export default ProductDetailsFeature;
