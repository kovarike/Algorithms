export function SearchResults() {
  return (
    <>
      <div id="fulltext-results-container" role="listbox">
        <div className="flex flex-col gap-2 text-white">
          <a
            href="#"
            role="option"
            aria-selected="false"
            className="p-2 hover:bg-gray-600 rounded-md"
          >
            <div className="font-bold">`zlib.unzipSync(buffer[, options])`</div>
            <div className="text-sm text-gray-400">
              docs &gt; v20.17.0 &gt; api &gt; zlib
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
