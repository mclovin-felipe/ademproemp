import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="w-full bg-primary/5 p-5 flex flex-row rounded-lg ">
      <Input className="h-14 bg-primary/10" placeholder="Buscar" />
      <Button className="h-14 -ml-3">
        <Search color="white" />
      </Button>
    </div>
  );
};
export default SearchBox;
