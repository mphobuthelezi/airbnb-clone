// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Cards from "./Cards";
import "./Home.css";
// import { listListing } from "../actions/listingActions";

const Home = () => {
  // const dispatch = useDispatch();
  // const listingList = useSelector((state) => state.listingList);
  // const { loading, error, listings } = listingList;

  // useEffect(() => {
  //   dispatch(listListing());
  // }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {/* //     {loading ? (
  //       <h2>Loading...</h2>
  //     ) : error ? (
  //       <h3>{error}</h3>
  //     ) : (
  //       <div className="home_section">
  //         {listings.map((listing) => (
  //           <Cards
  //             src={listing.img}
  //             title={listing.title}
  //             decription={listing.decription}
  //             price={listing.price}
  //           />
  //         ))}
  //       </div>
  //     )} */}
      <div className="home_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/3511e981-85a6-4b10-9adf-89e4b9b398a6.jpg?im_w=720"
          title="Tent in Wadi Rum Village, Jordan"
          decription="Granny's farm bangalows and glamping offers the ultimate, a world away from everyday life. Escape to the haven of peace and tranquility. Enjoy breath-taking panoramic views of the mountains and the Laurissilva Forest At the farm there are fruit trees and vegetable garden where you can pick as much as you like."
          price="R7500"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/c090664b-ef1e-445b-a417-87574966c989.jpg?im_w=720"
          title="Private room in farm stay in Kaapschehoop, South Africa"
          decription="Granny´s farm bangalows and glamping offers the ultimate, a world away from everyday life. Escape to the haven of peace and tranquility. Enjoy breath-taking panoramic views of the mountains and the Laurissilva Forest At the farm there are fruit trees and vegetable garden where you can pick as much as you like."
          price="R5000"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-48686572/original/701513de-7285-46a2-9262-2f771c83f527.jpeg?im_w=720"
          title="Tent in South Africa"
          decription="Granny´s farm bangalows and glamping offers the ultimate, a world away from everyday life. Escape to the haven of peace and tranquility. Enjoy breath-taking panoramic views of the mountains and the Laurissilva Forest At the farm there are fruit trees and vegetable garden where you can pick as much as you like."
          price="R10000"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/bc629d4f-89f0-4ce2-827a-e0c651dd76a1.jpg?im_w=720"
          title="Tent in Lake Elmenteita, Kenya"
          decription="Granny´s farm bangalows and glamping offers the ultimate, a world away from everyday life. Escape to the haven of peace and tranquility. Enjoy breath-taking panoramic views of the mountains and the Laurissilva Forest At the farm there are fruit trees and vegetable garden where you can pick as much as you like."
          price="R8500"
        />
      </div>

      <div className="home_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/bc629d4f-89f0-4ce2-827a-e0c651dd76a1.jpg?im_w=720"
          title="Private room in tent in Ciudanovița, Romania"
          decription="Granny´s farm bangalows and glamping offers the ultimate, a world away from everyday life. Escape to the haven of peace and tranquility. Enjoy breath-taking panoramic views of the mountains and the Laurissilva Forest At the farm there are fruit trees and vegetable garden where you can pick as much as you like."
          price="R9500"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-872254228905543887/original/2d5f7155-7458-4eb9-a7d3-753863d9eb45.jpeg?im_w=720"
          title="Room in Kecamatan Kintamani, Indonesia"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
          price="R14500"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1050288737052395379/original/bea28dda-610b-4fb2-a749-551239881883.jpeg?im_w=720"
          title="Tent in Chastreix, France"
          decription="Granny´s farm bangalows and glamping offers the ultimate, a world away from everyday life. Escape to the haven of peace and tranquility. Enjoy breath-taking panoramic views of the mountains and the Laurissilva Forest At the farm there are fruit trees and vegetable garden where you can pick as much as you like."
          price="R11500"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-46272064/original/784fdaac-90fd-48ec-a9e9-3aaf312bdab8.jpeg?im_w=720"
          title="Tent in São Vicente, Portugal"
          decription="Granny´s farm bangalows and glamping offers the ultimate, a world away from everyday life. Escape to the haven of peace and tranquility. Enjoy breath-taking panoramic views of the mountains and the Laurissilva Forest At the farm there are fruit trees and vegetable garden where you can pick as much as you like."
          price="R8500"
        />
      </div>
    </div>
  );
};

export default Home;
