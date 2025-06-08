import under_construction from '../assets/logo/under_construction.jpg';

export default function Body() {
  return (
    <div className="p-6 text-center">
      <img
        src={under_construction}
        alt="Under Construction"
        className="mx-auto w-64 sm:w-80 md:w-96 h-auto"
      />
    </div>
  );
}
