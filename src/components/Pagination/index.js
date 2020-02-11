import React from 'react';
import './pagination.scss';

export default function Pagination(props) {
  if(!props.max) return '';
  return (
    <div className="pagination">
      <a href="#" onClick={props.onChange(1)} className="first">&laquo;</a>
      { 
        [...Array(props.max).keys()].map((index) => {
          return (
            <a key={index} href="#" 
              onClick={props.onChange(index+1)} 
              className={(props.currentPage === (index+1)) ? 'active' : ''}>
              {index + 1}
            </a>
          )
        })
      }
      <a href="#" onClick={props.onChange(props.max)} className="last">&raquo;</a>
    </div>
  )
}