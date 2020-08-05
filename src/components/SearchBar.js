import React from 'react';

const SearchBar = props => {

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={props.fetchWeather}>
                <div>
                    <label> Search </label>
                    <input
                        type="text"
                        placeholder="city"
                        name="city"
                    />
                </div>
            </form>
        </div>
    );
}


export default SearchBar;

// onSubmit={this.onFormSubmit} deleted prop from form 

// onFormSubmit = event => {
    //     event.preventDefault();
    //     this.props.onSubmit(props.onSubmit(event));
    // };


    // const onFormSubmit = event => {
    //     event.preventDefault();
    //     props.setLocation()

    // }