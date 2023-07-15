import PhotosUploader from "../PhotosUploader.jsx";
import Perks from "../Perks.jsx";
import { useState } from "react";
import AccountNav from "../AccountNav.jsx";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function PlacesFormPage() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);

  async function addNewPlace(ev) {
    ev.preventDefault();
    await axios.post("/places", {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests
    });
    setRedirect(true);
  }
  
//   if (redirect) {
//     console.log("dk");
//     return <Navigate to={"/account/places"} />;
//   }

  return (
    <div>
      <AccountNav />
      <form onSubmit={addNewPlace}>
        <h2 className="text-2xl mt-4">Title</h2>
        <p className="text-gray-500 text-sm">
          Title for your place.Should be short and catchy as in advertisement
        </p>
        <input
          type="text"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder="title, for example radisson blu"
        />

        <h2 className="text-2xl mt-4">Address</h2>
        <p className="text-gray-500 text-sm">Address to this place.</p>
        <input
          type="text"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
          placeholder="address"
        />

        <h2 className="text-2xl mt-4">Photos</h2>
        <p className="text-gray-500 text-sm">more = better</p>
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        <h2 className="text-2xl mt-4">Description</h2>
        <p className="text-gray-500 text-sm">Description for place</p>
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
          placeholder="Provide Description here"
        />

        <h2 className="text-2xl mt-4">Perks</h2>
        <p className="text-gray-500 text-sm">
          Select all the Perks of your place.
        </p>
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        <h2 className="text-2xl mt-4">Extra info</h2>
        <p className="text-gray-500 text-sm">house rules, etc</p>
        <textarea
          value={extraInfo}
          onChange={(ev) => setExtraInfo(ev.target.value)}
          placeholder="Provide Extra info here"
        />

        <h2 className="text-2xl mt-4">Check in&out times</h2>
        <p className="text-gray-500 text-sm">
          add check in and out times ,remember to have some time for cleaning
          the room between guests
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input
              type="text"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
              placeholder="16:30"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input
              type="text"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
              placeholder="17:30"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max Number Of Guest</h3>
            <input
              type="number"
              value={maxGuests}
              onChange={(ev) => setMaxGuests(ev.target.value)}
              placeholder="1"
            />
          </div>
        </div>

        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
}
