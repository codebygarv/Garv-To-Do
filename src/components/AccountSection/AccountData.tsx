import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import LayoutMenus from "../Utilities/LayoutMenus";
import DeleteTasks from "./DeleteTasks";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AccountData: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);

  const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);

  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };

  const history = useNavigate();

  useEffect(() => {
    const auth = getAuth(); // Use getAuth here without passing the database parameter

    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUserName(user.displayName || "User");
      } else {
        // No user is signed in
        setUserName(null);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="top-0 right-0 "
    >
      <section className="p-5 flex flex-col h-full">
        <span className="flex items-center mx-auto">
          <p>Hey {userName ? `${userName}` : "User"}, Welcome to the To-Do app</p>
        </span>

        <DeleteTasks />

      </section>
    </LayoutMenus>
  );
};

export default AccountData;
