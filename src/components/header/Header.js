import React from 'react'
import TopNav from './TopNav'
import MainNav from './MainNav'
import BottomNav from './BottomNav'



function Header() {
    return (
        <header id="header">
            <TopNav/>
            <MainNav/>
            <BottomNav/>
           
        </header>
    )
}

export default Header
