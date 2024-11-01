export default function Page() {
  return (
    <div className="h-[2000px]">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
        Text title
      </h1>
      <h2 className="text-xl font-bold text-slate-900">
        Text subtitle
      </h2>
      <p className="text-slate-700 mt-2">
        You can also use variant modifiers to target media queries like
        responsive breakpoints, dark mode, prefers-reduced-motion, and more. For
        example, use md:bg-green-500 to apply the bg-green-500 utility at only
        medium screen sizes and above.
      </p>
    </div>
  );
}
