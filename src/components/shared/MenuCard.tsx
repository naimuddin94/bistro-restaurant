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
          <h2 className="text-lg font-semibold">{menu.name}<span className="text-xs font-medium uppercase bg-slate-200 rounded-full px-3 py-1 ml-2">{ menu.category}</span></h2>
          <h3 className="text-yellow font-bold">${menu.price}</h3>
        </div>
        <p>{menu.recipe}</p>
      </div>
    </div>
  );
};

export default MenuCard;
