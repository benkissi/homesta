import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import DashboardNav from '../../components/dasboard-nav-component/dashboard-nav-component'
import SideNav from '../../components/side-nav-component/side-nav-component'
import WithSpinner from '../../components/with-spinner/withspinner-hoc'
import { Wrapper, Content } from './agent-dashboard-styles'


const AgentDashboard = props => {
    return (
        <Wrapper>
            <DashboardNav />
            <SideNav>
                <ul>
                    <li>Listings</li>
                    <li>Propspects</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
            </SideNav>
            <Content>
                {props.children}
            </Content>
        </Wrapper>

    )
}

const mapStateToProps = state => ({
    isLoading: state.user.gettingUser
})

export default compose(connect(mapStateToProps), WithSpinner)(AgentDashboard)