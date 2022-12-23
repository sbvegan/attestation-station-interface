/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled from 'styled-components'
import tooltip from '../../assets/svg/tooltip.svg'

const TooltipIcon = styled.img`
  cursor: pointer;
  height: 12px;
`

const TooltipBox = styled.div`
  text-align: left;
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
`

const TooltipContainer = styled.span`
  & ${TooltipIcon}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 404px;
    padding: 8px 8px;
    border-radius: 4px;
  }
`

const Tooltip = (props) => {
  const [hover, setHover] = useState(false)

  return (
    <TooltipContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
        <TooltipIcon
            src={tooltip}
            alt="informational tooltip, hovering displays more information"
            hover={hover}
        />
        <TooltipBox>
            {props.children}
        </TooltipBox>
    </TooltipContainer>)
}

export default Tooltip
