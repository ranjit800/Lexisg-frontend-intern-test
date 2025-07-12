export default function PDFModal({ url, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90vw] h-[90vh] rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
        >
          Close
        </button>
        <iframe
          src={url + "#page=1"} // ✅ Works with local file
          className="w-full h-full rounded-b"
          title="Legal PDF Viewer"
        />
      </div>
    </div>
  );
}
