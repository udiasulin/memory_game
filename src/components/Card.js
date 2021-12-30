import React from "react";


class Card extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return this.props.data.heroes.map(data => {
            return (

                <div className="card text-white" key={data.id} onClick={(event) => this.props.guess(event, data)}>
                    <img className="card-img" src={data.image} alt="Card" />
                    <div className="card-img-overlay">
                        <p className="card-text h5" value={data.name}>Name:{data.name}</p>
                        <p className="card-text h5">Occapution:{data.occupation}</p>
                    </div>
                </div>

            )
        })


    }
}


export default Card