import styled from "styled-components";
import colors from "../../Utils/colors";

export const ContainerListFiles = styled.article`
  width: 100%;
  height: calc(100vh - 60px);
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px !important;
`;

export const TitlePage = styled.h2`
  color: ${colors.tertiary};
`;

export const InputImport = styled.input`
  visibility: hidden;
`;

export const ImportFiles = styled.label`
  border-radius: 5px;
  outline: 0;
  background-color: ${colors.tertiary};
  border: 0;
  font-size: 16px;
  color: ${colors.white};
  padding: 5px !important;

  :hover {
    opacity: 0.4;
    transform: scale(0.9);
    transition: all 0.3s ease !important;
  }
`;

export const Table = styled.table`
  width: 100%;
  padding: 10px !important;
`;

export const Thead = styled.thead`
  th {
    text-align: left;
    color: ${colors.tertiary} !important;
    font-weight: bold;
    padding: 10px !important;
    border-bottom: 1px solid red;
  }
`;

export const ItemListFiles = styled.tr`
  background-color: ${colors.white};
  border-radius: 5px !important;

  td {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px !important;
    padding: 5px !important;
    color: ${colors.secondary};
  }
`;

export const NotFoundFile = styled.div`
  width: 90%;
  height: 40px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 !important;
  background-color: ${colors.white};
  font-size: 20px;
  border-radius: 10px;
  gap: 5px;

  h4 {
    font-weight: normal;
  }
`;
