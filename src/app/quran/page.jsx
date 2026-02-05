import QuranClient from "@/Components/QuranClient/QuranClient";

export const metadata = {
  title: {
    default: "Mohamed Shehate |  المصحف الشريف",
  },
};
export default async function QuranPage() {
  let surahs = [];
  let error = null;

  try {
    const res = await fetch("https://api.alquran.cloud/v1/meta", {
      next: { revalidate: 86400 }, // Cache لمدة يوم (السور لا تتغير)
    });

    if (!res.ok) {
      throw new Error("Failed to fetch surahs");
    }

    const data = await res.json();
    surahs = data.data.surahs.references;
  } catch (err) {
    console.error("Error fetching surahs:", err);
    error = err.message;
  }

  return <QuranClient surahs={surahs} error={error} />;
}
