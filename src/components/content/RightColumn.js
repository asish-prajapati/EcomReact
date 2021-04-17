import React from 'react'
import RightColBanner from './RightColBanner'
import RightColSubBanner from './RightColSubBanner'

function RightColumn() {
    return (
        <div id="column-right" class="col-sm-8 col-md-8 col-lg-9 mtb_30">
            <RightColBanner/>
            <RightColSubBanner/>
        </div>
    )
}

export default RightColumn
