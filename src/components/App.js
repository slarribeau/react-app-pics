import React from 'react';
import unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = {images: [] };

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params:{query: term},
        });
        this.setState({images: response.data.results});
    }

    /* async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params:{query: term},
            headers: {
                Authorization: 'Client-ID 0f4944d511713570f8578ef6b127964ab1018df030e19ec64f2ecca83f107abc'

            }
        });
        this.setState({images: response.data.results});
    } */

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
                <ImageList images={this.state.images}></ImageList>            
            </div>
        );
    }
}

export default App;         