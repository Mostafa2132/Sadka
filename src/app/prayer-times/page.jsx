import PrayerTimesClient from "@/Components/PrayerTimesClient/PrayerTimesClient";

export const metadata = {
  title: {
    default: "Mohamed Shehate | اوقات الصلاه",
  },
};

export default async function PrayerTimesPage() {
  let times = null;
  let meta = null;
  let dates = null;
  let error = null;

  try {
    const res = await fetch(
      "https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5",
      {
        next: { revalidate: 3600 }, // 🔥 كاش ساعة
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch prayer times");
    }

    const data = await res.json();

    times = data?.data?.timings;
    meta = data?.data?.meta;
    dates = data?.data?.date;
  } catch (err) {
    console.error("Error fetching prayer times:", err);
    error = err.message;
  }

  return (
    <PrayerTimesClient
      times={times}
      meta={meta}
      dates={dates}
      error={error}
    />
  );
}
