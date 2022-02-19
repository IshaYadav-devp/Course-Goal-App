import styles from "./Button.module.css"; //CSS Module

/* CSS Module---Ensures that CSS styles that we set up in CSS file 
are scoped to the component we import this file into.  
By adding unique names into the classNames which is defined by programmer*/

/* 
//Styled Component
import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgb(119, 30, 155);
  color: white;
  background: rgb(119, 30, 155);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: rgb(157, 54, 197);
    border-color: rgb(119, 30, 155);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
 @media(min-width:768px){
   css-code
  }
`;
//styled.button``-this is called "attacked template literal". Within backtics `` css code will be written.
//'button' is a method on 'styled' object. This 'button' method will return a new 'button Component'.
*/

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>

    //In className={styles.button}, 'button' (or Any ClassName) is a property which is defined in 'style' Object.
  );
};

export default Button;
