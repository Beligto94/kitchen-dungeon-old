import React from 'react';
import { PageContent } from '../../components/layouts/PageContent';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { CRS } from 'leaflet';

const Settings = () => {
    return (
        <PageContent>
            <div className="h-full w-3/4">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} crs={CRS.Simple}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
                    contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </PageContent>
    );
};

export default Settings;
