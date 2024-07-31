import React from "react";

function Icon({ colorMode }: { colorMode?: "dark" | "light" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 20 20"
      style={{
        filter: colorMode === "dark" ? "invert(1)" : "invert(0)",
      }}
    >
      <path
        fill="#000"
        d="M18.742 11.045a8.086 8.086 0 01-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.026 8.026 0 01-2.064-7.723A1 1 0 007.73.034a10.014 10.014 0 00-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.936 9.936 0 007.072 2.93 9.93 9.93 0 007.07-2.929 10.007 10.007 0 002.583-4.491 1 1 0 00-1.224-1.224zm-2.772 4.301a7.947 7.947 0 01-5.656 2.343 7.954 7.954 0 01-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 012.06-1.483 10.027 10.027 0 002.89 7.848 9.971 9.971 0 007.848 2.891 8.037 8.037 0 01-1.484 2.059z"
      ></path>
    </svg>
  );
}

export default Icon;
