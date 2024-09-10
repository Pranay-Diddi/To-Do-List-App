import "../App.css";

const ListItems = ({ items, onBtnClick }) => {
  return (
    <ul className="list-group listgroup">
      {items.map((item, index) => (
        <li key={index} className="list-group-item listitem">
          {item.task} - {item.date}
          <button
            type="button"
            className="btn btn-danger btn-sm ms-3"
            onClick={() => onBtnClick(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
