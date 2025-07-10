const menuItems = ["Request", "Services", "Tickets", "Calendar"];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around md:hidden py-2 shadow">
      {menuItems.map((item) => (
        <button key={item} className="text-teal-600 font-semibold">
          {item}
        </button>
      ))}
    </nav>
  );
}