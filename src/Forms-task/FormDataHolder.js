import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function FormDataHolder() {
  const [dataForm, setdataForm] = useState([]);
  const [valueCheck, setValueCheck] = useState([]);

  console.log(valueCheck, "delete index value");

  useEffect(() => {
    const storeLocaldata = JSON.parse(localStorage.getItem("dataStoring"));
    setdataForm(storeLocaldata);
    console.log(storeLocaldata, "local form data");
  }, []);

  // const deleteItem = (itemID, index) => {
  //   const deleteStore = JSON.parse(localStorage.getItem("dataStoring"));
  //   setdataForm("dataStoring", JSON.stringify(deleteStore));
  // };

  const deleteItem = () => {
    const updatedData = dataForm.filter(
      (item, index) => !valueCheck.includes(index)
    );
    localStorage.setItem("dataStoring", JSON.stringify(updatedData));
    setdataForm(updatedData);
    setValueCheck([]);
  };
  console.log("calling", valueCheck);

  // array methods  working
  const arr = [1, 2, 5, 3, 5, 6];
  const filterArr = arr.filter((item) => item !== 5);
  const inclduings = arr.includes((item) => item == 5);
  const findinginArr = arr.find((item) => item == 5);
  const sliceArr = arr.slice(0, 3);
  const sortArr = arr.sort();
  // const reverseArr = arr.reverse();

  let sum = 0;
  const myforeachFunc = (item) => {
    sum += item;
  };
  const forEachArr = arr.forEach((item) => myforeachFunc(item));

  console.log(
    filterArr,
    "filterArr filters the values depended condition and gives array as output  "
  );
  console.log(inclduings, "inclduings it returns in booleon");
  console.log(findinginArr, "findinginArr it finds the value and returns it ");
  console.log(
    sliceArr,
    "it makes slice the array from starting index to ending index"
  );
  console.log(
    forEachArr,
    sum,
    " if we wrote without function it gives the undefined , for each is similer to map but it did not reneders in array , it calls an function as array itterates"
  );
  console.log(
    sortArr,
    "sorts the array from the in ascending order by defualt "
  );
  // console.log(reverseArr, "reversing an array"); commneted becuase it soi returnding reversse an aray

  return (
    <section className="my-5 container">
      <div className="w-full">
        <table className="border border-slate-500 ">
          <tbody>
            <tr className=" border border-slate-600 text-center">
              <th className="border border-slate-600">Tik and delete</th>
              <th className="border border-slate-600">name</th>
              <th className="border border-slate-600">E-mail</th>
              <th className="border border-slate-600">description</th>
            </tr>

            {dataForm &&
              dataForm.map((items, index) => (
                <tr
                  key={index}
                  className=" border border-slate-600 text-center odd:bg-white even:bg-slate-50"
                >
                  <td>
                    <input
                      type="checkbox"
                      name="checkBoxes"
                      checked={valueCheck.includes(index)}
                      onChange={(e) => {
                        if (valueCheck.includes(index)) {
                          setValueCheck(
                            valueCheck.filter((idx) => idx !== index)
                          );
                        } else setValueCheck([...valueCheck, index]);
                      }}
                    />
                  </td>
                  <td className=" border border-slate-600 text-center">
                    {items.nname}
                  </td>
                  <td className=" border border-slate-600 text-center">
                    {items.mail}
                  </td>
                  <td className=" border border-slate-600 text-center">
                    {items.textFiled}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* <input
          type="checkbox"
          value="india"
          onChange={(e) => console.log(e.target.value)}
        />
        <input
          type="checkbox"
          value="aus"
          onChange={(e) => console.log(e.target.value)}
        /> */}
      </div>
      <div className="">
        <button
          onClick={() => deleteItem()}
          className=" bg-neutral-700  hover:rounded-full transition-all ease-in-out  delay-0 font-bold hover:text-sky-400 text-white mt-6  "
        >
          delete selected
        </button>
        <NavLink
          to="/Forms"
          className="ms-5 p-3 bg-neutral-700  hover:rounded-full transition-all ease-in-out  delay-0 font-bold hover:text-sky-400 text-white mt-6 "
        >
          Back to form
        </NavLink>
      </div>
    </section>
  );
}
