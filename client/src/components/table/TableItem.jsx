import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const TableItem = ({ item, handleDescription, handleEdit, key, mod }) => {
  return (
    <tr>
      <td data-heading="Institute">{item.name}</td>
      <td data-heading="Semester">{item.semester}</td>
      <td data-heading="Position">{item.position}</td>
      <td data-heading="Type">{item.type}</td>
      <td data-heading="Start Date">{item.app_open}</td>
      <td data-heading="Deadline">{item.app_deadline}</td>
      <td data-heading="Description">
        <button
          className="description-button"
          onClick={() => {
            handleDescription(item);
          }}
        >
          Open
        </button>
      </td>
      {mod ? (
        <td data-heading="Edit">
          <a href="#!" onClick={() => handleEdit(item)}>
            <FontAwesomeIcon icon={faGear} className="icon" />
          </a>
        </td>
      ) : null}
    </tr>
  );
};

export default TableItem;
