const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-200 border-t-gray-300 border-b-gray-300"></div>
        <div className="text-center ml-5">
          <p className="text-gray-500 text-4xl">Cargando ...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
