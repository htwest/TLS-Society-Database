import TableItem from "./TableItem";

const Table = ({ list, loading, updateModal }) => {
  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>Institute</th>
          <th>Semester</th>
          <th>Position</th>
          <th>Type</th>
          <th>Contact</th>
          <th>Start Date</th>
          <th>Deadline</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {list
          ? list.map((item) => (
              <TableItem item={item} key={item.id} updateModal={updateModal} />
            ))
          : null}
      </tbody>
    </table>
  );
};

export default Table;
