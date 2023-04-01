import CloudUsage from "./CloudUsage";
import { PlusIcon } from "./Icons";
import Folder from "./Folder";

const Files = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">My Cloud</h1>
          <p className="my-2 text-gray-500">Hi jac wida, Welcome back!</p>
        </div>
        <div>
          <button className="bg-[#ff8132] rounded-md px-4 py-2 font-bold text-white flex items-center gap-3">
            <PlusIcon /> Add
          </button>
        </div>
      </div>
      <div>
        <CloudUsage />
      </div>
      <div className="my-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Folders</h1>
          <h2 className="underline font-bold text-lg text-[#ff8132]">
            See More
          </h2>
        </div>
        <Folder />
      </div>
    </div>
  );
};

export default Files;
