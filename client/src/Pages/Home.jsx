import React from 'react';
import analysis from "../assets/Images/analysis.png";
import scalable from "../assets/Images/scalable.png";
import interfaceImage from "../assets/Images/interface.png";
import GradientText from '../Componets/GradientText.jsx';
import SplitText from '../Componets/SplitText.jsx';
import { Link, Navigate } from 'react-router-dom';



const HomePage = () => {
  

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-purple-700  text-white py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold p-6 animate-fade-in">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
          Unlock Insights, Amplify Performance
          </GradientText>
          
          </h2>
          <p className="text-lg mb-6">
            Real-time social media analytics made simple with LangFlow and DataStax.
          </p>
          <button className="bg-white text-blue-500 px-6 py-3 font-bold rounded-md hover:bg-gray-100 transition duration-300 animate-bounce"
          >
            <Link to={"/chat"}>
               Get Started
            </Link>
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white flex flex-col items-center justify-center shadow-md p-6 rounded-md hover:shadow-2xl hover:scale-105 transition gap-4 duration-300">
              <img className='w-48' src={analysis} alt="analisis" />
              <h4 className="text-xl font-bold mb-4">Real-Time Analysis</h4>
              <p>
                Gain instant insights on social media performance with LangFlow-powered workflows.
              </p>
            </div >
            <div className="bg-white flex flex-col items-center justify-center shadow-md p-6 rounded-md hover:shadow-2xl hover:scale-105 transition gap-4 duration-300">
              <img className='w-48' src={scalable} alt="scalable" />
              <h4 className="text-xl font-bold mb-4">Data Scalability</h4>
              <p>
                Handle growing datasets seamlessly with the power of DataStax Astra DB.
              </p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center shadow-md p-6 rounded-md hover:shadow-2xl hover:scale-105 duration-300">
              <img className='w-48' src={interfaceImage} alt="interface" />
              <h4 className="text-xl font-bold mb-4">Intuitive Interface</h4>
              <p>
                Analyze and compare social media metrics with ease using our user-friendly design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            <SplitText
            text="About Insightify"
            className="text-2xl font-semibold text-center"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            />
          </h3>
          <p className="max-w-2xl mx-auto">
            Insightify is a MERN-based analytics module that empowers users to unlock the full
            potential of their social media data. With robust backend integration, real-time
            insights, and an intuitive frontend, gh transforms raw data into actionable
            results.
          </p>
        </div>
      </section>
  
    </div>
  );
};

export default HomePage;

 