// NPM Modules
import React from 'react'

function Spacer (props) {

    const style = {
        width: (typeof props.width === 'number' ? (props.width + 'px') : (props.width || '1px')),
        height: (typeof props.height === 'number' ? (props.height + 'px') : (props.height || '1px')),
        flexGrow: props.grow,
        flexShrink: props.shrink
    }

    return (
        <div style={style}></div>
    )
}

export default Spacer;