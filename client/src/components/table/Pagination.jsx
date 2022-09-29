const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <a href="#!" onClick={() => paginate(pageNumbers[0])}>
            &#60;
          </a>
        </li>
        <li>...</li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#!"
              className="page-link"
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}
        <li>...</li>
        <li>
          <a
            href="#!"
            onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
          >
            &#62;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
