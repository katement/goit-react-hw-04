const LoadMoreBtn = (setPage) => {
  return <button onClick={() => setPage((prev) => prev + 1)}>Load More</button>;
};

export default LoadMoreBtn;
