const menuItems = ["Request Services", "Services", "Tickets", "Calendar"];

export default function Sidebar() {
  return (
    <aside className="bg-white w-64 p-4 border-r h-full hidden md:block">
      <ul className="space-y-2">
        {menuItems.map(item => (
          <li key={item} className="hover:bg-teal-100 p-2 rounded cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}