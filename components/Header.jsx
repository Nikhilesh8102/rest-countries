
import { useTheme } from '../hooks/useTheme';



export default function Header()  {
const [isDark, setIsDark] = useTheme();
//  if(isDark){
//   document.body.classList.add('dark');
//  }
//  else{
//   document.body.classList.remove('dark');
//  }
  return (
    <header className={`header-container ${isDark ? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="./index.html">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
        //  document.body.classList.toggle('dark');
         setIsDark(!isDark);
         localStorage.setItem('isDark',!isDark);

        }}>
          <i className={`fa-regular fa-${isDark ? 'sun' : 'moon'}`} />
          {isDark ? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>

  )
}

