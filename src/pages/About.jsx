import React from "react";
import khmer from "../json/khmer.json";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white px-4 py-10 flex items-center justify-center">
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
          About Cambodia
        </h1>

        <div className="space-y-2 text-gray-700 text-lg leading-relaxed">
          <p>
            <span className="font-semibold">Country:</span> {khmer.country}
          </p>
          <p>
            <span className="font-semibold">Official Name:</span>{" "}
            {khmer.official_name}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {khmer.capital}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {khmer.region}
          </p>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {khmer.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Area:</span>{" "}
            {khmer.area_km2.toLocaleString()} km²
          </p>
          <p>
            <span className="font-semibold">Language:</span>{" "}
            {khmer.languages.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Currency:</span>{" "}
            {khmer.currency.name} ({khmer.currency.symbol})
          </p>
          <p>
            <span className="font-semibold">Government:</span>{" "}
            {khmer.government.type}
          </p>
          <p>
            <span className="font-semibold">Monarch:</span>{" "}
            {khmer.government.monarch}
          </p>
          <p>
            <span className="font-semibold">Prime Minister:</span>{" "}
            {khmer.government.prime_minister}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
            Major Cities
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {khmer.major_cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
            Landmarks
          </h2>
          <ul className="space-y-4 text-gray-700">
            {khmer.landmarks.map((landmark) => (
              <li key={landmark.name}>
                <span className="font-bold text-gray-800">{landmark.name}</span>{" "}
                <span className="italic text-gray-500">
                  ({landmark.location})
                </span>
                : {landmark.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
