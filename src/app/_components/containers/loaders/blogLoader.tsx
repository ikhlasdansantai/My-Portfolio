export default function BlogLoader() {
  return (
    <>
      <div className="blog__card__container grid grid-cols-1 sm:grid-cols-2 justify-between gap-8 gap-y-16">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <p className="animate-pulse py-6 bg-gray-400 rounded-lg "></p>
            <div className="tags flex space-x-2 mt-6">
              <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
              <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
              <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
