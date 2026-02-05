import DuasClient from "@/Components/DuasClient/DuasClient";

export const metadata = {
  title: {
    default: "Mohamed Shehate | الادعيه",
  },
};

export default async function DuasPage() {
  let duasData = null;
  let error = null;

  try {
    const res = await fetch("https://www.hisnmuslim.com/api/ar/27.json", {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch duas");
    }

    const data = await res.json();
    duasData = data["أذكار الصباح والمساء"];
  } catch (err) {
    console.error("Error fetching duas:", err);
    error = err.message;
  }

  return <DuasClient duasData={duasData} error={error} />;
}
