import React from 'react';


class AddNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], title: '' };
        this.saveRecipe = this.saveRecipe.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    saveRecipe(e) {
        e.preventDefault();
        const newRecipe = {
            title: this.state.title,
            incredients: this.state.incredients,
            directions: this.state.directions,
            reflink: this.state.reflink,
            id: Date.now(),
            date: (new Date()).toLocaleString()
        }

        this.setState(state => ({
            items: state.items.concat(newRecipe),
            title: ''
        }));
    }

    handleChange(e) {
        let key = e.target.name;
        let val = e.target.value;
        this.setState({ [key]: val });
    }

    render() {
        return (
            <div>
                <RecipeList items={this.state.items}></RecipeList>
                <form onSubmit={this.saveRecipe}>
                    <ul>
                        <li>
                            <label htmlFor="title">Title </label>
                            <input id="title" name="title"
                                onChange={this.handleChange}
                                value={this.state.title} />
                        </li>
                        <li>
                            <label htmlFor="incredients">Incredients </label>
                            <textarea id="incredients" name="incredients"
                                onChange={this.handleChange}
                                value={this.state.incredients}></textarea>
                        </li>
                        <li>
                            <label htmlFor="directions">Directions </label>
                            <textarea id="directions" name="directions"
                                onChange={this.handleChange}
                                value={this.state.directions}></textarea>
                        </li>
                        <li>
                            <label htmlFor="reflink">Link </label>
                            <input id="reflink" name="reflink"
                                onChange={this.handleChange}
                                value={this.state.reflink} />
                        </li>
                        <li>
                            <button>SAVE</button>
                        </li>
                    </ul>
                </form>
            </div>
        )
    };
}

class RecipeList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>
                        <div className="card">
                            <img src={item.reflink} alt={item.title}></img>
                            <div className="container">
                                <h4><b>{item.title}</b></h4>
                                <p>{item.date}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default AddNew;