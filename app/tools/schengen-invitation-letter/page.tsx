"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";

 
export default function Page() {
  return (
    <MasterPage title="About Us">
   <div className="w-full min-h-screen bg-white text-gray-900">
{/* Hero Section */}
<section className="max-w-screen-xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h1 className="text-4xl font-extrabold leading-tight">
Transform your <br /> selfie into a <span className="text-blue-600">visa photo</span>
</h1>
<p className="text-gray-600 max-w-md">Your dream destination is just an e-visa away. Let's make it happen.</p>
<button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg shadow hover:bg-blue-700 transition">
Create my visa photo
</button>
</div>


{/* Image */}
<div className="flex justify-center">
<img
src="/visa-image.png"
alt="Visa Preview"
className="rounded-3xl shadow-xl w-80 h-auto object-cover"
/>
</div>
</section>


{/* How it Works */}
<section className="max-w-screen-xl mx-auto px-6 py-16">
<h2 className="text-3xl font-bold mb-10">How It Works</h2>


<div className="grid md:grid-cols-3 gap-6">
<div className="bg-purple-100 p-6 rounded-2xl shadow-sm">
<h3 className="text-lg font-semibold mb-2">2-minute process</h3>
<p className="text-gray-600">Fill in the fields and submit.</p>
</div>


<div className="bg-yellow-100 p-6 rounded-2xl shadow-sm">
<h3 className="text-lg font-semibold mb-2">Done from home</h3>
<p className="text-gray-600">No going to photo studios!</p>
</div>


<div className="bg-pink-100 p-6 rounded-2xl shadow-sm">
<h3 className="text-lg font-semibold mb-2">Correct Dimensions</h3>
<p className="text-gray-600">Cropped to meet official visa requirements.</p>
</div>
</div>
</section>


{/* Selector Section */}
<section className="max-w-screen-xl mx-auto px-6 py-12">
<div className="border rounded-3xl p-8 shadow-sm bg-white">
<div className="flex gap-8 border-b pb-4 mb-6">
<button className="text-blue-600 font-semibold">Select Country</button>
<button className="text-gray-500">Upload Photo</button>
<button className="text-gray-500">Download Result</button>
</div>


<label className="block mb-3 font-medium">Select Destination</label>
<select className="w-full border p-3 rounded-xl mb-6">
<option>Select an option...</option>
</select>


<button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg shadow hover:bg-blue-700 transition">
Create my photo
</button>
</div>
</section>


{/* Info Section */}
<section className="max-w-screen-xl mx-auto px-6 py-12 space-y-6">
<h3 className="text-2xl font-bold">What is a passport-size photo?</h3>
<p className="text-gray-700 leading-relaxed">
A passport-size photo plays a crucial role in identity verification for travel and visa applications. Different countries have different size rules.
</p>


<h3 className="text-2xl font-bold">How to create the perfect passport-size photo?</h3>
<ul className="list-disc pl-6 space-y-2 text-gray-700">
<li>Use a clean background.</li>
<li>Ensure correct lighting.</li>
<li>Center your face properly.</li>
<li>Follow size and dimension guidelines.</li>
</ul>
</section>
</div>
    </MasterPage>
  );
}
