import React from 'react';

class searchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {search: ''};
        this.search = this.search.bind(this);
        this.update = this.update.bind(this);
    }

    search(e) {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.search}`)
    }

    update(e) {
        this.setState({ search: e.target.value});
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default searchBar;