import React from "react";
import smock from "../fuguAsset/Aboutbackground.jpeg"

function about() {
  return (
    <div className=" min-h-screen">
      <div className=" w-screen h-screen mt-4 flex justify-center items-center">
      <div className=" min-h-screen w-screen md:w-3/4 brightness-120 bg-cover bg-no-repeat bg-center flex flex-row justify-center items-center" style={{backgroundImage: `url(${smock})`,}}>
      <div className=" bg-white opacity-50">
      <h1 className=" text-slate-950 font-serif font-semibold text-md m-5 text-center ">
        Welcome to Kaya, your number one source
        for all things authentically African. We're dedicated to giving you the
        very best of African prints, with a focus on quality, customer service,
        and uniqueness. Founded in 2023, Our African Heritage has come a long
        way from its beginnings. When we first started out, our passion for
        promoting African culture drove us to start our own business. We now
        serve customers all over the world and are thrilled to be a part of the
        eco-friendly wing of the fashion industry. We're dedicated to selling
        products that not only look good but also have a positive impact on the
        world. Our collection includes a wide range of products, from vibrant
        African prints and Kente to comfortable Fugu or Smock.
        We also offer a variety of Ghanaian accessories that add a touch of
        African flair to any outfit. We hope you enjoy our products as much as
        we enjoy offering them to you. If you have any questions or comments,
        please don't hesitate to contact us.
      </h1>
      </div>
      </div>
      </div>
    </div>
  );
}

export default about;
