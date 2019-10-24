import React, { useState } from "react";
import { connect } from 'react-redux';
import { fetchData } from '../actions/fetch';



const Home = (props) => {
    const handleClick = (e) => {
        props.fetchData();
    }
    return (
        <div className="homeWrapper">
            <h1 className="homeH1">The Random Kanye Quote Generator</h1>
            <button className="homeButton" onClick={handleClick}>Get a random quote!</button>
            {props.loading ? <div className="spinner" /> : <h2 className="homeQuote">{props.quote}</h2> }
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
