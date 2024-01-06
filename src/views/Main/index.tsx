import { Link, Outlet, useParams } from "react-router-dom";
import * as S from "./styled.ts";
import { api } from "../../hooks/useApi.tsx";
import { useEffect, useState } from "react";
import { IForder } from "./typeMain.ts";
import { Input } from "../../components/Input/styled.ts";

const Main = () => {
  const [folders, setFolders] = useState<Array<IForder> | null>(null);
  const [nameFolder, setNameFolder] = useState<string>("");
  const [addNewFolder, setAddNewFolder] = useState<boolean>(false);
  const { id } = useParams();

  const getFolders = async () => {
    try {
      const { data } = await api.get("folder");
      setFolders(data);
    } catch (err: any) {
      console.error(err.request.response);
    }
  };

  const sendNewFolder = async () => {
    try {
      const { data } = await api.post("folder", { name: nameFolder });
      setFolders((curr) => (curr ? [...curr, data] : [data]));
      setNameFolder("");
      setAddNewFolder(false);
    } catch (err: any) {
      console.error(err.request.response);
    }
  };

  useEffect(() => {
    getFolders();
  }, []);

  useEffect(() => {
    console.log(id);
  }, [id]);

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
                <S.itemListFolder active={id}>
                  <Link to={`${folder.id}`} className="flex items-center">
                    {folder.path}
                  </Link>
                </S.itemListFolder>
              ))}
          </ul>

          {addNewFolder && (
            <>
              <Input
                placeholder="Nome da pasta"
                type="text"
                value={nameFolder}
                onChange={(e) => setNameFolder(e.target.value)}
              />

              <S.SaveFolder type="button" onClick={() => sendNewFolder()}>
                Salvar pasta
              </S.SaveFolder>
            </>
          )}

          <S.AddFolder
            type="button"
            onClick={() => setAddNewFolder((curr) => !curr)}
          >
            {!addNewFolder ? (
              <p>
                <i className="bi bi-archive"></i>
                Adicionar pasta
              </p>
            ) : (
              <p>
                <i className="bi bi-x-circle"></i>
                Cancelar
              </p>
            )}
          </S.AddFolder>
        </S.ListFolders>
        <Outlet />
      </S.ContainerContent>
    </S.ContainerMain>
  );
};

export default Main;
