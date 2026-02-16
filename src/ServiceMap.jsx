import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon issue in React-Leaflet/Webpack/Vite
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ServiceMap = () => {
    const position = [28.5383, -81.3792]; // Orlando, FL coordinates
    const serviceRadius = 48280; // ~30 miles in meters

    return (
        <div className="h-[400px] w-full rounded-sm overflow-hidden shadow-md z-0 relative">
            <MapContainer
                center={position}
                zoom={9}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                {/* CartoDB Positron - Cleaner, more minimal map style */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                <Marker position={position}>
                    <Popup>
                        <div className="text-center">
                            <h3 className="font-bold text-hihs-charcoal">Hernandez Interior Home Solutions</h3>
                            <p className="text-sm text-gray-600">Serving Central Florida</p>
                        </div>
                    </Popup>
                </Marker>

                <Circle
                    center={position}
                    pathOptions={{ fillColor: '#D4AF37', color: '#D4AF37', weight: 1, opacity: 0.5, fillOpacity: 0.1 }} // Using the gold accent color
                    radius={serviceRadius}
                />
            </MapContainer>
        </div>
    );
};

export default ServiceMap;
