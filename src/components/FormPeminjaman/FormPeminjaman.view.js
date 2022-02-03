import React, { useState, useMemo } from "react";
import {useDropzone} from 'react-dropzone';
import './FormPeminjaman.styled.css'
import axios from "axios";

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};
const FormPeminjaman = (props) => {
  const [alamatRumah, setAlamatRumah] = useState("");
  const [alamatPangkalan, setAlamatPangkalan] = useState("");
  const [nama, setNama] = useState("");
  const [setuju, setSetuju] = useState("");
  const [ktp, setKtp] = useState([]);
  const [keteranganUsaha, setKeteranganUsaha] = useState([]);
  const [suratTeraTimbangan, setSuratTeraTimbangan] = useState([]);
  const [kelengkapanSarana, setkelengkapanSarana] = useState([])
  // const AddFormData = (e) => {
  //   e.preventDefault();
  //   FormData({ alamatRumah, LPG, alamatPangkalan, setuju });
  //   setAlamatRumah("");
  //   setAlamatPangkalan("");
  //   setLPG("");
  //   setSetuju(false);
  // };
  
  const AddFormData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nama', nama)
    formData.append('alamatRumah', alamatRumah)
    formData.append('alamatPangkalan', alamatPangkalan)
    formData.append('imageKeteranganUsaha', keteranganUsaha)
    formData.append('imageSuratTeraTimbangan', suratTeraTimbangan)
    formData.append('imageKelengkapanSarana', kelengkapanSarana)
    formData.append('imageKtp', ktp)
    const url = "https://server-tugasakhir.herokuapp.com/api/v1/formulir"

    const res = await axios.post(url, formData)
    console.log(res);
    // FormData({ name, noPegawai, email, address1, noDihubungi, setuju,password });
    // setName("");
    // setNoDihubungi("");
    // setNoPegawai("");
    // setAddress1("");
    // setEmail("");
    // setPassword("");
    // setSetuju(false);

    // if (res.status == 200) {
    //   window.open('/beranda','_self')
    // }
  };
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "image/*" });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="containerForm">
      <form onSubmit={AddFormData}>
        <h2
          for="judul"
          class="col-sm-2 col-form-label"
          style={{ textAlign: "center" }}
        >
          Formulir Pengajuan Menjadi Pangkalan Gas
        </h2>
        <br />
        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">
            Nama
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="name"
              className="inputan"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="alamatRumah" class="col-sm-2 col-form-label">
            Alamat Rumah
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="alamatRumah"
              className="inputan"
              value={alamatRumah}
              onChange={(e) => setAlamatRumah(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="alamatPangkalan" class="col-sm-2 col-form-label">
            Alamat Pangkalan
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="alamatPangkalan"
              className="inputan"
              value={alamatPangkalan}
              onChange={(e) => setAlamatPangkalan(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group row">
          <input
            type="checkbox"
            class="form-control"
            style={{ marginRight: "10px" }}
            id="setuju"
            value={setuju}
            onChange={(e) => setSetuju(e.target.value)}
          />
          <label for="setuju" class="col-sm-2 col-form-label">
            Mengajukan permohonan untuk di buatkan Perjanjian Pangkalan
            berdasarkan alamat di atas.
          </label>
        </div>
        <div className="containerDropzone" style={{ marginTop: "10px" }}>
          <span for="myfile">Upload Foto KTP : </span>
          <input
            type="file"
            onChange={(e) => setKtp(e.target.files[0])}
          />
          <br />
        </div>
        <div className="containerDropzone" style={{ marginTop: "10px" }}>
          <span for="myfile">Surat Keterangan Usaha : </span>
          <input
            type="file"
            onChange={(e) => setKeteranganUsaha(e.target.files[0])}
          />
          <br />
        </div>
        <div className="containerDropzone" style={{ marginTop: "10px" }}>
          <span for="myfile">Surat Tera Timbangan LPG 3 kg : </span>
          <input
            type="file"
            onChange={(e) => setSuratTeraTimbangan(e.target.files[0])}
          />
          <br />
        </div>
        <div className="containerDropzone" style={{ marginTop: "10px" }}>
          <span for="myfile">
            Foto kelengkapan sarana dan fasilitas pangkalan :{" "}
          </span>
          <input
            type="file"
            onChange={(e) => setkelengkapanSarana(e.target.files[0])}
          />
          <br />
        </div>
        <div class="form-group row" style={{ marginTop: "10px" }}>
          <input
            type="checkbox"
            class="form-control"
            id="setuju"
            style={{ marginRight: "10px" }}
            value={setuju}
            onChange={(e) => setSetuju(e.target.value)}
          />
          <label for="setuju" class="col-sm-2 col-form-label">
            Kami bersedia mematuhi segala peraturan yang diberikan KOPANA
            Bandung termasuk menjual
            <br />
            LPG 3 kg sesuai dengan Harga Eceran Tertinggi (HET) yang diberikan
            oleh Pemda Setempat.
          </label>
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Simpan Transaksi
        </button>
      </form>
    </div>
  );
};

export default FormPeminjaman;
