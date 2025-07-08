import { useNavigate } from "react-router-dom";

export default function FAQ() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/hoodie-bg.jpg')" }}
      onClick={() => navigate("/")}
    >
      <img 
        src="/sizeguide.png" 
        alt="Size Guide" 
        className="w-[330vw] h-auto max-w-none ml-[35vw]"

      />
    </div>
  );
}