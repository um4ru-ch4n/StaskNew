(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{122:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(17),c=r.n(o),s=(r(95),r(9)),u=r(10),i=r(11),l=r(12),p=(r(96),r(72)),d=r.n(p),m=r(6),h=r(74),f=r.n(h),v=r(19);var j=Object(m.b)((function(e){return{isAuthenticated:!!e.authReducer.token}}),(function(e){return{}}))((function(e){return n.a.createElement("nav",{className:f.a.Header+" navbar navbar-expand-lg navbar-dark bg-dark "},n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"navbar-item"},n.a.createElement(v.b,{className:"navbar-brand",to:"/"},"$TA$K"))),n.a.createElement("ul",{className:"navbar-nav my-2 my-lg-0"},e.isAuthenticated?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"nav-item"},n.a.createElement(v.b,{className:"nav-link",to:"/create_project"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(v.b,{className:"nav-link",to:"/user_projects"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(v.b,{className:"nav-link",to:"/logout"},"\u0412\u044b\u0439\u0442\u0438"))):n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"nav-item"},n.a.createElement(v.b,{className:"nav-link",to:"/auth"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(v.b,{className:"nav-link",to:"/registration"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))))})),b=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:d.a.Layout},n.a.createElement(j,null),n.a.createElement("main",null,this.props.children))}}]),r}(n.a.Component);var g=Object(m.b)((function(e){return{}}))(b),O=r(31),E=r(76),y=r.n(E),k=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:y.a.Home},n.a.createElement("h1",null,"This is Home page!"))}}]),r}(a.Component);var _=Object(O.g)(Object(m.b)((function(e){return{}}),(function(e){return{}}))(k)),T=r(3),C=r(53),S=r.n(C),R=r(54),U=r.n(R);function N(e){var t=e.valid,r=e.touched,a=e.shouldValidate;return!t&&a&&r}var P=function(e){var t=e.type||"text",r=[U.a.Input],a="".concat(t,"-").concat(Math.random());return N(e)&&r.push(U.a.invalid),n.a.createElement("div",{className:r.join(" ")},n.a.createElement("label",{htmlFor:a},e.label),n.a.createElement("input",{type:e.type,id:a,value:e.value,onChange:e.onChange,min:e.min,checked:e.checked,className:e.className}),N(e)?n.a.createElement("span",null,e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"):null)},x=r(55),A=r.n(x),M=function(e){var t=[A.a.Button,A.a[e.type]];return n.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},I=r(13),w=r.n(I),L=r(20),H=r(77),D=r.n(H).a.create({baseURL:"http://127.0.0.1:8000/api"});function F(e){return{type:"PROJECT_ERROR",errorMessage:e}}function J(){return function(){var e=Object(L.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token"),t({type:"CLEAR_USER_PROJECTS"}),t({type:"AUTH_LOGOUT"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function K(e,t){return{type:"AUTH_SUCCESS",user:e,token:t}}var V=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1}}},e.loginHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value)},e.submitHandler=function(e){e.preventDefault()},e.onChangeHandler=function(t,r){var a=e.state.formControls,n=Object(T.a)({},a[r]);n.value=t.target.value,a[r]=n,e.setState({formControls:a})},e}return Object(u.a)(r,[{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,r){var a=e.state.formControls[t];return n.a.createElement(P,{key:t+r,type:a.type,value:a.value,valid:a.valid,label:a.label,shouldValidate:!!a.validation,errorMessage:a.errorMessage,onChange:function(r){return e.onChangeHandler(r,t)}})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:S.a.Auth},n.a.createElement("div",null,n.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),n.a.createElement("form",{onSubmit:this.submitHandler,className:S.a.AuthForm},this.renderInputs(),n.a.createElement(M,{type:"success",onClick:this.loginHandler},"\u0412\u043e\u0439\u0442\u0438"))))}}]),r}(n.a.Component);var q=Object(m.b)(null,(function(e){return{auth:function(t,r){return e(function(e,t){return function(){var r=Object(L.a)(w.a.mark((function r(a){var n,o;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={email:e,password:t},"auth/login",o={method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(n),url:"auth/login"},r.next=5,D(o).then((function(e){localStorage.setItem("token",e.data.token),a(K(e.data.user,e.data.token))})).catch((function(e){a({type:"AUTH_ERROR",errorMessage:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})}));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,r))}}}))(V),B=r(56),W=r.n(B),G=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={isFormValid:!1,touched:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,validation:{required:!0,email:!0,maxLength:100}},username:{value:"",type:"text",label:"\u041d\u0438\u043a\u043d\u0435\u0439\u043c",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u0438\u043a\u043d\u0435\u0439\u043c",valid:!1,validation:{required:!0,maxLength:30,minLength:3}},first_name:{value:"",type:"text",label:"\u0418\u043c\u044f",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f",valid:!1,validation:{maxLength:50}},last_name:{value:"",type:"text",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0444\u0430\u043c\u0438\u043b\u0438\u044e",valid:!1,validation:{maxLength:50}},patronymic:{value:"",type:"text",label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",valid:!1,validation:{maxLength:50}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,validation:{required:!0,minLength:6}}}},e.registerHandler=function(){var t=Object(T.a)({},e.state.formControls),r=!0;Object.keys(t).forEach((function(a){t[a].valid=e.validateControl(t[a].value,t[a].validation),r=t[a].valid&&r})),e.setState({isFormValid:r,touched:!0});var a={};Object.keys(t).forEach((function(e){a[e]=t[e].value})),r&&e.props.registration(a)},e.submitHandler=function(e){e.preventDefault()},e.onChangeHandler=function(t,r){var a=e.state.formControls,n=Object(T.a)({},a[r]);n.value=t.target.value,a[r]=n,e.setState({formControls:a})},e}return Object(u.a)(r,[{key:"validateControl",value:function(e,t){if(!t)return!0;var r=!0;return t.required&&(r=""!==e.trim()&&r),t.email&&(r=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm.test(String(e).toLocaleLowerCase())&&r),t.minLength&&(r=e.length>=t.minLength&&r),t.maxLength&&(r=e.length<=t.maxLength&&r),r}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,r){var a=e.state.formControls[t];return n.a.createElement(P,{key:t+r,type:a.type,value:a.value,valid:a.valid,label:a.label,shouldValidate:!!a.validation,touched:e.state.touched,errorMessage:a.errorMessage,onChange:function(r){return e.onChangeHandler(r,t)}})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:W.a.Registration},n.a.createElement("div",null,n.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),n.a.createElement("form",{onSubmit:this.submitHandler,className:W.a.RegistrationForm},this.renderInputs(),n.a.createElement(M,{type:"success",onClick:this.registerHandler},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u0441\u044c\u044f"))))}}]),r}(n.a.Component);var z=Object(m.b)(null,(function(e){return{registration:function(t){return e(function(e){return function(){var t=Object(L.a)(w.a.mark((function t(r){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"auth/register",a={method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(e),url:"auth/register"},t.next=4,D(a).catch((function(e){r({type:"REGISTRATION_ERROR",errorMessage:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(G),Y=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.props.deleteToken()}},{key:"render",value:function(){return n.a.createElement(O.a,{to:"/"})}}]),r}(a.Component);var Q=Object(m.b)(null,(function(e){return{deleteToken:function(){return e((function(e){var t=localStorage.getItem("token");D({method:"POST",headers:{Authorization:"Token "+t},url:"auth/logout"}).then((function(){e(J())}))}))}}}))(Y),X=r(39),$=r(32),Z=r(57),ee=r.n(Z),te=r(58),re=r.n(te),ae=r(78),ne=r.n(ae),oe=function(e){var t=e.options,r=[];r.push(n.a.createElement("option",{key:"init"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043e\u043b\u044c"));for(var a=0;a<t.length;a++)r.push(n.a.createElement("option",{key:a},t[a].label));return n.a.createElement("select",{id:e.className,onChange:e.onChange,className:ne.a.Select},r)},ce=function(e){return n.a.createElement("div",{className:re.a.UserType},n.a.createElement(P,{type:"email",label:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0430",onChange:e.onChangeUsersInputHandler,className:e.cls}),n.a.createElement("div",{className:re.a.SelectGroup},n.a.createElement("label",{style:{margin:"0",paddingBottom:"2px",width:"220px"}},"\u0422\u0438\u043f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),n.a.createElement(oe,{className:e.cls,options:e.options,onChange:e.onChangeUsersSelectHandler})))},se=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={isFormValid:!1,touched:!1,formControls:{title:{value:"",type:"text",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",errorMessage:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u0438\u043b\u0438 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",valid:!1,validation:{required:!0,maxLength:100,minLength:5}},theme:{value:"",type:"text",label:"\u0422\u0435\u043c\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",errorMessage:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u0430\u044f \u0438\u043b\u0438 \u043a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0442\u0435\u043c\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",valid:!1,validation:{required:!1,maxLength:100,minLength:5}},description:{value:"",type:"text",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",valid:!1,validation:{required:!1}}},numUsers:1,usersInputSelect:[{email:"",type:""}],types:[]},e.createProjectHandler=function(){var t=Object(T.a)({},e.state.formControls),r=e.state.usersInputSelect,a=!0;Object.keys(t).forEach((function(r){t[r].valid=e.validateControl(t[r].value,t[r].validation),a=t[r].valid&&a})),e.setState({isFormValid:a,touched:!0});var n={};Object.keys(t).forEach((function(e){n[e]=t[e].value})),r.forEach((function(t){var r=e.validateControl(t,{isUserInputSelect:!0});a=r&&a})),n.users=Object(X.a)(Array,Object($.a)(r)),a&&e.props.createProject(n)},e.submitHandler=function(t){t.preventDefault(),e.props.history.push("/user_projects")},e.onChangeHandler=function(t,r){var a=e.state.formControls,n=Object(T.a)({},a[r]);n.value=t.target.value,a[r]=n,e.setState({formControls:a})},e.onChangeUsersInputHandler=function(t){var r=e.state.usersInputSelect,a=Object(X.a)(Array,Object($.a)(r));a[t.target.className.slice(3)].email=t.target.value,e.setState({usersInputSelect:a})},e.onChangeUsersSelectHandler=function(t){var r=e.state.usersInputSelect,a=Object(X.a)(Array,Object($.a)(r));a[t.target.id.slice(3)].type=t.target.value,e.setState({usersInputSelect:a})},e.addUser=function(t){t.preventDefault();var r=e.state,a=r.numUsers,n=r.usersInputSelect,o=Object(X.a)(Array,Object($.a)(n));o.push({email:"",type:""}),e.setState({numUsers:a+1,usersInputSelect:o})},e.remUser=function(t){t.preventDefault();var r=e.state,a=r.numUsers,n=r.usersInputSelect;if(a>0){var o=Object(X.a)(Array,Object($.a)(n));o.pop(),e.setState({numUsers:a-1,usersInputSelect:o})}},e}return Object(u.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.props.fetchProjectUserTypes()}},{key:"validateControl",value:function(e,t){if(!t)return!0;var r=!0;return t.required&&(r=""!==e.trim()&&r,t.minLength&&(r=e.length>=t.minLength&&r),t.maxLength&&(r=e.length<=t.maxLength&&r)),t.isUserInputSelect&&(r=""!==e.email.trim()&&r,r=""!==e.type.trim()&&r),r}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,r){var a=e.state.formControls[t];return n.a.createElement(P,{key:t+r,type:a.type,value:a.value,valid:a.valid,label:a.label,shouldValidate:!!a.validation,touched:e.state.touched,errorMessage:a.errorMessage,onChange:function(r){return e.onChangeHandler(r,t)}})}))}},{key:"render",value:function(){for(var e=this,t=this.state.numUsers,r=this.props.projectUserTypes.map((function(e){return{value:e.id,label:e.name}})),a=[],o=0;o<t;o++)a.push(n.a.createElement(ce,{key:o,options:r,onChangeUsersInputHandler:function(t){return e.onChangeUsersInputHandler(t)},onChangeUsersSelectHandler:function(t){return e.onChangeUsersSelectHandler(t)},cls:"ut-".concat(o)}));return n.a.createElement("div",{className:ee.a.CreateProject},n.a.createElement("div",null,n.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"),n.a.createElement("form",{onSubmit:this.submitHandler,className:ee.a.CreateProjectForm},this.renderInputs(),a,n.a.createElement(M,{onClick:this.addUser},"+"),n.a.createElement(M,{onClick:this.remUser},"-"),n.a.createElement(M,{type:"success",onClick:this.createProjectHandler},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442"))))}}]),r}(n.a.Component);var ue=Object(m.b)((function(e){return{projectUserTypes:e.projectReducer.projectUserTypes}}),(function(e){return{createProject:function(t){return e((r=t,function(){var e=Object(L.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+a},data:JSON.stringify(r),url:"create_project"},e.next=5,D(n).catch((function(e){t(F("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430"))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var r},fetchProjectUserTypes:function(){return e(function(){var e=Object(L.a)(w.a.mark((function e(t){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),a={method:"GET",headers:{Authorization:"Token "+r},url:"projectuserstypes/"},e.next=5,D(a).then((function(e){t({type:"PROJECT_USER_TYPES_LIST",projectUserTypes:e.data})})).catch((function(e){t(F("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0442\u0438\u043f\u043e\u0432"))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(se),ie=r(59),le=r.n(ie),pe=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).onProjectClickHandler=function(t){e.props.setCurrentProject(t)},e}return Object(u.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.props.fetchProjects()}},{key:"renderProjects",value:function(){var e=this;return this.props.projects.map((function(t){return n.a.createElement("li",{key:t.id},n.a.createElement(v.b,{to:"user_projects/"+t.id,onClick:function(){return e.onProjectClickHandler(t.id)}},t.title))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:le.a.card},n.a.createElement("div",{className:le.a.cardBody},n.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432"),n.a.createElement("ul",null,this.renderProjects())))}}]),r}(a.Component);var de=Object(m.b)((function(e){return{projects:e.projectReducer.projects}}),(function(e){return{fetchProjects:function(){return e(function(){var e=Object(L.a)(w.a.mark((function e(t){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),a={method:"GET",headers:{Authorization:"Token "+r},url:"user_projects"},e.next=5,D(a).then((function(e){t({type:"USER_PROJECTS_LIST",projects:e.data.projects})})).catch((function(e){t(F("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432"))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},setCurrentProject:function(t){return e(function(e){return{type:"CURRENT_PROJECT",projectId:e}}(t))}}}))(pe),me=r(60),he=r.n(me);function fe(e){return{type:"TASK_ERROR",errorMessage:e}}var ve=r(86),je=r(85),be=function(e){return e.getFullYear()+"-"+(1===(e.getMonth()+1+"").length?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(1===(e.getDate()+"").length?"0"+e.getDate():e.getDate())+"T"+(1===(e.getHours()+"").length?"0"+e.getHours():e.getHours())+":"+(1===(e.getMinutes()+"").length?"0"+e.getMinutes():e.getMinutes())},ge=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={isFormValid:!1,touched:!1,formControls:{title:{value:"",type:"text",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0422\u0430\u0441\u043a\u0430",errorMessage:"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u0438\u043b\u0438 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0422\u0430\u0441\u043a\u0430",valid:!1,validation:{required:!0,maxLength:100,minLength:2}},description:{value:"",type:"text",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0422\u0430\u0441\u043a\u0430",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0422\u0430\u0441\u043a\u0430",valid:!1,validation:{required:!1}},start_date:{value:be(new Date),type:"datetime-local",label:"\u041d\u0430\u0447\u0430\u043b\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0422\u0430\u0441\u043a\u0430",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u0447\u0430\u043b\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0422\u0430\u0441\u043a\u0430",valid:!1,min:be(new Date),validation:{required:!1,startDate:!0}},end_date:{value:"",type:"datetime-local",label:"\u041a\u043e\u043d\u0435\u0446 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0422\u0430\u0441\u043a\u0430",errorMessage:"\u0412\u0432\u0435\u0434\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043a\u043e\u043d\u0435\u0446 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0422\u0430\u0441\u043a\u0430",valid:!1,min:be(new Date),validation:{required:!1,endDate:!0}},is_public:{checked:!1,type:"checkbox",label:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439",errorMessage:"",valid:!1,validation:{required:!1}}},taskUsers:[]},e.createTasktHandler=function(){var t=Object(T.a)({},e.state.formControls),r=!0;Object.keys(t).forEach((function(a){t[a].valid=e.validateControl(t[a].value,t[a].validation),r=t[a].valid&&r})),e.setState({isFormValid:r,touched:!0});var a={};Object.keys(t).forEach((function(e){t[e].checked?a[e]=t[e].checked:a[e]=t[e].value})),a.is_public||(a.is_public=!1),a.project=e.props.currentProject.id,a.users=e.state.taskUsers,r&&e.props.createTask(a)},e.submitHandler=function(e){e.preventDefault()},e.onChangeHandler=function(t,r){var a=e.state.formControls,n=Object(T.a)({},a[r]);n.value=t.target.value,void 0!==t.target.checked&&(n.checked=t.target.checked),a[r]=n,e.setState({formControls:a})},e.onSelectChangeHandler=function(t){var r=[];t&&(r=t.map((function(e){return e.value}))),e.setState({taskUsers:r})},e}return Object(u.a)(r,[{key:"validateControl",value:function(e,t){if(!t)return!0;var r=!0;return t.required&&(r=""!==e.trim()&&r,t.minLength&&(r=e.length>=t.minLength&&r),t.maxLength&&(r=e.length<=t.maxLength&&r)),t.startDate&&void 0!==e&&(r=new Date(e)-new Date(be(new Date))>=0&&r),t.endDate&&""!==e&&(r=new Date(e)-new Date(this.state.formControls.start_date.value)>=0&&r),r}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,r){var a=e.state.formControls[t];return n.a.createElement(P,{key:t+r,type:a.type,value:a.value,valid:a.valid,label:a.label,shouldValidate:!!a.validation,touched:e.state.touched,errorMessage:a.errorMessage,onChange:function(r){return e.onChangeHandler(r,t)},min:a.min||null,checked:a.checked})}))}},{key:"render",value:function(){var e=this,t=Object(je.a)(),r=this.props.projectUsers.map((function(e){return{value:e.id,label:e.email}}));return n.a.createElement("div",{className:he.a.CreateTask},n.a.createElement("div",null,n.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0422\u0430\u0441\u043a\u0430"),n.a.createElement("form",{onSubmit:this.submitHandler,className:he.a.CreateTaskForm},this.renderInputs(),n.a.createElement("label",{style:{fontWeight:"bold"}},"\u0412\u044b\u0431\u043e\u0440 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430"),n.a.createElement(ve.a,{closeMenuOnSelect:!1,components:t,defaultValue:[],isMulti:!0,options:r,onChange:function(t){return e.onSelectChangeHandler(t)}}),n.a.createElement(M,{type:"success",onClick:this.createTasktHandler},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0422\u0430\u0441\u043a"))))}}]),r}(n.a.Component);var Oe=Object(m.b)((function(e){return{currentProject:e.projectReducer.currentProject}}),(function(e){return{createTask:function(t){return e((r=t,function(){var e=Object(L.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.start_date||delete r.start_date,r.end_date||delete r.end_date,a=localStorage.getItem("token"),n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+a},data:JSON.stringify(r),url:"create_task"},e.next=7,D(n).then((function(){t(fe(""))})).catch((function(e){t(fe("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0422\u0430\u0441\u043a\u0430 - "))}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var r}}}))(ge),Ee=r(79),ye=r.n(Ee),ke=r(80),_e=r.n(ke),Te=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.props.fetchTasks(this.props.currentProject.id)}},{key:"renderTasks",value:function(){var e=this;return this.props.tasks.map((function(t){return n.a.createElement("li",{key:t.id},n.a.createElement(v.b,{to:t.project+"/"+t.id,onClick:function(){return e.props.setCurrentTask(t.id)}},t.title))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:_e.a.UserTasks},n.a.createElement("div",null,n.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u043d\u0438\u0439"),n.a.createElement("ul",null,this.renderTasks())))}}]),r}(a.Component);var Ce=Object(m.b)((function(e){return{tasks:e.taskReducer.tasks,currentProject:e.projectReducer.currentProject}}),(function(e){return{fetchTasks:function(t){return e(function(e){return function(){var t=Object(L.a)(w.a.mark((function t(r){var a,n,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:e},"project_tasks",n=localStorage.getItem("token"),o={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+n},data:JSON.stringify(a),url:"project_tasks"},t.next=6,D(o).then((function(e){r({type:"PROJECT_TASKS_LIST",tasks:e.data.tasks})})).catch((function(e){r(fe("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0422\u0430\u0441\u043a\u043e\u0432"))}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},setCurrentTask:function(t){return e(function(e){return{type:"CURRENT_TASK",taskId:e}}(t))}}}))(Te),Se=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.props.fetchProjectUsers(this.props.currentProject.id),this.props.location.pathname.match(/\d+/g)[0]!==this.props.currentProject.id+""&&this.props.history.push("/user_projects")}},{key:"render",value:function(){var e=this.props.currentProject,t=e.title,r=e.theme,a=e.description;return n.a.createElement("div",{className:ye.a.Project},n.a.createElement("div",{className:"jumbotron"},n.a.createElement("h2",{className:"display-4"},t),n.a.createElement("p",{className:"lead"},r),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("p",null,a),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(Ce,null),n.a.createElement(Oe,{projectUsers:this.props.projectUsers}))))}}]),r}(a.Component);var Re=Object(m.b)((function(e){return{currentProject:e.projectReducer.currentProject,projectUsers:e.projectReducer.projectUsers}}),(function(e){return{clearCurrentProject:function(){return e({type:"CLEAR_CURRENT_PROJECT"})},fetchProjectUsers:function(t){return e(function(e){return function(){var t=Object(L.a)(w.a.mark((function t(r){var a,n,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:e},"project_users",n=localStorage.getItem("token"),o={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+n},data:JSON.stringify(a),url:"project_users"},t.next=6,D(o).then((function(e){r({type:"PROJECTS_USERS_LIST",projectUsers:e.data.users})})).catch((function(e){r(F("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"))}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Se),Ue=r(81),Ne=r.n(Ue),Pe=r(142),xe=r(146),Ae=r(143),Me=r(147),Ie=r(144);function we(e){return{type:"TODO_ERROR",errorMessage:e}}var Le=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={checked:[]},e.handleToggle=function(t){return function(){var r=e.state.checked,a=r.indexOf(t),n=Object($.a)(r);-1===a?n.push(t):n.splice(a,1),e.setState({checked:n})}},e}return Object(u.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.props.fetchTodos(this.props.currentTask.id)}},{key:"render",value:function(){var e=this;return n.a.createElement(Pe.a,null,this.props.todos.map((function(t){var r="checkbox-list-label-".concat(t.id);return n.a.createElement(xe.a,{key:t.id,role:void 0,dense:!0,button:!0,onClick:e.handleToggle(t.id)},n.a.createElement(Ae.a,null,n.a.createElement(Ie.a,{edge:"start",checked:-1!==e.state.checked.indexOf(t.id),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":r},color:"primary"})),n.a.createElement(Me.a,{id:r,primary:t.text}))})))}}]),r}(a.Component);var He=Object(m.b)((function(e){return{todos:e.todoReducer.todos,currentTask:e.taskReducer.currentTask}}),(function(e){return{fetchTodos:function(t){return e(function(e){return function(){var t=Object(L.a)(w.a.mark((function t(r){var a,n,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:e},"task_todos",n=localStorage.getItem("token"),o={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+n},data:JSON.stringify(a),url:"task_todos"},t.next=6,D(o).then((function(e){r({type:"TASK_TODOS_LIST",todos:e.data.todos})})).catch((function(e){r(we("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0442\u0443\u0434\u0443"))}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},setCurrentTodo:function(t){return e(function(e){return{type:"CURRENT_TODO",todoId:e}}(t))}}}))(Le),De=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){var e=this.props.location.pathname.match(/\d+/g);e[0]===this.props.currentTask.project+""&&e[1]===this.props.currentTask.id+""||this.props.history.push("/user_projects/".concat(this.props.currentTask.project))}},{key:"render",value:function(){var e=this.props.currentTask,t=e.title,r=e.description;return n.a.createElement("div",{className:Ne.a.Task},n.a.createElement("div",{className:"jumbotron"},n.a.createElement("h2",{className:"display-4"},t),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("p",null,r),n.a.createElement(He,null)))}}]),r}(a.Component);var Fe=Object(m.b)((function(e){return{currentTask:e.taskReducer.currentTask}}),(function(e){return{clearCurrentTask:function(){return e({type:"CLEAR_CURRENT_TASK"})}}}))(De),Je=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=n.a.createElement(O.d,null,n.a.createElement(O.b,{path:"/auth",component:q}),n.a.createElement(O.b,{path:"/registration",component:z}),n.a.createElement(O.b,{exact:!0,path:"/",component:_}),n.a.createElement(O.a,{to:"/"}));return this.props.isAuthenticated&&(e=n.a.createElement(O.d,null,n.a.createElement(O.b,{path:"/create_project/",component:ue}),n.a.createElement(O.b,{path:"/user_projects/:id/:id/",component:Fe}),n.a.createElement(O.b,{path:"/user_projects/:id/",component:Re}),n.a.createElement(O.b,{path:"/user_projects/",component:de}),n.a.createElement(O.b,{path:"/logout/",component:Q}),n.a.createElement(O.b,{path:"/",exact:!0,component:_}),n.a.createElement(O.a,{to:"/"}))),n.a.createElement(g,null,e)}}]),r}(n.a.Component);var Ke=Object(O.g)(Object(m.b)((function(e){return{isAuthenticated:!!e.authReducer.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");t?D({method:"GET",headers:{Authorization:"Token "+t},url:"auth/user"}).then((function(r){e(K(r.data,t))})).catch((function(t){e(J())})):e(J())}))}}}))(Je));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ve=r(24),qe={token:null,user:{},errorMessage:""};var Be={projects:[],errorMessage:"",currentProject:{},projectUsers:[],projectUserTypes:[]};var We={tasks:[],errorMessage:"",currentTask:{}};var Ge={todos:[],errorMessage:"",currentTodo:{}};var ze=Object(Ve.c)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{token:t.token,user:t.user,errorMessage:""});case"AUTH_LOGOUT":return qe;case"AUTH_ERROR":case"REGISTRATION_ERROR":return Object(T.a)(Object(T.a)({},e),{},{errorMessage:t.errorMessage});default:return e}},projectReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_PROJECTS_LIST":return Object(T.a)(Object(T.a)({},e),{},{projects:t.projects,errorMessage:""});case"PROJECT_ERROR":return Object(T.a)(Object(T.a)({},e),{},{errorMessage:t.errorMessage});case"CURRENT_PROJECT":var r={};return e.projects.forEach((function(e){e.id===t.projectId&&(r=e)})),Object(T.a)(Object(T.a)({},e),{},{currentProject:r});case"CLEAR_CURRENT_PROJECT":return Object(T.a)(Object(T.a)({},e),{},{currentProject:{}});case"PROJECTS_USERS_LIST":return Object(T.a)(Object(T.a)({},e),{},{projectUsers:t.projectUsers});case"PROJECT_USER_TYPES_LIST":return Object(T.a)(Object(T.a)({},e),{},{projectUserTypes:t.projectUserTypes});case"CLEAR_USER_PROJECTS":return Be;default:return e}},taskReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROJECT_TASKS_LIST":return Object(T.a)(Object(T.a)({},e),{},{tasks:t.tasks,errorMessage:""});case"TASK_ERROR":return Object(T.a)(Object(T.a)({},e),{},{errorMessage:t.errorMessage});case"CURRENT_TASK":var r={};return e.tasks.forEach((function(e){e.id===t.taskId&&(r=e)})),Object(T.a)(Object(T.a)({},e),{},{currentTask:r,errorMessage:""});case"CLEAR_CURRENT_TASK":return Object(T.a)(Object(T.a)({},e),{},{currentTask:{},errorMessage:""});case"CLEAR_PROJECT_TASKS":return We;default:return e}},todoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TASK_TODOS_LIST":return Object(T.a)(Object(T.a)({},e),{},{todos:t.todos,errorMessage:""});case"TODO_ERROR":return Object(T.a)(Object(T.a)({},e),{},{errorMessage:t.errorMessage});case"CURRENT_TODO":var r={};return e.todos.forEach((function(e){e.id===t.todoId&&(r=e)})),Object(T.a)(Object(T.a)({},e),{},{currentTodo:r,errorMessage:""});case"CLEAR_CURRENT_TODO":return Object(T.a)(Object(T.a)({},e),{},{currentTodo:{},errorMessage:""});case"CLEAR_TASK_TODOS":return Ge;default:return e}}}),Ye=r(82),Qe=r(61),Xe=r(83),$e=r.n(Xe),Ze=r(84),et="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Ve.d,tt={key:"root",storage:$e.a},rt=Object(Qe.a)(tt,ze),at=Object(Ve.e)(rt,et(Object(Ve.a)(Ye.a))),nt=Object(Qe.b)(at);c.a.render(n.a.createElement(m.a,{store:at},n.a.createElement(v.a,null,n.a.createElement(Ze.a,{loading:null,persistor:nt},n.a.createElement(Ke,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,r){e.exports={Auth:"Auth_Auth__DhNf9",AuthForm:"Auth_AuthForm__2N-UP"}},54:function(e,t,r){e.exports={Input:"Input_Input__2lUQi",invalid:"Input_invalid__20xI2"}},55:function(e,t,r){e.exports={Button:"Button_Button__2WSLj",success:"Button_success__3YAmo",primary:"Button_primary__3Sg1K"}},56:function(e,t,r){e.exports={Registration:"Registration_Registration__1307e",RegistrationForm:"Registration_RegistrationForm__2SDQF"}},57:function(e,t,r){e.exports={CreateProject:"CreateProject_CreateProject__2rVmo",CreateProjectForm:"CreateProject_CreateProjectForm__SNxHv"}},58:function(e,t,r){e.exports={UserType:"UserType_UserType__2gBwh",SelectGroup:"UserType_SelectGroup__3v2Qh"}},59:function(e,t,r){e.exports={card:"UserProjects_card__2Dtop",cardBody:"UserProjects_cardBody__1SPOf"}},60:function(e,t,r){e.exports={CreateTask:"CreateTask_CreateTask__1KZRi",CreateTaskForm:"CreateTask_CreateTaskForm__1AsaJ"}},72:function(e,t,r){e.exports={Layout:"Layout_Layout__3Glqr"}},74:function(e,t,r){e.exports={Header:"Header_Header__1eyLK"}},76:function(e,t,r){e.exports={Home:"Home_Home__27h3f"}},78:function(e,t,r){e.exports={Select:"Select_Select__3EMUb"}},79:function(e,t,r){e.exports={Project:"Project_Project__3UQCl",jumbotron:"Project_jumbotron__2xYJw"}},80:function(e,t,r){e.exports={UserTasks:"UserTasks_UserTasks__2Kxop"}},81:function(e,t,r){e.exports={Task:"Task_Task__2_BHY"}},90:function(e,t,r){e.exports=r(122)},95:function(e,t,r){},96:function(e,t,r){e.exports={App:"App_App__3MMMQ"}}},[[90,1,2]]]);
//# sourceMappingURL=main.d7618d42.chunk.js.map