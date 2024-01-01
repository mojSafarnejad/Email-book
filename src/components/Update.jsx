import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import './Update.css'

const Update = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [avatars, setAvatars] = useState([]);
  const [selectedAvt, setSelectedAvt] = useState();
  useEffect(() => {
    setName(props.userUpdate.user.first_name);
    setEmail(props.userUpdate.user.email);
  }, [props]);
  useEffect(() => {
    let newAvatars = [];
    for (let i = 0; i < 3; i++) {
      let rand = Math.random() * 53;
      let number = Math.floor(rand);
      newAvatars.push(
        `https://xsgames.co/randomusers/assets/avatars/pixel/${number}.jpg`
      );
      setAvatars(newAvatars);
      console.log(newAvatars);
    }
  }, [props]);
  return (
  
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered 
      
    >
      <Modal.Header style={{ display: "flex" }}>
        <Modal.Title id="contained-modal-title-vcenter" style={{ flex: "1" }}>
          Update User
        </Modal.Title>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          style={{ flex: "flex-end" }}
          onClick={() => props.controler1(false)}
        ></button>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="form-group mb-2">
            <label for="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="name"
                type="text"
                value={name}
                placeholder="Enter Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div class="form-group mb-2">
            <label for="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <h3 className="avthead" style={{fontWeight:"bold" , textAlign:"center"}}>Choose your new avatar</h3>
          <div class="row">
            <div className="col-lg-4 col-md-6 col-sm-12 text-center p-5">
              <img alt="avatar"
                className="img-fluid"
                style={{ borderRadius: "50%",width:"120px" }}
                src={avatars[0]}
                onClick={(e) => {
                  let all = e.target.parentNode.parentNode.children;
                  let arrAll = Array.from(all);
                  arrAll.forEach((e) => {
                    e.children[0].style.border = "none";
                  });
                  e.target.style.border = "solid 	#355E3B";
                  setSelectedAvt(e.target.src);
                }}
              ></img>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center p-5">
              <img alt="avatar"
                className="img-fluid"
                style={{ borderRadius: "50%",width:"120px" }}
                src={avatars[1]}
                onClick={(e) => {
                  let all = e.target.parentNode.parentNode.children;
                  let arrAll = Array.from(all);
                  arrAll.forEach((e) => {
                    e.children[0].style.border = "none";
                  });
                  e.target.style.border = "solid 	#355E3B";
                  setSelectedAvt(e.target.src);
                }}
              ></img>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center p-5">
              <img alt="avatar"
                className="img-fluid"
                style={{ borderRadius: "50%",width:"120px" }}
                src={avatars[2]}
                onClick={(e) => {
                  let all = e.target.parentNode.parentNode.children;
                  let arrAll = Array.from(all);
                  arrAll.forEach((e) => {
                    e.children[0].style.border = "none";
                  });
                  e.target.style.border = "solid 	#355E3B";
                  setSelectedAvt(e.target.src);
                }}
              ></img>
            </div>
          </div>
        </form>
      </Modal.Body>
      <button class="btn btn-primary btnConfirm glowing" onClick={() => submitUpdate()}>
        Update
      </button>
    </Modal>

  );
  function submitUpdate() {
    props.controler2(name, email, props.userUpdate.user.id,selectedAvt);
    props.controler1(false);
    setName("");
    setEmail("");
    setSelectedAvt("");

  }
};

export default Update;
