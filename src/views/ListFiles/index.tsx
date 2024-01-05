import { useEffect, useState } from "react";
import * as S from "./styled.ts";
import { IFiles } from "./typeListFiles.ts";
import { api } from "../../hooks/useApi.tsx";
import { useNavigate, useParams } from "react-router-dom";

const ListFiles = () => {
  const { id } = useParams();

  const [files, setFiles] = useState<Array<IFiles> | null>(null);
  const [newFiles, setNewFiles] = useState([]);

  const addNewFiles = async (event) => {
    // Verifica se algum arquivo foi selecionado
    if (event.target.files.length > 0) {
      const files = event.target.files;
      const [nameFile, extension] = files[0].name.split(".");

      const file = {
        nameFile,
        extension,
        idFolder: id,
      };
      const { data } = await api.post("file", file);

      console.log(data);
      if (newFiles.length === 0) {
        return setNewFiles(files);
      }
    }
  };

  const getFiles = async () => {
    try {
      const { data } = await api.get(`file/folder/${id}`);
      console.log(data);
      setFiles(data);
    } catch (err: any) {
      console.log(err.request.response);
    }
  };

  useEffect(() => {
    getFiles();
  }, [id]);
  return (
    <S.ContainerListFiles>
      <S.Header>
        <S.TitlePage>Lista de arquivos importados</S.TitlePage>
        <>
          <S.InputImport
            id="importFile"
            type="file"
            multiple
            onChange={addNewFiles}
          />
          <S.ImportFiles for="importFile">
            <i className="bi bi-file-earmark-plus"></i> Importar arquivos
          </S.ImportFiles>
        </>
      </S.Header>
      {files && files?.length > 0 ? (
        <S.Table>
          <S.Thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Tipo do arquivo</th>
              <th>Cadastrado</th>
              <th>Criador</th>
            </tr>
          </S.Thead>
          <tbody>
            {files?.map((file: IFiles) => (
              <S.ItemListFiles key={file.id}>
                <td>
                  <i className="bi bi-file-earmark"></i>
                </td>
                <td>{file.nameFile}</td>
                <td>{file.extension}</td>
                <td>{file.createdAt}</td>
                <td>{file.createdById}</td>
              </S.ItemListFiles>
            ))}
          </tbody>
        </S.Table>
      ) : (
        <S.NotFoundFile>
          <h4>Nenhum arquivo localizado</h4>
          <i className="bi bi-emoji-frown"></i>
        </S.NotFoundFile>
      )}
    </S.ContainerListFiles>
  );
};

export default ListFiles;
