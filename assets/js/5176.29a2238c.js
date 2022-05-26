"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5176],{4907:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5176:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(4907);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i={slug:"/paper/migration",title:"Migrating to or from Paper"},l=void 0,p={unversionedId:"paper/getting-started/migration",id:"paper/getting-started/migration",title:"Migrating to or from Paper",description:"It's simple to migrate your server to or from Paper. The steps below will help you get started.",source:"@site/docs/paper/getting-started/migration.md",sourceDirName:"paper/getting-started",slug:"/paper/migration",permalink:"/paper/migration",draft:!1,editUrl:"https://github.com/PaperMC/docs/blob/main/docs/paper/getting-started/migration.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1648661195,formattedLastUpdatedAt:"3/30/2022",frontMatter:{slug:"/paper/migration",title:"Migrating to or from Paper"},sidebar:"docs",previous:{title:"Adding Plugins",permalink:"/paper/getting-started/adding-plugins"},next:{title:"How-to Guides",permalink:"/category/paper/how-to-guides"}},s={},d=[{value:"Migrating to Paper",id:"migrating-to-paper",level:2},{value:"From CraftBukkit or Spigot",id:"from-craftbukkit-or-spigot",level:3},{value:"From Vanilla",id:"from-vanilla",level:3},{value:"From Fabric/Forge",id:"from-fabricforge",level:3},{value:"Migrating From Paper",id:"migrating-from-paper",level:2},{value:"To Vanilla",id:"to-vanilla",level:3},{value:"To CraftBukkit or Spigot",id:"to-craftbukkit-or-spigot",level:3},{value:"To Fabric/Forge",id:"to-fabricforge",level:3}],m={toc:d};function u(e){var t=e.components,a=o(e,["components"]);return(0,r.kt)("wrapper",n({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It's simple to migrate your server to or from Paper. The steps below will help you get started."),(0,r.kt)("div",n({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",n({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",n({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",n({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",n({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Backup your data before you start!")),(0,r.kt)("div",n({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Before you begin, please ensure you have a full backup of your server."))),(0,r.kt)("h2",n({},{id:"migrating-to-paper"}),"Migrating to Paper"),(0,r.kt)("h3",n({},{id:"from-craftbukkit-or-spigot"}),"From CraftBukkit or Spigot"),(0,r.kt)("p",null,"It's easy to migrate from CraftBukkit or Spigot to Paper. Follow the steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop your server if it is running, and create a full backup."),(0,r.kt)("li",{parentName:"ol"},"Download Paper from ",(0,r.kt)("a",n({parentName:"li"},{href:"https://papermc.io/downloads"}),"our downloads page"),"."),(0,r.kt)("li",{parentName:"ol"},"Replace your existing server jar with your freshly downloaded Paper jar."),(0,r.kt)("li",{parentName:"ol"},"Start your new server.")),(0,r.kt)("p",null,"Paper retains full compatibility with all Spigot plugins, allowing a seamless transition."),(0,r.kt)("div",n({},{className:"admonition admonition-info alert alert--info"}),(0,r.kt)("div",n({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",n({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",n({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",n({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,r.kt)("div",n({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Your new Paper server will still use ",(0,r.kt)("inlineCode",{parentName:"p"},"bukkit.yml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spigot.yml"),", only adding new configuration\noptions in ",(0,r.kt)("inlineCode",{parentName:"p"},"paper.yml"),"."))),(0,r.kt)("p",null,"If you have any issues migrating from CraftBukkit or Spigot, do not hesitate to reach out for\nsupport on ",(0,r.kt)("a",n({parentName:"p"},{href:"https://discord.gg/papermc"}),"our Discord server")," (",(0,r.kt)("inlineCode",{parentName:"p"},"#paper-help")," channel)."),(0,r.kt)("h3",n({},{id:"from-vanilla"}),"From Vanilla"),(0,r.kt)("p",null,"When migrating to Paper from Vanilla, the way worlds are stored will automatically be changed.\nShould you ever want to go back to Vanilla, follow the ",(0,r.kt)("a",n({parentName:"p"},{href:"#to-vanilla"}),"Vanilla Migration Guide"),"\nclosely, as manual changes will be required."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop your Vanilla server if it is running, and create a full backup."),(0,r.kt)("li",{parentName:"ol"},"Downloads Paper from ",(0,r.kt)("a",n({parentName:"li"},{href:"https://papermc.io/downloads"}),"our downloads page")," and replace your Vanilla\nserver jar with your freshly downloaded Paper jar."),(0,r.kt)("li",{parentName:"ol"},"Start your new Paper server.")),(0,r.kt)("p",null,"You have now successfully migrated to Paper. If you encounter any issues, do not hesitate to reach\nout for support on ",(0,r.kt)("a",n({parentName:"p"},{href:"https://discord.gg/papermc"}),"our Discord server")," (",(0,r.kt)("inlineCode",{parentName:"p"},"#paper-help")," channel)."),(0,r.kt)("h3",n({},{id:"from-fabricforge"}),"From Fabric/Forge"),(0,r.kt)("p",null,"Because both Fabric and Forge use the Vanilla world directory structure, the same steps as the\n",(0,r.kt)("a",n({parentName:"p"},{href:"#from-vanilla"}),"Vanilla Migration Guide")," may be used, with one caveat. If your Fabric or Forge\nserver used mods that added new blocks, items, or other data to the game, Paper will be unable to\nload these features."),(0,r.kt)("p",null,"Additionally, note that Paper does not support Fabric or Forge mods. You will need to find plugin\nreplacements. Any hybrids that attempt to support both mods and plugins are fundamentally flawed and\nnot recommended for use."),(0,r.kt)("h2",n({},{id:"migrating-from-paper"}),"Migrating From Paper"),(0,r.kt)("h3",n({},{id:"to-vanilla"}),"To Vanilla"),(0,r.kt)("p",null,"Because Paper stores worlds slightly differently than Vanilla, manual work is required to migrate.\nIf these steps are not taken, your nether and end will look like they have been reset. Don't worry!\nEven if this has happened, you haven't lost any data. The Vanilla server just doesn't know where to\nfind it."),(0,r.kt)("p",null,"Here is a chart to show the difference between how Vanilla and Paper store worlds."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Server Software"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Overworld"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Nether"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"End"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Vanilla"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/world")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/world/DIM-1")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/world/DIM1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Paper"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/world")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/world_nether/DIM-1")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/world_the_end/DIM1"))))),(0,r.kt)("p",null,"Follow these steps to migrate from Paper to Vanilla:"),(0,r.kt)("div",n({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",n({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",n({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",n({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",n({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",n({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"These steps assume a ",(0,r.kt)("inlineCode",{parentName:"p"},"level-name")," (as set in ",(0,r.kt)("inlineCode",{parentName:"p"},"server.properties"),") of ",(0,r.kt)("inlineCode",{parentName:"p"},"world"),". If this is not the\ncase for you, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"world")," with your ",(0,r.kt)("inlineCode",{parentName:"p"},"level-name")," for all steps below."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop your Paper server, if it is running."),(0,r.kt)("li",{parentName:"ol"},"If you have already started your server with Vanilla, enter the ",(0,r.kt)("inlineCode",{parentName:"li"},"world")," folder and delete both\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"DIM-1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"DIM1")," folders. This step is only necessary should you have started your server\nwith Vanilla."),(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"/world_nether/DIM-1")," folder into the ",(0,r.kt)("inlineCode",{parentName:"li"},"/world")," folder."),(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"/world_the_end/DIM1")," folder into the ",(0,r.kt)("inlineCode",{parentName:"li"},"/world")," folder."),(0,r.kt)("li",{parentName:"ol"},"Delete both the ",(0,r.kt)("inlineCode",{parentName:"li"},"/world_nether")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"/world_the_end")," folders."),(0,r.kt)("li",{parentName:"ol"},"Replace your Paper jar with a Vanilla server jar."),(0,r.kt)("li",{parentName:"ol"},"Start your Vanilla server.")),(0,r.kt)("h3",n({},{id:"to-craftbukkit-or-spigot"}),"To CraftBukkit or Spigot"),(0,r.kt)("p",null,"Paper does ",(0,r.kt)("strong",{parentName:"p"},"not")," support migration to either CraftBukkit or Spigot! While you may find success\n(both CraftBukkit and Spigot use the same directory structure as Paper), ",(0,r.kt)("strong",{parentName:"p"},"do not")," reach out for\nsupport with issues you encounter and note that data loss is possible."),(0,r.kt)("h3",n({},{id:"to-fabricforge"}),"To Fabric/Forge"),(0,r.kt)("p",null,"Because both Fabric and Forge use the same directory structure for world storage as Vanilla, follow\nthe ",(0,r.kt)("a",n({parentName:"p"},{href:"#to-vanilla"}),"Vanilla Migration Guide")," for this process. Note that neither Fabric nor Forge will\nsupport Paper plugins! You will be required to find replacement mods."))}u.isMDXComponent=!0}}]);