import { ArrowIcon, DotsIcon, FolderIcon, ImageIcon, PlayIcon } from "./Icons";

const CloudUsage = () => {
  const files = [
    {
      name: "Documents",
      files: 640,
      usage: 24,
    },
    {
      name: "Images",
      files: 1250,
      usage: 32.5,
    },
    {
      name: "Audio",
      files: 870,
      usage: 42.5,
    },
  ];
  return (
    <div className="flex justify-between gap-8 mt-4">
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
              {file.name == "Documents" ? (
                <FolderIcon />
              ) : file.name == "Images" ? (
                <ImageIcon />
              ) : (
                <PlayIcon />
              )}
            </div>
            <h1 className="ml-auto text-gray-700">
              <DotsIcon />
            </h1>
          </div>
          <h1 className="text-gray-700 mt-4 font-semibold px-4">{file.name}</h1>
          <h1 className="font-bold text-xl my-2 px-4">{file.files} Files</h1>
          <div className="my-5 px-4">
            <div className="w-full h-[10px] bg-white rounded-full">
              <div
                className={`h-[10px] ${
                  idx == 0
                    ? "bg-[#7ca1ff]"
                    : idx == 1
                    ? "bg-[#ff7da0]"
                    : "bg-[#9878dd]"
                } rounded-full`}
                style={{ width: `${(file.usage * 100) / 50}% ` }}
              ></div>
            </div>

            <div className="flex items-center justify-between mt-2 text-gray-600">
              <h2>{file.usage} GB</h2>
              <h2>50 GB</h2>
            </div>
          </div>

          <div className="flex iems-center justify-between border-t border-gray-400 px-4 py-2">
            <div className="font-semibold">View</div>
            <div>
              <ArrowIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CloudUsage;
