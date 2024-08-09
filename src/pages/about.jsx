import metadata from "../common/metadata";

function AboutPage() {
  return (
    <div className="">
      <div>
        <h2 className="text-6xl font-semibold">Hai! Aku {metadata.name}</h2>
        <p className="text-4xl">
          Aku adalah seorang {metadata.job}. Aku suka mengambil foto dan saat
          ini mempelajari pemrograman web. Cita-citaku satu-satunya adalah hidup
          dengan tenang.
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default AboutPage;
