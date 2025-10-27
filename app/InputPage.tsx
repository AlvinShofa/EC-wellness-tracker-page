"use client";

import { MessageCircle, Heart, Sparkles, Plus, X, Save, Calendar } from 'lucide-react';

// TypeScript interfaces
export interface Session {
  id: number;
  date: string;
  duration: number;
  notes: string;
}

export interface MoodData {
  day: string;
  mood: number;
  date: string;
  note?: string;
}

export interface InputPageProps {
  onBack: () => void;
  sessions: Session[];
  onDeleteSession: (id: number) => void;
  showAddSession: boolean;
  setShowAddSession: (show: boolean) => void;
  newSession: { date: string; duration: string; notes: string };
  setNewSession: (session: { date: string; duration: string; notes: string }) => void;
  handleAddSession: () => void;
  showAddMood: boolean;
  setShowAddMood: (show: boolean) => void;
  newMood: { date: string; mood: string; note: string };
  setNewMood: (mood: { date: string; mood: string; note: string }) => void;
  handleAddMood: () => void;
  moodData: MoodData[];
  showNotification: boolean;
  notificationMessage: string;
}

// Input Page Component
export default function InputPage({ 
  onBack, 
  sessions, 
  onDeleteSession,
  showAddSession,
  setShowAddSession,
  newSession,
  setNewSession,
  handleAddSession,
  showAddMood,
  setShowAddMood,
  newMood,
  setNewMood,
  handleAddMood,
  moodData,
  showNotification,
  notificationMessage
}: InputPageProps) {
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
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-red-900 hover:text-red-800 mb-4 transition-colors font-medium"
        >
          <span className="text-2xl">←</span>
          <span className="font-semibold">Kembali ke Dashboard</span>
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Input Data Wellness
        </h1>
        <p className="text-gray-700 font-medium">Tambahkan sesi konseling dan mood tracking Anda</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Add Session Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-red-900" />
              Sesi Konseling
            </h2>
            <button
              onClick={() => setShowAddSession(!showAddSession)}
              className="flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors font-medium"
            >
              <Plus className="w-4 h-4" />
              Tambah Sesi
            </button>
          </div>

          {/* Add Session Form */}
          {showAddSession && (
            <div className="bg-gray-100 rounded-lg p-4 mb-4 border-2 border-gray-300">
              <h3 className="font-semibold text-gray-900 mb-3">Tambah Sesi Baru</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-1 font-medium">Tanggal</label>
                  <input
                    type="date"
                    value={newSession.date}
                    onChange={(e) => setNewSession({...newSession, date: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-red-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1 font-medium">Durasi (menit)</label>
                  <input
                    type="number"
                    value={newSession.duration}
                    onChange={(e) => setNewSession({...newSession, duration: e.target.value})}
                    placeholder="45"
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-red-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1 font-medium">Catatan (opsional)</label>
                  <textarea
                    value={newSession.notes}
                    onChange={(e) => setNewSession({...newSession, notes: e.target.value})}
                    placeholder="Topik yang dibahas..."
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-red-900 focus:outline-none"
                    rows={3}
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleAddSession}
                    className="flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors font-medium"
                  >
                    <Save className="w-4 h-4" />
                    Simpan
                  </button>
                  <button
                    onClick={() => setShowAddSession(false)}
                    className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Sessions List */}
          <div className="space-y-3">
            {sessions.length === 0 ? (
              <p className="text-gray-600 text-center py-8 font-medium">Belum ada sesi konseling</p>
            ) : (
              sessions.map((session) => (
                <div key={session.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-2 border-gray-200">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-red-900" />
                      <span className="font-semibold text-gray-900">{session.date}</span>
                      <span className="text-sm text-gray-600 font-medium">• {session.duration} menit</span>
                    </div>
                    {session.notes && (
                      <p className="text-sm text-gray-700 ml-6">{session.notes}</p>
                    )}
                  </div>
                  <button
                    onClick={() => onDeleteSession(session.id)}
                    className="text-red-900 hover:text-red-700 transition-colors p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Add Mood Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-900" />
              Mood Tracking
            </h2>
            <button
              onClick={() => setShowAddMood(!showAddMood)}
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <Plus className="w-4 h-4" />
              Catat Mood
            </button>
          </div>

          {/* Add Mood Form */}
          {showAddMood && (
            <div className="bg-gray-100 rounded-lg p-4 mb-4 border-2 border-gray-300">
              <h3 className="font-semibold text-gray-900 mb-3">Catat Mood Hari Ini</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-1 font-medium">Tanggal</label>
                  <input
                    type="date"
                    value={newMood.date}
                    onChange={(e) => setNewMood({...newMood, date: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-red-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1 font-medium">Mood Score (0-10)</label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={newMood.mood}
                    onChange={(e) => setNewMood({...newMood, mood: e.target.value})}
                    placeholder="7.5"
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-red-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1 font-medium">Catatan (opsional)</label>
                  <textarea
                    value={newMood.note}
                    onChange={(e) => setNewMood({...newMood, note: e.target.value})}
                    placeholder="Apa yang kamu rasakan hari ini?"
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-red-900 focus:outline-none"
                    rows={3}
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleAddMood}
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    <Save className="w-4 h-4" />
                    Simpan
                  </button>
                  <button
                    onClick={() => setShowAddMood(false)}
                    className="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-900 hover:bg-gray-100 transition-colors font-medium"
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Recent Mood Entries */}
          <div className="space-y-3">
            {moodData.length === 0 ? (
              <p className="text-gray-600 text-center py-8 font-medium">Belum ada data mood</p>
            ) : (
              moodData.slice(-5).reverse().map((mood, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-red-900" />
                    <div>
                      <span className="font-semibold text-gray-900">{mood.day}</span>
                      <span className="text-sm text-gray-600 ml-2 font-medium">{mood.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-red-900">{mood.mood}</span>
                    <span className="text-sm text-gray-600 font-medium">/10</span>
                  </div>
                </div>
              ))
            )}
          </div>
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
