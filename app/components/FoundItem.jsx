import Link from "next/link";

export default function FoundItem({ onClose }) {
  return (
    <>
      <div className="modal">
        <div>I am a modal dialog</div>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}
