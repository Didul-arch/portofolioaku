import metadata from "../../common/metadata";

export const Header = () => {
  return (
    <header className="container fixed left-1/2 top-6 z-40 w-full -translate-x-1/2 transform px-10 text-base">
      <div className="mx-auto grid grid-cols-3 rounded-3xl px-9 py-5 backdrop-blur-xl">
        <h1 className="">{metadata.domain}</h1>
        <ul className="flex items-center justify-center gap-6">
          {metadata.socialMedia.map((item, index) => (
            <li key={index}>
              <a href={item.href} target="_blank">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-right">{metadata.email}</p>
      </div>
    </header>
  );
};
