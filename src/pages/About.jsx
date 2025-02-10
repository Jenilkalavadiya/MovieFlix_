import React from "react";

const About = () => {
  return (
    <div className="about-container px-5">
      {/* <h1 className="text-center font-bold text-7xl">Welcome to MovieFlix</h1> */}

      <section className="about-content flex flex-col gap-8 mt-10">
        <h2 className="text-5xl ">About Us</h2>
        <p className="text-3xl">
          MovieFlix is your go-to platform for discovering and streaming the
          best movies and TV shows from around the world. Whether you're a fan
          of the latest blockbusters or a connoisseur of hidden gems, MovieFlix
          has something for everyone. We aim to provide an easy-to-use,
          personalized experience where you can enjoy seamless streaming
          anytime, anywhere.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to offer a comprehensive, user-friendly platform that
          gives movie lovers access to a wide variety of content, from all
          genres and countries. We strive to ensure that every user finds
          exactly what they're looking for, whether it’s trending titles or
          classic films. MovieFlix makes watching your favorite content simple
          and enjoyable.
        </p>
        <h2>Our Features</h2>
        <ul>
          <li>Stream high-quality movies and TV shows on-demand</li>
          <li>Personalized recommendations based on your viewing history</li>
          <li>Extensive movie database with detailed information</li>
          <li>Curated lists for easy discovery of new content</li>
          <li>Available across multiple devices (web, mobile, smart TVs)</li>
        </ul>
        <h2>Get In Touch</h2>
        <p>
          Have any questions or feedback? We're always happy to hear from our
          users. Feel free to reach out to us at
          <a href="mailto:support@movieflix.com"> support@movieflix.com</a>.
        </p>
      </section>
    </div>
  );
};

export default About;
