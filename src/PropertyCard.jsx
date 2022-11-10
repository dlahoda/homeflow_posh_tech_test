import { FaBookmark } from "react-icons/fa";
import clsx from "clsx";

// TODO Replace with more appropriate asset, like logo or icon. SVG image is preferable
const imgFallback =
  "https://www.homeflow.co.uk/wp-content/uploads/2019/01/homeflow-col-dkbg-rgb-01.png";

function PropertyCard({ property, bookmarkActive = false, toogleProperty }) {
  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
        <img
          src={
            property.photos[0]
              ? `https://mr0.homeflow.co.uk/${property.photos[0]}`
              : imgFallback
          }
          alt={property.display_address}
        />

        <button
          className="absolute top-0 right-2"
          title="Click to bookmark this property"
          onClick={() => toogleProperty(property.property_id)}
        >
          <FaBookmark
            className={clsx(
              bookmarkActive ? "text-red-400" : "text-yellow-400"
            )}
            size="40"
          />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">
          {property.price}
        </p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
