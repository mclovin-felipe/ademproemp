"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (e: any) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("query", e.target.value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex flex-row items-center bg-card p-5 rounded-lg">
      <Input
        placeholder="Buscar"
        onChange={handleSearch}
        className="border h-10 rounded-r-none pr-2 bg-white focus:border-none"
      />
      <Button className="h-10 -ml-2 hover:bg-primary rounded-l-none">
        Buscar
      </Button>
    </div>
  );
};
export default Search;
