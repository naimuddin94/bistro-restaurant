import { MenuCardProps } from "../../types/Types";

const MenuCard = ({ menu }: MenuCardProps) => {
  return (
    <div className="flex justify-between gap-5">
      <img
        src={menu.image}
        alt=""
        className="w-20 rounded-full rounded-ss-none"
      />
      <div>
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">{menu.name}</h2>
          <h3 className="text-yellow font-bold">${menu.price}</h3>
        </div>
        <p>{menu.recipe}</p>
      </div>
    </div>
  );
};

export default MenuCard;
