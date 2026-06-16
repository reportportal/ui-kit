import{j as n}from"./jsx-runtime-2f188e98.js";import{r as l}from"./index-3553ef47.js";import{s as C,c as P,d,e as me,f as c,D as s,r as ge}from"./singleAutocomplete-f996b9ba.js";import"./index-d0bd1ed5.js";import"./bind-d8141dee.js";import"./downshift.esm-92d8e7b2.js";import"./index-4c891f75.js";import"./floating-ui.react-ea29885b.js";import"./clear-c7bc24e5.js";import"./prevPage-746d23db.js";import"./adaptiveTagList-592fb691.js";import"./button-34bf729b.js";import"./close-b4801ed1.js";import"./isEmpty-6ac0b123.js";import"./actionMenu-fb657254.js";import"./details-d199936c.js";import"./baseIconButton-9b03f096.js";import"./popover-8346e5d8.js";import"./floatingUi-c696ea36.js";import"./attachedFile-aa48fc19.js";import"./xls-e116cca0.js";import"./breadcrumbs-2e157599.js";import"./tree-c792b12a.js";import"./bubblesLoader-539cf135.js";import"./bulkPanel-ae499898.js";import"./index-5cf2ac00.js";import"./useOnClickOutside-b0fffa8f.js";import"./keyCodes-e5060420.js";import"./selection-dede4e76.js";import"./chip-3c214fbe.js";import"./tooltip-280b52d3.js";import"./chevronDownDropdown-69a9d5c1.js";import"./warning-72e334ed.js";import"./checkbox-322ca70a.js";import"./table-de70aa52.js";import"./resizeColumn-eebfb371.js";import"./useEllipsisTitle-1cddebe3.js";import"./dropdown-de3e81f9.js";import"./dropdown-1f4530a4.js";import"./fieldLabel-917daddd.js";import"./fieldNumber-925ee977.js";import"./minus-6db56247.js";import"./plus-150a0ce8.js";import"./fieldTextFlex-61eb1205.js";import"./filtersButton-93f84a33.js";import"./filterOutline-513d7be6.js";import"./filterItem-b755c94e.js";import"./issueList-b7d4d2f9.js";import"./modal-ace9019f.js";import"./constants-1e05cdf5.js";import"./multipleAutocomplete-6ec3d6db.js";import"./radioGroup-183a5ecc.js";import"./segmentedControl-c9570136.js";import"./spinLoader-d5daab2a.js";import"./systemAlert-58c5107a.js";import"./success-8512adf6.js";import"./systemMessage-b191d100.js";import"./treeSortableItem-5243dce9.js";import"./themeProvider-37018bdd.js";import"./toggle-3fb3b5fa.js";function G(e,t,a){const i=C(e,a),r=C(t,a);return+i==+r}function u(e,t){if(e.one!==void 0&&t===1)return e.one;const a=t%10,i=t%100;return a===1&&i!==11?e.singularNominative.replace("{{count}}",String(t)):a>=2&&a<=4&&(i<10||i>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function o(e){return(t,a)=>a!=null&&a.addSuffix?a.comparison&&a.comparison>0?e.future?u(e.future,t):"через "+u(e.regular,t):e.past?u(e.past,t):u(e.regular,t)+" назад":u(e.regular,t)}const xe={lessThanXSeconds:o({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:o({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:(e,t)=>t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"через полминуты":"полминуты назад":"полминуты",lessThanXMinutes:o({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:o({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:o({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:o({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:o({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:o({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:o({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:o({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:o({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:o({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:o({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:o({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:o({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})},ve=(e,t,a)=>xe[e](t,a),he={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},fe={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},De={any:"{{date}}, {{time}}"},ye={date:P({formats:he,defaultWidth:"full"}),time:P({formats:fe,defaultWidth:"full"}),dateTime:P({formats:De,defaultWidth:"any"})},M=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function Se(e){const t=M[e];switch(e){case 0:return"'в прошлое "+t+" в' p";case 1:case 2:case 4:return"'в прошлый "+t+" в' p";case 3:case 5:case 6:return"'в прошлую "+t+" в' p"}}function j(e){const t=M[e];return e===2?"'во "+t+" в' p":"'в "+t+" в' p"}function be(e){const t=M[e];switch(e){case 0:return"'в следующее "+t+" в' p";case 1:case 2:case 4:return"'в следующий "+t+" в' p";case 3:case 5:case 6:return"'в следующую "+t+" в' p"}}const ke={lastWeek:(e,t,a)=>{const i=e.getDay();return G(e,t,a)?j(i):Se(i)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:(e,t,a)=>{const i=e.getDay();return G(e,t,a)?j(i):be(i)},other:"P"},we=(e,t,a,i)=>{const r=ke[e];return typeof r=="function"?r(t,a,i):r},Pe={narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},Me={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},Ce={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},Ge={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},je={narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},Ne={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},We={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},Re=(e,t)=>{const a=Number(e),i=t==null?void 0:t.unit;let r;return i==="date"?r="-е":i==="week"||i==="minute"||i==="second"?r="-я":r="-й",a+r},Le={ordinalNumber:Re,era:d({values:Pe,defaultWidth:"wide"}),quarter:d({values:Me,defaultWidth:"wide",argumentCallback:e=>e-1}),month:d({values:Ce,defaultWidth:"wide",formattingValues:Ge,defaultFormattingWidth:"wide"}),day:d({values:je,defaultWidth:"wide"}),dayPeriod:d({values:Ne,defaultWidth:"any",formattingValues:We,defaultFormattingWidth:"wide"})},ze=/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,Oe=/\d+/i,Ye={narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},Fe={any:[/^д/i,/^н/i]},Ee={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},He={any:[/1/i,/2/i,/3/i,/4/i]},Te={narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},Ve={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},Ae={narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},Xe={narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},Be={narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},_e={any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},qe={ordinalNumber:me({matchPattern:ze,parsePattern:Oe,valueCallback:e=>parseInt(e,10)}),era:c({matchPatterns:Ye,defaultMatchWidth:"wide",parsePatterns:Fe,defaultParseWidth:"any"}),quarter:c({matchPatterns:Ee,defaultMatchWidth:"wide",parsePatterns:He,defaultParseWidth:"any",valueCallback:e=>e+1}),month:c({matchPatterns:Te,defaultMatchWidth:"wide",parsePatterns:Ve,defaultParseWidth:"any"}),day:c({matchPatterns:Ae,defaultMatchWidth:"wide",parsePatterns:Xe,defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:Be,defaultMatchWidth:"wide",parsePatterns:_e,defaultParseWidth:"any"})},Ie={code:"ru",formatDistance:ve,formatLong:ye,formatRelative:we,localize:Le,match:qe,options:{weekStartsOn:1,firstWeekContainsDate:1}},en={title:"Controls/DatePicker",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onChange:{control:!1,description:"Callback function called when the date value changes.",table:{type:{summary:"(date: Date | null) => void"}}},onBlur:{control:!1,description:"Callback function called when the date picker loses focus.",table:{type:{summary:"() => void"}}},onFocus:{control:!1,description:"Callback function called when the date picker receives focus.",table:{type:{summary:"() => void"}}},headerNodes:{control:!1,description:"Custom React nodes to be rendered in the header of the date picker.",table:{type:{summary:"ReactNode"}}},disabled:{control:"boolean",description:"Indicates whether the date picker is disabled.",table:{type:{summary:"boolean"}}},shouldCloseOnSelect:{control:"boolean",description:"Specifies whether the date picker should close when a date is selected.",table:{type:{summary:"boolean"}}},fixedHeight:{control:"boolean",description:"Specifies whether the calendar should have a fixed height.",table:{type:{summary:"boolean"}}},customClassName:{control:"text",description:"Custom CSS class name to apply to the date picker header.",table:{type:{summary:"string"}}},popperClassName:{control:"text",description:"Custom CSS class name to apply to the popper (dropdown) container.",table:{type:{summary:"string"}}},calendarClassName:{control:"text",description:"Custom CSS class name to apply to the calendar container.",table:{type:{summary:"string"}}},customTimeInput:{control:!1,description:"Custom React element for time input. When provided, enables time selection.",table:{type:{summary:"ReactElement"}}},language:{control:"text",description:'Language code for localization (e.g., "en", "ru"). Requires locale registration via registerDatePickerLocale.',table:{type:{summary:"string"}}},yearsOptions:{control:!1,description:"Array of year numbers to display in the year dropdown. If empty, defaults to years from current year.",table:{type:{summary:"number[]"}}},placeholder:{control:"text",description:"Placeholder text displayed in the input field.",table:{type:{summary:"string"}}},dateFormat:{control:"text",description:'Format string for displaying the date (e.g., "MM-dd-yyyy", "dd/MM/yyyy").',table:{type:{summary:"string"}}},value:{control:"date",description:"The currently selected date value (Date for single mode, [Date | null, Date | null] tuple for range mode).",table:{type:{summary:"Date | null | [Date | null, Date | null]"}}},selectsRange:{control:"boolean",description:"Enables range selection mode. When true, allows selecting a date range in a single field.",table:{type:{summary:"boolean"}}},minDate:{control:"date",description:"Earliest selectable calendar day (react-datepicker minDate). Omitted when unset; null is normalized to undefined.",table:{type:{summary:"Date | null | undefined"}}},maxDate:{control:"date",description:"Latest selectable calendar day (react-datepicker maxDate). Omitted when unset; null is normalized to undefined.",table:{type:{summary:"Date | null | undefined"}}}},args:{disabled:!1,shouldCloseOnSelect:!0,fixedHeight:!1,language:"en",placeholder:"MM-DD-YYYY",dateFormat:"MM-dd-yyyy",value:null,customClassName:"",popperClassName:"",calendarClassName:"",yearsOptions:[],selectsRange:!1}},p={render:()=>{const[e,t]=l.useState(null);return n.jsxs("div",{style:{padding:"100px 200px 400px 200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"Default DatePicker:"}),n.jsx(s,{value:e,onChange:t}),e&&n.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:["Selected: ",e.toLocaleDateString()]})]})}},m={render:()=>{const[e,t]=l.useState(null);return n.jsxs("div",{style:{padding:"100px 200px 400px 200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"Single DatePicker:"}),n.jsx(s,{value:e,onChange:t}),e&&n.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:["Selected: ",e.toLocaleDateString()]})]})}},g={render:()=>{const[e,t]=l.useState([null,null]),[a,i]=e;return n.jsxs("div",{style:{padding:"200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"Range DatePicker"}),n.jsx(s,{selectsRange:!0,value:e,onChange:r=>t(r)}),n.jsxs("div",{style:{marginTop:"10px",fontSize:"12px",color:"#666"},children:[n.jsxs("div",{children:["Start: ",(a==null?void 0:a.toLocaleDateString())??"Not selected"]}),n.jsxs("div",{children:["End: ",(i==null?void 0:i.toLocaleDateString())??"Not selected"]})]})]})}},x={render:()=>{ge("ru",Ie);const[e,t]=l.useState(null);return n.jsxs("div",{style:{padding:"100px 200px 400px 200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"DatePicker with Russian locale:"}),n.jsx(s,{language:"ru",value:e,onChange:t}),e&&n.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:["Selected: ",e.toLocaleDateString("ru-RU")]})]})}},v={render:()=>n.jsxs("div",{style:{padding:"100px 200px 400px 200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"Disabled DatePicker:"}),n.jsx(s,{disabled:!0})]})},h={render:()=>{const[e,t]=l.useState(new Date(2026,3,15)),a=new Date(2026,3,10),i=new Date(2026,3,22);return n.jsxs("div",{style:{padding:"100px 200px 400px 200px",display:"flex",flexDirection:"column",gap:"10px",maxWidth:420},children:[n.jsxs("div",{children:["Single DatePicker with ",n.jsx("strong",{children:"minDate"})," and ",n.jsx("strong",{children:"maxDate"})," (April 10–22, 2026). Open the calendar: days outside the range are disabled and shown with reduced opacity."]}),n.jsx(s,{value:e,onChange:t,minDate:a,maxDate:i}),e&&n.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:["Selected: ",e.toLocaleDateString()]})]})}},f={render:()=>{const[e,t]=l.useState([new Date(2026,3,12),new Date(2026,3,18)]),a=new Date(2026,3,5),i=new Date(2026,3,25),[r,w]=e;return n.jsxs("div",{style:{padding:"200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"Range DatePicker with calendar bounds (Apr 5–25, 2026). Same props apply in range mode."}),n.jsx(s,{selectsRange:!0,value:e,onChange:pe=>t(pe),minDate:a,maxDate:i}),n.jsxs("div",{style:{marginTop:"10px",fontSize:"12px",color:"#666"},children:[n.jsxs("div",{children:["Start: ",(r==null?void 0:r.toLocaleDateString())??"Not selected"]}),n.jsxs("div",{children:["End: ",(w==null?void 0:w.toLocaleDateString())??"Not selected"]})]})]})}},D={render:()=>{const[e,t]=l.useState(null);return n.jsxs("div",{style:{padding:"100px 200px 400px 200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"DatePicker with custom format (dd/MM/yyyy):"}),n.jsx(s,{dateFormat:"dd/MM/yyyy",placeholder:"DD/MM/YYYY",value:e,onChange:t}),e&&n.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:["Selected: ",e.toLocaleDateString()]})]})}},y={render:()=>{const[e,t]=l.useState(new Date(2020,0,1)),a=Array.from({length:11},(i,r)=>2020+r);return n.jsxs("div",{style:{padding:"100px 200px 400px 200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"DatePicker with custom years range (2020-2030):"}),n.jsx(s,{yearsOptions:a,value:e,onChange:t}),e&&n.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:["Selected: ",e.toLocaleDateString()]})]})}},S={render:()=>{const[e,t]=l.useState(null);return n.jsxs("div",{style:{padding:"100px 200px 400px 200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"DatePicker with custom header nodes:"}),n.jsx(s,{headerNodes:n.jsx("div",{style:{padding:"10px",backgroundColor:"#f0f0f0",borderRadius:"4px"},children:"Custom Header"}),value:e,onChange:t}),e&&n.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:["Selected: ",e.toLocaleDateString()]})]})}},b={render:()=>{const[e,t]=l.useState(null);return n.jsxs("div",{style:{padding:"100px 200px 400px 200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"DatePicker that stays open after selection:"}),n.jsx(s,{shouldCloseOnSelect:!1,value:e,onChange:t}),e&&n.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:["Selected: ",e.toLocaleDateString()]})]})}},k={render:()=>{const[e,t]=l.useState(null);return n.jsxs("div",{style:{padding:"100px 200px 400px 200px",display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsx("div",{children:"DatePicker with dynamic height calendar:"}),n.jsx(s,{fixedHeight:!1,value:e,onChange:t}),e&&n.jsxs("div",{style:{fontSize:"12px",color:"#666"},children:["Selected: ",e.toLocaleDateString()]})]})}};var N,W,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '100px 200px 400px 200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>Default DatePicker:</div>
        <DatePicker value={date} onChange={setDate} />
        {date && <div style={{
        fontSize: '12px',
        color: '#666'
      }}>
            Selected: {date.toLocaleDateString()}
          </div>}
      </div>;
  }
}`,...(R=(W=p.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var L,z,O;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '100px 200px 400px 200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>Single DatePicker:</div>
        <DatePicker value={date} onChange={setDate} />
        {date && <div style={{
        fontSize: '12px',
        color: '#666'
      }}>
            Selected: {date.toLocaleDateString()}
          </div>}
      </div>;
  }
}`,...(O=(z=m.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var Y,F,E;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [startDate, endDate] = dateRange;
    return <div style={{
      padding: '200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>Range DatePicker</div>
        <DatePicker selectsRange value={dateRange} onChange={dates => setDateRange(dates)} />
        <div style={{
        marginTop: '10px',
        fontSize: '12px',
        color: '#666'
      }}>
          <div>Start: {startDate?.toLocaleDateString() ?? 'Not selected'}</div>
          <div>End: {endDate?.toLocaleDateString() ?? 'Not selected'}</div>
        </div>
      </div>;
  }
}`,...(E=(F=g.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var H,T,V;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    registerDatePickerLocale('ru', ru);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '100px 200px 400px 200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>DatePicker with Russian locale:</div>
        <DatePicker language="ru" value={date} onChange={setDate} />
        {date && <div style={{
        fontSize: '12px',
        color: '#666'
      }}>
            Selected: {date.toLocaleDateString('ru-RU')}
          </div>}
      </div>;
  }
}`,...(V=(T=x.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var A,X,B;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: '100px 200px 400px 200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>Disabled DatePicker:</div>
        <DatePicker disabled />
      </div>;
  }
}`,...(B=(X=v.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};var _,q,I;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(new Date(2026, 3, 15));
    const minDate = new Date(2026, 3, 10);
    const maxDate = new Date(2026, 3, 22);
    return <div style={{
      padding: '100px 200px 400px 200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: 420
    }}>
        <div>
          Single DatePicker with <strong>minDate</strong> and <strong>maxDate</strong> (April 10–22,
          2026). Open the calendar: days outside the range are disabled and shown with reduced
          opacity.
        </div>
        <DatePicker value={date} onChange={setDate} minDate={minDate} maxDate={maxDate} />
        {date && <div style={{
        fontSize: '12px',
        color: '#666'
      }}>
            Selected: {date.toLocaleDateString()}
          </div>}
      </div>;
  }
}`,...(I=(q=h.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var Q,U,J;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(2026, 3, 12), new Date(2026, 3, 18)]);
    const rangeMin = new Date(2026, 3, 5);
    const rangeMax = new Date(2026, 3, 25);
    const [startDate, endDate] = dateRange;
    return <div style={{
      padding: '200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>
          Range DatePicker with calendar bounds (Apr 5–25, 2026). Same props apply in range mode.
        </div>
        <DatePicker selectsRange value={dateRange} onChange={dates => setDateRange(dates)} minDate={rangeMin} maxDate={rangeMax} />
        <div style={{
        marginTop: '10px',
        fontSize: '12px',
        color: '#666'
      }}>
          <div>Start: {startDate?.toLocaleDateString() ?? 'Not selected'}</div>
          <div>End: {endDate?.toLocaleDateString() ?? 'Not selected'}</div>
        </div>
      </div>;
  }
}`,...(J=(U=f.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,Z,$;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '100px 200px 400px 200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>DatePicker with custom format (dd/MM/yyyy):</div>
        <DatePicker dateFormat="dd/MM/yyyy" placeholder="DD/MM/YYYY" value={date} onChange={setDate} />
        {date && <div style={{
        fontSize: '12px',
        color: '#666'
      }}>
            Selected: {date.toLocaleDateString()}
          </div>}
      </div>;
  }
}`,...($=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(new Date(2020, 0, 1));
    // Generate years from 2020 to 2030 (inclusive)
    const customYears = Array.from({
      length: 11
    }, (_, i) => 2020 + i);
    return <div style={{
      padding: '100px 200px 400px 200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>DatePicker with custom years range (2020-2030):</div>
        <DatePicker yearsOptions={customYears} value={date} onChange={setDate} />
        {date && <div style={{
        fontSize: '12px',
        color: '#666'
      }}>
            Selected: {date.toLocaleDateString()}
          </div>}
      </div>;
  }
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,ie,re;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '100px 200px 400px 200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>DatePicker with custom header nodes:</div>
        <DatePicker headerNodes={<div style={{
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '4px'
      }}>
              Custom Header
            </div>} value={date} onChange={setDate} />
        {date && <div style={{
        fontSize: '12px',
        color: '#666'
      }}>
            Selected: {date.toLocaleDateString()}
          </div>}
      </div>;
  }
}`,...(re=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var oe,se,le;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '100px 200px 400px 200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>DatePicker that stays open after selection:</div>
        <DatePicker shouldCloseOnSelect={false} value={date} onChange={setDate} />
        {date && <div style={{
        fontSize: '12px',
        color: '#666'
      }}>
            Selected: {date.toLocaleDateString()}
          </div>}
      </div>;
  }
}`,...(le=(se=b.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,ce,ue;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | null>(null);
    return <div style={{
      padding: '100px 200px 400px 200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <div>DatePicker with dynamic height calendar:</div>
        <DatePicker fixedHeight={false} value={date} onChange={setDate} />
        {date && <div style={{
        fontSize: '12px',
        color: '#666'
      }}>
            Selected: {date.toLocaleDateString()}
          </div>}
      </div>;
  }
}`,...(ue=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const tn=["Default","Single","Range","WithLocale","Disabled","WithMinMaxBounds","RangeWithMinMaxBounds","WithCustomDateFormat","WithCustomYears","WithHeaderNodes","ShouldNotCloseOnSelect","DynamicHeight"];export{p as Default,v as Disabled,k as DynamicHeight,g as Range,f as RangeWithMinMaxBounds,b as ShouldNotCloseOnSelect,m as Single,D as WithCustomDateFormat,y as WithCustomYears,S as WithHeaderNodes,x as WithLocale,h as WithMinMaxBounds,tn as __namedExportsOrder,en as default};
