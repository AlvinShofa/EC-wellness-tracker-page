"use client";

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Heart, MessageCircle, TrendingUp, Sparkles, RefreshCw, Plus } from 'lucide-react';
import InputPage from './InputPage';
import { motivationalMessages, initialMoodData, initialSessions } from './data';

export default function WellnessDashboard() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [currentMessage, setCurrentMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // State untuk data
  const [moodData, setMoodData] = useState(initialMoodData);

  const [sessions, setSessions] = useState(initialSessions);

  const [stats, setStats] = useState({
    totalSessions: 0,
    avgDuration: 0,
    currentMood: 0
  });

  // Form states
  const [showAddSession, setShowAddSession] = useState(false);
  const [showAddMood, setShowAddMood] = useState(false);
  const [newSession, setNewSession] = useState({ date: '', duration: '', notes: '' });
  const [newMood, setNewMood] = useState({ date: '', mood: '', note: '' });

  // Calculate stats
  useEffect(() => {
    const totalSessions = sessions.length;
    const avgDuration = sessions.length > 0 
      ? Math.round(sessions.reduce((acc, s) => acc + s.duration, 0) / sessions.length)
      : 0;
    const currentMood = moodData[moodData.length - 1]?.mood || 0;

    setStats({ totalSessions, avgDuration, currentMood });
  }, [sessions, moodData]);

  // Set pesan motivasi acak
  useEffect(() => {
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    setCurrentMessage(randomMessage);
  }, []);

  const showNotif = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      setCurrentMessage(randomMessage);
      setIsRefreshing(false);
      showNotif('Data berhasil diperbarui!');
    }, 800);
  };

  const handleAddSession = () => {
    if (!newSession.date || !newSession.duration) {
      showNotif('Mohon isi tanggal dan durasi!');
      return;
    }

    const session = {
      id: sessions.length + 1,
      date: newSession.date,
      duration: parseInt(newSession.duration),
      notes: newSession.notes
    };

    setSessions([...sessions, session]);
    setNewSession({ date: '', duration: '', notes: '' });
    setShowAddSession(false);
    showNotif('Sesi konseling berhasil ditambahkan!');
  };

  const handleAddMood = () => {
    if (!newMood.date || !newMood.mood) {
      showNotif('Mohon isi tanggal dan mood!');
      return;
    }

    const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const date = new Date(newMood.date);
    const dayName = days[date.getDay()];

    const mood = {
      day: dayName,
      mood: parseFloat(newMood.mood),
      date: newMood.date,
      note: newMood.note
    };

    setMoodData([...moodData, mood].slice(-7));
    setNewMood({ date: '', mood: '', note: '' });
    setShowAddMood(false);
    showNotif('Mood berhasil dicatat!');
  };

  const handleDeleteSession = (id: number) => {
    setSessions(sessions.filter(s => s.id !== id));
    showNotif('Sesi berhasil dihapus!');
  };

  if (currentPage === 'input') {
    return <InputPage 
      onBack={() => setCurrentPage('dashboard')}
      sessions={sessions}
      onDeleteSession={handleDeleteSession}
      showAddSession={showAddSession}
      setShowAddSession={setShowAddSession}
      newSession={newSession}
      setNewSession={setNewSession}
      handleAddSession={handleAddSession}
      showAddMood={showAddMood}
      setShowAddMood={setShowAddMood}
      newMood={newMood}
      setNewMood={setNewMood}
      handleAddMood={handleAddMood}
      moodData={moodData}
      showNotification={showNotification}
      notificationMessage={notificationMessage}
    />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-4 md:p-8">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 animate-slide-in z-50 border-l-4 border-red-900">
          <p className="text-sm text-gray-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-red-900" />
            {notificationMessage}
          </p>
        </div>
      )}

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 transition-all duration-300 hover:text-red-900">
              Wellness Tracker
            </h1>
            <p className="text-gray-700 text-sm md:text-base">Your journey to better mental health</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 border border-gray-300"
            >
              <RefreshCw className={`w-4 h-4 text-red-900 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="text-sm font-medium text-gray-900">Perbarui</span>
            </button>
            <button
              onClick={() => setCurrentPage('input')}
              className="flex items-center gap-2 bg-red-900 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-white hover:bg-red-800"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Input Data</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Total Sessions */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-red-900 p-3 rounded-xl">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">Total</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1 font-medium">Total Sesi Konseling</h3>
            <p className="text-3xl font-bold text-gray-900">{stats.totalSessions}</p>
            <p className="text-xs text-red-900 mt-2 flex items-center gap-1 font-medium">
              <TrendingUp className="w-3 h-3" />
              Terus bertambah!
            </p>
          </div>

          {/* Average Duration */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gray-900 p-3 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">Rata-rata</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1 font-medium">Durasi Rata-rata</h3>
            <p className="text-3xl font-bold text-gray-900">{stats.avgDuration} <span className="text-lg text-gray-600">mnt</span></p>
            <p className="text-xs text-gray-600 mt-2 font-medium">Per sesi konseling</p>
          </div>

          {/* Current Mood */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-red-800 p-3 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">Terkini</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1 font-medium">Mood Terkini</h3>
            <p className="text-3xl font-bold text-gray-900">{stats.currentMood}<span className="text-lg text-gray-600">/10</span></p>
            <p className="text-xs text-red-900 mt-2 font-medium">
              {stats.currentMood >= 8 ? 'Sangat baik! 🌟' : stats.currentMood >= 6 ? 'Cukup baik 🖤' : 'Tetap semangat! 💪'}
            </p>
          </div>
        </div>

        {/* Mood Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-red-900" />
            Perjalanan Mood Minggu Ini
          </h2>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="day" 
                  stroke="#4b5563"
                  style={{ fontSize: '12px', fontWeight: '500' }}
                />
                <YAxis 
                  domain={[0, 10]}
                  stroke="#4b5563"
                  style={{ fontSize: '12px', fontWeight: '500' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '2px solid #7f1d1d',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                  formatter={(value) => [`${value}/10`, 'Mood']}
                />
                <Line 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="#7f1d1d" 
                  strokeWidth={3}
                  dot={{ fill: '#7f1d1d', r: 5 }}
                  activeDot={{ r: 7, fill: '#991b1b' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-600 mt-4 text-center font-medium">
            Tracking {moodData.length} hari terakhir 📈
          </p>
        </div>

        {/* Motivational Message */}
        <div className="bg-gradient-to-r from-red-900 via-red-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className="text-center">
            <Sparkles className="w-8 h-8 text-white mx-auto mb-4 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Pesan Hari Ini
            </h2>
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
              {currentMessage}
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-gray-600 text-sm py-6">
          <p className="font-medium">EmergencyyCall - Your Mental Health Companion 🖤</p>
          <p className="text-xs mt-2">Data diperbarui secara real-time</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}