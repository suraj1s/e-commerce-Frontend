// import { UploadCloudIcon1 } from "@/assets/icons";
import React, { useState } from "react";

type Props = {
  className?: string;
  setFile?: any;
  backImage?: string;
};

const CustomeFileUpload = ({ className, setFile, backImage }: Props) => {
  const [image, setImage] = useState<any>(null);
  const [drag, setDrag] = useState(false);
  const allowedfiles = ["image/jpeg", "image/png", "image/jpg"];

  const handleImageChange = (event: any) => {
    const file = event?.target?.files[0];
    event.target.files &&
      allowedfiles.includes(file?.type) &&
      setFile(event.target.files);

    if (file) {
      const reader: any = new FileReader();

      reader.addEventListener("load", () => {
        setImage(reader.result);
      });

      reader.readAsDataURL(file);
    }
  };

  const dragoverhandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const drageleavehandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  return (
    <div
      className={`${className} flex w-full flex-col items-start rounded-xl border-[1px]   border-gray-200 px-6  py-4 `}
    >
      <div
        onDragOver={dragoverhandler}
        onDragLeave={drageleavehandler}
        className={` relative   w-full  overflow-hidden `}
      >
        <input
          onChange={handleImageChange}
          className=" absolute left-0 top-0 h-full w-full cursor-pointer opacity-0  "
          type="file"
          accept="image/*"
        />
        {(image || backImage) && image !== -1 ? (
          <div className=" h-full w-full overflow-hidden">
            {/* eslint-disable-next-line */}
            <img
              className="h-full w-full  object-contain"
              src={image ?? backImage}
              alt="image"
            />
          </div>
        ) : (
          <div
            className={`${
              drag && "bg-white"
            } font-euclid flex h-full flex-col items-center justify-center duration-300`}
          >
            <div className="mb-3">
              {/* <UploadCloudIcon1 /> */}
            </div>
            <div className=" mb-[4px]  ">
              <span className="pr-[5px] text-sm font-semibold text-brand-700 ">
                Click to Upload
              </span>
              <span className="  text-sm text-gray-500">or drag and drop</span>
            </div>
            <div className=" text-xs text-gray-500  ">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </div>
          </div>
        )}
      </div>
      {/* {!image && (
        <div className=" text-red-600 dark:text-red-400 font-medium text-sm font-euclid">
          No images selected
        </div>
      )} */}
    </div>
  );
};

export default CustomeFileUpload;
