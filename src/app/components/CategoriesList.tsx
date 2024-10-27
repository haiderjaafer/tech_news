import {CategoriesData} from "@/data";
import Link from "next/link";

export default async function CategoriesList() {
    console.log(CategoriesData);

    return (
        <div className="flex gap-2 text-sm flex-wrap">
      {CategoriesData &&
        CategoriesData.map((category) => (
          <Link
            key={category.id}
            className="px-4 py-1 rounded-md bg-slate-800 text-white cursor-pointer"
            href={`/categories/${category.name}`}
          >
            {category.name}
          </Link>
        ))}
    </div>
    )
}