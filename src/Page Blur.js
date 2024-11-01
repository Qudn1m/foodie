import React, { useEffect, useState } from "react";
import disgus from './Component/Disqus';
import "./App.css"; // Add your styles here or in an imported CSS file

function PageBlur() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`App ${isLoading ? "blurred" : ""}`}>
      {isLoading && (
        <div className="loading_overlay">
          <p>Loading... Please Wait</p>
        </div>
      )}
      {/* Your page content */}
      <h1>Welcome to the Site</h1>
      <button>Click Me</button>
      <disgus/>
    </div>
  );
}

export default PageBlur;
