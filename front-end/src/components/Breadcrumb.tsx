//Icon
import { PiGreaterThanLight } from "react-icons/pi";
import { CiHome } from "react-icons/ci";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

type BreadCrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadCrumbProps) {
  return (
    <nav className="flex items-center justify-start gap-2.5">
      <CiHome size={20} className=" text-gray-500" />
      <PiGreaterThanLight size={16} className="text-gray-500" />
      {items.map((item) => (
        <div className="flex items-center gap-2.5">
          {item.href ? (
            <a
              href={item.href}
              className=" text-gray-500 text-base font-medium hover:underline"
            >
              {item.label}
            </a>
          ) : (
            <span className=" text-gray-500 text-base font-medium hover:underline">
              {item.label}
            </span>
          )}
          <PiGreaterThanLight size={16} className="text-gray-500" />
        </div>
      ))}
    </nav>
  );
}
