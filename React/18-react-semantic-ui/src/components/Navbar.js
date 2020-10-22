import React,{useState} from 'react';
import { Input, Menu } from 'semantic-ui-react'

const Navbar = () => {
    let[activeItem,setActiveItem] =useState({});

    let handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })
  
    console.log(activeItem);
    return (
        <div>
           <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>  

        </div>
    );
};

export default Navbar;