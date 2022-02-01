import React, { Component } from 'react';
// Funcao para marcar X e O nos quadrados
function Square(props){
    return (
        <button className='square' onClick={props.onclick}>
            {props.value}
        </button>
    );
}

export default Square;


  