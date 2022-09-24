import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About💀
          </p>
        </div>

        <p className="text-xl mt-20">
        HI!! Iam Vikki👻. A Small boy with a Big Dream. I studied CBSE till my 10th Grade.
        Then i decide to Take the Computer science Group which have more Adventurous 
        it developing day by day. I changed to Matric School Started learning Python Programing language
        Its make more interesting in daily life.        </p>

        <br/>

        <p className="text-xl">
         Later, moved to Higher studies in <strong>"Velammal Institute of Technology"</strong>
         for <strong>BE CSE.😎</strong> Started learning many things & meeting  Different types of people in my Life.
         <hr></hr>
         Short Time Goal : <strong>A Full Stack Developer</strong>
         <hr></hr>
         Long Time Goal : <strong> TO be a Pro in BlockChain</strong>
         <hr></hr>
         Hobbies: <strong>
          <ul>
            <li>Watching movies</li>
            <li>Editing</li>
          </ul>
         </strong>
         <hr></hr>

        </p>
      </div>
    </div>
  );
};

export default About;
