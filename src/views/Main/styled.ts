import styled from "styled-components";
import colors from "../../Utils/colors";

export const ContainerMain = styled.section`
  width: 100%;
`;

export const Menu = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${colors.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2% !important;
`;

export const Logo = styled.h1`
  color: ${colors.white};
`;

export const OptionsMenu = styled.div``;

export const ContainerContent = styled.section`
  display: flex;
`;

export const ListFolders = styled.aside`
  width: 20%;
  min-width: 300px;
  background-color: ${colors.white};
  height: calc(100vh - 60px);
  text-align: center;
  padding: 20px 12px 0 12px !important;
  overflow-y: auto;
`;

export const itemListFolder = styled.li`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 13px !important;
  border-bottom: 1px solid ${colors.primary};
  padding: 5px !important;
  cursor: pointer;

  a {
    color: ${colors.secondary};
    text-decoration: none;
  }
`;

export const AddFolder = styled.button`
  color: #aaa;
  border: 0;
  font-size: 18px;
  font-weight: bold;
  width: 100%;

  p {
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  p:hover {
    color: ${colors.primary};
    transition: all 0.3s ease !important;
  }
`;

export const SaveFolder = styled.button`
  width: 100%;
  color: ${colors.white};
  background-color: ${colors.secondary};
  border-radius: 5px;
  border: 0;
  padding: 5px !important;
  margin-bottom: 10px !important;
  font-size: 18px;
  font-weight: bold;
`;
