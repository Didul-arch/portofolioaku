export const Project = ({
  src,
  title,
  description,
  camera,
  location,
  date,
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-6xl">{title}</h3>
      <img src={src} alt={title} className="mt-10 rounded-[52px]" />
      <div className="mt-16 grid grid-cols-4 gap-10">
        <div className="col-span-1 flex flex-col gap-1 opacity-90">
          <div className="flex gap-2 text-base font-semibold uppercase">
            <span className="font-bold text-slate-600">Camera</span>
            {camera}
          </div>
          <div className="flex gap-2 text-base font-semibold uppercase">
            <span className="font-bold text-slate-600">Location</span>
            {location}
          </div>
          <div className="flex gap-2 text-base font-semibold uppercase">
            <span className="font-bold text-slate-600">Date</span>
            {date}
          </div>
        </div>
        <p className="col-span-3 text-justify text-xl">{description}</p>
      </div>
    </div>
  );
};
