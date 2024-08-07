// Files
import "../index.css";
// Functions/Components
import UserButtons from "../components/user";
import { ModalProvider, Modal } from "../context/Modal";
import { thunkAuthenticate } from "../redux/session";
import { action, thunkGetBuild } from "../redux/build";
import { thunkPreloadData } from "../redux/static";
// Packages
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Layout() {
  const dispatch = useDispatch();
  const { buildId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const currentBuild = useSelector((state) => state.builds.current);
  const currentUserId = useSelector((state) => state.session.user?.id);
  const Origins = useSelector((state) => state.static.origins);

  useEffect(() => {
    if (buildId) {
      dispatch(thunkGetBuild(buildId));
    } else {
      dispatch(action("build/setDefault"));
    }
  }, [currentUserId, buildId]);

  useEffect(() => {
    dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
    if (!Origins) {
      dispatch(thunkPreloadData());
    }
  }, [dispatch]);

  if (!currentBuild || !Origins) return "";

  return (
    <>
      <ModalProvider>
        <UserButtons />
        {isLoaded && <Outlet errors />}
        <Modal />
      </ModalProvider>
    </>
  );
}
