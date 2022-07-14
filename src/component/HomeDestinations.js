import React from "react";
import styled from "styled-components";
import SingleDestination from "./SingleDestination";
import { Link } from "react-router-dom";
import Booking from "./Booking";
import Destinations from "./Destinations";
function HomeDestinations({ main }) {
  return (
    <Wrapper>
      <section className='home-destination'>
        <div className='home-destination-container'>
          {main && <h2>anywhere your mind takes you</h2>}
          {main && (
            <h4>go beyond regular service when driving with connecto!</h4>
          )}

          <Destinations className='home-destinations' />
          {main && (
            <button>
              <Link to='/destinations'>see all destinations</Link>
            </button>
          )}
          {main && <Booking />}
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .home-destination-container {
    margin: 0 auto;
    max-width: var(--max-width);
    background-color: #fff;
    border-radius: 30px;
    padding: 0 40px;
    padding-top: 1px;
    h2,
    h4 {
      text-transform: capitalize;
      text-align: center;
    }
    h2 {
      font-size: 2.5rem;
      color: #1a1919;
      font-weight: 900;
    }
    h4 {
      color: #555;
      margin-top: 0;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      border-radius: 8px;
      border: 0;
      margin: 50px auto;
      background-color: var(--border-color);
      a {
        color: #fff;
        text-transform: capitalize;
      }
    }
  }
  .home-destinations {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .home-destinations div:first-child {
    grid-column: 1/3;
  }
  .home-destinations div:nth-child(2) {
    grid-column: 3/5;
  }
  .home-destinations div:nth-child(3) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .home-destinations div:nth-child(4) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  .home-destinations div:nth-child(5) {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  .home-destinations div:nth-child(6) {
    grid-column: 4/5;
    grid-row: 2/3;
  }
  .booking-process {
    margin-top: 100px;
  }
  .booking-process h2 {
    text-align: start;
    margin-bottom: 5px;
  }
  .booking-process h4 {
    text-align: start;
    margin-top: 10px;
  }
  .bookings {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    justify-content: space-between;
    column-gap: 20px;
    margin: 30px 0;
  }
  .bookings p {
    color: #5e616f;
    font-size: 0.8rem;
    margin-top: 0;
    line-height: 1.5;
  }
  .home-destination {
    padding: 0 50px;
  }
  .bookings h3 {
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  .bookings span {
    background: linear-gradient(
      to right,
      rgba(23, 23, 143, 0.6),
      rgba(141, 8, 141, 0.6)
    );

    margin-right: 10px;
    border-radius: 5px;
    padding: 3px 8px;
    color: #fff;
    font-weight: 500;
  }
  .single-booking {
    padding: 20px;
    min-width: 250px;
    min-height: 350px;
    box-shadow: 1px 20px 40px 1px #e7e6e6;
  }
  .bookings img {
    height: 150px;
    margin-bottom: 30px;
    width: 100%;
    object-fit: contain;
  }
  .video-section {
    position: relative;
    height: 500px;
    margin: 150px 0;
  }
  .video-section h2 {
    color: #fff;
  }
  .video-section img {
    height: 100%;
    width: 100%;
    border-radius: 30px;
  }
  .video-info {
    position: absolute;
    padding: 100px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video-info h2,
  .video-info h4 {
    text-align: start;
    color: #fff;
  }
  .video-info h2 {
    margin-bottom: 10px;
  }
  .video-section svg {
    font-size: 5rem;
    color: #fff;
    margin-top: 150px;
    margin-right: 100px;
  }
  .video-info button {
    margin: 0;
    color: #fff;
    text-transform: capitalize;
  }
  .video-info div:first-child {
    width: 500px;
    margin-right: auto;
  }
  .single-adventure img {
    height: 100%;
    width: 100%;
    border-radius: 30px;
  }
  .single-adventure {
    height: 300px;
    width: 100%;
    position: relative;
  }
  .adventures {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    gap: 30px;
  }
  .single-info {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 30px;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h5 {
      text-transform: capitalize;
      font-size: 1rem;
    }
    p {
      display: flex;
      align-items: center;

      column-gap: 10px;
    }
  }
  .adventures div:first-child {
    grid-column: 1/3;
  }
  .adventures div:nth-child(2) {
    grid-column: 3/4;
  }
  .adventures div:nth-child(3) {
    grid-column: 4/5;
  }
  .adventures div:nth-child(4) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .adventures div:nth-child(5) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  .adventures div:nth-child(6) {
    grid-column: 3/5;
    grid-row: 2/3;
  }

  @media (max-width: 937px) {
    .single-booking {
      box-shadow: 1px 20px 20px 1px #e7e6e6;
    }
    .bookings {
      display: flex;
      flex-wrap: wrap;
      row-gap: 30px;
    }
    .home-destination-container {
      max-width: 600px;
      margin: 0px auto;
    }
  }
`;
export default HomeDestinations;
