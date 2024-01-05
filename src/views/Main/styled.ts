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
  background-color: ${colors.secondary};
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
    color: ${colors.white};
    text-decoration: none;
  }
`;
