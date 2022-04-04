import React from 'react';
import { StarIcon } from '@heroicons/react/solid'

const CustomarReview = ({ data }) => {
    const { name, picture, review, ratting, date, phone } = data;
    return (
        <div className='mx-auto rounded-2xl hover:bg-gray-300 mt-16 border-4 py-8 px-12'>
            <div className='flex-shrink-0'>
                <img className='mx-auto mt-5 mb-16 object-cover rounded-full h-32 w-32' src={picture} alt="" />
            </div>
            <p className='text-2xl font-bold py-2'>{name}</p>
            <p className='text-xl py-2'>Mobile: {phone}</p>
            <p className='italic text-xl'>{review}</p>
            <p className='flex gap-2 mt-8'>
                <span className='font-bold'>{ratting}</span>
                <div className='flex p-1'>
                    <StarIcon className='w-4 h-4'></StarIcon>
                    <StarIcon className='w-4 h-4'></StarIcon>
                    <StarIcon className='w-4 h-4'></StarIcon>
                    <StarIcon className='w-4 h-4'></StarIcon>
                    <StarIcon className='w-4 h-4'></StarIcon>
                </div>
                <span className='font-bold'>{date}</span>
            </p>
        </div>
    );
};

export default CustomarReview;