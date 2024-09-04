import { useNavigate } from 'react-router-dom';

const ComicNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4">
      <button
        className="px-6 py-3 text-lg font-bold text-white rounded-lg border-2 border-black bg-gradient-to-b from-yellow-400 to-orange-600 shadow-md hover:shadow-lg transition-colors font-pixel animate-fade-in"
        onClick={() => navigate('/')}
      >
        Back
      </button>

      <button
        className="px-6 py-3 text-lg font-bold text-white rounded-lg border-2 border-black bg-gradient-to-b from-yellow-400 to-orange-600 shadow-md hover:shadow-lg transition-colors font-pixel animate-fade-in"
        onClick={() => navigate('/skip')}
      >
        Skip
      </button>

      <button
        className="px-6 py-3 text-lg font-bold text-white rounded-lg border-2 border-black bg-gradient-to-b from-yellow-400 to-orange-600 shadow-md hover:shadow-lg transition-colors font-pixel animate-fade-in"
        onClick={() => navigate('/next')}
      >
        Next
      </button>
    </div>
  );
};

export default ComicNavbar;