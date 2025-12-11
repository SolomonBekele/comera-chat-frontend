import React, { useState } from "react";
import { CameraIcon } from "../../ui/icons/sideBarIcons";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import UpdateProfileForm from "../../forms/UpdateProfileForm";

const AccountSetting: React.FC = () => {
  const { userData } = useSelector((state: RootState) => state.user);
  const [profilePic, setProfilePic] = useState<string>(
    userData?.profilePic ?? ""
    
  );

  return (
    <div className="mt-6 space-y-6 animate-fade">
      <h3 className="mb-4">Profile Information</h3>
      {/* --- PROFILE PICTURE SECTION (UPDATED) --- */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative">
          <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full w-20 h-20">
            <img
              alt="You"
              src={profilePic}
              className="aspect-square size-full object-cover"
            />
          </span>

          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all
      disabled:pointer-events-none disabled:opacity-50
      [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4
      outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]
      text-white size-9 absolute bottom-0 right-0 w-8 h-8 rounded-full
      bg-teal-500 hover:bg-teal-600"
          >
            {/* Camera Icon */}
            <CameraIcon />
          </button>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm text-gray-500">
            Click the camera icon to change your profile picture
          </p>
        </div>
      </div>
      <UpdateProfileForm/>
    </div>
  );
};

export default AccountSetting;
