import React from "react";
import ShipperList from "../../components/ShipperList";
import "./styles.scss";
function ShipperFeature(props) {
  const shipperList = [
    {
      id: 1,
      name: "Quỳnh Anh ",
      price: "3,000 VND",
      order: "10 đơn",
      old: "18 tuổi",
      address: "xã Tam Thuấn, huyện Phúc Thọ , TP.Hà Nội",
      hotline: "0328281212",
      thumbnailUrl:
        "https://image.winudf.com/v2/image/Y29tLnhlbWFuaC5ob3RnaXJsLmdhaXhpbmgxOF9zY3JlZW5fMF9xMzZkMHR5Nw/screen-0.jpg?fakeurl=1&type=.jpg"
    },
    {
      id: 2,
      name: "Kim Anh",
      price: "4,000 VND",
      order: "18 đơn",
      old: "19 tuổi",
      address: "quận Từ Liêm, huyện Phúc Thọ, TP.Hà Nội",
      hotline: "0248713929",
      thumbnailUrl:
        "https://sieucacuoc.com/wp-content/uploads/2018/01/gai-xinh-nguc-khung-7.jpg"
    },
    {
      id: 3,
      name: "Hồng Loan",
      price: "5,000 VND",
      order: "30 đơn",
      old: "20 tuổi",
      address: "huyện Từ Liêm, TP.Hà Nội",
      hotline: "028284811321",
      thumbnailUrl:
        "https://hinhanhdep.vn/wp-content/uploads/2019/07/d63b8e62f5221c7c4533.jpg"
    },
    {
      id: 4,
      name: "Minh Anh",
      price: "6,000 VND",
      order: "50 đơn",
      old: "17 tuổi",
      address: "quận Hai Bà Trưng, huyện Phúc Thọ, TP.Hà Nội",
      hotline: "034292928182",
      thumbnailUrl:
        "https://1.bp.blogspot.com/-mkEhP_QXSHI/WE9-UdNKnyI/AAAAAAAACpc/z5mdcFZbQz41dhnXknAeGTRhG1Xj3jfQgCLcB/s1600/15085502_591915637681021_5420424684372040797_n.jpg"
    },
    {
      id: 5,
      name: "Kim Tuấn",
      price: "6,000 VND",
      order: "50 đơn",
      old: "17 tuổi",
      address: "quận Hai Bà Trưng, huyện Phúc Thọ, TP.Hà Nội",
      hotline: "034292928182",
      thumbnailUrl:
        "https://1.bp.blogspot.com/-srjlM97cCxU/XxPDi3_F64I/AAAAAAAArZI/jgCuzUTjagsQsqejtGGejP3RB6sxfyQzwCLcBGAsYHQ/s1600/Trai-dep-che-mat%2B%252818%2529.jpg"
    },
    {
      id: 6,
      name: "Tuấn Anh",
      price: "6,000 VND",
      order: "50 đơn",
      old: "17 tuổi",
      address: "quận Hai Bà Trưng, huyện Phúc Thọ, TP.Hà Nội",
      hotline: "034292928182",
      thumbnailUrl:
        "https://1.bp.blogspot.com/-3BkPmzx92zk/Xh_fvaYt1QI/AAAAAAAAU2Q/h5Bbk3QsNhodAh9TvbIw3RsRVlzMvjZxwCLcBGAsYHQ/s1600/hinh-anh-trai-dep%253Ddau-nam-hot-boy-2k-Wap102%2B%252824%2529.jpg"
    },
    {
      id: 7,
      name: "Công Phượng",
      price: "6,000 VND",
      order: "50 đơn",
      old: "17 tuổi",
      address: "quận Hai Bà Trưng, huyện Phúc Thọ, TP.Hà Nội",
      hotline: "034292928182",
      thumbnailUrl: "http://sohanews.sohacdn.com/2018/photo-3-1515294328629.jpg"
    },
    {
      id: 8,
      name: "Quang Hải",
      price: "6,000 VND",
      order: "50 đơn",
      old: "17 tuổi",
      address: "quận Hai Bà Trưng, huyện Phúc Thọ, TP.Hà Nội",
      hotline: "034292928182",
      thumbnailUrl:
        "https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-trai-%C4%91%E1%BA%B9p-2006.jpg"
    }
  ];
  return (
    <div className="shipper-father">
      <h3>Mời chọn nhân viên giao hàng </h3>
      <ShipperList shipperList={shipperList} />
    </div>
  );
}
export default ShipperFeature;
