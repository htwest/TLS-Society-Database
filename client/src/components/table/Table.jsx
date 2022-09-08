import TableItem from "./TableItem";

const Table = ({ list }) => {
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
          ? list.map((item) => <TableItem item={item} key={item.id} />)
          : null}
      </tbody>
    </table>
  );
};

export default Table;
