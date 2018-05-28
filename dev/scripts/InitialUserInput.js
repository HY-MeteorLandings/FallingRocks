import React from 'react';

class InitialUserInput extends React.Component {
    render() {
        return(
         <div className="initialUserInput">
            <img src="public/assets/meteorIcon.png" alt="Meteor Icon"/>

            <div className="title">
                <h1>AstroAtlas</h1>
                <p>explore global meteor landings through history</p>
            </div>
            <ul className="form">
                <form onSubmit={this.props.handleSubmit}>
                <li className="styleSelect slate">
                    <select name="year" id="year" onChange={this.props.handleChange} >
                    {this.props.yearOptions.map( (year, index) => {
                        return year ? <option value={year} key={index}>{year}</option> : null;
                    })}
                    </select>
                </li>    
                <li>
                    <label htmlFor="year">Year</label>
                </li>                                       
                <input type="submit" value="Submit"/>       
             </form>
            </ ul>
         </div>
        )
    }
}

export default InitialUserInput;