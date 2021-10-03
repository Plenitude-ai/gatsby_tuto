import * as React from 'react'
import Greeting from '../components/greetings'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// const AboutPage = () => {
//   return(<main>
//           <title>About</title>
//           <h1>About me !</h1>
//           <p> Bonoir !</p>
//           <div><Greeting name="Megan"/></div>
//           <Link to="/">Home</Link>
//         </main>)
// }


const AboutPage = () => {
  return( <Layout pageTitle="About Me">
            <h1>About Me : </h1>
            <p>lorem ipsum dolor sit amet</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>lorem ipsum dolor sit amet</p>
            <p>lorem ipsum dolor sit amet</p>
            <Greeting name="Bouffon"/>
          </Layout>
  )
}



export default AboutPage