export default function FormPopUp({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-[#efe9ff] shadow-lg w-full max-w-md max-h-[93vh] overflow-y-auto p-6 px-8 mx-4">
        <button
          onClick={onClose}
          className="absolute rounded-full bg-[#5943a5] text-white right-[10px] top-[10px] w-[40px] h-[40px] hover:text-black text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
