import React from 'react'
import PagesBanner from '../PagesBanner'
import ToureForm from '../Tour/ToureForm'
import ListGrid from '../Tour/ListGrid'

const ToureListPage = () => {
  return (
    <>
        <PagesBanner title='Tours List'/>
        <ToureForm/>
        <ListGrid/>

    </>
  )
}

export default ToureListPage