(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[0],{16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__BObC4",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1fz42"}},3:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__1OT2j",SearchForm:"SearchBar_SearchForm__1rz-6",SearchFormButton:"SearchBar_SearchFormButton__3MfJ4","SearchForm-button":"SearchBar_SearchForm-button__2Fucg",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__2CcKp",SearchFormInput:"SearchBar_SearchFormInput__VTG33"}},32:function(e,t,a){e.exports={Button:"Button_Button__2h-id"}},33:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2XwGl"}},63:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a(31),c=a.n(o),l=a(13),s=a(4),i=a(5),u=a(12),h=a(11),m=a(32),d=a.n(m),g=function(e){var t=e.loadMore;return Object(n.jsx)("button",{className:d.a.Button,type:"button",onClick:t,children:"Load more"})},p=a(20),b=a(16),j=a.n(b),f=function(e){var t=e.webformatURL,a=e.tags,r=e.largeImageURL,o=e.onImageClick;return Object(n.jsx)("li",{className:j.a.ImageGalleryItemImage,onClick:o,children:Object(n.jsx)("img",{src:t,alt:a,className:j.a.ImageGalleryItemImage,"data-sourse":r})})},y=a(33),O=a.n(y),S=function(e){var t=e.imgList,a=e.onImageClick;return Object(n.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){return Object(r.createElement)(f,Object(p.a)(Object(p.a)({},e),{},{key:e.id,onImageClick:a}))}))})},v=a(6);function I(){var e=Object(v.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1200;\n      .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]);return I=function(){return e},e}var x=a(34).a.div(I()),_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleOnOverlayClick=function(t){t.target===t.currentTarget&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(n.jsx)(x,{className:"Overlay",onClick:this.handleOnOverlayClick,children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:this.props.largeImage,alt:""})})})}}]),a}(r.Component),w=a(3),k=a.n(w),B=function(e){var t=e.search,a=e.onHandleSearch,r=e.getPhoto;return Object(n.jsx)("header",{className:k.a.Searchbar,children:Object(n.jsxs)("form",{className:k.a.SearchForm,onSubmit:r,children:[Object(n.jsx)("button",{type:"submit",className:k.a.SearchFormButton,children:Object(n.jsx)("span",{className:k.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:k.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:t,onChange:a})]})})},M=a(19),L=a.n(M),F=a(36),C=a(37),G=a.n(C),N=function(){var e=Object(F.a)(L.a.mark((function e(t,a){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("19535506-9e76d01e5d644620db638e0a4","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),q=(a(63),a(15)),E=a(38),U=a.n(E);function z(){var e=Object(v.a)(["\n  display: block;\n  margin: 0 auto;\n"]);return z=function(){return e},e}var D=Object(q.css)(z()),H=function(){return Object(n.jsx)(U.a,{color:"#cc283d",loading:"true",css:D,size:15})},R=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1,imgList:[],loading:!1,largeImageURL:null,error:null,hideBtn:!0,showModal:!1},e.onHandleSearch=function(t){e.setState({query:t.target.value})},e.getPhoto=function(t){t.preventDefault(),e.setState({loading:!0}),N(e.state.query,e.state.page).then((function(t){e.setState({imgList:Object(l.a)(t)})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1,query:""})}))},e.loadMore=function(){e.setState({loading:!0}),N(e.state.query,e.state.page+1).then((function(t){e.setState((function(e){return{imgList:[].concat(Object(l.a)(e.imgList),Object(l.a)(t)),page:e.page+1}})),e.setState({loading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.openModal=function(t){console.log(t.target.dataset.sourse),e.setState({largeImageURL:t.target.dataset.sourse}),e.closeModal()},e.closeModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.query,a=e.imgList,r=e.loading,o=e.largeImageURL,c=e.showModal,l=e.hideBtn;return Object(n.jsxs)("div",{children:[Object(n.jsx)(B,{search:t,onHandleSearch:this.onHandleSearch,getPhoto:this.getPhoto}),Object(n.jsxs)("main",{children:[Object(n.jsx)(S,{imgList:a,onImageClick:this.openModal}),a.length>0&&!r&&l&&Object(n.jsx)(g,{loadMore:this.loadMore}),r&&Object(n.jsx)(H,{})]}),c&&Object(n.jsx)(_,{largeImage:o,closeModal:this.closeModal})]})}}]),a}(r.Component);a(68);c.a.render(Object(n.jsx)(R,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.4430e394.chunk.js.map