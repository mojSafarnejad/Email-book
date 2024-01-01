import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingUsers from "./loading/LoadingUsers";
import Update from "./Update";
import Create from "./Create";

const Users = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [userUpdate, setUserUpdate] = useState({
    user: { name: "moji", email: "moji@yahoo.com" },
  });

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((p) => {
      setusers(p.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <div
        className=" text-center "
        style={{
          background: "rgb(238,174,202)linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)", minHeight:"100vh"
        }}
      >
        <button
          className="btn btn-lg btn-primary "
          style={{
            width: "20%",
            margin: "2% ",
            borderRadius: "10%",
            background: "rgb(63,94,251) radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(216,70,252,1) 100%)",
            borderColor: "black",
            fontSize: "2vw",
          }}
          onClick={handleCreate}
        >
          Create
        </button>
        <Create
          show={showCreate}
          controler1={controler1}
          controler3={controler3}
        />
        <Update
          show={showModal}
          controler1={controler1}
          controler2={controler2}
          userUpdate={userUpdate}
        />

        <div className="row">
          {isLoading ? (
            <LoadingUsers />
          ) : (
            users.map((user) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 text-center p-5"
                  key={user.id}
                >
                  <img
                    className="img-fluid"
                    src={user.avatar}
                    alt=""
                    style={{ borderRadius: "50%", width: "150px" }}
                  ></img>
                  <h4 style={{ fontSize: "3vw" }}>{user.first_name} </h4>
                  <h5 style={{ fontSize: "2vw" }}>{user.email}</h5>
                  <div className="row">
                    <div className="cal-6">
                      <button
                        className="btn btn-info btn-sm text-center"
                        style={{
                          width: "80%",
                          fontSize: "1.2vw",
                          maxWidth: "200px",
                        }}
                        onClick={() => {
                          handleUpdate(user);
                        }}
                      >
                        Update
                      </button>

                      <button
                        className="btn btn-danger btn-sm text-center"
                        style={{
                          width: "80%",
                          fontSize: "1.2vw",
                          maxWidth: "200px",
                        }}
                        onClick={() => {
                          handleDelete(user);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
  function handleCreate() {
    setShowCreate(true);
  }

  function handleUpdate(user) {
    setUserUpdate({ user });
    setShowModal(true);
  }

  function handleDelete(user) {
    const copyUsers = [...users];
    let newUsers = copyUsers.filter((u) => {
      if (u.id !== user.id) {
        return u;
      }
    });
    setusers(newUsers);
  }

  function controler1(state) {
    setShowModal(false);
    setShowCreate(false);
  }

  function controler2(name, email, id,selectedAvt) {
    const copyUsers = [...users];
    copyUsers.forEach((u) => {
      if (u.id == id) {
        u.first_name = name;
        u.emali = email;
        if(selectedAvt){u.avatar = selectedAvt}
        
      }
      setusers(copyUsers);
    });
  }
  function controler3(name, email, avatar) {
    const copyUsers = [...users];
    let id = copyUsers.length + 1;
    copyUsers.push({
      first_name: name,
      email: email,
      avatar: avatar,
      id: id,
    });
    setusers(copyUsers);
  }
};

export default Users;
