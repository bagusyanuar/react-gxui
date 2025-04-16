import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./styled-components.browser.esm-C8hM6ESU.js";const s={large:{fontSize:"1.25rem"},normal:{fontSize:"1rem"},small:{fontSize:"0.75rem"}},t=r.label`
    margin-bottom: 0.25rem;
    display: block;
    color: var(--neutral-color);
    font-size: ${({$size:e})=>s[e].fontSize};
`,i=r.span`
    margin-left: 0.25rem;
    color: var(--danger-color);
`,m=({text:e,size:l="normal",isRequired:a,...n})=>o.jsxs(t,{$size:l,...n,children:[o.jsx("span",{children:e}),a&&o.jsx(i,{children:"*"})]});m.__docgenInfo={description:"",methods:[],displayName:"Label",props:{size:{defaultValue:{value:"'normal'",computed:!1},required:!1}}};export{m as L};
