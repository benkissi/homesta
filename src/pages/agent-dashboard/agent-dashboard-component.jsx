import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import WithSpinner from '../../components/with-spinner/withspinner-hoc'


const AgentDashboard = () => {
    return (
        <div>
            Dashboard
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.user.gettingUser
})

export default compose(connect(mapStateToProps), WithSpinner)(AgentDashboard)