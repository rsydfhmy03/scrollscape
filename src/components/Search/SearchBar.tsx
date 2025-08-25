import { useState, useEffect } from 'react';
import { useImageStore } from '../../store/store';
import { useDebounce } from '../../hooks/useDebounce';
import { Search, X } from 'lucide-react';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, searchImagesByTerm, clearSearch } = useImageStore();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const debouncedSearchTerm = useDebounce(localSearchTerm, 500); // Jeda 500ms

  // Efek ini akan berjalan saat nilai debounced berubah
    useEffect(() => {
    setSearchTerm(debouncedSearchTerm);
    if (debouncedSearchTerm) {
        searchImagesByTerm(); 
    } else {
        clearSearch();
    }
    }, [debouncedSearchTerm, setSearchTerm, searchImagesByTerm, clearSearch]);

  const handleClear = () => {
    setLocalSearchTerm('');
  };

  return (
    <div className="relative w-full max-w-xs">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-light-slate/50" size={18} />
      <input
        type="text"
        placeholder="Search assets..."
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        className="w-full pl-10 pr-10 py-2 rounded-md bg-white/10 border border-neon-cyan/20 text-light-slate focus:ring-2 focus:ring-neon-cyan focus:outline-none transition-all"
      />
      {localSearchTerm && (
        <button onClick={handleClear} className="absolute right-3 top-1/2 -translate-y-1/2 text-light-slate/50 hover:text-white">
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;