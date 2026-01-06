'use client';

export default function Gallery() {

  const years = Array.from({length:14},(_,i)=>2012+i);

  return (
    <div className="p-10 max-w-6xl mx-auto">

      <h2 className="text-xl font-bold mb-10">
        Scholarship Events Gallery
      </h2>

      <div className="grid md:grid-cols-4 gap-4">

        {years.map(y=>(
          <div key={y}
            className="border rounded-2xl p-2 text-center">
            <a href={`/events/${y}`}>
              {y}
            </a>
          </div>
        ))}

      </div>

    </div>
  );
}
