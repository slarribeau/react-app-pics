import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log("event.target.value a")
    }

    onInputClick() {
        console.log("Input was clicked")
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            onClick={this.onInputClick} 
                            //onChange={this.onInputChange}
                            onChange={(e) => console.log(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;