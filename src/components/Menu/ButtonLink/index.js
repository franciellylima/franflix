import React from 'react';

function ButtonLink(props) { //traz os objetos
  return (
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
  );
}

export default ButtonLink;