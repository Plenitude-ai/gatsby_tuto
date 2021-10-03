import * as React from 'react'
import Layout from '../components/layout'
import Greeting from '../components/greetings'

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
            <h1>Bienvenue !</h1>
            <p>lorem ipsum dolor sit amet</p>
            <Greeting name="Champion"/>
          </Layout>
  )
}
export default IndexPage