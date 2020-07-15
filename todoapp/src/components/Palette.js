import './palette.css'
import React from 'react'

const Color = ({color , active, onClick}) => {
    return (
        <div className={`color ${active && 'active'}`} style={{background : color}} onClick={onClick} >
            
        </div>
    )
}

const Palette = ({ colors, selected, onSelect }) => {
    const ColorsList = colors.map( (color) => (<Color color={color} active={selected === color} onClick={() => onSelect(color)} key={color}/>))
    return (
        <div className="palette">
            { ColorsList }
        </div>
    )
};

export default Palette;