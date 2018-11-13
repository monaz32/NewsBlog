import React from 'react'
import styled from 'styled-components'
import ArticlesContainer from '../containers/ArticlesContainer'

const PageLayout = styled.div`
  background: #212121;
`

const PageHeading = styled.div`
  color: #F06292;
  padding: 1em;
  font-size: 1.5em;
  font-weight: bold;
`

const App = () => (
  <PageLayout>
    <PageHeading>News Blog</PageHeading>
		<hr/>
    <ArticlesContainer />
  </PageLayout>
)

export default App