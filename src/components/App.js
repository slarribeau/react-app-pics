import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term) {
        console.log("onSearchSubmit")
        console.log(term)
        console.log("onSearchSubmit")

        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params:{query: term},
            headers: {
                Authorization: 'Client-ID 0f4944d511713570f8578ef6b127964ab1018df030e19ec64f2ecca83f107abc'

            }
        });
        console.log(response.data.results);
    }

    /*class App extends React.Component {
        onSearchSubmit(term) {
            console.log("onSearchSubmit")
            console.log(term)
            console.log("onSearchSubmit")
    
            axios.get('https://api.unsplash.com/search/photos', {
                params:{query: term},
                headers: {
                    Authorization: 'Client-ID 0f4944d511713570f8578ef6b127964ab1018df030e19ec64f2ecca83f107abc'
    
                }
            })
            .then(response => {
                console.log(response.data.results);
            });
        }*/

    render() {
        return (
            <div className= "ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;