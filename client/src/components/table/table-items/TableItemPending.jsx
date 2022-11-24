import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

// Redux
import { useSelector } from "react-redux";
import { add, remove } from "../../../redux/actions/pendingActions";

const TableItemPending = ({
  item,
  handleDescription,
  handleEdit,
  mod,
  tableForm,
}) => {
  // State
  const [checked, setChecked] = useState(false);

  // List of Selected Items by Id
  const pendingList = useSelector((state) => state.pending);

  const dispatch = useDispatch();

  // Checks if Item is already selected
  useEffect(() => {
    if (pendingList.indexOf(item.id) > -1) {
      setChecked(true);
    }
  }, [item.id, pendingList]);

  const handleCheck = () => {
    if (!checked) {
      dispatch(add(item.id));
    } else {
      dispatch(remove(item.id));
    }
    setChecked(!checked);
  };

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
      <td data-heading="Edit">
        <a href="#!" onClick={() => handleEdit(item)}>
          <FontAwesomeIcon icon={faGear} className="icon" />
        </a>
      </td>
      <td data-heading="Select">
        <div className="checkbox-container">
          <input
            type="checkbox"
            id={item.id}
            onChange={() => handleCheck()}
            checked={checked}
          />
          <label htmlFor={item.id}></label>
        </div>
      </td>
    </tr>
  );
};

export default TableItemPending;
