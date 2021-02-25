import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const App = ( { saludo } ) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>mi primer</p>
        </>
    )
}

App.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default App