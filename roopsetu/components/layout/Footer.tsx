export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#eadfdb] bg-white py-8">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
        <p className="text-[13px] text-[#918887]">
          © {new Date().getFullYear()} RoopSetu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}