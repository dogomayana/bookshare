import Link from "next/link";

export default function FoundItem({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 backdrop-opacity-10 backdrop-invert-0 bg-black/80 grid place-content-center"
        onClick={onClose}
      >
        <div
          className="w-[760px] mx-auto p-3 bg-white rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          I am a modal dialog
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}
