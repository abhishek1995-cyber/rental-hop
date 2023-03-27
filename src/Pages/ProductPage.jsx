import React, { useEffect, useState } from "react";
import Search from "../components/product/Search";
import Sidebar from "../components/product/Sidebar";
import Card from "../components/product/Card";

function ProductPage() {
    const initialState = {
        // pickupDate: "",
        pickupTime: "",
        // dropDate: "",
        dropTime: "",
    }

    const [info, setInfo] = useState(initialState);

    const [bikes, setBikes] = useState("")

    // array of cities locations
    const [cities, setCities] = useState([]);

    // particluar 
    const [cityId, setCityId] = useState("");

    // list of locations based on cities
    const [locations, setLocations] = useState(null);

    // active location selected by user
    const [activeLocations, setActiveLocations] = useState([]);

    const [sortData, setSortData] = useState(bikes)

    // get list of all cities on select input
    const getCities = async () => {
        const res = await fetch("http://139.59.81.203/api/get-cities",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await res.json()
        setCities(data.city);
    };

    // this will set state for search info i.e city, pickup and drop time
    const onChangeHandler = ({ target }) => {
        const { name, value } = target;
        setInfo({ ...info, [name]: value })
    }

    // It will will search for time and city
    const handleSearch = async (ct,st,dt) => {
        const res = await fetch("http://139.59.81.203/api/get-bikes", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                city_id: 6104,
                from_time: '11:35 AM',//start
                to_time: '05:00 PM', //end
                from_date: "03/16/2023",
                to_date: "03/17/2023"
            })
        })
        const data = await res.json();
        setBikes(data.prices);
        setSortData(data.prices)
        getLocation(ct)
          
    }

    // get locations of city selected 
    const getLocation = async (cityId) => {
        const res = await fetch("http://139.59.81.203/api/get-locations",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ city_id: cityId })
            }
        );
        const data = await res.json()
        setLocations(data.locations);
    }

    function handleActiveLocations(event) {
        const value = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            //Add checked item into checkList
            setActiveLocations([...activeLocations, value]);
        } else {
            //Remove unchecked item from checkList
            const filteredList = activeLocations.filter((item) => item !== value);
            setActiveLocations(filteredList)
        }
    }


    function sortedData() {
        let arr = [...bikes];
        if (activeLocations.length ) {
            arr = sortData.filter((bike) => bike.location_name.some((location) => activeLocations.includes(location))
            );
           
            setSortData(arr)
        } else {
            setSortData(arr)
        }
    }

    // useEffect(() => {
    //     getLocation(cityId);
    //     if (cityId){
    //         handleSearch();
            
    //     }
       
    // }, [cityId])

    useEffect(() => {
        sortedData();
    }, [activeLocations])


    useEffect(() => {
        getCities();
       
        
    }, []);


    return (
        <>
            <section className="sptb-sm bg-white mt-5">
                <div className=" container sm-p0">

                    <>
                        <Search
                            cities={cities}
                            onChangeHandler={onChangeHandler}
                            handleSearch={handleSearch}
                            info={info}
                            cityId={cityId}
                            setCityId={setCityId}
                        />
                    </>
                    <>
                        <div className="row">
                            <Sidebar
                                cityId={cityId}
                                locations={locations}
                                setLocations={setLocations}
                                handleActiveLocations={handleActiveLocations}
                            />
                            <Card
                                bikes={sortData}
                                activeLocations={activeLocations}
                               
                            />
                        </div>
                    </>

                </div>
            </section>
        </>
    );
}


export default ProductPage;