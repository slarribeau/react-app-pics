import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log("event.target.value a")
    }
    state = { term: ''};
    onInputClick() {
        console.log("Input was clicked")
    }

    //onFormSubmit(event) {
    onFormSubmit = (event) => {

        event.preventDefault();
        this.props.onSubmit(this.state.term);
        console.log(this.state.term)
    }
    //<form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">

    render() {
        console.log("render");
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form"> 
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            onClick={this.onInputClick} 
                            //onChange={this.onInputChange}
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;