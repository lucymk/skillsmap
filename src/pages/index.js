import * as React from "react"
import { Link } from 'gatsby'


const IndexPage = () => {
    return (
        <main>
            <h1>Home Page</h1>
            <Link to="/skillsmapSearch">Skillsmap Search</Link><br/>
            <Link to="/forLearners">For Learners</Link><br/>
            <Link to="/forEducators">For Educators</Link><br/>
            <Link to="/forCareersProfessionals">For Careers Professionals</Link><br/>
            <Link to="/about">About</Link><br/>
            <p>Text...</p>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
