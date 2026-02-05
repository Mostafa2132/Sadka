"use client";
import Marquee from "react-fast-marquee";

export default function Du3aMarque() {
  return (
    <Marquee
      gradient={false}
      speed={60}
      className="fixed top-0 left-0 w-full z-[999] bg-gradient-to-r from-indigo-950 via-purple-900 to-indigo-950 shadow-lg"
    >
   <h1 className="text-yellow-300 font-bold text-md py-1 px-6 drop-shadow-lg">
  صدقة جارية على روح أخي وصديقي الغالي (محمد شحاتة حداد)،
  اللهم اغفر له وارحمه، وعافِه واعفُ عنه، وأكرم نزله، ووسّع مدخله،
  واجعل قبره روضةً من رياض الجنة، ونوّر له فيه، واجمعنا به في جناتك
  يا أرحم الراحمين، ولا تنسوه من صالح دعائكم 🤍
</h1>

    </Marquee>
  );
}
