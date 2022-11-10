import { FaSearch } from "react-icons/fa";
import { useSetAtom } from "jotai";
import { searchTextAtom } from "./atoms";

function SearchBox() {
  const setSearchText = useSetAtom(searchTextAtom);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="mt-5 relative">
      <input
        onChange={handleChange}
        placeholder="Enter a search term"
        className="px-5 py-3 border-gray-400 border rounded w-full"
      />

      <FaSearch
        className="absolute top-3.5 right-3.5 text-gray-400"
        size={20}
      />
    </div>
  );
}

export default SearchBox;
