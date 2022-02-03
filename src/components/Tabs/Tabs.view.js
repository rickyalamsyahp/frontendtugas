import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Tabs.styled.css";

function TabGroup() {
  const [toggleState, setToggleState] = useState(1);
  const [test, setTest]= useState({})
  const [loading, setIsLoading] = useState(true)

  const toggleTab = (index) => {
    setToggleState(index);
  };


  const getUser= async() => {
    try {
      let tes = JSON.parse(localStorage.getItem("user"))
      // console.log(tes.id);
    const response = await axios.get(`https://server-tugasakhir.herokuapp.com/api/v1/member/${tes.id}`);
      console.log(response.data);
      setTest(response.data)
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
}
useEffect(()=>{
    getUser()
  },[])

  return loading? "Loading": (
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
           {test.setoranId.map((d)=>(
             <div>{d.tanggal}</div>
           ))}
            <div className="keterangan">Keterangan</div>
            {test.setoranId.map((d)=>(
             <div>{d.deskripsi}</div>
           ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabGroup;
