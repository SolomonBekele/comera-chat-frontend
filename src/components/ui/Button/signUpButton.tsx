import { useSelector } from "react-redux";
import type { RootState } from "../../../store";

export const SignInButton = () => {
   const {loading, } = useSelector(
    (state: RootState) => state.user
  );
  return (
    <button
          type="submit"
          className="bg-[oklch(.704_.14_182.503)] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
        >
         {loading ? "Logging in..." : "signIn"}
        </button>
  );
};