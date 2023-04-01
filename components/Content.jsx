import Files from "./Files";
import Preview from "./Preview";
import Profile from "./Profile";
import Search from "./Search";

const ContentMain = () => {
  return (
    <div className="bg-[#f1eae3] w-full m-5 rounded-2xl px-5">
      <div className="flex items-center">
        <div className=" flex flex-1 h-fit ">
          <Search />
        </div>
        <div className="mx-3">
          <Profile />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="w-[70%]">
          <Files />
        </div>
        <div>
          <Preview />
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
