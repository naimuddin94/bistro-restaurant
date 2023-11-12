import useMenus from "../../api/useMenus";
import SectionTitle from "../utility/SectionTitle";
import { Menu, MenuFoodsProps } from "../../types/Types";
import MenuCard from "./MenuCard";
import Cover from "./Cover";

const MenuFoods = ({ img, heading, category, isTitle }: MenuFoodsProps) => {
  const { data: menus } = useMenus();
  const filteredMenuItems = menus.filter((item: Menu) => item.category === category);
  return (
    <>
      <Cover coverImg={img} heading={heading} />
      <section className="max-w-5xl mx-auto my-20">
        {isTitle && (
          <SectionTitle
            subHeading="Don't miss"
            heading="TODAY'S OFFER"
          ></SectionTitle>
        )}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-8">
          {filteredMenuItems?.map((menu: Menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))}
        </div>
      </section>
      <div className="text-center mb-10">
        <button className="btn btn-outline border-0 border-b-4 mt-3 border-slate-700">
          Order your favorite food
        </button>
      </div>
    </>
  );
};

export default MenuFoods;
