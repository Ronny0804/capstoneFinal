import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addName, addImg, addMenu, addbagImg } from "../../action/index";
import { Link } from "react-router-dom";
import { collection, setDoc } from "firebase/firestore";
import { doc, getDoc, addDoc } from "firebase/firestore";
import { firestore, db } from "../../firebase";
// import {storage}  from '../../firebase'
const Login = () => {
  const [image, setImage] = useState(null);
  const [allImgs, setAllImgs] = useState([]);
  const [ourImg, setOurImg] = useState([]);
  const [ourbagImg, setOurbagImg] = useState([]);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [imgType, setImgType] = useState();
  const [bgTypeImg, setBgTypeImg] = useState();
  const [ourTypeImg, setOurTypeImg] = useState();
  const [form, setForm] = useState({
    hotelname: "HOTELNAME",
    email: "EMAIL",
    ownername: "OWNERNAME",
    phone: "PHONENUMBER",
    location: "LOCATION",
    openHours: "OPEN_HOURS",
    serviceone: "SERVICE1",
    servicetwo: "SERVICE2",
    servicethree: "SERVICE3",
    aboutdescription: "DESCRIPTION",
    pointone: "POINTONE",
    pointtwo: "POINTTWO",
    pointthree: "POINTTHREE",
  });

  const templateValues = useSelector((state) => state.getTemplateValues);
const menuValues = useSelector((state) => state.getMenuValues)
const ourImgValues = useSelector((state) => state.getImageValues)
const bagImgValues = useSelector((state) => state.getbagImageValues
)
// console.log(menuValues.value.value)
  console.log(templateValues);

  const addData = async () => {
    //   console.log("image: ", image);
    //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //   uploadTask.on(
    //     "state_changed",
    //     snapshot => {
    //       const progress = Math.round(
    //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //       );
    //       setProgress(progress);
    //     },
    //     error => {
    //       console.log(error);
    //     },
    //     () => {
    //       storage
    //         .ref("images")
    //         .child(image.name)
    //         .getDownloadURL()
    //         .then(url => {
    //           setUrl(url);
    //         });
    //     }

    //   );

    //   console.log("image: ", image);


    const {
      hotelname,
      email,
      ownername,
      phone,
      location,
      openHours,
      serviceone,
      servicetwo,
      servicethree,
      aboutdescription,
      pointone,
      pointtwo,
      pointthree,
    } = form;
    console.log(form.hotelname)
    await setDoc(doc(firestore, db.userTemplate, form.hotelname), {
      hotelname:hotelname ? hotelname : "",
      email: email ? email : "",
      ownername: ownername ? ownername : "",
      phone: phone ? phone : "",
      location: location ? location : "",
      openHours: openHours ? openHours : "",
      serviceone: serviceone ? serviceone : "",
      servicetwo: servicetwo ? servicetwo : "",
      servicethree: servicethree ? servicethree : "",
      aboutdescription: aboutdescription ? aboutdescription : "",
      pointone: pointone ? pointone : "",
      pointtwo: pointtwo ? pointtwo : "",
      pointthree: pointthree ? pointthree : "",
      menuname: name ? name : "",
      menutype: menuType ? menuType : "",
      menuprice: price ? price : "",
      jsx: templateValues.value.component ? templateValues.value.component : "fhgv",
      allImgs: menuValues.value.value ? menuValues.value.value : [],
      ourImg: ourImgValues.value.value ? ourImgValues.value.value : [],
      ourBagImg: bagImgValues.value.value ? bagImgValues.value.value : [],
    })
      .then(function success() {
        console.log("success");
      })
      .catch((e) => {
        console.log(e);
      });

    // await addDoc(collection(firestore,db.userTemplate),{
    //   hotelname,email,ownername,phone,location,openHours,serviceone,servicetwo,
    //   servicethree,aboutdescription,pointone,
    //   pointtwo,pointthree,
    //   menuname:name,
    //   menutype:menuType,
    //   menuprice:price,

    // }).then(function success(){
    //   console.log("success")
    // }).catch((e)=>{
    //   console.log(e)
    // })
  };

  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(addName(form));
    addData();
  };
  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  //menuimage setter logic starts here
  const filePickerRef = useRef(null);
  const [des, setDes] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [menuType, setMenuType] = useState("");
  const [fileName, setFileName] = useState("");
  const [currentId, setCurrentId] = useState();
  const [isEditable, setIsEditable] = useState(false);

  const addImage = (e, type) => {
    setImgType(type);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setFileName(e.target.files[0]?.name);
    }
    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myNewInputData = {
      id: new Date().getTime().toString(),
      name,
      img,
      price,
      des,
      menuType,
      imgType,
    };
    setAllImgs([...allImgs, myNewInputData]);
  };

  const editMenuItem = (data, e, i) => {
    e.preventDefault();
    setIsEditable(true);
    setDes(data.des);
    setFileName(data.name);
    setCurrentId(data.id);
  };

  const deleteItem = (id, e) => {
    e.preventDefault();
    const newItem = allImgs.filter((itm) => itm.id !== id);
    setAllImgs(newItem);
  };

  const updateMenuItem = (e) => {
    e.preventDefault();
    const updatedItem = allImgs.map((item) => {
      return item.id === currentId
        ? { name: fileName, img, des, id: currentId }
        : item;
    });

    setAllImgs(updatedItem);
    setIsEditable(false);
    dispatch(addImg([updatedItem]));
    setDes("");
    setFileName("");
  };

  const addMenus = (e) => {
    e.preventDefault();
    dispatch(addMenu([...allImgs]));
  };
  //menuimage setter logic ends here

  //our image setter starts here

  const imgPicker = useRef(null);

  const [ourFileName, setOurFileName] = useState("");
  const [imgs, setImgs] = useState("");

  const addOurImage = (e, type) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setOurFileName(e.target.files[0]?.name);
    }
    reader.onload = (readerEvent) => {
      setImgs(readerEvent.target.result);
    };
  };

  const ourhandleSubmit = (e) => {
    e.preventDefault();
    const myNewInputData = {
      id: new Date().getTime().toString(),
      name: ourFileName,
      imgs,
      imgType:"ourImg",
    };
    setOurImg([...ourImg, myNewInputData]);
    setOurFileName("");
    setImgs("");
  };

  const addImageState = (e) => {
    e.preventDefault();
    dispatch(addImg([...ourImg]));
  };
  //our image setter ends  here

  //our image setter starts here

  const bagimgPicker = useRef(null);

  const [ourbagFileName, setOurbagFileName] = useState("");
  const [bagimgs, setbagImgs] = useState("");

  const addOurbagImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
      setOurbagFileName(e.target.files[0]?.name);
    }
    reader.onload = (readerEvent) => {
      setbagImgs(readerEvent.target.result);
    };
  };

  const ourbaghandleSubmit = (e) => {
    e.preventDefault();
    const mybagNewInputData = {
      id: new Date().getTime().toString(),
      name: ourbagFileName,
      bagimgs,
      imgType: "bg",
    };
    setOurbagImg([...ourbagImg, mybagNewInputData]);
    setOurbagFileName("");
  };

  const addbagImageState = (e) => {
    e.preventDefault();
    dispatch(addbagImg(bagimgs));
  };

  console.log(allImgs);

  return (
    <>
      <div className="container my-5">
        <p>{templateValues?.value?.value}</p>
        <button className="btn btn-success" onClick={addData}>
          Add
        </button>
        <form className="pt-5">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Owner Name :
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={form.ownername}
              name="ownername"
              onChange={updateField}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Shop Name :
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={form.hotelname}
              name="hotelname"
              onChange={updateField}
            />
          </div>

          <div className="mb-3">
            <label className="form-label"> Phone Number : </label>
            <input
              type="text"
              className="form-control"
              value={form.phone}
              name="phone"
              onChange={updateField}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email :</label>
            <input
              type="text"
              className="form-control"
              value={form.email}
              name="email"
              onChange={updateField}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Location :</label>
            <input
              type="text"
              className="form-control"
              value={form.location}
              name="location"
              onChange={updateField}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Open Hours :</label>
            <input
              type="text"
              className="form-control"
              value={form.openHours}
              name="openHours"
              onChange={updateField}
            />
          </div>

          <div className="container border border-dark p-4 border-2 my-5 rounded">
            <h3>Why Choose Us :</h3>
            <div className="mb-3">
              <label className="form-label"> Explain about First service :</label>
              <input
                type="text"
                className="form-control"
                value={form.serviceone}
                name="serviceone"
                onChange={updateField}
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> Explain about Second service :</label>
              <input
                type="text"
                className="form-control"
                value={form.servicetwo}
                name="servicetwo"
                onChange={updateField}
              />
            </div>
            <div className="mb-3">
              <label className="form-label"> Explain about Third service :</label>
              <input
                type="text"
                className="form-control"
                value={form.servicethree}
                name="servicethree"
                onChange={updateField}
              />
            </div>
          </div>

          <div className="container border border-dark p-4 border-2 my-5 rounded">
            <h3>About Us</h3>
            <div className="mb-3">
              <label className="form-label">Description :</label>
              <input
                type="text"
                className="form-control"
                value={form.aboutdescription}
                name="aboutdescription"
                onChange={updateField}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Describe point 1 :</label>
              <input
                type="text"
                className="form-control"
                value={form.pointone}
                name="pointone"
                onChange={updateField}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Describe point 2 :</label>
              <input
                type="text"
                className="form-control"
                value={form.pointtwo}
                name="pointtwo"
                onChange={updateField}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Describe point 3 :</label>
              <input
                type="text"
                className="form-control"
                value={form.pointthree}
                name="pointthree"
                onChange={updateField}
              />
            </div>
          </div>

          <div className="container border border-dark p-4 border-2 my-5 rounded">
            <h3>Special Menus :</h3>
            <div className="d-flex justify-content-around align-items-center">
              <div className="container bg-white p-4 mt-5">
                <div className="item d-flex justify-content-around align-items-center">
                  {/* menu input field */}

                  <div className="mb-3 d-flex flex-column justify-content-around align-items-start">
                    <h4 className="form-label">Menu Name :</h4>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 d-flex flex-column justify-content-around align-items-start">
                    <h4 className="form-label">Menu Type :</h4>
                    <input
                      type="text"
                      value={menuType}
                      onChange={(e) => setMenuType(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 d-flex flex-column justify-content-around align-items-start">
                    <h4 className="form-label">Menu Description :</h4>
                    <input
                      type="text"
                      value={des}
                      onChange={(e) => setDes(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 d-flex flex-column justify-content-around align-items-start">
                    <h4 className="form-label">Menu Price :</h4>
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  {/* menu image input field */}
                  <div className="mb-3 d-flex flex-column justify-content-around align-items-start">
                    <h4 className="form-label">Menu Image :</h4>
                    <label htmlFor="file">
                      Choose File
                      <p>{fileName ? fileName : ""}</p>
                    </label>
                    <input
                      id="file"
                      ref={filePickerRef}
                      type="file"
                      onChange={(e) => addImage(e, "special")}
                      style={{ visibility: "hidden" }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  {allImgs.map((data, i) => (
                    <div key={i}>
                      <img src={data.img} alt="" width={150} height={150} />
                      <p>
                        <strong>Menu Name :</strong>
                        {data.name}
                      </p>
                      <p>
                        <strong>Menu Description :</strong>
                        {data.des}
                      </p>
                      <p>
                        <strong>Menu Price:</strong>
                        {data.price}
                      </p>
                      <p>
                        <strong>Menu Type:</strong>
                        {data.menuType}
                      </p>
                      <button
                        onClick={(e) => editMenuItem(data, e, i)}
                        className="btn btn-warning px-5 me-2"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={(e) => deleteItem(data.id, e)}
                        className="btn btn-danger ms-2"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
                {!isEditable ? (
                  <button
                    onClick={handleSubmit}
                    className="btn btn-dark px-5 me-2"
                  >
                    ADD
                  </button>
                ) : (
                  <button
                    onClick={(e) => updateMenuItem(e)}
                    className="btn btn-success px-5 ms-2"
                  >
                    UPDATE
                  </button>
                )}
                <button
                  onClick={(e) => addMenus(e)}
                  className="btn btn-success"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          <div className="container border border-dark p-4 border-2 my-5 rounded">
            <div className="mb-3 d-flex flex-column justify-content-around align-items-start">
              <h4 className="form-label">Gallery Section Images :</h4>
              <label htmlFor="ourfile">
                Choose File :
                <p>{ourFileName ? ourFileName : ""}</p>
              </label>
              <input
                id="ourfile"
                ref={imgPicker}
                type="file"
                onChange={(e) => addOurImage(e, "ourImg")}
                style={{ visibility: "hidden" }}
              />
              <button
                onClick={ourhandleSubmit}
                className="btn btn-dark px-5 mb-1"
              >
                ADD
              </button>

              <div className="d-flex justify-content-around align-items-center">
                {ourImg.map((data, i) => (
                  <div key={i}>
                    <p>{data.name}</p>
                    <img src={data.img} alt="" width={150} height={150} />
                    <p>{data.des}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={(e) => addImageState(e)}
                className="btn btn-success px-5 mt-2"
              >
                SUBMIT
              </button>
            </div>
          </div>

          <div className="container border border-dark p-4 border-2 my-5 rounded">
            <div className="mb-3 d-flex flex-column justify-content-around align-items-start">
              <h4 className="form-label">Main Background Image :</h4>
              <label htmlFor="ourbagfile">
                Choose File :
                <p>{ourbagFileName ? ourbagFileName : ""}</p>
              </label>
              <input
                id="ourbagfile"
                ref={bagimgPicker}
                type="file"
                onChange={addOurbagImage}
                style={{ visibility: "hidden" }}
              />
              <button
                onClick={ourbaghandleSubmit}
                className="btn btn-dark px-5 mb-1"
              >
                ADD
              </button>

              <div className="d-flex justify-content-around align-items-center">
                {ourbagImg.map((data, i) => (
                  <div key={i}>
                    <p>{data.name}</p>
                    <img src={data.img} alt="" width={150} height={150} />
                    <p>{data.des}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={(e) => addbagImageState(e)}
                className="btn btn-success px-5 mt-2"
              >
                SUBMIT
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleOnClick}
          >
            Submit
          </button>

          <Link
            to={`/singlePage/${form.hotelname}`}
            type="submit"
            className="btn btn-warning ms-5"
          >
            GO TO WEBPAGE
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
