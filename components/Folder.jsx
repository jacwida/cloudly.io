import { DotsIcon, FolderIcon } from "./Icons";

const Folder = () => {
  const files = [
    { name: "Mobile App", files: 120 },
    { name: "Illustration", files: 240 },
    { name: "Web Design", files: 360 },
    { name: "Animation", files: 480 },
  ];
  return (
    <div className="my-3 flex gap-4">
      {files.map((file, idx) => (
        <div
          key={file}
          className={
            idx % 2 === 1
              ? "flex-1 bg-rose-200 py-3 rounded-2xl  "
              : "flex-1 bg-sky-100 py-3 rounded-2xl  "
          }
        >
          <div className="flex justify-between px-4 items-center">
            <div className="bg-white h-[50px] w-[50px] rounded-[200px] p-2 text-center flex items-center justify-center">
              <FolderIcon />
            </div>
            <h1 className="ml-auto text-gray-700">
              <DotsIcon />
            </h1>
          </div>
          <h1 className="text-gray-700 mt-4 font-semibold px-4">{file.name}</h1>
          <h1 className="font-bold text-xl my-2 px-4">{file.files} Files</h1>
        </div>
      ))}
    </div>
  );
};

export default Folder;
