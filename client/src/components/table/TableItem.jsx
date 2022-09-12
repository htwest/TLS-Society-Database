const TableItem = ({ item, updateModal }) => {
  return (
    <tr>
      <td data-heading="Institute">{item.name}</td>
      <td data-heading="Semester">{item.semester}</td>
      <td data-heading="Position">{item.position}</td>
      <td data-heading="Type">{item.type}</td>
      <td data-heading="Contact">{item.poc_name}</td>
      <td data-heading="Start Date">{item.app_open}</td>
      <td data-heading="Deadline">{item.app_deadline}</td>
      <td data-heading="Description">
        <button
          className="description-button"
          onClick={() => {
            updateModal(item);
          }}
        >
          Open
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
