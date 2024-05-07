import { Link } from "react-router-dom";
import './LandingPage.css'; // Corrected import statement

const LandingPage = () => {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center mb-4 shadow-md bg-yellow-200 text-yellow-800">Squirrel Scouts of Central Park</h2>
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500"></div>
        <div className="bg-blue-500 rounded-lg p-4 text-white speech-bubble">
          <h3 className="text-lg">Hi there! I'm Rosie, a squirrel scout. After a busy day selling cookies, my friends and I got chased by a big dog. Now I can't find them. Can you help me find my friends?</h3>
        </div>
      </div>
      <Link to="/question1" className="block mt-4 text-center bg-green-500 py-2 px-4 rounded-lg text-white ">Let's go!</Link>
      <div>
        <img src="https://res.cloudinary.com/djg5i10dg/image/upload/v1715041848/rosie.png" alt="Rosie the squirrel" className="mx-auto py-20 h-180 mt-20" />
      </div>
    </div>
  );
};

export default LandingPage;
