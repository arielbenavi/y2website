import { useNavigate } from "react-router-dom";

export default function Desktop() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center font-sans text-white relative"
      style={{
        backgroundImage: "url('/wallpaper.jpg')",
      }}
    >
      {/* T-Shirts Icon */}
      <div
        className="absolute flex flex-col items-center cursor-pointer hover:brightness-110"
        style={{ left: '110px', top: '260px' }}
        onClick={() => navigate("/tshirts")}
      >
        <img src="/icons/tshirt.png" alt="T-Shirts" className="w-24 h-24" />
        <span className="text-sm mt-2 text-black">T-Shirts</span>
      </div>

      {/* Hoodies Icon */}
      <div
        className="absolute flex flex-col items-center cursor-pointer hover:brightness-110"
        style={{ left: '120px', top: '400px' }}
        onClick={() => navigate("/hoodies")}
      >
        <img src="/icons/hoodie.png" alt="Hoodies" className="w-24 h-24" />
        <span className="text-sm mt-2 text-black">Hoodies</span>
      </div>

      {/* Message Warning Icon */}
      <div
        className="absolute flex flex-col items-center cursor-pointer hover:brightness-110"
        style={{ left: '250px', top: '240px' }}
        onClick={() => navigate("/warning")}
      >
        <img src="/icons/msg_warning.png" alt="Warning" className="w-24 h-24" />
        <span className="text-sm mt-2 text-black">Disclaimer</span>
      </div>

      {/* FAQ Icon */}
      <div
        className="absolute flex flex-col items-center cursor-pointer hover:brightness-110"
        style={{ left: '250px', top: '420px' }}
        onClick={() => navigate("/faq")}
      >
        <img src="/icons/help_book.png" alt="FAQ" className="w-24 h-24" />
        <span className="text-sm mt-2 text-black">FAQ</span>
      </div>
    </div>
  );
}