import * as React from 'react'
import Greeting from '../components/greetings'
import Layout from '../components/layout'


const AboutPage = () => {
  return( <Layout pageTitle="About Me">
            <p>lorem ipsum dolor sit amet</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>lorem ipsum dolor sit amet</p>
            <Greeting name="Bouffon"/>
          </Layout>
  )
}



export default AboutPage