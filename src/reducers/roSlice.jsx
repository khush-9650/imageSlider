import { createSlice } from "@reduxjs/toolkit";

const data= [
    { title: 'Havells Digi Touch', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/digi.png' },
    { title: 'Havells Digi Plus', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/digiPlus.png' },
    { title: 'Havells Max', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/max.png' },
    { title: 'Havells UV Plus', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/uvPlus.png' },
    { title: 'Blue Star Genia', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/genia.png' },
    { title: 'Blue Star Majesto', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/majesto.png' },
    { title: 'BM-1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/BM1.png' },
    { title: 'BM-2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/BM2.png' },
    { title: 'BM-3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/BM3.png' },
    { title: 'Organic', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam eaque, laboriosam expedita perferendis facilis esse deleniti qui voluptas! Nesciunt!', img: './Images/organic.png' },
  ];

const roSlice=createSlice({
    name: "roData",
    initialState: {data}
    
})