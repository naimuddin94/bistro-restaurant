import { Menu } from "../../types/Types";
import { useState, useEffect } from "react";
import SectionTitle from "../utility/SectionTitle";
import MenuCard from "../shared/MenuCard";

const PopularMenu = () => {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter(
          (menu: Menu) => menu.category === "popular"
        );
        setMenus(popularMenu);
      });
  }, []);

  return (
    <section className="max-w-5xl mx-auto my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-8">
        {menus.map((menu) => (
          <MenuCard key={menu._id} menu={menu} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
