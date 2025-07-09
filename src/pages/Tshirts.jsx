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
    price: "$35",
    image: "/images/T SARIT-front.png",
    },
    {
    name: "MICKY",
    price: "$35",
    image: "/images/T MICKY-front.png",
    },
    {
    name: "MSFIT",
    price: "$35",
    image: "/images/T MSFIT 2.0-front.png",
    },
    {
    name: "NARKOMANIT",
    price: "$35",
    image: "/images/T NARKOMANIT-front.png",
    },
    {
    name: "LAG BAOMER",
    price: "$35",
    image: "/images/T LAG BAOMER-front.png",
    },
    {
    name: "FALAFEL",
    price: "$35",
    image: "/images/T FALAFEL-front.png",
    },
    {
    name: "SHAWARMA",
    price: "$35",
    image: "/images/T SHAWARMA-front.png",
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
                <a 
                href="https://ig.me/m/pudabeats" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-1 px-2 py-1 border border-black bg-gray-300 hover:bg-gray-400 inline-block text-center cursor-pointer"
                style={{ 
                    textDecoration: 'none', 
                    color: 'black',
                    backgroundColor: '#d1d5db' // This forces the gray-300 color
                }}
                >
                Add to Cart
                </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
