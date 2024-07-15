import React, { useEffect } from "react";

const RASeal = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "ra-embed-verified-seal";
    script.src = "https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js";
    script.setAttribute("data-id", "MTYwNTY6bmluamEtc29t");
    script.setAttribute("data-target", "ra-verified-seal");
    script.setAttribute("data-model", "1");

    // Append the script to the document body or head
    document.body.appendChild(script);

    // Clean up: remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const scriptTag = `
    <script
      type="text/javascript"
      id="ra-embed-verified-seal"
      src="https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js"
      data-id="MTYwNTY6bmluamEtc29t"
      data-target="ra-verified-seal"
      data-model="1"
    ></script>
  `;

  return (
    <div
      id="ra-verified-seal"
      style={{ marginLeft: 30 }}
      dangerouslySetInnerHTML={{ __html: scriptTag }}
    />
  );
};

export default RASeal;
