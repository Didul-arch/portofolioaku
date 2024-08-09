import metadata from "../common/metadata";
import { Project } from "../components/projects";
import wajahTampan from "../assets/img/fotoganteng.png";

function HomePage() {
  return (
    <div className="mx-64 py-52">
      <div className="flex w-full gap-10">
        <div className="flex w-full flex-col justify-center gap-4">
          <h2 className="text-6xl font-semibold">Hai! Aku {metadata.name}</h2>
          <p className="text-2xl">
            Aku adalah seorang {metadata.job}. Aku suka mengambil foto dan saat
            ini mempelajari pemrograman web. Cita-citaku satu-satunya adalah
            hidup dengan tenang.
          </p>
        </div>
        <div
          className="relative flex w-full items-center justify-center"
          style={{
            filter:
              "drop-shadow(10px 10px 100px #677d6a) drop-shadow(-10px -10px 50px #677d6a)",
          }}
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-700"></div>
          <img
            src={wajahTampan}
            className="w-80"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
      </div>
      <div className="mt-52 flex flex-col gap-52">
        {metadata.projects.map((item, index) => (
          <Project
            key={index}
            src={item.src}
            title={item.title}
            description={item.description}
            camera={item.camera}
            location={item.location}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
