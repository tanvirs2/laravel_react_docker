"use client"

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {axiosWithBase} from "../../../../utils";

export default function ViewNews(){

    const { id } = useParams()
    const [newsAndArticle, setNewsAndArticle] = useState({});


    useEffect(()=>{
        axiosWithBase.get(`scrapping/${id}`).then(({data})=>{
            //console.log(data)
            setNewsAndArticle(data);
        })
    }, []);

    return (
        <div>
            {/*<div className="pb-20 h-0.5 bg-gray-300 px-2">
                <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                    <div className="md:flex">
                        <div className="w-full p-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                                    name=""
                                    placeholder="Search Article"
                                />
                                <span className="absolute top-4 right-5 border-l pl-4">
                                    <svg className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                                    </svg>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}

            <div className="p-10 mt-5">
                <div className="rounded overflow-hidden shadow-lg">
                    <img className="w-1/2 mx-auto" src={newsAndArticle.img ?? 'https://placehold.co/600x400?text=No%20Image'} alt="Mountain"/>
                    <div className="px-6 py-4">
                        <div className="flex text-xl text-red-400">By: {newsAndArticle.author}</div>
                        <div className="flex text-xl text-green-500">Publish: {newsAndArticle.publish_date}</div>
                        <div className="font-bold text-5xl mb-2">{newsAndArticle.title} </div>
                        <p className="text-gray-700 text-3xl mt-8 first-letter:text-6xl first-letter:text-blue-600 first-letter:pr-1">
                            {newsAndArticle.author === "TheGuardian" ? <>

                                <div>Articale Link: (TheGuardian has no description for free API call)</div>
                                <br/>
                                <a href={newsAndArticle.description} className="btn-primary my-8" target="_blank">Click here</a>
                                <br/>
                            </> :  newsAndArticle.description}

                        </p>

                        <hr className="mt-20"/>
                        <div className="flex justify-between mt-4 text-xs">
                            <div className="flex text-xl flex-row text-blue-600">Source: {newsAndArticle.source}</div>
                            <div className="flex text-xl flex-row-reverse text-blue-600">Category: {newsAndArticle.category}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
