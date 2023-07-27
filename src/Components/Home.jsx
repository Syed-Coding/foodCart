import { useEffect, useState, useMemo } from "react";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import Loading from "./Loading";
function Home({ cart, setCart, cartData }) {
  const [data, setData] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  // useEffect(() => {
  //   console.log("useEffetct");
  //   const timeout = setInterval(() => {
  //     console.log("interval");
  //   }, 3000);
  //clear after 3001seconds
  //   setTimeout(() => {
  //     clearInterval(timeout);
  //   }, 3001);
  // }, []);
  // console.log(activeCategory);
  const categoryData = useMemo(() => {
    return data?.table_menu_list.map((ele) => {
      return ele.menu_category;
    });
  }, [data]);

  const [isloading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);

  const handleCategory = (cate) => {
    const activeCategory = data.table_menu_list.find(
      (ele) => ele.menu_category === cate
    );
    setActiveMenu(activeCategory);
    setActiveCategory(cate);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
      );
      const [apiData] = await response.json();
      setData(apiData);
      setActiveMenu(apiData.table_menu_list[0]);
      setActiveCategory(apiData.table_menu_list[0].menu_category);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    // console.log("isnide useEffect");
    fetchData();
  }, []);

  if (isloading) return <Loading />;
  if (iserror) return <Loading />;

  return (
    <div className="App">
      <Navbar data={data} cart={cart} cartData={cartData}></Navbar>
      <Main
        categoryData={categoryData}
        handleCategory={handleCategory}
        activeMenu={activeMenu}
        setCart={setCart}
        cart={cart}
        activeCategory={activeCategory}
      ></Main>
    </div>
  );
}

export default Home;
