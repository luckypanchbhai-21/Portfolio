export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-shell flex flex-col items-center justify-between gap-4 text-sm text-white/55 sm:flex-row">
        <p>© {new Date().getFullYear()} Lucky. All rights reserved.</p>
        <p>Freelance video editor for creators and brands.</p>
      </div>
    </footer>
  );
}
