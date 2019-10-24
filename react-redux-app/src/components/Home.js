import React, { useState } from "react";
import { connect } from 'react-redux';
import { fetchData } from '../actions/fetch';



const Home = (props) => {
    const handleClick = (e) => {
        props.fetchData();
    }
    return (
        <div>
            <h1>The Random Kanye Quote Generator</h1>
            <button onClick={handleClick}>Get a random quote!</button>
            {props.loading ? <div className="spinner" /> : <h2>{props.quote}</h2> }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        quote: state.quote,
        err: state.err,
        loading: state.loading
    }
}
const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
