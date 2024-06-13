import React from 'react'
import PagesBanner from '../PagesBanner'
import BlogList from '../Blog/BlogList'

const BlogListPage = () => {
  return (
    <>
    <PagesBanner title="Blog List"/>
    <BlogList itemsPerPage={4}/>
    
    </>
  )
}

export default BlogListPage