import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <Header />
      <div className="Home-container">
        <>
          <h1 className="heading">
            Find The Job <br /> That Fits Your Life
          </h1>
          <p className="paragraph">
            Millions of people are searching for jobs, salary information,
            <br />
            company reviews. Find the job that fits your abilities and
            <br />
            potential.
          </p>
          <button className="find-job-button">Find Jobs</button>
        </>
      </div>
    </div>
  )
}
export default Home
