import img1 from "./../public/assets/image/products/harley.jpg";
import img2 from "./../public/assets/image/products/harley 2.jpg";
import img3 from "./../public/assets/image/products/harley 3.jpg";

import img4 from "./../public/assets/image/products/headphone.jpg";
import img5 from "./../public/assets/image/products/headphone 2.jpg";
import img6 from "./../public/assets/image/products/headphone 3.jpg";

import img7 from "./../public/assets/image/products/shoe.jpg";
import img8 from "./../public/assets/image/products/shoe 2.jpg";
import img9 from "./../public/assets/image/products/shoe 3.jpg";

import img10 from "./../public/assets/image/products/car.jpg";
import img11 from "./../public/assets/image/products/car 2.jpg";
import img12 from "./../public/assets/image/products/car 3.jpg";

export interface ProductDetails {
   id: number;
   image: any;
   title: string;
   price: string;
   description: string,
   condition: string;
   status: string;
}

export const productDetails: ProductDetails[] = [
   {
      id: 1,
      image: [img1, img2, img3],
      title: "Harley Davidson",
      price: "500",
      description: "Harley-Davidson, Inc. (H-D, or simply Harley) is an American motorcycle manufacturer headquartered in Milwaukee, Wisconsin, United States. Founded in 1903, it is one of two major American motorcycle manufacturers to survive the Great Depression along with its historical rival.",
      condition: "renting",
      status: "new"
   },
   {
      id: 2,
      image: [img4, img5, img6],
      title: "Headphones",
      price: "25",
      description: "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound.",
      condition: "renting",
      status: "rent"
   },
   {
      id: 3,
      image: [img7, img8, img9],
      title: "Shoes",
      price: "50",
      description: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection.",
      condition: "renting",
      status: "rent"
   },
   {
      id: 4,
      image: [img10, img11, img12],
      title: "Cars",
      price: "5,000",
      description: "A car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor. Cars are also called automobiles or motor vehicles. Trucks and buses are motor vehicles as well. However, trucks and buses are larger than cars, and they carry heavier loads.",
      condition: "renting",
      status: "rent"
   },
];

export const productCondition = ["new", "old"]

export const productStatus = ["renting", "rent", "not available"]
