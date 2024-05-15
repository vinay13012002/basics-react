import { useState } from "react";
import Card from "./Card";

export default function CardComponent({
  dataHolder,
  some,
  increase,
  dataSend,
  dataStore,
}) {
  const [categorySearched, setCategorySearched] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchValue(inputValue);
  };

  const handleDropdownChange = (event) => {
    const selectedCategory = event.target.value;
    setCategorySearched(selectedCategory);
  };

  const filteredData = dataHolder.filter((item) => {
    const categoryMatch =
      categorySearched === "All" || item.category === categorySearched;

    const searchMatch = item.title.toLowerCase().includes(searchValue);
    return categoryMatch && searchMatch;
  });
  // console.log(searchMatch, "searchMatch in cardComp");
  return (
    <>
      <header>
        <div className="d-flex mb-4 mt-4 justify-between mx-auto">
          <select name="dropdown" onChange={handleDropdownChange}>
            <option value="All">All</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>

          <div className="input-wrapper">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              placeholder="Search here.."
              name="inputValue"
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </header>

      <div className="container grid lg:grid-cols-4 md:grid-cols-2 gap-4 justify-center">
        {filteredData.length === 0
          ? "nodata"
          : filteredData.map((item) => (
              <div key={item.id} className="h-full">
                <Card item={item} dataSend={dataSend} dataStore={dataStore} />
              </div>
            ))}
      </div>
    </>
  );
}
