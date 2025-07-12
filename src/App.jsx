import React, { useState } from "react";

const sampleChartData = [
  {
    date: "1993-06-06",
    chart: [
      { position: 1, title: "That's the Way Love Goes", artist: "Janet Jackson" },
      { position: 2, title: "Freak Me", artist: "Silk" },
      { position: 3, title: "Knockin' Da Boots", artist: "H-Town" },
      { position: 4, title: "Dre Day", artist: "Dr. Dre" },
      { position: 5, title: "Weak", artist: "SWV" },
      { position: 6, title: "Whoomp! (There It Is)", artist: "Tag Team" },
      { position: 7, title: "That's What Love Can Do", artist: "Boy Krazy" },
      { position: 8, title: "Informer", artist: "Snow" },
      { position: 9, title: "I'm So Into You", artist: "SWV" },
      { position: 10, title: "If I Had No Loot", artist: "Tony! Toni! Toné!" }
    ]
  }
];

export default function ChartPlay() {
  const [selectedDate, setSelectedDate] = useState("1993-06-06");
  const [chart, setChart] = useState(sampleChartData[0].chart);

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    const result = sampleChartData.find((entry) => entry.date === date);
    setChart(result ? result.chart : []);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">ChartPlay</h1>
      <label className="block mb-2 text-sm font-medium">Pick a date</label>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="mb-4 border p-2 rounded"
      />

      {chart.length > 0 ? (
        <ul className="space-y-2">
          {chart.map((song) => (
            <li key={song.position} className="border p-3 rounded shadow">
              <div className="font-semibold">#{song.position} - {song.title}</div>
              <div className="text-sm text-gray-600">{song.artist}</div>
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(song.title + ' ' + song.artist)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm"
              >
                Play on YouTube
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500 mt-4">No chart data for this date.</p>
      )}

      <footer className="mt-8 text-sm text-gray-400 text-center">Built by GB</footer>
    </div>
  );
}
