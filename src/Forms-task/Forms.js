import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import FormDataHolder from "./FormDataHolder";
// import { NavLink } from "react-router-dom";
// import ToForms from "./FormDataHolder";
export default function Forms() {
  const [formData, setformData] = useState({
    nname: "",
    mail: "",
    textFiled: "",
  });

  const ClearForm = () => {
    setformData({
      nname: "",
      mail: "",
      textFiled: "",
    });
  };

  // Your submit handler code here
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");

    const storedData = JSON.parse(localStorage.getItem("dataStoring")) || [];

    console.log("hello", storedData);
    localStorage.setItem(
      "dataStoring",
      JSON.stringify([...storedData, formData])
    );

    ClearForm();
  };

  const handleValues = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    setformData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  // console.log(formData, "username");
  return (
    <>
      <div className="form-wrapper container mt-6">
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="text"
              name="nname"
              autoComplete="off"
              placeholder="Enter your Name"
              onChange={handleValues}
              required
              value={formData.nname}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="mail"
              autoComplete="off"
              placeholder="Enter your Gmail"
              onChange={handleValues}
              required
              value={formData.mail}
            />
            {/* <input type="file" capture="environment" /> */}
          </div>
          <div className="form-group">
            <textarea
              placeholder="Enter your massege"
              name="textFiled"
              cols={22}
              onChange={handleValues}
              required
              value={formData.textFiled}
            ></textarea>
          </div>
          <button
            type="submit"
            className="focus:outline-none btn--submit text-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-block"
          >
            Submit{" "}
          </button>
          <NavLink
            to="/FormDataHolder"
            className="focus:outline-none btn--submit text-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-block"
          >
            Form list
          </NavLink>
        </form>
        <details>
          <summary className="marker:text-red-600 text-base cursor-pointer ">
            {" "}
            this is details click to open summary
          </summary>
          <p>this is summary about something</p>
        </details>

        {/* <FormDataHolder formDataProps={formData} /> */}
      </div>
    </>
  );
}
