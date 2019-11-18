import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import DashboardNav from '../../components/dasboard-nav-component/dashboard-nav-component'
import SideNav from '../../components/side-nav-component/side-nav-component'
import WithSpinner from '../../components/with-spinner/withspinner-hoc'
import { Wrapper, Content, Bottom, Top, Side } from './agent-dashboard-styles'


const AgentDashboard = props => {
    return (
        <Wrapper>
            <Top>
                <DashboardNav />
            </Top>

            <Bottom>
                <Side>
                    <SideNav>
                        <ul>
                            <li>Listings</li>
                            <li>Settings</li>
                        </ul>
                    </SideNav>
                </Side>

                <Content>
                    {props.children}
                </Content>
            </Bottom>
        </Wrapper>

    )
}

const mapStateToProps = state => ({
    isLoading: state.user.gettingUser
})

export default compose(connect(mapStateToProps), WithSpinner)(AgentDashboard)