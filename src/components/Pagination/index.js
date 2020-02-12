import React from 'react';
import './pagination.scss';

export default function Pagination(props) {
  const onChange    = (props.onChange) ? props.onChange : (index) => { throw 'pagination onChange event not implemented!' }; 
  const currentPage = (props.currentPage) ? props.currentPage : -1;

  if(!props.max) return '';
  return (
    <div className="pagination">
      <a href="#" onClick={onChange(1)} className="first">&laquo;</a>
      { 
        [...Array(props.max).keys()].map((index) => {
          const pageIndex = index + 1;
          return (
            <a key={index} href="#" 
              onClick={onChange(pageIndex)} 
              className={(currentPage === pageIndex) ? 'active' : ''}>
              {pageIndex}
            </a>
          )
        })
      }
      <a href="#" onClick={onChange(props.max)} className="last">&raquo;</a>
    </div>
  )
  
}