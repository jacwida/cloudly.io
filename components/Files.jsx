import CloudUsage from "./CloudUsage";

const Files = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">My Cloud</h1>
          <p className="my-2 text-gray-500">Hi jac wida, Welcome back!</p>
        </div>
        <div>
          <button className="bg-[#ff8132] rounded-md px-4 py-2 font-bold text-white">
            + Add
          </button>
        </div>
      </div>
      <div>
        <CloudUsage />
      </div>
    </div>
  );
};

export default Files;
