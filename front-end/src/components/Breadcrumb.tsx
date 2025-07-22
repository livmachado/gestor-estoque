//Icon
import { PiGreaterThanLight } from "react-icons/pi";
import { CiHome } from "react-icons/ci";

type BreadCrumbProps = {
  value: string;
};

export default function Breadcrumb({ value }: BreadCrumbProps) {
  return (
    <div className="flex items-center justify-start gap-2.5">
      <CiHome size={20} className=" text-gray-500" />
      <PiGreaterThanLight size={16} className="text-gray-500" />
      <span className=" text-gray-500 text-base font-medium ">{value}</span>
      <PiGreaterThanLight size={16} className="text-gray-500" />
      <hr className="my-4 border-t border-gray-300" />
    </div>
  );
}
