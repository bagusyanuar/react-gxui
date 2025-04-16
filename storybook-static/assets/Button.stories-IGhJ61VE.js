import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Button-D1aLyMPs.js";import"./styled-components.browser.esm-C8hM6ESU.js";import"./index-D4lIrffr.js";const M={title:"Component/Forms/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text",description:"button id"},loading:{control:"boolean",defaultValue:!1,table:{type:{summary:"true | false"},defaultValue:{summary:"false"}},type:"boolean"},disabled:{control:"boolean",defaultValue:!1,table:{type:{summary:"true | false"},defaultValue:{summary:"false"}},type:"boolean"},variant:{control:"select",options:["primary","accent","primary-outlined","accent-outlined"],table:{type:{summary:"'primary' | 'accent' | 'primary-outlined' | 'accent-outlined'"},defaultValue:{summary:"'primary'"}}},size:{control:"select",options:["large","normal","small"],table:{type:{summary:"'large' | 'normal' | 'small'"},defaultValue:{summary:"'normal'"}}}},args:{}},t={argTypes:{},render:function(e){return s.jsx(r,{...e,children:"Click Me!"})}},n={argTypes:{},render:function(e){return s.jsx(r,{variant:"accent",...e,children:"Click Me!"})}},a={argTypes:{},render:function(e){return s.jsx(r,{variant:"primary-outlined",...e,children:"Click Me!"})}},o={argTypes:{},render:function(e){return s.jsx(r,{variant:"accent-outlined",...e,children:"Click Me!"})}};var u,l,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: {},
  render: function Render(props) {
    return <Button {...props}>Click Me!</Button>;
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: {},
  render: function Render(props) {
    return <Button variant='accent' {...props}>Click Me!</Button>;
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var y,f,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {},
  render: function Render(props) {
    return <Button variant='primary-outlined' {...props}>Click Me!</Button>;
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var B,b,x;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  argTypes: {},
  render: function Render(props) {
    return <Button variant='accent-outlined' {...props}>Click Me!</Button>;
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const v=["Primary","Accent","PrimaryOutlined","AccentOutlined"];export{n as Accent,o as AccentOutlined,t as Primary,a as PrimaryOutlined,v as __namedExportsOrder,M as default};
