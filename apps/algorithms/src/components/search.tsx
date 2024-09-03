"use client";
import { useEffect, useRef, useState } from "react";
import { Close } from "../../public/close";
import { SearchResults } from "./searchResults";

export const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // Cria uma referência para o input

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implementar lógica de busca aqui
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " ") {
        e.preventDefault();
        setIsVisible(true);
      } else if (e.key === "Escape") {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-0 z-20 flex items-center justify-center transition-opacity ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 w-full max-w-[520px]">
          <div className="flex items-center mb-4">
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-300 hover:text-gray-400 outline-none w-6"
            >
              <Close />
            </button>
          </div>
          <form
            onSubmit={handleSearch}
            className="flex mb-4 border-b-2 border-b-slate-700"
          >
            <input
              type="search"
              value={query}
              autoComplete="off"
              onChange={(e) => setQuery(e.target.value)}
              ref={inputRef}
              className="w-full p-3 border-none rounded-md bg-transparent outline-none"
              placeholder="Search..."
            />
          </form>

          <SearchResults />
        </div>
      </div>
    </div>
  );
};
