import React,{useState} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const InsideProfile = () => {
    const [tanggal, setTanggal] = useState("");
    const [deskripsi, setDeskripsi] = useState("");

    async function validateForm(){
        return tanggal.length > 0 && deskripsi.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const url = "http://localhost:3000/api/v1/setoranwajib";
        const data ={
          tanggal: tanggal,
          deskripsi: deskripsi,
        }
        const res = await axios.post(url, data )
        console.log(res);
    }
  
    return (
      <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="tanggal">
          <Form.Label style={{marginRight:'10px'}}>tanggal</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label style={{marginRight:'10px'}}>desskripsi</Form.Label>
          <Form.Control
            type="text"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
        </Form.Group>
        <Button style={{marginTop:'10px'}} block size="lg" type="submit" disabled={!validateForm()}>
          input
        </Button>
      </Form>
      </div>
    );
}

export default InsideProfile