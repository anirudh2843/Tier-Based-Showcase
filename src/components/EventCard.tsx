import React from "react";

type Event = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  tier: "free" | "silver" | "gold" | "platinum";
  image_url: string;
  locked: boolean;
};

export default function EventCard({ event }: { event: Event }) {
  return (
    <div
      className={`relative bg-white rounded-xl shadow-md border p-4 transition ${
        event.locked ? "opacity-50 pointer-events-none" : "hover:shadow-lg"
      }`}
    >
      <img
        src={event.image_url || "https://via.placeholder.com/300"}
        alt={event.title}
        className="w-full h-48 object-cover rounded-md mb-3"
        onError={(e) => {
          e.currentTarget.src =
            "https://via.placeholder.com/300?text=Image+Not+Found";
        }}
      />
      <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
        {event.description}
      </p>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-1">
        <span> {new Date(event.event_date).toLocaleDateString()}</span>
        <span className="capitalize font-medium">{event.tier}</span>
      </div>
      {event.locked && (
        <p className="text-red-600 font-semibold mt-2">
          Upgrade to {event.tier} to access this event
        </p>
      )}
    </div>
  );
}
