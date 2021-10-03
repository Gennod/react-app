import "./employees-list-item.css";

const EmployeesListItem = (props) => {
    const {
        name,
        salary,
        onDelete,
        increase,
        isLike,
        onToggleProp,
        onSalaryChange,
    } = props;

    let classNames = "list-group-item d-flex justify-content-between";

    if (increase) {
        classNames += " increase";
    }
    if (isLike) {
        classNames += " like";
    }



    return (
        <li className={classNames}>
            <span
                data-toggle="isLike"
                onClick={onToggleProp}
                className="list-group-item-label"
            >
                {name}
            </span>
            <input
                value={`${salary}$`}
                onChange={onSalaryChange}
                type="text"
                className="list-group-item-input"
            />
            <div className="d-flex justfy-content-center align-items-center">
                <button
                    onClick={onToggleProp}
                    type="button"
                    className="btn-cookie btn-sm"
                    data-toggle="increase"
                >
                    <i className="fas fa-cookie"></i>
                </button>
                <button
                    onClick={onDelete}
                    type="button"
                    className="btn-trash btn-sm"
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;
