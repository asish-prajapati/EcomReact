import React from 'react'
import LeftColCategory from './LeftColCategory'
import LeftColTopProducts from './LeftColTopProducts'
import LeftColWidget from './LeftColWidget'
import left1 from '../../images/left1.jpg'
import left2 from '../../images/left2.jpg'
import LeftColTestimonial from './LeftColTestimonial'
import LeftColTag from './LeftColTag'

function LeftColumn() {
    return (
        <div id="column-left" class="col-sm-4 col-md-4 col-lg-3 ">
            <LeftColCategory/>
            <div class="left_banner left-sidebar-widget mt_30 mb_50"> <a href="#"><img src={left1} alt="Left Banner" class="img-responsive" /></a> </div>
            <LeftColWidget/>
            <LeftColTopProducts/>
            <div class="left_banner left-sidebar-widget mb_50"> <a href="#"><img src={left2} alt="Left Banner" class="img-responsive" /></a> </div>
            <LeftColTestimonial/>
            <LeftColTag/>

                    
        </div>
    )
}

export default LeftColumn
