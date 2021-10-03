import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
        };
    }
    onValueChange = (e) => {

        let regExp;

        if (e.target.name === "name") {
            regExp = /\d/g;
        }
        if (e.target.name === "salary") {
            regExp = /\D/g;
        }

        this.setState({
            [e.target.name]: (e.target.value).replace(regExp, ''),
        });
    };

    render() {
        const { name, salary } = this.state,
            { onAdd } = this.props;

        return (
            
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input
                        value={name}
                        name="name"
                        onChange={this.onValueChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                    />
                    <input
                        value={salary}
                        name="salary"
                        onChange={this.onValueChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                    />

                    <button onClick={(e) => {
                        e.preventDefault();
                        onAdd(name, salary);
                    }} type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
