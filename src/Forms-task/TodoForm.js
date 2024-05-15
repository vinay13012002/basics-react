import react, { useState } from "react";

export default function TodoForm() {
  const [dataArr, setdataArr] = useState([]);
  const [formData, setformData] = useState({
    todoData: "",
  });
  const submitHandle = (event) => {
    event.preventDefault();

    Clearform();
    setdataArr((prevs) => [...prevs, { formData }]);
  };

  const handleinput = (e) => {
    const { name, value } = e.target;
    const dataHold = (prevData) => ({ ...prevData, [name]: value });
    setformData(dataHold);
  };

  const Clearform = () => {
    setformData({
      todoData: "",
    });
  };

  console.log(formData, "formData todo");

  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const [Data, setData] = useState("");

  const categories = [];
  categories.push(...PRODUCTS.map((cate) => cate.category));
  let uniqCat = [...new Set(categories)];
  console.log(uniqCat, "unique items");
  //   console.log(categories, "categories");

  console.log(Data);

  return (
    <div className="container">
      <div className="w-full">
        <form class="relative z-0 group w-1/3 flex" onSubmit={submitHandle}>
          <div className="form-inputs">
            <input
              type="text"
              name="todoData"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  font-semibold dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              onChange={handleinput}
              value={formData.todoData}
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter to add
            </label>
          </div>
          <button className=" bg-red-400 md:rounded-3xl  ms-4" type="submit">
            add
          </button>
        </form>

        <h3 className=" text-base">{formData.todoData}</h3>
      </div>

      <div className="mt-5">
        <input
          type="text"
          onChange={(e) => setData(e.target.value.toLowerCase())}
          placeholder="Search here..."
        />
        <table>
          <tr>
            <th>fruits</th>
            <th>price</th>
          </tr>
          <tr>
            <th>{uniqCat.map((items)=>items)}</th>
          </tr>

          {PRODUCTS &&
            PRODUCTS.filter((itm) =>
              itm.name.toLowerCase().includes(Data.toLowerCase())
            ).map((items) => (
              <>
                <tr key={items.name}>
                  <td className="text-2xl">{items.name}</td>
                  <td
                    className="text-2xl"
                    style={{ color: items.stocked ? "green" : "red" }}
                  >
                    {items.price}
                  </td>
                </tr>
              </>
            ))}
        </table>
      </div>
    </div>
  );
}
