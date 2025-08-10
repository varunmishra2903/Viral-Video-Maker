export default function ShareBar({ variants }: { variants: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {variants.map((url, i) => (
        <button
          key={i}
          onClick={() => alert(`Shared: ${url}`)}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Share Variant {i + 1}
        </button>
      ))}
    </div>
  );
}
