// src/components/typography/PageTitle.tsx
import styled from "styled-components";
import { jsx } from "react/jsx-runtime";
var StyledDiv = styled.div`
  background-color: rebeccapurple;
  color: white;
`;
var PageTitle = () => {
  return /* @__PURE__ */ jsx(StyledDiv, { className: "text-red-500", children: "PageTitle" });
};
var PageTitle_default = PageTitle;
export {
  PageTitle_default as PageTitle
};
