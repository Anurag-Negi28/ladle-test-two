import { useLanguageContext } from "../LanguageContext";
const LanguageSelect = () => {
 const { languages, onClickLanguageChange } = useLanguageContext();
 return (
   <div style={{ display: 'flex', justifyContent: 'center' }}>
     <select
       style={{
         width: 200,
         height: "40px",
       }}
       onChange={onClickLanguageChange}
     >
       {Object.keys(languages).map((lng) => (
         <option key={languages[lng].nativeName} value={lng}>
           {languages[lng].nativeName}
         </option>
       ))}
     </select>
   </div>
 );
};

export default LanguageSelect;
