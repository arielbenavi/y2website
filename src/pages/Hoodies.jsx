import { useNavigate } from "react-router-dom";

const hoodies = [
  {
    name: "ELITE 2.0",
    price: "$60",
    image: "/images/ELITE2-front.png",
  },
  {
    name: "RAFUL BOYZ",
    price: "$65",
    image: "/images/RAFUL_BOYZ-front.png",
  },
  {
    name: "TOP DOGS",
    price: "$55",
    image: "/images/TOP_DOGS-front.png",
  },
  {
    name: "???",
    price: "$60",
    image: "/images/qqqmark-front.png",
  },
  {
    name: "АДИДАС",
    price: "$60",
    image: "/images/АДИДАС-front.png",
  },
];

export default function Hoodies() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex items-center justify-center"
      style={{ backgroundImage: "url('/hoodie-bg.jpg')" }}
    >
      <div className="w-[700px] bg-gray-200 border border-black shadow-lg">
        {/* Title Bar */}
        <div className="flex justify-between items-center bg-blue-700 text-white px-3 py-1 text-sm">
          <span>🧥 HOODIES</span>
          <button
            className="bg-red-500 text-black w-5 h-5 border border-black"
            onClick={() => navigate("/")}
          >
            X
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white text-black text-sm">
          {hoodies.map((hoodie, i) => (
            <div key={i} className="border border-gray-500 p-2 bg-gray-100">
              <img
                src={hoodie.image}
                alt={hoodie.name}
                className="w-full h-40 object-cover border border-black mb-2"
              />
              <p className="font-bold">{hoodie.name}</p>
              <p>{hoodie.price}</p>
              <button className="mt-1 px-2 py-1 border border-black bg-gray-300 hover:bg-gray-400">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
