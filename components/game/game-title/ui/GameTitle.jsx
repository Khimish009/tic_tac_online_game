import Link from "next/link";
import { ArrayLeftIcon } from "../icons/ArrayLeftIcon";

export function GameTitle() {
  return (
    <div>
      <div className="pl-2">
        <Link
          href="#"
          className="flex items-center gap-2 text-teal-600 text-xs leading-tight -mb-0.5"
        >
          <ArrayLeftIcon />
          На главную
        </Link>
      </div>
    </div>
  );
}
