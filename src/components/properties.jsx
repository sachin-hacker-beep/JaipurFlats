
import Navigation from './navbar'
import Property from './property'
import Footer from './footer'

function Properties({ heading }) {
  return (
    <>
    <Navigation />
    <Property data={heading} />
    <Footer />
    </>
  )
}

export default Properties
