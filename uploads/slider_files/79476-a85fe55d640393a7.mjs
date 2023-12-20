"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[79476,5750],{505025:(e,s,a)=>{a.d(s,{Oz:()=>r,mo:()=>i,nt:()=>n,v8:()=>t});let r={BUSINESS_ACCOUNT:"BUSINESS_ACCOUNT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",USER_ACCOUNT:"USER",AD_ACCOUNT:"AD_ACCOUNT",PROFILE:"PROFILE"},t="BUSINESS_PANEL",n="ASSET_PANEL",i=500},577937:(e,s,a)=>{a.d(s,{Fe:()=>r,bO:()=>i,eQ:()=>t,s4:()=>n});let r={BUSINESS_HIERARCHY_CHILD:"BUSINESS_HIERARCHY_CHILD",BUSINESS_HIERARCHY_MEMBER:"BUSINESS_HIERARCHY_MEMBER"},t={business_relationship_invite:"business_relationship"},n={PARTNER_REQUEST:"PARTNER_REQUEST",MEMBER_INVITE:"MEMBER_INVITE",PARTNER_INVITE:"PARTNER_INVITE",ORGANIZATION_MANAGER_INVITE:"ORGANIZATION_MANAGER_INVITE"},i=e=>0===e?"DIRECT_PERMISSION":"AGGREGATED_PERMISSION"},326884:(e,s,a)=>{a.d(s,{EF:()=>o,Hg:()=>v,Hl:()=>A,IR:()=>p,Je:()=>c,K3:()=>C,O1:()=>G,Q6:()=>E,QE:()=>r,V3:()=>S,Z4:()=>b,c7:()=>N,cU:()=>i,cg:()=>t,dZ:()=>n,gO:()=>y,j$:()=>I,j9:()=>O,pg:()=>g,pt:()=>D,qq:()=>$,sy:()=>u,tP:()=>h,tU:()=>U,uE:()=>m,vk:()=>P,w2:()=>d,we:()=>R,ww:()=>T,xX:()=>_,yR:()=>l});let r=3e3,t=280,n=500,i=1e4,_=250,d=_+1,c=50,u=50,o=20,l=20,E={DASHBOARD:"DASHBOARD",PEOPLE:"PEOPLE",PARTNERS:"PARTNERS",AD_ACCOUNTS:"AD_ACCOUNTS",AD_ACCOUNTS_PENDING_TAB:"AD_ACCOUNTS_PENDING_TAB",HISTORY:"HISTORY",PEOPLE_DETAIL:"PEOPLE_DETAIL",PARTNERS_DETAIL:"PARTNERS_DETAIL",SHARED_PARTNERS_DETAIL:"SHARED_PARTNERS_DETAIL",AD_ACCOUNTS_DETAIL:"AD_ACCOUNTS_DETAIL",PENDING_AD_ACCOUNTS_DETAIL:"PENDING_AD_ACCOUNTS_DETAIL",PEOPLE_INVITES:"PEOPLE_INVITES",PARTNERS_INVITES:"PARTNERS_INVITES",CHOOSER:"CHOOSER",PARTNERS_REQUEST_PAGE:"PARTNERS_REQUEST_PAGE",PARTNERS_INVITE_PAGE:"PARTNERS_INVITE_PAGE",PROFILES:"PROFILES",PROFILES_DETAIL:"PROFILES_DETAIL",PARTNERS_PENDING_TAB:"PARTNERS_PENDING_TAB",PEOPLE_PENDING_TAB:"PEOPLE_PENDING_TAB",USERS:"USERS",ACOUNTS:"ACCOUNTS",BUSINESS_SECURITY:"BUSINESS_SECURITY",SUPPORT_TOOL:"SUPPORT_TOOL",ASSETS:"ASSETS",ASSET_GROUPS:"ASSET_GROUPS",INVOICE_MANAGEMENT:"INVOICE_MANAGEMENT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",MANAGERS:"MANAGERS",AUDIENCES:"AUDIENCES",SHARED_TAGS:"SHARED_TAGS"},m={PARTNER:"PARTNER",PARTNER_ADMIN:"PARTNER_ADMIN"},b={ADVERTISER_OWNED_AD_ACCOUNT:"ADVERTISER_OWNED_AD_ACCOUNT",AGENCY_OWNED_AD_ACCOUNT:"AGENCY_OWNED_AD_ACCOUNT"},p={ASCENDING:"ASCENDING",DESCENDING:"DESCENDING"},N={AD_ACCOUNT:"AD_ACCOUNT",PERSON:"PERSON",PARTNER:"PARTNER"},A={PERSON:"PERSON",PARTNER:"PARTNER",PROFILE:"PROFILE"},y={ADMIN:"ADMIN",ANALYST:"ANALYST",FINANCE_MANAGER:"FINANCE_MANAGER",AUDIENCE_MANAGER:"AUDIENCE_MANAGER",CAMPAIGN_MANAGER:"CAMPAIGN_MANAGER",CATALOGS_MANAGER:"CATALOGS_MANAGER"},I=["ADMIN","ANALYST","FINANCE_MANAGER","AUDIENCE_MANAGER","CAMPAIGN_MANAGER","CATALOGS_MANAGER"],S={EMPLOYEE:"EMPLOYEE",BIZ_ADMIN:"BIZ_ADMIN",OWNER:"OWNER"},v=["PROFILE_PUBLISHER"],h={AD_ACCOUNT:0,PROFILE:2,ASSET_GROUP:3},T={0:"AD_ACCOUNT",2:"PROFILE",3:"ASSET_GROUP"},R={id:"0",is_pin_support_user:!0,biz_roles:[S.BIZ_ADMIN],business_roles:[S.BIZ_ADMIN],user:{username:"psupport",full_name:"Pinterest support",image_small_url:"https://i.pinimg.com/60x60_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg",image_medium_url:"https://i.pinimg.com/150x150_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg"}},D={ACTIVE:0,PENDING:1},C={ACTIVE:"active",PENDING:"pending"},O="filter_type",P={page:1,totalCount:0,limit:10,sortDirection:"ASCENDING",sortBy:void 0,searchBy:void 0,searchTerm:""},$={WARNING:"WARNING",DEFAULT:"DEFAULT"},G={BUSINESS_INVITE_INVALID:2932,BUSINESS_ACCESS_PERSONAL_ACCOUNT:2936,INVALID_USERNAME:90,ACCESS_DENIED:280,BUSINESS_RELATIONSHIP_ALREADY_EXISTS:2751,ODO_BUSINESS_RELATIONSHIP_ALREADY_EXISTS:53,BUSINESS_RELATIONSHIP_COUNT_EXCEEDED:2769,BUSINESS_NUMBER_MEMBERS_IN_POLICY_EXCEEDS:2938,ODO_BUSINESS_NUMBER_MEMBERS_IN_POLICY_EXCEEDS:66,ODO_BIZ_INVITE_EXISTS:71,INVALID_ODO_REQUEST:2755,BUSINESS_INVITE_STACKED_ERROR:2773,ACL_POLICY_NOT_FOUND:1110,BUSINESS_INVITE_NOT_EXIST:2770},g={ALL_TAGS:"ALL",OWNED:"OWNED",SHARED:"SHARED"},U="https://s.pinimg.com/images/user/default_60.png"},165544:(e,s,a)=>{a.d(s,{$2:()=>_,Ah:()=>c,IW:()=>i,Vs:()=>u,dF:()=>o,sl:()=>d});var r=a(326884),t=a(49428),n=a(76041);let i=(e={},s={})=>{if(e.limit||e.sortBy||e.sortDirection||e.searchTerm)return 0;if(e.page){let a=e.limit||s.limit,r=e.page||s.page;return(r-1)*a}return s.startIndex||0},_=(e={},s)=>{if(e.limit||e.sortBy||e.sortDirection||e.searchTerm)return 0;if(e.page){let a=e.limit||s.limit,r=e.page||s.page;return(r-1)*a}return s.startIndex},d=(e,s,a,r)=>{let{businessId:t,...n}=a,{...i}=r;return{id:e,...i,...n,searchBy:n.searchBy,searchTerm:n.searchTerm||i.searchTerm,limit:n.limit||i.limit,page:n.page||i.page,sortBy:n.sortBy||i.sortBy,sortDirection:n.sortDirection||i.sortDirection,startIndex:s,...0===s&&{page:1}}},c=(e,s)=>s.reduce((s,a)=>({ids:s.ids.concat(e(a)),data:{...s.data,[e(a)]:a}}),{ids:[],data:{}}),u=(e,s)=>{var a,r,t,n,_;let d={page:null!==(a=e.page)&&void 0!==a?a:s.page,limit:null!==(r=e.limit)&&void 0!==r?r:s.limit,sortBy:null!==(t=e.sortBy)&&void 0!==t?t:s.sortBy,searchBy:e.searchBy,searchTerm:null!==(n=e.searchTerm)&&void 0!==n?n:s.searchTerm,sortDirection:null!==(_=e.sortDirection)&&void 0!==_?_:s.sortDirection},c=i(e,s);return{...d,startIndex:c,...0===c&&{page:1}}},o=async(e,s,a)=>{let i="PEOPLE"===a?n.JC:t.Eg,{data:{data:_=[],total_data_count:d}={}}=await i({...e,limit:r.xX,startIndex:0,id:e.id||""}),c=Math.ceil(d/r.xX);if(c<=1)return{data:{data:_,total_data_count:d}};let u=[...Array(c).keys()].slice(1),o=await Promise.allSettled(u.map(s=>i({...e,limit:r.xX,startIndex:s*r.xX}))),l=o.reduce((e,s)=>{var a,r;return null!==(a=s.value)&&void 0!==a&&null!==(r=a.data)&&void 0!==r&&r.data&&(e=e.concat(s.value.data.data)),e},_);return{data:{data:l,total_data_count:d}}}},433835:(e,s,a)=>{a.d(s,{ib:()=>m,vf:()=>N,XV:()=>A,jC:()=>p,oC:()=>E,W3:()=>I,fc:()=>$,cE:()=>T,xZ:()=>y,lo:()=>G,N1:()=>O,BG:()=>P,eo:()=>D,pI:()=>h,cp:()=>R,G2:()=>C,cR:()=>S,GS:()=>U,JE:()=>g,EB:()=>l});var r=a(983722),t=a(131980),n=a(326884),i=a(186656),_=a(49428),d=a(76041);let c=async(e,s,a,r=[])=>{let t=await (0,i.Z)({url:e,method:"GET",data:s}),n={bookmark:void 0,data:{business_id:"",data:[]},...t.resource_response};if(!n.bookmark){let e=a(n.data);return e.push(...r),n.data}return await c(e,{...s,bookmark:n.bookmark},a,r.concat(...a(n.data)))},u={get:(e,s={})=>c(e,s,e=>e.data,[])};var o=a(239838);let l=async(e,s,a,r,t,n,i,c)=>"PARTNER"===n?await (0,_.SZ)({businessId:t,partnerId:e,assetId:r,roles:s,clientBusinessId:i,businessHierarchyNodeId:c}):await (0,d.Jg)({businessId:t,memberId:e,assetId:r,roles:s,permissions:a,businessHierarchyNodeId:c}),E=async(e,s,a,r)=>{if(0===s.length)return;let t=[];s.forEach(({assigneeIds:s,adAccountIds:n,roles:i})=>{0!==i.length&&s.forEach(s=>{n.forEach(n=>{t.push(l(s,i,i,n,e,a,void 0,r))})})}),await Promise.all(t)},m=async(e,s,a,r,t)=>{let n="PEOPLE"===r?"MEMBER_INVITE":"PARTNER_INVITE",_=s.reduce((e,s)=>{let a=Object.keys(s)[0],r=Object.values(s)[0],t=r.includes("ADMIN")?{[a]:["ADMIN"]}:s;return{...e,...t}},{}),d=a.map(s=>(0,i.Z)({url:`/ads/v4/business_access/businesses/${e}/invites/${s}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(_),invite_type:n,business_hierarchy_node_id:t}}));await Promise.all(d)},b=e=>e.reduce((e,s)=>{let a=Object.keys(s)[0],r=Object.values(s)[0],t=r.includes("ADMIN")?{[a]:["ADMIN"]}:s;return{...e,...t}},{}),p=async(e,s,a,t)=>{var n,_;let{anyEnabled:d}=null!==(n=null===(_=(0,r.Z)())||void 0===_?void 0:_.experimentsClient.checkExperiment("business_access_invites_api_v4_migration"))&&void 0!==n?n:{},c=b(a);if(d){let a=await (0,i.Z)({url:`/ads/v4/business_access/businesses/${e}/partners/${s}/assets/access/`,method:"POST",data:{resource_id_to_roles:c}});return a.resource_response.data}let u=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/partners/${s}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(c),business_hierarchy_node_id:t}});return u.resource_response.data},N=async(e,s,a,r,t)=>{let n=s.reduce((e,s)=>{let a=Object.keys(s)[0],r=Object.values(s)[0],t=r.includes("ADMIN")?{[a]:["ADMIN"]}:s;return{...e,...t}},{}),_=a.map(s=>(0,i.Z)({url:`/ads/v4/business_access/businesses/${e}/invites/${s}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(n),invite_type:r,business_hierarchy_node_id:t}}));await Promise.all(_)},A=async(e,s,a,r)=>{let t=s.reduce((e,s)=>{let a=Object.keys(s)[0],r=Object.values(s)[0],t=r.includes("ADMIN")?{[a]:["ADMIN"]}:s;return{...e,...t}},{}),n=await (0,i.Z)({url:`/ads/v4/business_access/businesses/${e}/invites/${a}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(t),invite_type:"PARTNER_REQUEST",business_hierarchy_node_id:r}});return n.resource_response},y=async()=>{let e=await (0,i.Z)({url:"ads/v4/advertisers/countries/",method:"GET"});return e.resource_response.data},I=async(e,s,a,r,n,_)=>{let d=await (0,i.Z)({url:"/ads/v4/advertisers/",method:"POST",data:{owner_user_id:e,name:r,country:n,business_hierarchy_node_id:a,tos_id:_||(0,o.Fc)(t.tN[n]),...s&&{agency_user_id:s}}});return d.resource_response.data},S=async()=>{var e,s,a;let{anyEnabled:t}=null!==(e=null===(s=(0,r.Z)())||void 0===s?void 0:s.experimentsClient.checkExperiment("business_access_employees_api_v4_migration"))&&void 0!==e?e:{};if(t){let e=await (0,i.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),s=null===(a=e.resource_response.data)||void 0===a?void 0:a.data;return await Promise.all(s||[])}let n=await u.get("ads/internal/business_access/users/me/employers/"),_=n.data;return await Promise.all(_||[])},v=async({businessId:e,assetId:s,limit:a,sortBy:r="name",searchBy:t="name",searchTerm:n,startIndex:_,sortDirection:d,resourceType:c})=>{let u=s?JSON.stringify({child_asset_id:s}):void 0,o=await (0,i.Z)({url:`/ads/v4/business_access/businesses/${e}/assets/`,data:{page_size:a,sort_by:r,search_by:t,start_index:_,search_value:n,sort_ascending:"ASCENDING"===d,resource_type:c,filters:u}});return o.resource_response},h=async({businessId:e,assetIds:s,resourceType:a,limit:r,sortBy:t,sortDirection:n="ASCENDING",searchBy:_,searchTerm:d="",startIndex:c=0,filtersPayload:u})=>{let o=u&&Object.keys(u).length>0?{filters:JSON.stringify(u)}:{};return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/assets_by_ids`,data:{asset_ids:s,resource_type:a,page_size:r,sort_by:t,sort_direction:n,search_by:_,search_value:d,start_index:c,...o}})).resource_response},T=async({id:e,limit:s,sortBy:a="name",searchBy:t="name",searchTerm:n="",startIndex:_=0,sortDirection:d="ASCENDING",forPartner:c=!1,includeAssetSummary:u=!1})=>{var o,l;let{anyEnabled:E}=null!==(o=null===(l=(0,r.Z)())||void 0===l?void 0:l.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==o?o:{};if(E){let r=await v({id:e,businessId:e,limit:s,sortBy:a,searchBy:t,searchTerm:n,startIndex:_,sortDirection:d,resourceType:"AD_ACCOUNT"});if(!u)return r;{let a=await h({businessId:e,assetIds:(null==r?void 0:r.data.data.map(e=>e.asset_id))||[],limit:s,resourceType:"AD_ACCOUNT"}),t=null==r?void 0:r.data.data.map(e=>({...e,...null==a?void 0:a.data.data[e.asset_id]}));return{...r,data:{...null==r?void 0:r.data,data:t}}}}{let r=await (0,i.Z)({url:`/ads/internal/business_access/businesses/${String(e)}/all_assets/`,data:{limit:s,sort_by:a,sort_ascending:"ASCENDING"===d,search_by:t,search_value:n,start_index:_,for_partner:c}});return r.resource_response}},R=async({id:e,limit:s,sortBy:a="name",sortDirection:t="ASCENDING",searchBy:_="name",searchTerm:d="",startIndex:c=0,forPartner:u})=>{var o,l;let{anyEnabled:E}=null!==(o=null===(l=(0,r.Z)())||void 0===l?void 0:l.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==o?o:{};if(E)return v({id:e,businessId:e,limit:s,sortBy:a,searchBy:_,searchTerm:d,startIndex:c,sortDirection:t,resourceType:"PROFILE"});{let r=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/all_assets/`,data:{limit:s,sort_by:a,sort_ascending:"ASCENDING"===t,search_by:_,search_value:d,start_index:c,for_partner:u,type:n.tP.PROFILE}});return r.resource_response}},D=async({id:e,assetIds:s,limit:a,type:t})=>{var _,d;let{anyEnabled:c}=null!==(_=null===(d=(0,r.Z)())||void 0===d?void 0:d.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==_?_:{};if(c)return await h({businessId:e,resourceType:n.ww[t],assetIds:s});let u=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/batch_assets/`,method:"GET",data:{limit:a,type:t,assets_ids:s.join(",")}});return u.resource_response},C=async({businessId:e,assetId:s})=>{var a,t,n,_;let{anyEnabled:d}=null!==(a=null===(t=(0,r.Z)())||void 0===t?void 0:t.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==a?a:{};if(d){let a=await h({businessId:e,assetIds:[s]});return{...null==a?void 0:a.data,data:{...null==a?void 0:null===(n=a.data)||void 0===n?void 0:n.data,data:null==a?void 0:null===(_=a.data)||void 0===_?void 0:_.data[s]}}}let c=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/assets/${s}/`,method:"GET"});return c.resource_response},O=async({businessId:e,assetId:s,limit:a,sortBy:t,searchBy:n,searchTerm:_,startIndex:d,sortDirection:c})=>{var u,o;let{anyEnabled:l}=null!==(u=null===(o=(0,r.Z)())||void 0===o?void 0:o.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==u?u:{};if(l){let r=await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/assets/${s}/partners/`,data:{page_size:a,sort_by:t,search_by:n||"FULL_NAME",start_index:d,search_value:_,sort_ascending:"ASCENDING"===c}});return r.resource_response}{let r=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/assets/${s}/partners/`,data:{limit:a,sort_by:t,search_by:n||"full_name",start_index:d,search_value:_,sort_ascending:"ASCENDING"===c}}),u=r.resource_response;return u}},P=async({businessId:e,assetId:s,limit:a,sortBy:t,searchBy:n,searchTerm:_,startIndex:d,sortDirection:c})=>{var u,o;let{anyEnabled:l}=null!==(u=null===(o=(0,r.Z)())||void 0===o?void 0:o.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==u?u:{};if(l){let r=await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/assets/${s}/members/`,data:{page_size:a,sort_by:t,search_by:n||"FULL_NAME",start_index:d,search_value:_,sort_ascending:"ASCENDING"===c}});return r.resource_response}{let r=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/assets/${s}/members/`,data:{limit:a,sort_by:t,search_by:n||"full_name",start_index:d,search_value:_,sort_ascending:"ASCENDING"===c}}),u=r.resource_response;return u}},$=async({id:e,businessId:s,assetId:a,limit:r,sortBy:t="name",searchBy:n="name",searchTerm:i,startIndex:_,sortDirection:d,resourceType:c="ASSET_GROUP"})=>v({id:e,businessId:s,assetId:a,limit:r,sortBy:t,searchBy:n,searchTerm:i,startIndex:_,sortDirection:d,resourceType:c}),G=async({id:e,businessId:s,limit:a,sortBy:r="name",searchBy:t="name",searchTerm:n,startIndex:i,sortDirection:_,resourceType:d="ASSET_GROUP"})=>v({id:e,businessId:s,limit:a,sortBy:r,searchBy:t,searchTerm:n,startIndex:i,sortDirection:_,resourceType:d}),g=async(e,s)=>{let a=await (0,i.Z)({url:`ads/v4/businesses/${e.businessId}/advertisers/metrics`,method:"POST",data:s});return a.resource_response.data},U=async(e,s)=>{let a=await (0,i.Z)({url:`ads/v4/business_hierarchy/${e.businessHierarchyId}/advertisers/metrics`,method:"POST",data:s});return a.resource_response.data}},49428:(e,s,a)=>{a.d(s,{Bq:()=>I,Cj:()=>E,Eg:()=>p,F0:()=>b,FA:()=>_,Jq:()=>l,K7:()=>m,M9:()=>S,OA:()=>T,Of:()=>y,SB:()=>A,SZ:()=>h,Zk:()=>o,c4:()=>N,ek:()=>c,h9:()=>v,qC:()=>d,w8:()=>u,wi:()=>R});var r=a(983722),t=a(326884),n=a(186656),i=a(165544);let _=async({businessId:e,requestIds:s,includeAssetSummary:a})=>{let r=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/batch_partners/`,method:"GET",data:{partners:s,assets_summary:a}}),{data:{data:t}}={data:{},...r.resource_response};return t},d=async({businessId:e,requestIds:s,includeAssetSummary:a})=>{let r=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/shared/batch_partners/`,method:"GET",data:{partners:s,assets_summary:a}}),{data:{data:t}}={data:{},...r.resource_response};return t},c=async(e,s)=>{var a,i;let{anyEnabled:_}=null!==(a=null===(i=(0,r.Z)())||void 0===i?void 0:i.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==a?a:{};if(_){let a=await (0,n.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/assets/`,method:"GET",data:{limit:t.cU}});return{data:[],business_id:"",partner_id:"",...a.resource_response.data}}let d=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/partners/${s}/assets/`,method:"GET",data:{limit:t.cU}});return{data:[],business_id:"",partner_id:"",...d.resource_response.data}},u=async(e,s)=>{let a=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/partners/${s}/asset_counts/`,method:"GET"});return a.resource_response.data},o=async({partnerId:e,role:s,businessId:a,businessHierarchyNodeId:t})=>{var i,_;let{anyEnabled:d}=null!==(i=null===(_=(0,r.Z)())||void 0===_?void 0:_.experimentsClient.checkExperiment("business_access_invites_api_v4_migration"))&&void 0!==i?i:{};if(d){let s=await (0,n.Z)({url:`ads/v4/business_access/businesses/${a}/partners/${e}/invite/`,method:"POST",data:{invite_type:"PARTNER_INVITE",business_hierarchy_node_id:t}});return s.resource_response}{let r=await (0,n.Z)({url:`ads/internal/business_access/businesses/${a}/partners/${e}/invite/`,method:"POST",data:{role_name:s,business_hierarchy_node_id:t}});return r.resource_response}},l=async({partnerId:e,role:s,businessId:a})=>{var t,i;let{anyEnabled:_}=null!==(t=null===(i=(0,r.Z)())||void 0===i?void 0:i.experimentsClient.checkExperiment("business_access_invites_api_v4_migration"))&&void 0!==t?t:{};if(_){let s=await (0,n.Z)({url:`ads/v4/business_access/businesses/${a}/partners/${e}/invite/`,method:"POST",data:{invite_type:"PARTNER_REQUEST"}});return s.resource_response}{let r=await (0,n.Z)({url:`ads/internal/business_access/businesses/${a}/partners/${e}/invite/`,method:"POST",data:{role_name:s,type:"PARTNER_REQUEST"}});return r.resource_response}},E=async({businessId:e,partnerId:s,businessHierarchyNodeId:a,role:r})=>{let t=await (0,n.Z)({url:`/ads/internal/business_access/businesses/${e}/partners/${s}/`,method:"DELETE",data:{role_name:r,business_hierarchy_node_id:a}});return t.resource_response},m=async({businessId:e,partnerId:s,businessHierarchyNodeId:a,role:r,partner_type:t})=>{let i=await (0,n.Z)({url:`/ads/v4/business_access/businesses/${e}/partners/${s}/`,method:"DELETE",data:{role_name:r,partner_type:t,business_hierarchy_node_id:a}});return i.resource_response},b=async({id:e,limit:s,sortBy:a="full_name",searchBy:r="full_name",searchTerm:t="",startIndex:i=0,sortDirection:_="ASCENDING",includeAssetSummary:d=!0})=>{let c=await (0,n.Z)({url:`/ads/internal/business_access/businesses/${e}/all_partners/`,method:"GET",data:{limit:s,sort_by:a,search_by:r,start_index:i,search_value:t,assets_summary:d?"true":"false",sort_ascending:"ASCENDING"===_}}),u={data:{data:[]},...c.resource_response};return u.data.data=u.data.data.map(s=>{var a;return(null==s?void 0:null===(a=s.created_by_biz)||void 0===a?void 0:a.id)===e&&(s.isAgencyPartner=!0),s}),u},p=async({id:e,limit:s,sortBy:a="full_name",searchBy:r=["FULL_NAME","BUSINESS_ID","USERNAME"],searchTerm:t="",startIndex:i=0,sortDirection:_="ASCENDING",includeAssetSummary:d,partnerType:c,partners:u=[]})=>{let o=await (0,n.Z)({url:`ads/v4/business_access/businesses/${e}/partners/`,data:{page_size:s,sort_by:a,search_by:r,start_index:i,search_value:t,assets_summary:d?"true":"false",sort_ascending:"ASCENDING"===_,partner_type:c,partner_ids:u}});return o.resource_response},N=async({businessId:e,partnerId:s,includeAssetSummary:a=!0})=>{var r,t;let i=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/partners/${s}/`,method:"GET",data:{assets_summary:a?"true":"false "}});if((null===(r=i.resource_response.data)||void 0===r?void 0:null===(t=r.created_by_biz)||void 0===t?void 0:t.id)===e){let e={data:{isAgencyPartner:void 0},...i.resource_response};return e.data.isAgencyPartner=!0,e}return i.resource_response},A=async({businessId:e,partnerId:s,limit:a,sortBy:t,searchBy:i="name",searchTerm:_,startIndex:d,sortDirection:c})=>{var u,o;let{anyEnabled:l}=null!==(u=null===(o=(0,r.Z)())||void 0===o?void 0:o.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==u?u:{};if(l){let r=await (0,n.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/assets/`,method:"GET",data:{limit:a,sort_by:t,..._&&{search_by:i},start_index:d,search_value:_,sort_ascending:"ASCENDING"===c,partner_type:"INTERNAL"}});return r.resource_response}let E=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/partners/${s}/assets/`,method:"GET",data:{limit:a,sort_by:t,..._&&{search_by:i},start_index:d,search_value:_,sort_ascending:"ASCENDING"===c}});return E.resource_response},y=async({businessId:e,partnerId:s,limit:a,sortBy:t,searchBy:i="name",searchTerm:_,startIndex:d,sortDirection:c})=>{var u,o;let{anyEnabled:l}=null!==(u=null===(o=(0,r.Z)())||void 0===o?void 0:o.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==u?u:{};if(l){let r=await (0,n.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/assets/`,method:"GET",data:{limit:a,sort_by:t,..._&&{search_by:i},start_index:d,search_value:_,sort_ascending:"ASCENDING"===c,partner_type:"EXTERNAL"}});return r.resource_response}let E=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/shared/${s}/assets/`,method:"GET",data:{limit:a,sort_by:t,..._&&{search_by:i},start_index:d,search_value:_,sort_ascending:"ASCENDING"===c}});return E.resource_response},I=async({businessId:e,partnerId:s,limit:a,sortBy:r,searchBy:t="name",searchTerm:i,startIndex:_,sortDirection:d})=>{let c=await (0,n.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/assets/`,method:"GET",data:{limit:a,sort_by:r,...i?{search_by:t}:{},start_index:_,search_value:i,sort_ascending:"ASCENDING"===d,resource_type:"ASSET_GROUP",partner_type:"INTERNAL"}});return c.resource_response},S=async(e,s,a=!1)=>{let _=await (0,i.dF)({id:e,partnerType:"INTERNAL"},s,"PARTNER"),d=_.data.data,c=await Promise.all(d.map(async({id:s})=>{var i,_;let{anyEnabled:d}=null!==(i=null===(_=(0,r.Z)())||void 0===_?void 0:_.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==i?i:{};if(d){let r=await (0,n.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/assets/`,method:"GET",data:{limit:t.xX,resource_type:t.ww[a?t.tP.PROFILE:t.tP.AD_ACCOUNT],partner_type:"INTERNAL"}});return r.resource_response.data}let c=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/partners/${s}/assets/`,method:"GET",data:{limit:t.cU,type:a?t.tP.PROFILE:t.tP.AD_ACCOUNT}});return c.resource_response.data}));return d.map((e,s)=>({...e,assets:c[s].data}))},v=async({businessId:e,partnerId:s,assetId:a})=>{let r=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/partners/${s}/assets/${a}/`,method:"GET"});return r.resource_response},h=async({businessId:e,partnerId:s,assetId:a,roles:t,clientBusinessId:i,businessHierarchyNodeId:_})=>{var d,c;let{anyEnabled:u}=null!==(d=null===(c=(0,r.Z)())||void 0===c?void 0:c.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==d?d:{};if(u){let r=await (0,n.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/assets/${a}/access/`,method:"PUT",data:{permissions:t.includes("ADMIN")?["ADMIN"]:t,business_hierarchy_node_id:_,...i?{client_business_id:i}:{}}});return r.resource_response.data}{let r=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/partners/${s}/assets/${a}/access/`,method:"PUT",data:{finalRoles:t.includes("ADMIN")?["ADMIN"]:t,business_hierarchy_node_id:_,...i?{client_business_id:i}:{}}});return r.resource_response.data}},T=async({businessId:e,partnerId:s,assetId:a,businessHierarchyNodeId:t,partner_type:i="INTERNAL"})=>{var _,d;let{anyEnabled:c}=null!==(_=null===(d=(0,r.Z)())||void 0===d?void 0:d.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==_?_:{};if(c){let r=await (0,n.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/assets/${a}/access/`,method:"DELETE",data:{partner_type:i,business_hierarchy_node_id:t}});return r.resource_response.data}{let r=await (0,n.Z)({url:`ads/internal/business_access/businesses/${e}/partners/${s}/assets/${a}/access/`,method:"DELETE",data:{partner_type:i,business_hierarchy_node_id:t}});return r.resource_response.data}},R=async({businessId:e,assetId:s,limit:a,sortBy:r,searchBy:t="FULL_NAME",searchTerm:i,startIndex:_,sortDirection:d})=>{let c=await (0,n.Z)({url:`ads/v4/business_access/businesses/${e}/assets/${s}/partners/`,data:{page_size:a,sort_by:r,search_by:t,search_value:i,start_index:_,sort_ascending:"ASCENDING"===d}});return c.resource_response}},76041:(e,s,a)=>{a.d(s,{GL:()=>I,JC:()=>m,Jg:()=>S,QC:()=>N,UQ:()=>o,bP:()=>v,dx:()=>l,kF:()=>h,kH:()=>b,kJ:()=>c,kY:()=>p,mZ:()=>A,n5:()=>y,p6:()=>E,p_:()=>u});var r=a(983722),t=a(577937),n=a(326884),i=a(186656),_=a(433835),d=a(427135);let c=async({businessId:e,requestIds:s,includeAssetSummary:a})=>{let r=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/batch_members/`,method:"GET",data:{members:s,assets_summary:a,extend_info_from_user_api:!0}}),{data:{data:t}}={data:{data:{}},...r.resource_response};return t},u=async(e,s,a,t)=>{var n,_;let{anyEnabled:d}=null!==(n=null===(_=(0,r.Z)())||void 0===_?void 0:_.experimentsClient.checkExperiment("business_access_invites_api_v4_migration"))&&void 0!==n?n:{};if(d){let r=await (0,i.Z)({url:`/ads/v4/business_access/businesses/${a}/members/batch_invite/`,method:"POST",data:{business_role:s,members:e}});return{data:[],...r.resource_response.data}}let c=await (0,i.Z)({url:`ads/internal/business_access/businesses/${a}/members/batch_invite/`,method:"POST",data:{role_name:s,members:e,business_hierarchy_node_id:t}});return{data:[],...c.resource_response.data}},o=async(e,s,a)=>{var _,c,u,o;let{anyEnabled:l}=null!==(_=null===(c=(0,r.Z)())||void 0===c?void 0:c.experimentsClient.checkExperiment("web_m10n_business_manager_api_loops_removal"))&&void 0!==_?_:{},{anyEnabled:E}=null!==(u=null===(o=(0,r.Z)())||void 0===o?void 0:o.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==u?u:{},m=E?await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/members/${s}/assets/`,method:"GET",data:{limit:n.xX,...0===a||1===a?{asset_permission_type:(0,t.bO)(a)}:{}}}):await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/members/${s}/assets/`,method:"GET",data:{limit:n.cU,...Number.isInteger(a)&&{asset_permission_type:a}}}),b={data:[],...m.resource_response.data};if(l)return b.data;{let e=b.data,s=e.map(d.P);return await Promise.all(s)}},l=async(e,s,a,t)=>{var n,_;let{anyEnabled:d}=null!==(n=null===(_=(0,r.Z)())||void 0===_?void 0:_.experimentsClient.checkExperiment("business_access_employees_api_v4_migration"))&&void 0!==n?n:{},c=await (0,i.Z)({url:`ads/${d?"v4":"internal"}/business_access/businesses/${e}/members/${s}/`,method:"DELETE",data:{...d?{business_role:a}:{role_name:[a]},business_hierarchy_node_id:t}});return{data:void 0,auxData:void 0,...c.resource_response.data}},E=async(e,s,a,t)=>{var n,_;let d=null!==(n=null===(_=(0,r.Z)())||void 0===_?void 0:_.experimentsClient.checkExperiment("business_access_employees_api_v4_migration").anyEnabled)&&void 0!==n&&n,c=await (0,i.Z)({url:d?`ads/v4/business_access/businesses/${a}/members/${s}/`:`ads/internal/business_access/businesses/${a}/members/${s}/`,method:"PUT",data:{...d?{business_role:e}:{role_name:e},...t?{business_hierarchy_node_id:t}:{}}});return c.resource_response.data},m=async({id:e,limit:s,filters:a,memberIds:r=[],sortBy:t="FULL_NAME",searchBy:n=["FULL_NAME","EMAIL","USERNAME"],searchTerm:_="",startIndex:d=0,sortDirection:c="ASCENDING",includeAssetSummary:u})=>{let o=await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/members/`,data:{page_size:s,member_ids:r.length?r.join(","):void 0,filters:a?JSON.stringify(a):void 0,sort_by:t,search_by:n,start_index:d,search_value:_,assets_summary:u?"true":"false",sort_ascending:"ASCENDING"===c,extend_info_from_user_api:!0}});return o.resource_response},b=async({id:e,limit:s,filters:a,sortBy:t="full_name",searchBy:_="full_name",searchTerm:d="",startIndex:c=0,sortDirection:u="ASCENDING",includeAssetSummary:o})=>{var l,E;let{anyEnabled:b}=null!==(l=null===(E=(0,r.Z)())||void 0===E?void 0:E.experimentsClient.checkExperiment("business_access_employees_api_v4_migration_part1"))&&void 0!==l?l:{};if(b){let r=Array.isArray(_)?_:[_],i=["FULL_NAME","USERNAME","BUSINESS_ID","EMAIL"].filter(e=>r.map(e=>e.toUpperCase().trim()).includes(e)),l=t.toUpperCase().trim()?"FULL_NAME":void 0;return m({businessId:e,id:e,limit:!s||s>n.xX?n.xX:s,filters:a,sortBy:l,searchBy:i,searchTerm:d,startIndex:c,sortDirection:u,includeAssetSummary:o})}let p=await (0,i.Z)({url:`/ads/internal/business_access/businesses/${e}/members/`,method:"GET",data:{limit:s,filters:a?JSON.stringify(a):void 0,sort_by:t,search_by:_,start_index:c,search_value:d,assets_summary:o?"true":"false",sort_ascending:"ASCENDING"===u,extend_info_from_user_api:!0}});return p.resource_response},p=async({id:e})=>{var s,a;let t=null!==(s=null===(a=(0,r.Z)())||void 0===a?void 0:a.experimentsClient.checkExperiment("business_access_employees_api_v4_migration").anyEnabled)&&void 0!==s&&s,n=await (0,i.Z)({url:t?`/ads/v4/business_access/businesses/${e}/owner/`:`/ads/internal/business_access/businesses/${e}/owner/`});return n.resource_response.data},N=async({businessId:e,personId:s,limit:a,sortBy:n,searchBy:d="name",searchTerm:c,startIndex:u,sortDirection:o,assetPermissionType:l,includeAssetSummary:E=!1})=>{var m,b;let{anyEnabled:p}=null!==(m=null===(b=(0,r.Z)())||void 0===b?void 0:b.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==m?m:{},N={limit:a,sort_by:n,search_by:d,start_index:u,search_value:c,sort_ascending:"ASCENDING"===o};if(p){let a=await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/members/${s}/assets/`,data:{...N,...0===l||1===l?{asset_permission_type:(0,t.bO)(l)}:{}}});if(E){let s=await (0,_.pI)({businessId:e,assetIds:a.resource_response.data.data.map(e=>e.asset_id),resourceType:"AD_ACCOUNT"}),r=a.resource_response.data.data,t=r.reduce((e,s)=>({...e,data:{...e.data,data:{...e.data.data,[s.asset_id]:{...e.data.data[s.asset_id],...s}}}}),s);return t}return a.resource_response}{let a=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/members/${s}/assets/`,data:{...N,...Number.isInteger(l)?{asset_permission_type:l}:{}}});return a.resource_response}},A=async({businessId:e,personId:s,limit:a,sortBy:d,searchBy:c="name",searchTerm:u,startIndex:o,sortDirection:l,assetPermissionType:E,includeAssetSummary:m=!1})=>{var b,p;let{anyEnabled:N}=null!==(b=null===(p=(0,r.Z)())||void 0===p?void 0:p.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==b?b:{},A={limit:a,sort_by:d,search_by:c,start_index:o,search_value:u,sort_ascending:"ASCENDING"===l};if(N){let a=await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/members/${s}/assets/`,data:{...A,resource_type:"PROFILE",...0===E||1===E?{asset_permission_type:(0,t.bO)(E)}:{}}});if(m){let s=await (0,_.pI)({businessId:e,assetIds:a.resource_response.data.data.map(e=>e.asset_id),resourceType:"PROFILE"}),r=a.resource_response.data.data,t=r.reduce((e,s)=>({...e,data:{...e.data,data:{...e.data.data,[s.asset_id]:{...e.data.data[s.asset_id],...s}}}}),s);return t}return a.resource_response}{let a=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/members/${s}/assets/`,data:{...A,type:n.tP.PROFILE,...Number.isInteger(E)?{asset_permission_type:E}:{}}});return a.resource_response}},y=async({businessId:e,personId:s,limit:a,sortBy:r,searchBy:t="name",searchTerm:n,startIndex:_,sortDirection:d,assetPermissionType:c})=>{let u=await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/members/${s}/assets/`,data:{page_size:a,sort_by:r,search_by:t,start_index:_,search_value:n,sort_ascending:"ASCENDING"===d,resource_type:"ASSET_GROUP",asset_permission_type:c}});return u.resource_response},I=async({businessId:e,personId:s,assetId:a})=>{let r=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/members/${s}/assets/${a}/`});return r.resource_response},S=async({businessId:e,memberId:s,assetId:a,businessHierarchyNodeId:t,roles:n,permissions:_})=>{var d,c;let{anyEnabled:u}=null!==(d=null===(c=(0,r.Z)())||void 0===c?void 0:c.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==d?d:{};if(u){let r=await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/members/${s}/assets/${a}/access/`,method:"PUT",data:{permissions:_.includes("ADMIN")?["ADMIN"]:_,business_hierarchy_node_id:t}});return r.resource_response.data}{let r=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/members/${s}/assets/${a}/access/`,method:"PUT",data:{finalRoles:n.includes("ADMIN")?["ADMIN"]:n,business_hierarchy_node_id:t}});return r.resource_response.data}},v=async({businessId:e,memberId:s,assetId:a,businessHierarchyNodeId:t})=>{var n,_;let{anyEnabled:d}=null!==(n=null===(_=(0,r.Z)())||void 0===_?void 0:_.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration"))&&void 0!==n?n:{};if(d){let r=await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/members/${s}/assets/${a}/access/`,method:"DELETE",data:{business_hierarchy_node_id:t}});return r.resource_response.data}{let r=await (0,i.Z)({url:`ads/internal/business_access/businesses/${e}/members/${s}/assets/${a}/access/`,method:"DELETE",data:{business_hierarchy_node_id:t}});return r.resource_response.data}},h=async({businessId:e,assetId:s,limit:a,sortBy:r,searchBy:t="FULL_NAME",searchTerm:n,startIndex:_,sortDirection:d})=>{let c=await (0,i.Z)({url:`ads/v4/business_access/businesses/${e}/assets/${s}/members/`,method:"GET",data:{page_size:a,sort_by:r,search_by:t,search_value:n,start_index:_,sort_ascending:"ASCENDING"===d}}),{data:u}={data:void 0,...c.resource_response};return u}},427135:(e,s,a)=>{a.d(s,{P:()=>n,b:()=>t});var r=a(214494);let t=async e=>{let s=await r.Z.create("UserResource",{user_id:e}).callGet(),{resource_response:{data:a}}=s;return a},n=async e=>{let{asset:s}=e,a=s.agency_user_id||s.owner_user_id,r=await t(a);return{...e,asset:{...s,creator:r.full_name}}}},180548:(e,s,a)=>{function r(e){return null==e}function t(e){return!r(e)}a.d(s,{G:()=>t,k:()=>r})},66749:(e,s,a)=>{a.d(s,{Z:()=>t});var r=a(479218);function t(){let e=new r.H("/resource/ApiSResource/create/","ApiSResource",e=>({source:"browser",stats:e}),5e3);return{log:(s,a,r,t={})=>{let{flushImmediate:n,sampleRate:i=.1,tags:_={}}=t,d=[s,a,r,i,_];e.enqueue(d),n&&e.flush()}}}},67347:(e,s,a)=>{a.d(s,{LY:()=>_,QX:()=>i,S0:()=>d,nP:()=>n});let r=a(66749).Z,t=r();function n(e,s){t.log(e,1,"c",s)}function i(e,s,a){t.log(e,s,"c",a)}function _(e,s,a){t.log(e,s,"ms",a)}function d(e,s,a){t.log(e,s,"g",a)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/79476-a85fe55d640393a7.mjs.map