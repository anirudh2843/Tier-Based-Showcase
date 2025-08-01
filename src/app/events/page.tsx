"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Event = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  tier: "free" | "silver" | "gold" | "platinum";
  image_url: string;
};

export default function EventsPage() {
  const { user, isLoaded } = useUser();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const tierOrder = ["free", "silver", "gold", "platinum"];

  // Fetch events based on user tier
  const fetchEvents = async () => {
    if (!isLoaded || !user) return;
    setLoading(true);

    const userTier =
      (user?.unsafeMetadata?.tier as string) ||
      (user?.publicMetadata?.tier as string) ||
      "free";

    const allowedTiers = tierOrder.slice(0, tierOrder.indexOf(userTier) + 1);

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .in("tier", allowedTiers)
      .order("event_date", { ascending: true });

    if (!error) setEvents(data || []);
    else console.error("Error fetching events:", error);

    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, [isLoaded, user]);

  const handleUpgrade = async (newTier: string) => {
    if (!user) return;
    await user.update({ unsafeMetadata: { tier: newTier } });
    alert(`Tier upgraded to: ${newTier}`);
    window.location.reload();
  };

  if (!isLoaded) return <p className="text-center mt-10">Loading user...</p>;
  if (loading) return <p className="text-center mt-10">Loading events...</p>;

  const userTier =
    (user?.unsafeMetadata?.tier as string) ||
    (user?.publicMetadata?.tier as string) ||
    "free";

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
         Welcome to Your Events Dashboard
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Your current tier:{" "}
        <span className="font-bold capitalize text-indigo-600">{userTier}</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tierOrder.map((tier) => (
          <button
            key={tier}
            onClick={() => handleUpgrade(tier)}
            className={`px-5 py-2 rounded-lg font-semibold text-white shadow-md transition transform hover:scale-105 
              ${
                tier === "free"
                  ? "bg-green-500 hover:bg-green-600"
                  : tier === "silver"
                  ? "bg-gray-500 hover:bg-gray-600"
                  : tier === "gold"
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-purple-500 hover:bg-purple-600"
              }`}
          >
            Upgrade to {tier}
          </button>
        ))}
      </div>

      {/* Events by Tier */}
      {tierOrder.map((tier) => {
        const tierEvents = events.filter((event) => event.tier === tier);
        if (tierEvents.length === 0) return null;

        return (
          <div key={tier} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-700 capitalize border-b pb-2">
              {tier} Events
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {tierEvents.map((event) => {
                const isLocked =
                  tierOrder.indexOf(event.tier) > tierOrder.indexOf(userTier);

                return (
                  <div
                    key={event.id}
                    className={`relative bg-white rounded-xl shadow-md border p-4 hover:shadow-xl transition transform hover:scale-[1.02] ${
                      isLocked ? "opacity-60" : ""
                    }`}
                  >
                    <img
                      src={event.image_url || "https://via.placeholder.com/300"}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-md mb-3"
                    />
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>📅 {new Date(event.event_date).toLocaleDateString()}</span>
                      <span className="capitalize font-medium">{event.tier}</span>
                    </div>
                    {isLocked && (
                      <p className="mt-3 text-red-600 font-semibold text-sm">
                         Upgrade to {event.tier} to unlock this event
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
