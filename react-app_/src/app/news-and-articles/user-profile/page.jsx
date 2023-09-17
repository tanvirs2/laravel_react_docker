"use client"
import '../../globals.css'
import {useEffect, useState} from "react";
import {axiosWithBase} from "../../../../utils";
import useAuthContext from "../../../context/AuthContext";
import Select from 'react-select'
import Link from "next/link";

const FavoritePreference = ({name, hasData, datas, dataHandler})=>{

    const [selectVal, setSelectVal] = useState('')

    const handleChange = (event) => {
        //console.log(event);
        if (event) {
            dataHandler(event.value)
        }

    };

    return (
        <div className="mr-2 rounded shadow-lg content-center">
            {/*<img className="w-full" src="/mountain.jpg" alt="Mountain" />*/}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Your Favorite {name}</div>

            </div>
            <div className="px-6 pt-4 pb-2">


                {
                    datas?.map((data, index)=>{
                        return (
                            <span key={index}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {data}
                            </span>
                        )
                    })
                }

            </div>

            <div className="px-6 py-4">
                <p className="text-gray-700 text-base z-10">
                    Select a new {name} if you want
                </p>
                <Select options={hasData}
                        placeholder={name}
                        onChange={(e)=>{
                            handleChange(e)
                        }}
                        isClearable={true}
                        defaultValue="dddd"
                        setValue={(valueType, actionTypes)=> {
                            if (actionTypes === 'clear') {

                            }
                        }}
                />
            </div>
        </div>
    )
}

export default function UserProfile() {

    const [profileLoader, setProfileLoader] = useState(true);

    const [notPreferredNewsfeed, setNotPreferredNewsfeed] = useState('on');
    const [newsSource, setNewsSource] = useState([]);
    const [newsAuthor, setNewsAuthor] = useState([]);
    const [selectedSource, setSelectedSource] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [userPreference, setUserPreference] = useState([{
        "id": 0,
        "user_id": 0,
        "sources": "",
        "authors": null,
        "categories": null,
    }]);

    const {user, logout, userPreference: userPreferenceFunc} = useAuthContext();

    useEffect(()=>{
        setProfileLoader(true)

        axiosWithBase.get('/api/user-preference')
            .then(res=>res.data)
            .then((datas)=>{
                console.log('-----',datas)
                setUserPreference(datas);
                setProfileLoader(false)
                setNotPreferredNewsfeed(datas[0]?.status);
            })

        axiosWithBase.get('/news-source') // news-source api getting data from DB to select from frontend
            .then(res=>res.data)
            .then((datas)=>{
            //console.log(datas)
            let mapDatas = datas.map(data=>{
                return { value: data, label: data }
            })
            setNewsSource(mapDatas)
                setProfileLoader(false)
        })

        axiosWithBase.get('/news-author') // news-source api getting data from DB to select from frontend
            .then(res=>res.data)
            .then((datas)=>{
            //console.log(datas)
            let mapDatas = datas.map(data=>{
                return { value: data, label: data }
            })
                setProfileLoader(false)
            setNewsAuthor(mapDatas)
        })
    }, [])


    const handleSwitch = (e) => {
        console.log(e);
        setNotPreferredNewsfeed(notPreferredNewsfeed === 'on' ? 'off': 'on')
    };



    const handleSelectSource = (value) => {
        setSelectedSource(value)
    }

    const handleSelectAuthor = (value) => {
        setSelectedAuthor(value)
    }


    const handleSave = () => {
        saveData();
    }

    const saveData = () => {

        setProfileLoader(true)

        axiosWithBase.post('/personalize-profile', {user_id: user.id, status: notPreferredNewsfeed, selectedSource, selectedAuthor}).then(({data})=>{
            console.log(data)
            setProfileLoader(false)
            userPreferenceFunc()
            setSelectedSource(null)
            setSelectedAuthor(null)
            setUserPreference(data)
        })
    }


    return (
        <div className="overflow-hidden">
            <div className="p-8 bg-white shadow mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                            <p className="font-bold text-gray-700 text-xl">{userPreference[1]?.length}</p>
                            <p className="text-gray-400">Source</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">{userPreference[2]?.length}</p>
                            <p className="text-gray-400">Authors</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">{userPreference[3]?.length}Not Found</p>
                            <p className="text-gray-400">Category</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">


                            <Link href="/news-and-articles" className="text-white uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                <button
                                    className="py-4 px-4"
                                >
                                    Go to Portal
                                </button>

                            </Link>
                        <button onClick={logout}
                            className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            Logout
                        </button>
                    </div>
                </div>


                <div className="mt-20 text-center pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">
                        { user?.name }
                    </h1>
                    <p className="font-light text-gray-600 mt-3">{ user?.address }</p>


                    <div className="mt-8 text-gray-500">

                        <div className="p-5 overflow-hidden">
                            <label className="flex items-center relative w-max mx-auto cursor-pointer select-none bg-indigo-100 p-2 rounded">
                                <span className="text-lg font-bold mr-3">Personalized news feed on/off</span>
                                <input
                                    onChange={handleSwitch}
                                    type="checkbox"
                                    className="cursor-pointer"
                                    value={notPreferredNewsfeed}
                                    checked={notPreferredNewsfeed === 'on'}
                                />

                            </label>
                            <h3 className="font-bold text-red-400">Newsfeed: {userPreference[0]?.status}</h3>

                            <div className="font-bold text-2xl mt-8 text-green-500">{profileLoader ? 'loading...': null}</div>

                        </div>

                    </div>

                    <div className="p-10 flex justify-center">

                        <FavoritePreference name="Source" hasData={newsSource} dataHandler={handleSelectSource} datas={userPreference[1]}/>

                        <FavoritePreference name="Authors" hasData={newsAuthor} dataHandler={handleSelectAuthor} datas={userPreference[2]}/>

                        <FavoritePreference name="Category" hasData={[]} datas={[]}/>

                    </div>

                    <button className="btn-primary w-1/2" onClick={handleSave}>Save</button>

                </div>

                {/* <div className="mt-12 flex flex-col justify-center">
                    <p className="text-gray-600 text-center font-light lg:px-16">
                        An artist of considerable range, Ryan —
                        the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records
                        all of
                        his own music, giving it a warm, intimate feel with a solid groove structure. An artist of
                        considerable range.
                    </p>
                    <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                        Show more
                    </button>
                </div> */}
            </div>
        </div>
    );
}
