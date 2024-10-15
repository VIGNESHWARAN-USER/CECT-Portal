import { Link } from 'react-router-dom';

const Year = () => {
  const years = [1, 2, 3, 4];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {years.map((year) => (
        <div key={year} className="w-3/4 p-4 mt-6">
          <Link to={{ pathname: "/dept", search: `?year=${year}` }}>
            <div className="shadow-black text-red-800 font-medium hover:bg-red-800 hover:text-white hover:border-none p-6 rounded shadow flex justify-center items-center mb-10">
              <h2 className="text-lg font-bold">{year} year</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Year;
