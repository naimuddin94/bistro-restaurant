import { Menu } from "../../types/Types";
import SectionTitle from "../utility/SectionTitle";
import MenuCard from "../shared/MenuCard";
import useMenus from "../../api/useMenus";

const PopularMenu = () => {
  const { data: menus } = useMenus("popular");

  return (
    <section className="max-w-5xl mx-auto my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-8">
        {menus?.map((menu: Menu) => (
          <MenuCard key={menu._id} menu={menu} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
