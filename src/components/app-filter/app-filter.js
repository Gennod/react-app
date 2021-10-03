import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        { name: "all", label: "Все сотрудники" },
        { name: "increase", label: "На повышение" },
        { name: "rich", label: "З/П больше 1000$" },
    ];

    let changedButtons = buttonsData.map(({ name, label }) => {
        let filter = props.filter === name;

        let clazz = filter ? "btn-light" : "btn-outline-light";

        return (
            <button
                key={name}
                data-filter={name}
                onClick={() => props.onFilterUpdate(name)}
                className={`btn ${clazz}`}
            >
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {changedButtons}
        </div>
    );
};

export default AppFilter;
