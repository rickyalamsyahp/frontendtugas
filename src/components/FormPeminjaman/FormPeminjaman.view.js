import React, { useState, useMemo } from "react";

const FormPeminjaman = () => {
  const [noPeminjaman, setNoPeminjaman] = useState("");
  const [noPegawai, setNoPegawai] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [namaPeminjam, setNamaPeminjam] = useState("");
  const [jumlahPinjaman, setJumlahPinjaman] = useState("");
  const [untukKeperluan, setUntukKeperluan] = useState("");
  const [lamaPeminjaman, setLamaPeminjaman] = useState("");
  const [biayaAngsuran, setBiayaAngsuran] = useState("");
  const [setuju, setSetuju] = useState("");
  const AddFormData = (e) => {
    e.preventDefault();
    FormData({ noPeminjaman,biayaAngsuran, noPegawai, noTelp, namaPeminjam, jumlahPinjaman,untukKeperluan,lamaPeminjaman, setuju });
    setNoPeminjaman("");
    setLamaPeminjaman("");
    setBiayaAngsuran("");
    setUntukKeperluan("");
    setJumlahPinjaman("");
    setNoPegawai("");
    setNamaPeminjam("");
    setNoTelp("");
    setSetuju(false);
  };
  return (
    <form onSubmit={AddFormData}>
        <label for="judul" class="col-sm-2 col-form-label">
          Form Peminjaman Uang
        </label>
    <br/>
      <div class="form-group row">
        <br />
        <label for="noPeminjaman" class="col-sm-2 col-form-label">
          Nomor Peminjaman
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="noPeminjaman"
            value={noPeminjaman}
            onChange={(e) => setNoPeminjaman(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="namaPeminjam" class="col-sm-2 col-form-label">
          Nama Peminjam
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="namaPeminjam"
            value={namaPeminjam}
            onChange={(e) => setNamaPeminjam(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="noTelp" class="col-sm-2 col-form-label">
          Nomor Telepon
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="noTelp"
            value={noTelp}
            onChange={(e) => setNoTelp(e.target.value)}
          />
        </div>
      </div>
      <br/>
      <div class="form-group row">
        <label for="pernyataan" class="col-sm-2 col-form-label">
            Dengan ini mengajukan permohonan pinjaman uang dari KOPANA Bandung
        </label>
      </div>
      <br/>
      <div class="form-group row">
        <label for="jumlahPeminjaman" class="col-sm-2 col-form-label">
         Jumlah Peminjaman
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="jumlahPeminjaman"
            value={jumlahPinjaman}
            onChange={(e) => setJumlahPinjaman(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="untukKeperluan" class="col-sm-2 col-form-label">
         Untuk Keperluan
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="untukKeperluan"
            value={untukKeperluan}
            onChange={(e) => setUntukKeperluan(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="lamaPeminjaman" class="col-sm-2 col-form-label">
         Lama Peminjaman
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="lamaPeminjaman"
            value={lamaPeminjaman}
            onChange={(e) => setLamaPeminjaman(e.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="biayaAngsuran" class="col-sm-2 col-form-label">
         Biaya Angsuran
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="biayaAngsuran"
            value={biayaAngsuran}
            onChange={(e) => setBiayaAngsuran(e.target.value)}
          />
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
        Formulir peminjaman ini saya isi dengan sadar dan dengan sebenar-benarnya. Apabila terdapat kesalahan, SAYA BERSEDIA MENERIMA KONSEKUENSINYA.
        </label>
      </div>
      <br/>
      <button type="submit" class="btn btn-primary">
        Simpan Transaksi
      </button>
    </form>
  );
};

export default FormPeminjaman;
