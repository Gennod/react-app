import "./app-info.css";

const AppInfo = ({employees}) => {

    let employeesLength = employees.length;
    let employeesIncrease = employees.filter(item => item.increase);
    let employeesIncreaseLength = employeesIncrease.length;

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employeesLength}</h2>
            <h2>Премию получат: {employeesIncreaseLength}</h2>
        </div>
    );
}

export default AppInfo;