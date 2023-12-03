
import '../styles/mainNavbar.css'
import iconLike from '../assests/icon-like.svg'
import iconUser from '../assests/icon-user.svg'
import iconFilter from '../assests/icon-filter.svg'
import iconTagOne from '../assests/icon-tag-one.svg'
export const MainNavbar = () => {
  return (
   <div class="navigationMain">
      <div class="div">
        <div class="small-white-outline"><div class="your-email">Search</div></div>
        <img class="icon-like" src={iconLike} />
        <img class="icon-user" src={iconUser} />
        <img class="icon-filter" src={iconFilter} />
        <img class="icon-tag-one" src={iconTagOne} />
      </div>
    </div>


  )
}

export default MainNavbar
