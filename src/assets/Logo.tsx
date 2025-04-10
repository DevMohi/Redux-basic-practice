const Logo = () => 
    (
      <svg
        width="150"
        height="40"
        viewBox="0 0 150 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Icon part of the logo */}
        <rect x="0" y="0" width="40" height="40" rx="8" fill="#4F46E5" />
        <path
          d="M20 10L25 20L20 30L15 20L20 10Z"
          fill="white"
        />
  
        {/* Text part of the logo */}
        <text
          x="50"
          y="25"
          fill="#4F46E5"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          MyBrand
        </text>
      </svg>
    );


  export default Logo;