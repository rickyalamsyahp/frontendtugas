import React, { useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const Daftar = () => {
  const [name, setName] = useState("");
  const [noPegawai, setNoPegawai] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [noDihubungi, setNoDihubungi] = useState("");
  const [setuju, setSetuju] = useState("");
  const AddFormData = (e) => {
    e.preventDefault();
    FormData({ name, noPegawai, email, address1, noDihubungi, setuju });
    setName("");
    setNoDihubungi("");
    setNoPegawai("");
    setAddress1("");
    setEmail("");
    setSetuju(false);
  };
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "image/*" });

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };
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
    <form onSubmit={AddFormData}>
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">
          Nama
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="Address1" class="col-sm-2 col-form-label">
          Alamat
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="Address1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="noPegawai" class="col-sm-2 col-form-label">
          No. Pegawai Pertamina
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="noPegawai"
            value={noPegawai}
            onChange={(e) => setNoPegawai(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="noDihubungi" class="col-sm-2 col-form-label">
          Nomor yang Dapat Dihubungi
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="noDihubungi"
            value={noDihubungi}
            onChange={(e) => setNoDihubungi(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="photo" class="col-sm-2 col-form-label">
          Upload Foto Kartu Pegawai Pertamina
        </label>
        <div class="col-sm-10">
          <div className="container">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <input
          type="checkbox"
          class="form-control"
          id="setuju"
          value={setuju}
          onChange={(e) => setSetuju(e.target.value)}
        />
        <label for="setuju" class="col-sm-2 col-form-label">
          Saya Setuju Untuk Menjadi Anggota KOPANA Bandung
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Daftar;
