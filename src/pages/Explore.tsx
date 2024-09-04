import bg2 from '../assets/bg3.jpeg';
import ComicNavbar from '../components/ComicNavbar';

function Explore() {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <ComicNavbar />
      {/* Add more content for your comic story here */}
    </div>
  );
}

export default Explore;
