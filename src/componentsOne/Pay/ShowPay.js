import React from "react";
import styled from "styled-components";
import Modal from "../../Modal";
import useModal from "../../useModal";

const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="app">
      <button className="button-default" onClick={toggle}>
        Giao hàng - Vui lòng click vào
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default App;
