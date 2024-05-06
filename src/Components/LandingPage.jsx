import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
  <div>
  <div><h2>Squirrel Scouts of Central Park</h2></div>
    <div><h3>Hi friend! My name is Rosie and I am a squirrel scout. After a day of selling cookies, my friends and I got chased by a big dog. Now I can't find them. Can you help me find my friends?</h3></div>
    <Link to="/question1">Let's go</Link>
  </div>
  )
};

export default LandingPage;
