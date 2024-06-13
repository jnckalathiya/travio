import React from 'react'
import PagesBanner from '../PagesBanner'
import Contact from '../Contact/Contact'
import ContactForm from '../Contact/ContactForm'

const ContactPage = () => {
  return (
    <>
        <PagesBanner title="Contact Us"/>
        <Contact/>
        <ContactForm/>
    </>
  )
}

export default ContactPage