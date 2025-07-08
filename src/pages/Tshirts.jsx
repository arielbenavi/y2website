import { useNavigate } from "react-router-dom";

const tshirts = [
  {
    name: "NUN OF YOUR BUSINESS",
    price: "$35",
    image: "/images/T NUN OF YOUR BUSINESS-front.png",
  },
  {
    name: "PEPE",
    price: "$40",
    image: "/images/T PEPE-front.png",
  },
  {
    name: "SARIT",
    price: "$30",
    image: "/images/T SARIT-front.png",
  },
];

export default function Tshirts() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center p-8 flex items-center justify-center"
      style={{ backgroundImage: "url('/hoodie-bg.jpg')" }}
    >
      <div className="w-[700px] bg-gray-200 border border-black shadow-lg">
        {/* Title Bar */}
        <div className="flex justify-between items-center bg-blue-700 text-white px-3 py-1 text-sm">
          <span>👕 T-Shirts</span>
          <button
            className="bg-red-500 text-black w-5 h-5 border border-black"
            onClick={() => navigate("/")}
          >
            X
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white text-black text-sm">
          {tshirts.map((shirt, i) => (
            <div key={i} className="border border-gray-500 p-2 bg-gray-100">
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-40 object-cover border border-black mb-2"
              />
              <p className="font-bold">{shirt.name}</p>
              <p>{shirt.price}</p>
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
