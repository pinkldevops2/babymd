import '../../src/app/globals.css';
// components/HexagonGroup.jsx
const HexagonGroup = ({ className = '' }) => {
  return (
    <div className={`${className}`}>
    <div className="flex items-center gap-2 crossWidth">
      <svg
        width="50%"
        viewBox="0 0 15 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="first_hexagon"
      >
        <path
          d="M1.91808 5.48676L7.44793 2.50543L12.6997 5.56195L12.3097 11.5232L6.7799 14.5046L1.74954 11.4656L1.91808 5.48676Z"
          stroke="#5943A5"
          strokeWidth="3"
        />
      </svg>

      <svg
        width="50%"
        viewBox="0 0 15 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="second_hexagon"
      >
        <path
          d="M1.91808 5.48676L7.44793 2.50543L12.6997 5.56195L12.3097 11.5232L6.7799 14.5046L1.74954 11.4656L1.91808 5.48676Z"
          stroke="#ff9a6c"
          strokeWidth="3"
        />
      </svg>

      <svg
        width="35%"
        viewBox="0 0 15 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="third_hexagon"
      >
        <path
          d="M1.91808 5.48676L7.44793 2.50543L12.6997 5.56195L12.3097 11.5232L6.7799 14.5046L1.74954 11.4656L1.91808 5.48676Z"
          stroke="#ff9a6c"
          strokeWidth="3"
        />
      </svg>
    </div></div>
  );
};

export default HexagonGroup;