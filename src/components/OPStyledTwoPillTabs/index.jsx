/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { Body14 } from '../OPStyledTypography'

// todo: fix styling: text, padding
// todo: pass parameters for tabs

const TabContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 280px;
  height: 40px;
  background: #E2E8F0;
  border-radius: 100px;
`

const Tab = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 132px;
  height: 30px;
  background: #FFFFFF;
  box-shadow: ${({ active }) => active ? '0px 0px 8px rgba(20, 23, 26, 0.08), 0px 0px 4px rgba(20, 23, 26, 0.04)' : ''};
  border-radius: 100px;
  background-color: ${({ active }) => active ? '#FFFFFF' : 'inherit'};
  cursor: pointer;
`

const OPStyledTwoPillTabs = (props) => {
  return (
    <>
      <TabContainer>
        {props.tabs.map((tab, index) => (
          <Tab
            key={index}
            active={index === props.activeTab}
            onClick={() => {
              props.setActiveTab(index)
            }}
          >
            <Body14>{tab.label}</Body14>
          </Tab>
        ))}
      </TabContainer>
    </>
  )
}

export default OPStyledTwoPillTabs
