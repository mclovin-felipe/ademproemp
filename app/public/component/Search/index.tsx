import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div className="flex flex-row items-center bg-gray-100 p-5 rounded-lg">
      <Input
        placeholder="Buscar"
        className="border h-10 rounded-r-none pr-2 bg-white focus:border-none"
      />
      <Button className="h-10 -ml-2 hover:bg-primary rounded-l-none">
        Buscar
      </Button>
    </div>
  );
};
export default Search;
