import { Component } from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
    state = {
        data: [
            {
                name: "Maxim Vinicky",
                salary: 800,
                increase: false,
                isLike: false,
                id: 1,
            },
            {
                name: "Danila Kalosha",
                salary: 1000,
                increase: false,
                isLike: false,
                id: 2,
            },
            {
                name: "Pavel Martynov",
                salary: 100,
                increase: false,
                isLike: false,
                id: 3,
            },
            {
                name: "Ivan Blednov",
                salary: 5000,
                increase: true,
                isLike: true,
                id: 4,
            },
        ],
        term: "",
        filter: "all",
    };
    maxId = 5;

    onItemDelete = (id) => {
        this.setState(({ data }) => ({
            data: data.filter((item) => item.id !== id),
        }));
    };

    onItemAdd = (name, salary) => {
        let newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            let newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    onToggleInput = (items, term) => {
        if (this.state.term.length === 0) {
            return items;
        }

        return items.filter((item) => item.name.indexOf(term) > -1);
    };

    onChangeTerm = (term) => {
        this.setState({ term });
    };

    onFilter = (items, filter) => {
        switch (filter) {
            case "all":
                return items;
            case "increase":
                return items.filter((item) => item.increase);
            case "rich":
                return items.filter((item) => item.salary > 1000);
        }
    };

    onFilterUpdate = (filter) => {
        this.setState({ filter });
    };

    onSalaryChange = (id, salary) => {
        salary = salary.slice(0, salary.length - 1);
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, salary };
                }
                return item;
            }),
        }));
    };

    render() {
        let { data, term, filter } = this.state;

        let visibleData = this.onFilter(
            this.onToggleInput(data, term),
            this.state.filter
        );

        return (
            <div className="App">
                <AppInfo employees={data} />

                <div className="search-panel">
                    <SearchPanel onChangeTerm={this.onChangeTerm} />
                    <AppFilter
                        filter={filter}
                        onFilterUpdate={this.onFilterUpdate}
                    />
                </div>

                <EmployeesList
                    onSalaryChange={this.onSalaryChange}
                    onToggleProp={this.onToggleProp}
                    onDelete={this.onItemDelete}
                    data={visibleData}
                />

                <EmployeesAddForm onAdd={this.onItemAdd} />
            </div>
        );
    }
}

export default App;
