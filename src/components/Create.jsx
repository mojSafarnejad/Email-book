import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";


const Update = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatars, setAvatars] = useState([]);
  const [selectedAvt, setSelectedAvt] = useState();
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
          Create New User
        </Modal.Title>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          style={{ flex: "flex-end" }}
          onClick={() => {
            props.controler1(false);
            setName("");
            setEmail("");
            setSelectedAvt("");
          }}
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
                placeholder="Enter New Name"
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
                placeholder="Enter New Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <h3 style={{textAlign:"center"}}>Choose your avatar</h3>
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
                style={{ borderRadius: "50%" ,width:"120px"}}
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
                style={{ borderRadius: "50%" ,width:"120px"}}
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
      <button
        class="btn btn-success btnConfirm"
        onClick={(e) => {
          if (name == "" || email == "" || selectedAvt == "") {
            alert("❌ Complete the feilds and choose your avatar! ❌");
          } else {
            props.controler3(name, email, selectedAvt);
            props.controler1(false);
            setName("");
            setEmail("");
            setSelectedAvt("");
          }
        }}
        style={{ fontWeight: "bold" }}
      >
        Create
      </button>
    </Modal>
  );
};

export default Update;
