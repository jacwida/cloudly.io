import {
  DeleteIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  SettinsIcon,
  StarIcon,
  UpdateIcon,
} from "./Icons";
const menuItems1 = [
  {
    name: "Dashboard",
    items: ["my cloud", "general", "overview"],
  },
  {
    name: "Favourites",
  },
  { name: "Updates" },
];

const menuItems2 = [
  {
    name: "Settings",
  },
  {
    name: "Recycle Bin",
  },
  { name: "Logout" },
];

const SideBar = () => {
  return (
    <div className="px-3 mr-8 text-white min-h-screen flex flex-col w-1/12  items-center">
      <div className="my-2  mb-4">
        <LogoIcon />
      </div>

      <div>
        {menuItems1.map((item) => (
          <div key={item}>
            <h1 className="font-bold my-7 flex items-center gap-3">
              {item.name === "Favourites" ? (
                <StarIcon />
              ) : item.name === "Dashboard" ? (
                <HomeIcon />
              ) : (
                <UpdateIcon />
              )}
              {item.name}
            </h1>
            <div>
              {item.items?.map((childItem, idx) => (
                <div
                  key={childItem}
                  className={
                    idx === 0
                      ? "font-semibold px-4 my-7 capitalize py-2 rounded bg-[#a75827] text-center w-full"
                      : "font-semibold px-3 my-7 capitalize"
                  }
                >
                  {childItem}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        {menuItems2.map((item) => (
          <div key={item} className="font-bold my-7 flex gap-3 items-center">
            {item.name === "Settings" ? (
              <SettinsIcon />
            ) : item.name === "Recycle Bin" ? (
              <DeleteIcon />
            ) : (
              <LogoutIcon />
            )}
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
