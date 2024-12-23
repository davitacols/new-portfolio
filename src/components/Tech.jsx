import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-center p-8">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="flex justify-center items-center w-24 h-24 sm:w-28 sm:h-28 bg-transparent rounded-full border-2 border-gray-300 shadow-md transition-transform transform hover:scale-110 hover:shadow-xl cursor-pointer"
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
