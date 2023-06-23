import { useState } from "react";

import { BsFillCaretLeftFill } from "react-icons/bs";
import { SiWindows11 } from "react-icons/si";
import { MdDashboard, MdTask, MdNotifications, MdChat } from "react-icons/md";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Dashboard", icon: <MdDashboard size={30} color="#d8b4fe" /> },
    { name: "Tasks", icon: <MdTask size={30} /> },
    { name: "Notifications", icon: <MdNotifications size={30} /> },
    { name: "Inbox", icon: <MdChat size={30} /> },
  ];

  return (
    <div className="h-screen flex items-center">
      <aside
        className={`sticky top-0 h-[95vh] bg-black/80 text-white rounded-r-2xl ${
          open ? "w-72" : "w-20"
        } duration-300`}
      >
        <button
          className="absolute top-16 -right-5  h-12 w-12 bg-purple-300 text-white border-4 border-white rounded-full flex justify-center items-center hover:scale-110 duration-300"
          onClick={() => setOpen((open) => !open)}
        >
          <BsFillCaretLeftFill
            size={30}
            className={`${!open && "rotate-180"} duration-500 delay-200`}
          />
        </button>

        <div className="p-5">
          <section className="inline-flex gap-4">
            <SiWindows11
              size={25}
              className={`${!open && "rotate-[360deg]"} duration-500 delay-500`}
            />
            <h1 className={`font-extrabold text-2xl ${!open && "hidden"}`}>
              WEBGENIUS
            </h1>
          </section>

          <section className="mt-24">
            <ul className="flex flex-col gap-y-9 w-fit">
              {menus.map((menu, i) => {
                return (
                  <li
                    key={i}
                    className="font-semibold text-xl flex gap-x-4 cursor-pointer hover:translate-x-3 duration-300"
                  >
                    {menu.icon}
                    <span className={!open && "hidden"}>{menu.name}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </aside>
    </div>
  );
}
