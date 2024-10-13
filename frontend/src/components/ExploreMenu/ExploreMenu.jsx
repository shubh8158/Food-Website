import React from 'react' 
import "./ExploreMenu.css" 
import { menu_list } from '../../assets/assets'

// Here we setting the category of the image using props defined in Explore Menu in Home.jsx
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu' >
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from diverse menu featuring a delicious array of food to you in a tasty manner.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    // Here we are adding the category according to menuname using onclick functionality
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={index}>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="Menu-Name" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
