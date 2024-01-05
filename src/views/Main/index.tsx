import { Link, Outlet } from "react-router-dom";
import * as S from "./styled.ts";
import { api } from "../../hooks/useApi.tsx";
import { useEffect, useState } from "react";
import { IForder } from "./typeMain.ts";

const Main = () => {
  const [folders, setFolders] = useState<Array<IForder> | null>(null);
  const getFolders = async () => {
    try {
      const { data } = await api.get("folder");
      setFolders(data);
    } catch (err: any) {
      console.log(err.request.response);
    }
  };

  useEffect(() => {
    getFolders();
  }, []);
  return (
    <S.ContainerMain>
      <S.Menu>
        <S.Logo>MyFileManager</S.Logo>
        <S.OptionsMenu>Sair</S.OptionsMenu>
      </S.Menu>

      <S.ContainerContent>
        <S.ListFolders>
          <ul>
            {folders &&
              folders.map((folder: IForder) => (
                <S.itemListFolder>
                  <Link to={`${folder.id}`} className="flex items-center">
                    {folder.path}
                  </Link>
                </S.itemListFolder>
              ))}
          </ul>
        </S.ListFolders>
        <Outlet />
      </S.ContainerContent>
    </S.ContainerMain>
  );
};

export default Main;
