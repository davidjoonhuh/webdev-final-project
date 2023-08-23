import React from "react";
import "./index.css";

const HomeScreen = () => {
  const favoriteVideoEmbedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oTwkYW0EGbc?si=5OFFbTXS4KgTuiWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  return (
      <div>
        <h4>🏠Home🏠</h4>
        <h4>🎉Welcome to our website🎉</h4>
        <div className="team-members">
          <h2>📋Yonbox team members:</h2>
          <ul>
            <li>Jinhyun Hwang</li>
            <li>David Huh</li>
            <li>Timothy DeLeo</li>
            <li>Jiawei Zhou</li>
          </ul>
        </div>
        <div className="favorite-video">
          <div className="video-container">
            <h2>Most User's Favorite Video:</h2>
            <div
                className="video-embed"
                dangerouslySetInnerHTML={{ __html: favoriteVideoEmbedCode }}
            />
            <div className="video-comments">
              <h3>Comments:</h3>
              <ul>
                <li>Alice Wonderland: "That's so great! I want to go northeastern!"</li>
                <li>Bob Marley: "Northeastern is wonderful!"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomeScreen;
