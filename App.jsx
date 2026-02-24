import React, { useState } from 'react';
import { User, MapPin, Briefcase, Calendar, CheckCircle2, Heart, ShieldCheck, GraduationCap, Coins, Info, Baby, Wine, Cigarette } from 'lucide-react';

const App = () => {
  // Updated State with Tsuneda Akari's information
  const [profile, setProfile] = useState({
    name: "Tsuneda Akari",
    nameJp: "常田あかり",
    age: "30",
    occupation: "Office Worker",
    location: "Tokyo, Japan",
    heightWeight: "170cm / 55kg / O",
    education: "Vocational School Graduate",
    income: "4.5 Million Yen",
    maritalHistory: "First Marriage",
    drinking: "Social drinking only",
    smoking: "Non-smoker",
    children: "Wishes to have children",
    intro: "Value the balance between a professional career and a warm, sincere personal life. I am looking for a partner to build a future based on mutual respect and shared joy.",
    membership: "Premium Platinum Member"
  });

  // Brand Colors
  const primaryPink = "#FF5A83";
  const subPink = "#FF7BA1";

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4 font-sans">
      {/* 9:16 Profile Card */}
      <div className="relative w-full max-w-[450px] aspect-[9/16] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
        
        {/* Subtle Background Accent */}
        <div 
          className="absolute top-0 right-0 w-64 h-64 opacity-5 blur-3xl rounded-full"
          style={{ background: `linear-gradient(135deg, ${primaryPink}, ${subPink})` }}
        />

        {/* Header / Agency Branding */}
        <div className="pt-8 px-8 flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: primaryPink }}
            />
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold">
              Premium Matchmaking Agency
            </span>
          </div>
          <ShieldCheck size={18} className="text-gray-300" />
        </div>

        {/* Profile Image Area */}
        <div className="px-8 mt-6 flex-shrink-0">
          <div className="relative group">
            {/* Main Image Placeholder */}
            <div className="w-full aspect-[4/5] rounded-[32px] bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden relative">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                  <User size={32} className="text-gray-200" />
                </div>
                <span className="text-xs text-gray-400 font-medium italic tracking-wide">
                  Insert Client Portrait Here
                </span>
              </div>
              
              <div 
                className="absolute inset-0 rounded-[32px] pointer-events-none border-2 opacity-20"
                style={{ borderColor: subPink }}
              />
            </div>

            {/* Verified Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-lg border border-gray-50 flex items-center gap-1.5 z-20 whitespace-nowrap">
              <CheckCircle2 size={14} style={{ color: primaryPink }} />
              <span className="text-[10px] font-bold text-gray-600 tracking-wider uppercase">Identity Verified</span>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 px-8 flex-grow flex flex-col overflow-y-auto custom-scrollbar pb-6">
          {/* Name & Title */}
          <div className="text-center mb-4">
            <h1 className="text-2xl font-light text-gray-800 tracking-tight mb-1">
              {profile.name}
            </h1>
            <div className="flex items-center justify-center gap-3">
               <span className="text-sm text-gray-400 font-medium tracking-widest">{profile.nameJp}</span>
               <div className="w-1 h-1 rounded-full bg-gray-200" />
               <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: subPink }}>
                {profile.membership}
               </span>
            </div>
          </div>

          {/* Intro Text */}
          <div className="relative px-4 mb-6 text-center">
            <p className="text-[13px] leading-relaxed text-gray-600 font-light italic px-2">
              "{profile.intro}"
            </p>
          </div>

          {/* Details Grid - Optimized for more content */}
          <div className="space-y-3">
            {/* Primary Rows */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col p-3 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar size={14} style={{ color: primaryPink }} />
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Age</span>
                </div>
                <span className="text-xs font-semibold text-gray-700">{profile.age} Years</span>
              </div>
              <div className="flex flex-col p-3 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} style={{ color: primaryPink }} />
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Location</span>
                </div>
                <span className="text-xs font-semibold text-gray-700 truncate">{profile.location}</span>
              </div>
            </div>

            {/* Career & Education */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <Briefcase size={16} style={{ color: primaryPink }} />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Career</span>
              </div>
              <span className="text-xs font-semibold text-gray-700">{profile.occupation} ({profile.income})</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <GraduationCap size={16} style={{ color: primaryPink }} />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Education</span>
              </div>
              <span className="text-xs font-semibold text-gray-700">{profile.education}</span>
            </div>

            {/* Detailed Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50/50 rounded-2xl border border-gray-100 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-gray-400 uppercase">Physical</span>
                <span className="text-[11px] font-medium text-gray-600">{profile.heightWeight}</span>
              </div>
              <div className="p-3 bg-gray-50/50 rounded-2xl border border-gray-100 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-gray-400 uppercase">Marriage</span>
                <span className="text-[11px] font-medium text-gray-600">{profile.maritalHistory}</span>
              </div>
              <div className="p-3 bg-gray-50/50 rounded-2xl border border-gray-100 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-gray-400 uppercase">Smoking/Drinking</span>
                <span className="text-[11px] font-medium text-gray-600 leading-tight">{profile.smoking} / {profile.drinking}</span>
              </div>
              <div className="p-3 bg-gray-50/50 rounded-2xl border border-gray-100 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-gray-400 uppercase">Children</span>
                <span className="text-[11px] font-medium text-gray-600">{profile.children}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Accent */}
        <div className="h-2 w-full mt-auto" style={{ background: `linear-gradient(90deg, ${primaryPink}, ${subPink})` }} />
      </div>

      {/* Editor Panel (Simulated Reusability) */}
      <div className="ml-8 hidden lg:block w-80 bg-white p-6 rounded-3xl shadow-xl h-fit border border-gray-100 max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Template Editor</h2>
        <div className="space-y-3">
          {Object.keys(profile).map((key) => (
            <div key={key}>
              <label className="text-[9px] uppercase font-bold text-gray-400 ml-1">{key.replace(/([A-Z])/g, ' $1')}</label>
              {key === 'intro' ? (
                <textarea 
                  rows="2"
                  className="w-full mt-1 p-2 bg-gray-50 border border-gray-100 rounded-lg text-xs focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                  value={profile[key]}
                  onChange={(e) => setProfile({...profile, [key]: e.target.value})}
                />
              ) : (
                <input 
                  className="w-full mt-1 p-2 bg-gray-50 border border-gray-100 rounded-lg text-xs focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  value={profile[key]}
                  onChange={(e) => setProfile({...profile, [key]: e.target.value})}
                />
              )}
            </div>
          ))}
          <div className="pt-4">
             <button className="w-full py-3 rounded-xl text-white font-bold text-sm shadow-lg shadow-pink-200 transition-transform active:scale-95"
               style={{ background: `linear-gradient(135deg, ${primaryPink}, ${subPink})` }}>
               Export Profile Card
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
