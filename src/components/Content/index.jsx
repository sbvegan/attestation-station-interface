/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NewAttestation from '../NewAttestation'
import ReadAttestation from '../ReadAttesatation'
import About from '../About'

const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 36px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 8px -4px rgba(20, 23, 26, 0.12), 0px 4px 16px -1px rgba(20, 23, 26, 0.08);
  border-radius: 16px;
`

const Content = (props) => {
  const [content, setContent] = useState(<NewAttestation/>)

  useEffect(() => {
    switch (props.activeContent) {
      case 0:
        setContent(<NewAttestation />)
        break
      case 1:
        setContent(<ReadAttestation />)
        break
      case 2:
        setContent(<About />)
        break
      default:
        setContent(<div>How&apos;d you get here???</div>)
        break
    }
  }, [props.activeContent])

  return (
    <Page>
      <Section>
        {content}
      </Section>
    </Page>
  )
}

export default Content
