import React from 'react'
import { connect } from 'react-redux'

import Button from '../../../components/button-component/button-component'

const AgentListings = ({ agentLisitngs }) => {
    return (
        <div>
            {
                !agentLisitngs ?
                    <div>
                        <p>No listings yet. Add one</p>
                        <Button text="Add a property" bgColor="#69eed3" />
                    </div> :
                    <p>Listings</p>
            }

        </div>
    )
}

const mapStateToProps = state => ({
    agentLisitngs: state.agent
})

export default connect(mapStateToProps)(AgentListings)