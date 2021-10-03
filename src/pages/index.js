import * as React from 'react'
import Layout from '../components/layout'
import Greeting from '../components/greetings'
import { StaticImage } from 'gatsby-plugin-image'

// const IndexPage = () => {
//   return(<main>
//           <title>Titre de la page !</title>
//           <h1>Cecio est un header de till 1 !</h1>
//           <p>lorem ipsum dolor sit amet</p>
//           <Link to="/about">About</Link>
//         </main>
//   )
// }


const IndexPage = () => {
  return( <Layout pageTitle="Home">
            <p>lorem ipsum dolor sit amet</p>
            <Greeting name="Champion"/>
            <StaticImage
              // src="https://media.istockphoto.com/photos/womans-hands-on-the-keyboard-of-the-piano-in-night-picture-id494762400?k=20&m=494762400&s=612x612&w=0&h=zKZsErcZtmB2epiTFyxIHeppwlKApLu-dL_lVMsOnWQ="
              alt="piano photo"
              src="../images/piano.jpg"
            />
          </Layout>
  )
}
export default IndexPage