import Image from "next/image";
import { DropDownIcon, IconUnk, NotificationIcon } from "./Icons";

export default function Profile() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-white p-3 rounded-[200px]">
        <IconUnk />
      </div>
      <div className="bg-white p-3 rounded-[200px]">
        <NotificationIcon />
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-white p-3 rounded-[200px] relative h-[60px] w-[60px]">
          <Image src="/profile.jpg" fill alt="" className="rounded-[200px]" />
        </div>
        <DropDownIcon />
      </div>
    </div>
  );
}
