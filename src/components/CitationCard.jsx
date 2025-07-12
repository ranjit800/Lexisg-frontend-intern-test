import { FaFilePdf } from "react-icons/fa";

export default function CitationCard({ citation }) {
  const handleClick = () => {
    window.open(citation.link, "_blank");
  };

  return (
    <div
  onClick={() => window.open(citation.link, "_blank")}
  className="bg-[#202123] text-white border border-[#4c4d56] p-4 rounded-md mt-4 cursor-pointer hover:bg-[#2a2b32]"
>
  <div className="flex items-center gap-3">
    <FaFilePdf className="text-red-500 text-xl" />
    <div>
      <p className="font-semibold">{citation.title}</p>
      <p className="text-xs text-gray-400">{citation.type}</p>
    </div>
  </div>
</div>

  );
}
