import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onToggleInput = (e) => {
        let term = e.target.value;

        this.setState({term});

        this.props.onChangeTerm(term);
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Find employeer..."
                value={this.state.term}
                onChange={this.onToggleInput}
            />
        );
    }
}

export default SearchPanel;
