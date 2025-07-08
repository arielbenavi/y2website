import { useNavigate } from "react-router-dom";

export default function Warning() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/hoodie-bg.jpg')" }}
      onClick={() => navigate("/")}
    >
      <img 
        src="/Disclaimer 2.png" 
        alt="Disclaimer" 
        className="w-[90vw] h-auto max-w-6xl"
      />
    </div>
  );
}