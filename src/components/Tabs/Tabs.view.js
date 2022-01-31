import { useState } from "react";
import "./Tabs.styled.css";

function TabGroup() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Setoran Pokok
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Setoran Wajib
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="containerTanggalKet">
            <div className="tanggal">Tanggal</div>
            <div className="keterangan">Keterangan</div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="containerTanggalKet">
            <div className="tanggal">Tanggal</div>
            <div className="keterangan">Keterangan</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabGroup;
