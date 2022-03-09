import React from "react";
import ShowDetailsList from "../../Bonus/ShowDetailsList";
import "./styles.scss";
function ShowDetailsFeature(props) {
  const showDetailsList = [
    {
      id: 1,
      name: "CARAMEL MACCHIATO",
      description:
        "CARAMEL MACCHIATO là cà phê Italia , có lớp bọt sữa dày căng mịn phủ phía trên. Có 2 phiên bản là Espresso Macchiato , Latte Macchiato.Khi ta uống có sự hòa quyện giữa cafe và sữa",
      price: "54,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/3885db30-3c0d-11eb-ba29-331199710a1e.jpeg"
    },
    {
      id: 2,
      name: "ESPRESSO",
      description:
        "ESPRESSO là cà phê xuất phát từ nước Ý, là loại cafe nguyên chất, không tẩm ướp và xay nhuyễn ",
      price: "30,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/47d38ce0-3c0d-11eb-ba29-331199710a1e.jpeg"
    },
    {
      id: 3,
      name: "LATTE",
      description:
        "LATTE là cafe xuất hiện ở Châu Âu vào thế kỷ 17, là loại cafe béo hơn so với loại ESPRESSO",
      price: "40,000 VNĐ",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/646c6980-3c0d-11eb-ba29-331199710a1e.jpeg"
    },
    {
      id: 4,
      name: "MOCHA",
      description:
        "MOCHA là loại cafe được làm từ sô cô la trắng thay vì sô cô la đen",
      price: "49,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/7606f160-3c0d-11eb-ba29-331199710a1e.jpeg"
    },
    {
      id: 5,
      name: "COLD BREW TRUYỀN THỐNG",
      description:
        "COLD BREW TRUYỀN THÔNG là cafe được pha bằng cà phê hạt Robusta kết hợp cùng kem thực vật và sữa tươi thanh trùng",
      price: "45,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/8e00ca70-3c0d-11eb-ba29-331199710a1e.jpeg"
    },
    {
      id: 6,
      name: "PHÚC BỒN TỬ",
      description: "PHÚC BỒN TỬ là cafe ngon hòa quyện bởi sữa rất mới và lạ ",
      price: "50,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/aef9a5d0-3c0d-11eb-ba29-331199710a1e.jpeg"
    },
    {
      id: 7,
      name: "COLD BREW SỮA TƯƠI",
      description: "COLD BREW SỮA TƯƠI là cafe được làm chủ yếu bằng sữa",
      price: "50,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/c8f605a0-3c0d-11eb-ba29-331199710a1e.jpeg"
    },
    {
      id: 8,
      name: "CÀ PHÊ ARABICA",
      description:
        "CÀ PHÊ ARABICA là cafe có vị chua thanh được hòa cùng chút đắng nhẹ, mùi hương thanh thảo , thanh tao ",
      price: "100,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/ebcc7aa0-3c0d-11eb-ba29-331199710a1e.jpeg"
    },
    {
      id: 9,
      name: "CÀ PHÊ PHIN",
      description: "CÀ PHÊ PHIN là cafe giữ hương vị 100% cafe của Việt Nam",
      price: "60,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/00db41b0-3c0e-11eb-ba29-331199710a1e.png"
    },
    {
      id: 10,
      name: "CÀ PHÊ ĐÁ XAY",
      description: "CÀ PHÊ ĐÁ XAY là cafe có hương vị vừa giòn vừa dai dai",
      price: "59,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/62e2c6d0-3c0e-11eb-ba29-331199710a1e.jpeg"
    },
    {
      id: 11,
      name: "BÔNG LAN TRỨNG MUỐI",
      description:
        "BÔNG LAN TRỨNG MUỐI là loại bánh ăn có hương vị của trứng và có vị mặn mặn của muối",
      price: "29,000 VND",
      thumbnailUrl:
        "https://betcsvn.herokuapp.com/upload/imagesProduct/9acd8bb0-3c0f-11eb-ba29-331199710a1e.jpeg"
    }
  ];
  return (
    <div className="kk">
      <h3> Chi tiết về sản phẩm </h3>
      <ShowDetailsList showDetailsList={showDetailsList} />
    </div>
  );
}
export default ShowDetailsFeature;
