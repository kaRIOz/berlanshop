import React, { useEffect, useRef, useState, useTransition } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent, ZoomControl } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import { Input } from "../ui/input";
import NewAddressForm from "@/app/profile/addresses/_components/new-address-form";
import { MapRef } from "react-leaflet/MapContainer";
import { Loading } from "../loading";

type Coordinate = {
    lat: number;
    lng: number;
};

interface SearchResultItem {
    title: string;
    address: string;
    region: string;
    formatted_address?: string;
    location: {
        x: number;
        y: number;
    };
}

export type InitialAddress = {
    state: string;
    city: string;
    formatted_address: string;
};

const Map = () => {
    const [coordinate, setCoordinate] = useState<Coordinate>({
        lat: 35.692749,
        lng: 51.422155,
    });
    const [mapStep, setMapStep] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
    const [userAddress, setUserAddress] = useState<InitialAddress>();
    const [isPending, startTransition] = useTransition();
    const mapRef = useRef<MapRef>();

    const tehranFilter = searchResults.filter(item => item.region === "تهران، استان تهران");

    useEffect(() => {
        const getAddressSearchTerm = async () => {
            const url = `https://api.neshan.org/v1/search?term=${searchValue}&lat=${coordinate.lat}&lng=${coordinate.lng}`;
            try {
                const response = await fetch(url, {
                    headers: {
                        "Api-Key": `${process.env.NEXT_PUBLIC_MAP_API_KEY}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const { items } = await response.json();

                setSearchResults(items);
                mapRef.current?.flyTo(coordinate, 16);
            } catch (error) {
                console.error(error);
            }
        };

        getAddressSearchTerm();
    }, [searchValue, coordinate, mapStep]);

    const getAddressByLatlng = async () => {
        const url = `https://api.neshan.org/v5/reverse?lat=${coordinate.lat}&lng=${coordinate.lng}`;

        try {
            const response = await fetch(url, {
                headers: {
                    "Api-Key": `${process.env.NEXT_PUBLIC_MAP_API_KEY}`,
                },
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            const { state, city, formatted_address } = data;
            setUserAddress({ city: city, state: state, formatted_address: formatted_address });
            setMapStep(true);
            console.log(userAddress);
        } catch (error) {
            console.error(error);
        }
    };

    const icon = L.icon({
        iconUrl: "/marker.png",
        iconSize: [45, 45],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41],
    });

    const MapEvents = () => {
        useMapEvent("click", (e: L.LeafletMouseEvent & { latlng: { lat: number; lng: number } }) => {
            {
                setCoordinate(prev => ({
                    ...prev,
                    lat: e.latlng.lat,
                    lng: e.latlng.lng,
                }));
            }
        });
        return null;
    };

    return (
        <>
            {!mapStep ? (
                <section className="relative flex flex-col w-full">
                    <h1 className="px-3 pb-2 -mt-6">آدرس جدید</h1>
                    <MapContainer
                        className="h-96 w-full"
                        center={coordinate}
                        zoom={15}
                        ref={mapRef}
                        zoomControl={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <MapEvents />
                        <Marker position={coordinate} icon={icon} />
                        <ZoomControl position="topright" />
                    </MapContainer>
                    <div className="w-3/4 md:w-4/5  absolute top-5 left-1/2 -translate-x-1/2 z-[1000]">
                        <Input
                            type="text"
                            placeholder="جستجوی معابر و محله ها "
                            className="w-full focus-visible:ring-0 focus-visible:ring-offset-0  focus:border-blue-500 mb-1 placeholder:opacity-60 placeholder:text-regular md:text-medium"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <div className={`${searchResults.length ? "h-52" : "h-0"} overflow-y-auto bg-primary-content`}>
                            {tehranFilter.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-1 border border-b cursor-pointer hover:bg-slate-50"
                                    onClick={() => {
                                        setCoordinate({
                                            lat: item.location.y,
                                            lng: item.location.x,
                                        });
                                        setSearchValue("");
                                    }}
                                >
                                    <p className="text-medium">{item.title}</p>
                                    <span className="text-regular opacity-50">{item.address}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => startTransition(async () => getAddressByLatlng())}
                        className="w-1/2 rounded-lg p-2 bg-blue-500 text-primary-content text-medium m-1 absolute z-[1000] bottom-5 left-1/2 -translate-x-1/2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        {isPending ? <Loading /> : "تایید"}
                    </button>
                </section>
            ) : (
                <NewAddressForm {...userAddress} />
            )}
        </>
    );
};

export default Map;
