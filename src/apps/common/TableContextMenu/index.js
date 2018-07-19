import React, { Fragment } from 'react';
import ReactDOM, {getBoundingClientRect} from 'react-dom';
import './styles/index.css';

const getMenuPos = (targetElement) => {
 const elementBoundaries =  ReactDOM.findDOMNode(targetElement).getBoundingClientRect();   
 const yPos = elementBoundaries.y+ window.scrollY;
 const xPos =  elementBoundaries.x;
 return ({xPos, yPos});
}

const TableContextMenu = props => {
    const {menuOptions} = props;
    const element = getMenuPos(menuOptions.targetElement)
    return (
        <Fragment>
            <div className='popup-wrapper' style={{top: `${element.yPos}px`,right: `150px`}}>
                <ul>
                  {
                   props.children
                  }
                </ul>
            </div>
        </Fragment>
      )
}
 
export default TableContextMenu;
