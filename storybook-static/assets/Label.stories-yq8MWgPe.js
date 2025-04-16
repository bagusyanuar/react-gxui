import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{L as a}from"./Label-Brl0RzHf.js";import"./styled-components.browser.esm-C8hM6ESU.js";import"./index-D4lIrffr.js";const b={title:"Component/Forms/Label",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{text:{control:"text",description:"Required",defaultValue:"Form Label"},isRequired:{control:"boolean",description:"Optional",table:{type:{summary:"false | true"},defaultValue:{summary:"false"}}},size:{control:"select",description:"Optional",options:["large","normal","small"],table:{type:{summary:"'large' | 'normal' | 'small'"},defaultValue:{summary:"'normal'"}}}},args:{}},e={args:{text:"Form Label"},render:function({...t}){return i.jsx(a,{...t})}},r={args:{text:"Form Label Required"},render:function({...t}){return i.jsx(a,{isRequired:!0,...t})}};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Form Label'
  },
  render: function Render({
    ...props
  }) {
    return <Label {...props} />;
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,u,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'Form Label Required'
  },
  render: function Render({
    ...props
  }) {
    return <Label isRequired={true} {...props} />;
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const x=["Default","Required"];export{e as Default,r as Required,x as __namedExportsOrder,b as default};
