import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as n}from"./SelectMultiple-C_kj_syQ.js";import{L as w}from"./index-aCNbt3xD.js";import"./styled-components.browser.esm-C8hM6ESU.js";import"./index-D4lIrffr.js";import"./Label-Brl0RzHf.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const q={title:"Component/Forms/Select",component:n,parameters:{layout:"centered",viewport:{style:{height:"900px"}}},tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Form Label",description:"Label for input"},labelProps:{control:!1,description:"React HTMLLabelElement"},size:{control:"select",options:["large","normal","small"],table:{type:{summary:"'large' | 'normal' | 'small'"},defaultValue:{summary:"'normal'"}}},prefixIcon:{control:!1,table:{type:{summary:"IconType (from react-icons)"}}},isError:{control:"boolean",description:"validation status"},validationMessage:{control:"text",description:"text from validation"}},args:{}},a={args:{},render:function(e){const o=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}];return t.jsx(n,{style:{width:"200px"},options:o,placeholder:"Please select an option",...e})}},r={args:{label:"Form Label"},render:function(e){const o=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}];return t.jsx(n,{style:{width:"500px"},options:o,placeholder:"Please select an option",...e})}},i={args:{label:"Form Label",isRequired:!0},render:function(e){const o=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}];return t.jsx(n,{style:{width:"500px"},options:o,placeholder:"Please select an option",...e})}},p={args:{label:"Form Label"},render:function(e){const o=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}];return t.jsx(n,{prefixIcon:w,style:{width:"500px"},options:o,placeholder:"Please select an option",...e})}},s={args:{label:"Form Label",isError:!0,validationMessage:"This is an error text."},render:function(e){const o=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}];return t.jsx(n,{style:{width:"500px"},options:o,placeholder:"Please select an option",...e})}};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: function Render(props) {
    const options: SelectOption[] = [{
      label: 'Option 1',
      value: 'option-1'
    }, {
      label: 'Option 2',
      value: 'option-2'
    }, {
      label: 'Option 3',
      value: 'option-3'
    }];
    return <Select style={{
      width: '200px'
    }} options={options} placeholder='Please select an option' {...props} />;
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,b,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Form Label'
  },
  render: function Render(props) {
    const options: SelectOption[] = [{
      label: 'Option 1',
      value: 'option-1'
    }, {
      label: 'Option 2',
      value: 'option-2'
    }, {
      label: 'Option 3',
      value: 'option-3'
    }];
    return <Select style={{
      width: '500px'
    }} options={options} placeholder='Please select an option' {...props} />;
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var O,h,x;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Form Label',
    isRequired: true
  },
  render: function Render(props) {
    const options: SelectOption[] = [{
      label: 'Option 1',
      value: 'option-1'
    }, {
      label: 'Option 2',
      value: 'option-2'
    }, {
      label: 'Option 3',
      value: 'option-3'
    }];
    return <Select style={{
      width: '500px'
    }} options={options} placeholder='Please select an option' {...props} />;
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,g,y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Form Label'
  },
  render: function Render(props) {
    const options: SelectOption[] = [{
      label: 'Option 1',
      value: 'option-1'
    }, {
      label: 'Option 2',
      value: 'option-2'
    }, {
      label: 'Option 3',
      value: 'option-3'
    }];
    return <Select prefixIcon={LuMail} style={{
      width: '500px'
    }} options={options} placeholder='Please select an option' {...props} />;
  }
}`,...(y=(g=p.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var L,S,R;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Form Label',
    isError: true,
    validationMessage: 'This is an error text.'
  },
  render: function Render(props) {
    const options: SelectOption[] = [{
      label: 'Option 1',
      value: 'option-1'
    }, {
      label: 'Option 2',
      value: 'option-2'
    }, {
      label: 'Option 3',
      value: 'option-3'
    }];
    return <Select style={{
      width: '500px'
    }} options={options} placeholder='Please select an option' {...props} />;
  }
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};const V=["Default","WithLabel","WithRequiredLabel","WithIcon","WithErrorValidation"];export{a as Default,s as WithErrorValidation,p as WithIcon,r as WithLabel,i as WithRequiredLabel,V as __namedExportsOrder,q as default};
