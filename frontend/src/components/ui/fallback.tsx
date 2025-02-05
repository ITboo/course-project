import { Button } from "./button";

const FallbackComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong 😔</h1>
        <p className="text-md mb-4">
        Unfortunately, an error has occurred.<br/> Please, try reloading the page or come back later.
        </p>
        <Button onClick={() => window.location.reload()} className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition-colors">Reload</Button>
      </div>
    </div>
  );
};

export default FallbackComponent;