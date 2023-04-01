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
              ? "flex-1 bg-rose-200 p-3 rounded-2xl px-4 "
              : "flex-1 bg-sky-100 p-3 rounded-2xl px-4 "
          }
        >
          <div className="flex justify-between">
            <div className="bg-white h-[50px] w-[50px] rounded-[200px] p-2"></div>
            <h1 className="ml-auto">...</h1>
          </div>
          <h1 className="text-gray-700 mt-3 font-semibold">{file.name}</h1>
          <h1 className="font-bold text-2xl my-2">{file.files} Files</h1>
          <div className="my-5 w-[90%]">
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

            <div className="flex items-center justify-between mt-2">
              <h2>{file.usage} GB</h2>
              <h2>50 GB</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CloudUsage;
