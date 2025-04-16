import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as i,m}from"./styled-components.browser.esm-C8hM6ESU.js";const e={primary:{background:"var(--primary-color)",color:"white",border:"var(--primary-color)",hoverBackground:"color-mix(in srgb, black 20%, var(--primary-color))",hoverColor:"white",hoverBorder:"color-mix(in srgb, black 20%, var(--primary-color))",disabledBackgroud:"color-mix(in srgb, black 20%, var(--primary-color))",disabledBorder:"color-mix(in srgb, black 20%, var(--primary-color))",disabledColor:"white"},accent:{background:"var(--accent-color)",color:"white",border:"var(--accent-color)",hoverBackground:"color-mix(in srgb, black 20%, var(--accent-color))",hoverColor:"white",hoverBorder:"color-mix(in srgb, black 20%, var(--accent-color))",disabledBackgroud:"color-mix(in srgb, black 20%, var(--accent-color))",disabledBorder:"color-mix(in srgb, black 20%, var(--accent-color))",disabledColor:"white"},"primary-outlined":{background:"white",color:"var(--primary-color)",border:"var(--primary-color)",hoverBackground:"var(--primary-color)",hoverColor:"white",hoverBorder:"var(--primary-color)",disabledBackgroud:"white",disabledBorder:"color-mix(in srgb, white 65%, var(--primary-color))",disabledColor:"color-mix(in srgb, white 65%, var(--primary-color))"},"accent-outlined":{background:"white",color:"var(--accent-color)",border:"var(--accent-color)",hoverBackground:"var(--accent-color)",hoverColor:"white",hoverBorder:"var(--accent-color)",disabledBackgroud:"white",disabledBorder:"color-mix(in srgb, white 65%, var(--accent-color))",disabledColor:"color-mix(in srgb, white 65%, var(--accent-color))"}},c={large:{fontSize:"1.25rem",padding:"0.75rem 2rem"},normal:{fontSize:"1rem",padding:"0.75rem 1.75rem"},small:{fontSize:"0.75rem",padding:"0.5rem 1.25rem"}},u=i.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 100%;
    color:  ${({$variant:r})=>e[r].color};
`,p=m`
  to {
    transform: rotate(360deg);
  }
`,b=i.svg`
    width: ${({$size:r})=>c[r].fontSize};
    height: ${({$size:r})=>c[r].fontSize};
    animation: ${p} 1s linear infinite;
    color: inherit;

    circle {
        fill: currentColor;
    }
`,d=({text:r="loading...",size:l="normal",variant:a="primary"})=>o.jsxs(u,{$variant:a,children:[o.jsx(b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",$size:l,children:o.jsxs("g",{children:[o.jsx("circle",{cx:"3",cy:"12",r:"1.5",className:"fill-current"}),o.jsx("circle",{cx:"21",cy:"12",r:"1.5",className:"fill-current"}),o.jsx("circle",{cx:"12",cy:"21",r:"1.5",className:"fill-current"}),o.jsx("circle",{cx:"12",cy:"3",r:"1.5",className:"fill-current"}),o.jsx("circle",{cx:"5.64",cy:"5.64",r:"1.5",className:"fill-current"}),o.jsx("circle",{cx:"18.36",cy:"18.36",r:"1.5",className:"fill-current"}),o.jsx("circle",{cx:"5.64",cy:"18.36",r:"1.5",className:"fill-current"}),o.jsx("circle",{cx:"18.36",cy:"5.64",r:"1.5",className:"fill-current"})]})}),o.jsx("span",{style:{color:"inherit"},children:r})]});d.__docgenInfo={description:"",methods:[],displayName:"ButtonLoader",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'loading...'",computed:!1}},size:{required:!1,tsType:{name:"TSize"},description:"",defaultValue:{value:"'normal'",computed:!1}},variant:{required:!1,tsType:{name:"TVariant"},description:"",defaultValue:{value:"'primary'",computed:!1}}}};const v=i.button`
    background-color: ${({$variant:r})=>e[r].background};
    cursor: pointer;
    padding: ${({$size:r})=>c[r].padding};
    color: ${({$variant:r})=>e[r].color};
    border-width: 1px;
    border-style: solid;
    border-color: ${({$variant:r})=>e[r].border};
    outline: none;
    transition: all 0.2s ease-in-out;
    border-radius: .25rem;
    font-size: ${({$size:r})=>c[r].fontSize};
    line-height: 1;

    &:hover {
        background-color: ${({$variant:r})=>e[r].hoverBackground};
        color: ${({$variant:r})=>e[r].hoverColor};
    }

    &:disabled {
        background-color: ${({$variant:r})=>e[r].disabledBackgroud};
        border-color: ${({$variant:r})=>e[r].disabledBorder};
        color: ${({$variant:r})=>e[r].disabledColor};
        cursor: default;
    }
`,g=({children:r,id:l,loading:a,disabled:s,variant:t="primary",size:n="normal"})=>o.jsx(v,{id:l,disabled:s||a,$variant:t,$size:n,children:a?o.jsx(d,{size:n,variant:t}):r??o.jsx("span",{children:"Button"})});g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'normal'",computed:!1},required:!1}}};export{g as B};
