import React from 'react';

export default class SelectionEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: Object.keys(this.props.option)[0],
            value: 'none',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        this.props.handleSelect(this.state.key, e.target.value);
    }


    render() {
        return (
            <div id="selection">
                <label>
                    {this.state.key}
                </label>
                <span>
                    <div>
                        <select 
                            id ='optionSelect'
                            value={this.state.value} 
                            onChange={this.handleChange}>
                            {this.state.key === "quantity" ? 
                                '' : <option value="none" >Select an option</option>}
                            
                            {this.props.option[this.state.key].map((value) => 
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            )}
                        </select>
                    </div>
                </span>
                <div 
                    id="errorSelection" 
                    style={{display: 
                        (this.props.displayError && this.state.value === 'none') ? 
                        'block' : 'none'}}
                >Please select a {this.state.key}
                </div>
            </div>
        );
    }
}