import React, { useEffect, useState } from "react";

const Index = () => {
  const [urlData, seturlData] = useState();
  // const [pathLoad, setpathLoad] = useState([])
  useEffect(() => {
    let url =
      "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20";

    try {
      const getData = async (url) => {
        const datares = await fetch(url);
        const data = await datares.json();
        seturlData(data.photos);
        setImgPath(data.photos[0].url);

        console.log(data.photos, "data fake");
        // setpathLoad(data.photos[0].url)
        // console.log(data.photos[0].url)
      };
      getData(url);
    } catch (err) {
      console.log(err.massage);
    }
  }, []);

  console.log(urlData, "urlData");

  const ImgHandler = (id) => {
    const imgPath = urlData.filter((itm) => itm.id === id);
    setImgPath(imgPath[0].url);
  };

  const [imgpath, setImgPath] = useState();
  console.log(imgpath, "imgpath    ");

  return (
    <div className="container">
      <div className="flex gap-4">
        <img src={imgpath} alt="images" height={500} width={500} />
        <div className="grid gap-3">
          {urlData &&
            urlData.slice(0, 5).map((itms) => (
              <div key={itms.id}>
                <figure onMouseMove={() => ImgHandler(itms.id)}>
                  <img src={itms.url} alt="itms" height={100} width={100} />
                </figure>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
