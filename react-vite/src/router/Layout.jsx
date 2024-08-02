// Files
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
import { PulseLoader } from "react-spinners";

export default function Layout() {
  const dispatch = useDispatch();
  const { buildId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const currentBuild = useSelector((state) => state.builds.current);
  const currentUser = useSelector((state) => state.session.user);
  const Origins = useSelector((state) => state.static.origins);

  useEffect(() => {
    if (buildId) {
      dispatch(thunkGetBuild(buildId));
    } else {
      dispatch(action("build/setDefault"));
    }
  }, [currentUser, buildId]);

  useEffect(() => {
    dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
    if (!Origins) {
      dispatch(thunkPreloadData());
    }
  }, [dispatch]);

  if (!currentBuild || !Origins) {
    return <PulseLoader color="#e4c274" />;
  }

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
