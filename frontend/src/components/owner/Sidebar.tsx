import { NavLink, useLocation } from "react-router";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { useState } from "react";

export default function Sidebar() {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState<File | null>(null);

  const updateImage = async () => {
    if (image) {
      user.image = URL.createObjectURL(image);
      setImage(null);
    }
  };
  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-12 md:max-w-60 w-full border-r border-borderColor text-sm">
      <div className="group relative">
        <label htmlFor="image">
          <img
            className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto"
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="user"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />

          <div className="absolute hidden top-0 left-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
            <img src={assets.edit_icon} alt="" />
          </div>
        </label>
      </div>
      {image && (
        <button
          className="absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer"
          onClick={updateImage}
        >
          Save <img src={assets.check_icon} width={13} alt="" />
        </button>
      )}
      <p className="mt-2 text-base max-md:hidden">{user.name}</p>
      <div className="w-full">
        {ownerMenuLinks.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${link.path === location.pathname ? "bg-primary/10 text-primary" : "text-gray-600"}`}
          >
            <img
              src={
                link.path === location.pathname ? link.coloredIcon : link.icon
              }
              alt="car icon"
            />
            <span className="max-md:hidden">{link.name}</span>
            <div
              className={`w-1.5 h-8 rounded-lg right-0 absolute ${link.path === location.pathname && "bg-primary"}`}
            ></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
