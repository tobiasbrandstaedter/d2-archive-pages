(function(){"use strict";var e={1071:function(e,n,a){var r=a(9242),t=a(3396),o=a(1209),i=a(1141),l=a(8085),s=a(221),c=a(6542),p=a(6717),u=a(3419),w=a(6291),m=a(3105),k=a(678),d=a(7139);const g={key:0,class:"weapon"},v=["src","title","alt"],D=["src","title","alt"],h=["src","alt"],_={key:0,id:"pveDescription"},f=(0,t._)("h2",null,"PVE Description",-1),y=["innerHTML"],T={key:1,id:"pvePerks"},M=(0,t._)("h2",null,"Recommended PVE Perks",-1),I={class:"row"},G={class:"col-2"},P=(0,t._)("h2",null,"Barrels",-1),E=["src","alt","title"],O=(0,t._)("div",{class:"col-2"},[(0,t._)("h2",null,"Explanation")],-1),S={class:"row"},L={class:"col-2"},b=(0,t._)("h2",null,"Magazines",-1),q=["src","alt","title"],R=(0,t._)("div",{class:"col-2"},[(0,t._)("h2",null,"Explanation")],-1),x={class:"row"},K={class:"col-2"},H=(0,t._)("h2",null,"3rd Perk Slot",-1),A=["src","alt","title"],U=(0,t._)("div",{class:"col-2"},[(0,t._)("h2",null,"Explanation")],-1),Z={class:"row"},j={class:"col-2"},C=(0,t._)("h2",null,"4th Perk Slots",-1),V=["src","alt","title"],F=(0,t._)("div",{class:"col-2"},[(0,t._)("h2",null,"Explanation")],-1),Y={key:0,class:"row"},W={class:"col-2"},z=(0,t._)("h2",null,"Origin Trait",-1),N=["src","alt","title"],Q=(0,t._)("div",{class:"col-2"},[(0,t._)("h2",null,"Explanation")],-1),B={key:2,id:"pveGodrolls"},J=(0,t._)("h2",null,"PVE Godrolls",-1),$={class:"col-2"},X={class:"row"},ee=["src","alt","title"],ne={class:"row"},ae=["src","alt","title"],re=["src","alt","title"],te=["src","alt","title"],oe=["src","alt","title"],ie={class:"col-2"},le={key:1},se={key:2},ce={key:0};function pe(e,n,a,r,o,i){const l=(0,t.up)("n-divider"),s=(0,t.up)("n-card"),c=(0,t.up)("n-space");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(c,{justify:"center"},{default:(0,t.w5)((()=>[r.weaponData&&r.weaponData.weapon?((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)(s,{title:r.weaponData.weapon.name},{"header-extra":(0,t.w5)((()=>[r.weaponData.weapon.source?((0,t.wg)(),(0,t.iD)("img",{key:0,class:"source-icon",src:r.weaponData.weapon.source.soureIcon.url,title:"Source: "+r.weaponData.weapon.source.sourceTitle,alt:"Source: "+r.weaponData.weapon.source.sourceTitle},null,8,v)):(0,t.kq)("",!0),r.weaponData.weapon.element?((0,t.wg)(),(0,t.iD)("img",{key:1,class:"damagetype-icon",src:i.getDamageIcon(r.weaponData.weapon.element),title:"Damage Type: "+r.weaponData.weapon.element,alt:"Damage Type: "+r.weaponData.weapon.element},null,8,D)):(0,t.kq)("",!0)])),cover:(0,t.w5)((()=>[r.weaponData.weapon.image?((0,t.wg)(),(0,t.iD)("img",{key:0,src:r.weaponData.weapon.image.url,alt:"Thumbnail of "+r.weaponData.weapon.name},null,8,h)):(0,t.kq)("",!0)])),default:(0,t.w5)((()=>[r.weaponData.weapon.pveDescription?((0,t.wg)(),(0,t.iD)("section",_,[f,(0,t._)("div",{innerHTML:i.getHtmlStringFromMarkdown(r.weaponData.weapon.pveDescription.markdown)},null,8,y)])):(0,t.kq)("",!0),r.weaponData.weapon.pvePerks?((0,t.wg)(),(0,t.iD)("section",T,[M,(0,t._)("div",null,[(0,t._)("div",I,[(0,t._)("div",G,[P,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.weaponData.weapon.pvePerks.perk1,(e=>((0,t.wg)(),(0,t.iD)("img",{class:"perk-icon",key:e.name,src:e.icon.url,alt:e.name,title:e.name},null,8,E)))),128))]),O]),(0,t._)("div",S,[(0,t._)("div",L,[b,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.weaponData.weapon.pvePerks.perk2,(e=>((0,t.wg)(),(0,t.iD)("img",{class:"perk-icon",key:e.name,src:e.icon.url,alt:e.name,title:e.name},null,8,q)))),128))]),R]),(0,t._)("div",x,[(0,t._)("div",K,[H,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.weaponData.weapon.pvePerks.perk3,(e=>((0,t.wg)(),(0,t.iD)("img",{class:"perk-icon",key:e.name,src:e.icon.url,alt:e.name,title:e.name},null,8,A)))),128))]),U]),(0,t._)("div",Z,[(0,t._)("div",j,[C,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.weaponData.weapon.pvePerks.perk4,(e=>((0,t.wg)(),(0,t.iD)("img",{class:"perk-icon",key:e.name,src:e.icon.url,alt:e.name,title:e.name},null,8,V)))),128))]),F]),r.weaponData.weapon.originTrait?((0,t.wg)(),(0,t.iD)("div",Y,[(0,t._)("div",W,[z,(0,t._)("img",{class:"perk-icon",src:r.weaponData.weapon.originTrait.icon.url,alt:r.weaponData.weapon.originTrait.name,title:r.weaponData.weapon.originTrait.name},null,8,N)]),Q])):(0,t.kq)("",!0)])])):(0,t.kq)("",!0),r.weaponData.weapon.pveGodrolls?((0,t.wg)(),(0,t.iD)("section",B,[J,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.weaponData.weapon.pveGodrolls,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"roll row",key:e.perk1.name},[(0,t._)("div",$,[(0,t._)("div",X,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.contentIndicators,(e=>((0,t.wg)(),(0,t.iD)("img",{key:e.icon.url,src:e.icon.url,alt:e.name,title:e.name,class:"perk-icon"},null,8,ee)))),128))]),(0,t.Wm)(l),(0,t._)("div",ne,[(0,t._)("img",{src:e.perk1.icon.url,alt:e.perk1.name,title:e.perk1.name,class:"perk-icon"},null,8,ae),(0,t._)("img",{src:e.perk2.icon.url,alt:e.perk2.name,title:e.perk2.name,class:"perk-icon"},null,8,re),(0,t._)("img",{src:e.perk3.icon.url,alt:e.perk3.name,title:e.perk3.name,class:"perk-icon"},null,8,te),(0,t._)("img",{src:e.perk4.icon.url,alt:e.perk4.name,title:e.perk4.name,class:"perk-icon"},null,8,oe)])]),(0,t._)("div",ie,[(0,t._)("h3",null,(0,d.zw)(e.title),1),(0,t._)("p",null,(0,d.zw)(e.description.text),1)])])))),128))])):(0,t.kq)("",!0)])),_:1},8,["title"])])):r.weaponLoading?((0,t.wg)(),(0,t.iD)("div",le,"Loading...")):r.weaponError?((0,t.wg)(),(0,t.iD)("div",se,(0,d.zw)(e.error),1)):(0,t.kq)("",!0)])),_:1}),r.weaponData&&null!==r.weaponData.name?((0,t.wg)(),(0,t.iD)("div",ce,"Weapon is not listed.")):(0,t.kq)("",!0)],64)}var ue=a(8833),we=a(5068),me={props:["name"],setup(e){const{result:n,loading:a,error:r}=(0,o.aM)(ue.ZP`
        query ($name : String!){
          weapon(where: { name: $name }) {
            archetype {
              title
              rpm
              frame
            }
            name
            source{
              soureIcon{
                url
              },
              sourceTitle
            }
            element
            image {
              url
              fileName
            }
            originTrait {
              name
              icon {
                url
              }
            }
            pveDescription {
              markdown
            }
            pveGodrolls {
              ... on PveRoll {
                title
                description{text}
                perk1 {
                  name,
                  icon{url}
                }
                perk2 {
                  name,
                  icon{url}
                }
                perk3 {
                  name,
                  icon{url}
                }
                perk4 {
                  name,
                  icon{url}
                }
                contentIndicators{name,, icon{url}}
              }
            }
            pveMasterworks {
              icon {
                url
              }
              masterwork
            }
            pvePerks {
              perk1 {
                name,
                icon{url}
              }
              perk2 {
                name,
                icon{url}
              }
              perk3 {
                name,
                icon{url}
              }
              perk4 {
                name,
                icon{url}
              }
            }
            pvpDescription {
              text
            }
            pvpMasterworks {
              masterwork
              icon {
                url
              }
            }
            pvpPerks {
              perk1 {
                name,
                icon{url}
              }
              perk2 {
                name,
                icon{url}
              }
              perk3 {
                name,
                icon{url}
              }
              perk4 {
                name,
                icon{url}
              }
            }
          }
        }
      `,{name:e.name});return n.weapon||(0,k.tv)().push({name:"notFound"}),{weaponData:n,weaponLoading:a,weaponError:r}},data(){return{DMG_IMG_URL:{STASIS:"https://media.graphassets.com/My7R32nKQ3uF3gUA7JBE",SOLAR:"https://media.graphassets.com/i2nLrkqVTMyVNOvv06tX",ARC:"https://media.graphassets.com/1UMeBZYKQpKMVQD9OI4u",KINETIC:"https://media.graphassets.com/uAfCSEA9Ryi8nCC0HDim",VOID:"https://media.graphassets.com/eTxoUE78QEuQ4olgnqXd"}}},methods:{getDamageIcon(e){switch(e){case"Solar":return this.DMG_IMG_URL.SOLAR;case"Stasis":return this.DMG_IMG_URL.STASIS;case"Arc":return this.DMG_IMG_URL.ARC;case"Void":return this.DMG_IMG_URL.VOID;case"Kinetic":return this.DMG_IMG_URL.KINETIC;default:return this.DMG_IMG_URL.KINETIC}},getHtmlStringFromMarkdown(e){return(0,we.TU)(e)}}},ke=a(89);const de=(0,ke.Z)(me,[["render",pe]]);var ge=de;const ve=(0,t._)("h1",null,":(",-1),De=(0,t._)("h2",null,"We can't find what you are looking for.",-1);function he(e,n){const a=(0,t.up)("n-space");return(0,t.wg)(),(0,t.j4)(a,{justify:"center"},{default:(0,t.w5)((()=>[ve,De])),_:1})}const _e={},fe=(0,ke.Z)(_e,[["render",he]]);var ye=fe;const Te=[{path:"/",name:"home",redirect:"/weapons/TEST"},{path:"/😢",name:"notFound",component:ye,alias:["/%F0%9F%98%A2"]},{path:"/weapons/:name",name:"weapons",component:ge,props:!0}],Me=(0,k.p7)({history:(0,k.PO)(),routes:Te});var Ie=Me;function Ge(e,n,a,r,o,i){const l=(0,t.up)("router-view"),s=(0,t.up)("n-config-provider");return(0,t.wg)(),(0,t.j4)(s,{theme:e.darkTheme},{default:(0,t.w5)((()=>[(0,t.Wm)(l)])),_:1},8,["theme"])}var Pe=a(5209),Ee=(0,t.aZ)({setup(){return{darkTheme:Pe.$}}});const Oe=(0,ke.Z)(Ee,[["render",Ge]]);var Se=Oe;const Le=(0,i.L)({uri:"https://api-eu-central-1.graphcms.com/v2/cl3ok6pi869bq01z1etqe6qui/master"}),be=new l.h,qe=new s.f({link:Le,cache:be}),Re=(0,c.Z)({components:[p.Z,u.ZP,w.Z,m.Z]}),xe=(0,r.ri)({setup(){(0,t.JJ)(o.Gk,qe)},render:()=>(0,t.h)(Se)});xe.use(Re).use(Ie).mount("#app")}},n={};function a(r){var t=n[r];if(void 0!==t)return t.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(n,r,t,o){if(!r){var i=1/0;for(p=0;p<e.length;p++){r=e[p][0],t=e[p][1],o=e[p][2];for(var l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[s])}))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(p--,1);var c=t();void 0!==c&&(n=c)}}return n}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,t,o]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var r in n)a.o(n,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};a.O.j=function(n){return 0===e[n]};var n=function(n,r){var t,o,i=r[0],l=r[1],s=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(t in l)a.o(l,t)&&(a.m[t]=l[t]);if(s)var p=s(a)}for(n&&n(r);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(p)},r=self["webpackChunkd2_archive"]=self["webpackChunkd2_archive"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(1071)}));r=a.O(r)})();
//# sourceMappingURL=app.f7455e9a.js.map