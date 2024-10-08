import SettingsIcons from "../icons/SettingsIcon"
import photo from "../images/avatar.png"
import scss from "./Profile.module.scss"
export const Profile = () => { 
    return <>
       <div className={scss.avatar}>
          <img src={photo} width={40} height={40} alt="avatar"  />
        </div>
        <div >
          <p className={scss.headText}>Welcome back,</p>
          <h2 className={scss.text}>Drax</h2>
        </div>
        <div className={scss.settings}>
          <SettingsIcons />
        </div>
    </>
}