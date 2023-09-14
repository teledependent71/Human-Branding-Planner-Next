import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Human Branding Planner</title>
          <meta
            property="og:title"
            content="test-page - Human Branding Planner"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_13qat) => (
            <>
              <h1>{context_13qat?.name}</h1>
            </>
          )}
          initialData={props.context13qatProp}
          persistDataDuringLoading={true}
          key={props?.context13qatProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context13qatProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        context13qatProp: context13qatProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
