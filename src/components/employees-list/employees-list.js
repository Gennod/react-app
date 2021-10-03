import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp, onSalaryChange }) => {
    const elements = data.map((employeer) => {
        const { id, ...employeerProps } = employeer;

        return (
            <EmployeesListItem
                onSalaryChange={(e) => onSalaryChange(id, e.currentTarget.value)}
                onDelete={() => onDelete(id)}
                key={id}
                {...employeerProps}
                onToggleProp={(e) =>
                    onToggleProp(
                        id,
                        e.currentTarget.getAttribute("data-toggle")
                    )
                }
            />
        );
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
