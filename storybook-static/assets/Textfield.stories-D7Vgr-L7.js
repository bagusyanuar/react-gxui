import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as t}from"./styled-components.browser.esm-C8hM6ESU.js";import{L as J}from"./Label-Brl0RzHf.js";import{L as K,a as Q}from"./index-aCNbt3xD.js";import"./index-D4lIrffr.js";const a={large:{fontSize:"1.25rem",paddingVertical:"0.75rem",paddingHorizontal:"0.75rem"},normal:{fontSize:"1rem",paddingVertical:"0.75rem",paddingHorizontal:"0.75rem"},small:{fontSize:"0.75rem",paddingVertical:"0.5rem",paddingHorizontal:"0.5rem"}},f={large:{iconSize:20,spacer:"0.5rem"},normal:{iconSize:16,spacer:"0.5rem"},small:{iconSize:12,spacer:"0.125rem"}},h={large:{fontSize:"1rem",spacer:"0.25rem"},normal:{fontSize:"0.875rem",spacer:"0.25rem"},small:{fontSize:"0.75rem",spacer:"0.125rem"}},U=t.div`
    display: flex;
    align-items: center;
    padding-left: ${({$size:e})=>a[e].paddingHorizontal};
    padding-right: ${({$size:e})=>a[e].paddingHorizontal};
    border-width: 1px;
    border-style: solid;
    border-color: ${({$isError:e})=>e?"var(--danger-color)":"color-mix(in srgb, white 20%, var(--neutral-color))"};
    transition: all .2s ease-in-out;
    border-radius: .25rem;
    color: color-mix(in srgb, white 20%, var(--neutral-color));

    &:focus-within {
        border-color: ${({$isError:e})=>e?"var(--danger-color)":"var(--neutral-color)"};
        color: var(--neutral-color);
    }
`,Y=t.input`
    padding-top: ${({$size:e})=>a[e].paddingVertical};
    padding-bottom: ${({$size:e})=>a[e].paddingVertical};
    flex-grow: 1;
    font-size: ${({$size:e})=>a[e].fontSize};
    outline: none;
    border: none;
    border-radius: .25rem;
    line-height: 1;
    color: color-mix(in srgb, black 20%, var(--neutral-color));
`,ee=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    color: inherit;
    margin-right: ${({$size:e})=>f[e].spacer};
`,re=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    color: inherit;
    margin-left: ${({$size:e})=>f[e].spacer};
`,ne=t.span`
    display: block;
    font-size: ${({$size:e})=>h[e].fontSize};
    margin-top: ${({$size:e})=>h[e].spacer};
    color: var(--danger-color);
`,o=({size:e="normal",prefixIcon:r,suffixIcon:x,label:g,isRequired:X,isError:b,className:oe,containerProps:Z,inputProps:k,labelProps:A,validationMessage:B,...G})=>n.jsxs("div",{...G,children:[g&&n.jsx(J,{size:e,text:g,isRequired:X,...A}),n.jsxs(U,{$size:e,$isError:b||!1,...Z,children:[r&&n.jsx(ee,{$size:e,children:n.jsx(r,{size:f[e].iconSize})}),n.jsx(Y,{type:"text",$size:e,...k}),x&&n.jsx(re,{$size:e,children:n.jsx(x,{size:f[e].iconSize})})]}),b&&n.jsx(ne,{$size:e,children:B})]});o.__docgenInfo={description:"",methods:[],displayName:"Textfield",props:{size:{defaultValue:{value:"'normal'",computed:!1},required:!1}}};const ce={title:"Component/Forms/Textfield",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",defaultValue:"Form Label",description:"Label for input"},containerProps:{control:!1,description:"React HTMLLabelElement"},labelProps:{control:!1,description:"React HTMLLabelElement"},inputProps:{control:!1,description:"React HTMLInputElement"},size:{control:"select",options:["large","normal","small"],table:{type:{summary:"'large' | 'normal' | 'small'"},defaultValue:{summary:"'normal'"}}},validationMessage:{control:"text",description:"text from validation"},prefixIcon:{control:!1,table:{type:{summary:"IconType (from react-icons)"}}},suffixIcon:{control:!1,table:{type:{summary:"IconType (from react-icons)"}}}},args:{}},s={args:{},render:function(r){return n.jsx(o,{...r})}},i={args:{label:"Form Label"},render:function(r){return n.jsx(o,{...r})}},l={args:{label:"Form Label",isRequired:!0},render:function(r){return n.jsx(o,{...r})}},c={args:{label:"Input With Prefix Icon"},parameters:{docs:{source:{code:`
                import { LuMail } from 'react-icons/lu';

<Textfield 
    label="Input With Prefix Icon" 
    prefixIcon={LuMail} 
/>
`}}},render:function(r){return n.jsx(o,{prefixIcon:K,...r})}},d={args:{},parameters:{docs:{source:{code:`
                import { LuCalendar } from 'react-icons/lu';

<Textfield 
    prefixIcon={LuCalendar} 
/>
`}}},render:function(r){return n.jsx(o,{inputProps:{placeholder:"Search..."},suffixIcon:Q,...r})}},p={args:{},render:function(r){return n.jsx(o,{inputProps:{placeholder:"Search..."},...r})}},u={args:{label:"Form Label"},render:function(r){return n.jsx(o,{labelProps:{style:{fontStyle:"italic"}},...r})}},m={args:{label:"Form Label",isRequired:!0,isError:!0,validationMessage:"This is an error text."},render:function(r){return n.jsx(o,{...r})}};var I,L,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {},
  render: function Render(props) {
    return <Textfield {...props} />;
  }
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var T,y,R;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Form Label'
  },
  render: function Render(props) {
    return <Textfield {...props} />;
  }
}`,...(R=(y=i.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var z,j,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Form Label',
    isRequired: true
  },
  render: function Render(props) {
    return <Textfield {...props} />;
  }
}`,...(P=(j=l.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var E,v,$;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Input With Prefix Icon'
  },
  parameters: {
    docs: {
      source: {
        code: \`
                import { LuMail } from 'react-icons/lu';

<Textfield 
    label="Input With Prefix Icon" 
    prefixIcon={LuMail} 
/>
\`
      }
    }
  },
  render: function Render(props) {
    return <Textfield prefixIcon={LuMail} {...props} />;
  }
}`,...($=(v=c.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var W,F,M;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
                import { LuCalendar } from 'react-icons/lu';

<Textfield 
    prefixIcon={LuCalendar} 
/>
\`
      }
    }
  },
  render: function Render(props) {
    return <Textfield inputProps={{
      placeholder: 'Search...'
    }} suffixIcon={LuSearch} {...props} />;
  }
}`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,C,_;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {},
  render: function Render(props) {
    return <Textfield inputProps={{
      placeholder: 'Search...'
    }} {...props} />;
  }
}`,...(_=(C=p.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var H,q,w;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Form Label'
  },
  render: function Render(props) {
    return <Textfield labelProps={{
      style: {
        fontStyle: 'italic'
      }
    }} {...props} />;
  }
}`,...(w=(q=u.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var D,N,O;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Form Label',
    isRequired: true,
    isError: true,
    validationMessage: 'This is an error text.'
  },
  render: function Render(props) {
    return <Textfield {...props} />;
  }
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const de=["Default","WithLabel","WithRequiredLabel","WithPrefixIcon","WithSuffixIcon","CustomInputProps","CustomLabelProps","WithErrorValidation"];export{p as CustomInputProps,u as CustomLabelProps,s as Default,m as WithErrorValidation,i as WithLabel,c as WithPrefixIcon,l as WithRequiredLabel,d as WithSuffixIcon,de as __namedExportsOrder,ce as default};
