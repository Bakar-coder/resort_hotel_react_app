import React from "react";
import Room from "./Room";

const RoomsList = ({ rooms }) => {
  return rooms.length > 0 ? (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(room => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </section>
  ) : (
    <div className="empty-search">No Match Found...</div>
  );
};

export default RoomsList;
