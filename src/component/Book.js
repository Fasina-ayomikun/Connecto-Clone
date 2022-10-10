import React from "react";
import { MdLocationPin } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { VscCalendar } from "react-icons/vsc";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
import { useGetPlacesQuery } from '../services/transportApi'

function Book() {
  const [typingFrom, setTypingFrom] = useState(false);
  const [typingTo, setTypingTo] = useState(false);
  const [ fromPlaceEntry, setFromPlaceEntry ] = useState("")
  const [ toPlaceEntry, setToPlaceEntry ] = useState("")
  const { data: places, isFetching } = useGetPlacesQuery();

  const handlePlaceEntry = (e) => {
    var val = e.target.value
    
    if(e.target.name === "to"){
      setTypingTo(true);
      setTypingFrom(false); 
      setToPlaceEntry(val)
    }else if(e.target.name === "from"){
      setTypingFrom(true);
      setTypingTo(false);
      setFromPlaceEntry(val)
    }
    
  }

  const handleFromPlaceState = (e) => {
    var value = e.target.outerText
    setFromPlaceEntry(value)
  }

  const handleToPlaceState = (e) => {
    var value = e.target.outerText
    setToPlaceEntry(value)
  }

  if (isFetching) return "..."

  return (
    <Wrapper>
      <section className='book-section'>
        <div className='book-container'>
          <button className='btn-active'>with return</button>
          <button>one way</button>
          <form className='book-form'>
            <div className='from-cont'>
              <MdLocationPin />
              <input
                name="from"
                type='text'
                value={fromPlaceEntry}
                className='from'
                placeholder='from'
                onChange={handlePlaceEntry}
              />
              {(fromPlaceEntry.length > 0 && typingFrom == true) && (
                <ul
                className={`${
                  typingFrom ? "options show-option " : "options "
                }`}
                onClick={() => setTypingFrom(false)}
              >
                {places.filter((place) => (place.name.toLowerCase().startsWith(fromPlaceEntry.toLowerCase()))).slice(0, 9).map((place, index) => (
                  <li key={index} className='option' onClick={handleFromPlaceState}>
                    <MdLocationPin /> {place.name}
                  </li>
                ))}
                
              </ul>
              )}
              
            </div>
            <TbArrowsRightLeft />
            <div className='from-cont'>
              <MdLocationPin />
              <input
                name="to"
                type='text'
                value={toPlaceEntry}
                className='to'
                placeholder='to'
                onChange={handlePlaceEntry}
              />
              {(toPlaceEntry.length > 0 && typingTo == true) && (
                <ul
                className={`${
                  typingTo
                    ? "options optionTo  show-option "
                    : "options optionTo "
                }`}
                onClick={() => {
                  setTypingTo(false);
                }}
              >
                {places.filter((place) => (place.name.toLowerCase().startsWith(toPlaceEntry.toLowerCase()))).slice(0, 9).map((place, index) => (
                  <li key={index} className='option' onClick={handleToPlaceState}>
                    <MdLocationPin /> {place.name}
                  </li>
                ))}
                
              </ul>
              )}
            </div>
            <div className='departure-cont'>
              <div className='from-cont'>
                <VscCalendar />
                <input
                  type='text'
                  className='departure'
                  placeholder='departure'
                />
              </div>

              <div className='from-cont'>
                <input type='text' className='return' placeholder='return' />
              </div>
            </div>
            <div className='people-cont'>
              <div className='from-cont'>
                <AiOutlineMinus className='count' />
                <FaRegUser />
                <input type='text' readOnly className='people' value='5' />
                <AiOutlinePlus className='count' />
              </div>
              <button type='submit' className='from-cont'>
                see prices
              </button>
            </div>
          </form>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .book-section {
    position: relative;
  }
  .book-container {
    position: relative;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .book-container button {
    background-color: transparent;
    padding: 10px 15px;
    border: 0;
    color: #fff;
    border-radius: 10px 10px 0px 0;
    text-transform: capitalize;
  }
  .book-container .btn-active {
    background-color: #fff;
    color: #175af5;
  }
  .book-form > svg {
    color: #ccc;
    font-weight: 800;
    font-size: 1.6rem;
  }
  .book-form {
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: space-around;
    column-gap: 10px;
    padding: 20px 10px;
    border-top-right-radius: 5px;
  }
  .departure-cont {
    display: flex;
    width: 300px;
    /* background-color: red; */
    align-items: center;
    justify-content: center;
  }
  .departure-cont .from-cont {
    width: 50%;
    border-radius: 0;

    input {
      width: 100%;
      border: 0;
    }
  }
  .departure-cont .from-cont:first-child {
    border-right: 0;
    border-radius: 5px 0px 0px 5px;
  }
  .departure-cont .from-cont:nth-child(2) {
    border-radius: 0px 5px 5px 0px;
  }
  .from-cont {
    border: 1px solid #ccc;
    padding: 0 5px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
  .from-cont input {
    height: 100%;
    width: 100%;
    margin: 0;
    border: 0;
    background-color: transparent;
    text-transform: capitalize;
    outline: none;
  }
  .from-cont svg {
    font-size: 1.5rem;
    color: #ccc;
    margin-right: 5px;
  }
  .from-cont .count {
    color: #000;
    font-size: 0.8rem;
    margin: 0 5px;
  }
  .people-cont > button {
    background-color: #175af5;
    border-radius: 7px;
    color: #fff;
    width: 100%;
    &:hover {
      background-color: #4e7ff1;
      transition: 0.5s ease-in-out;
    }
  }
  .from-cont .people {
    width: 30px;
    font-size: 1.2rem;
    color: #555;
    margin: 0 5px;
  }
  .people-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 30px;
  }
  .options {
    position: absolute;
    /* bottom: 0; */
    top: 100px;
    left: 15px;
    width: 50%;

    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: white;
    display: none;
  }
  .option {
    padding: 10px 15px;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
  .optionTo {
    left: unset;
  }
  .option:hover {
    background-color: #175af5;
    transition: 0.1s ease-in;
  }
  .show-option {
    display: block;
  }
  @media (max-width: 937px) {
    .departure-cont {
      width: 100%;
      margin-top: 20px;
    }

    .people-cont {
      width: 100%;
      column-gap: 10px;
      margin-top: 20px;
    }
    .book-container {
      max-width: 600px;
    }
  }
`;

export default Book;
