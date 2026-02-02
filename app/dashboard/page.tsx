"use client";

import React, { useState } from 'react';
import { 
  Activity, Search, Bell, Menu, LayoutGrid, 
  Pill, AlertCircle, CheckCircle2, XCircle, 
  Bed, Users, FileText, TrendingUp, ShieldAlert,
  ChevronDown, Settings, LogOut, Truck, Plus
} from 'lucide-react';

// --- TYPES ---
type ViewType = 'pharmacy' | 'hospital' | 'insurer';

// --- MOCK DATA ---
const RX_QUEUE = [
  { id: 'RX-9921', patient: 'Thabo M.', doctor: 'Dr. Jenkins', meds: 'Amoxicillin 500mg', status: 'ready', time: '2m ago' },
  { id: 'RX-9922', patient: 'Sarah L.', doctor: 'Dr. Nkosi', meds: 'Lipitor 20mg', status: 'processing', time: '15m ago' },
  { id: 'RX-9923', patient: 'David K.', doctor: 'Dr. Naidoo', meds: 'Metformin 500mg', status: 'pending', time: '1h ago' },
];

const WARD_DATA = [
  { id: 'A1', status: 'occupied', patient: 'J. Doe', condition: 'stable' },
  { id: 'A2', status: 'occupied', patient: 'M. Smith', condition: 'critical' },
  { id: 'A3', status: 'available', patient: null, condition: null },
  { id: 'A4', status: 'cleaning', patient: null, condition: null },
  { id: 'B1', status: 'occupied', patient: 'P. Zulu', condition: 'stable' },
  { id: 'B2', status: 'available', patient: null, condition: null },
];

const CLAIMS_DATA = [
  { id: 'CLM-8842', provider: 'City General', amount: 'R 4,200', risk: 'low', status: 'approved' },
  { id: 'CLM-8843', provider: 'Dr. Jenkins', amount: 'R 850', risk: 'low', status: 'approved' },
  { id: 'CLM-8844', provider: 'MediQuick Pharm', amount: 'R 12,400', risk: 'high', status: 'flagged' },
  { id: 'CLM-8845', provider: 'Radiology Inc.', amount: 'R 3,100', risk: 'medium', status: 'review' },
];

// --- COMPONENTS ---

const Sidebar = ({ activeView, setView }: { activeView: ViewType, setView: (v: ViewType) => void }) => (
  <div className="w-64 bg-[#050505] border-r border-zinc-900 h-screen flex flex-col fixed left-0 top-0 z-20">
    <div className="h-20 flex items-center gap-3 px-6 border-b border-zinc-900">
      <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800">
        <Activity className="text-[#00BCD4]" size={18} />
      </div>
      <span className="text-white font-bold tracking-tight">MedEuphoria</span>
    </div>

    <div className="p-4 space-y-8 flex-1">
      <div>
        <div className="text-xs font-mono text-zinc-500 mb-4 px-2">ROLE SIMULATION</div>
        <button onClick={() => setView('pharmacy')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${activeView === 'pharmacy' ? 'bg-[#00BCD4]/10 text-[#00BCD4] border border-[#00BCD4]/20' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}>
          <Pill size={18} /> Pharmacy OS
        </button>
        <button onClick={() => setView('hospital')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${activeView === 'hospital' ? 'bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}>
          <Bed size={18} /> Hospital OS
        </button>
        <button onClick={() => setView('insurer')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${activeView === 'insurer' ? 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'}`}>
          <ShieldAlert size={18} /> Insurer OS
        </button>
      </div>

      <div>
        <div className="text-xs font-mono text-zinc-500 mb-4 px-2">GENERAL</div>
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"><LayoutGrid size={18} /> Dashboard</button>
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"><FileText size={18} /> Reports</button>
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"><Settings size={18} /> Settings</button>
      </div>
    </div>

    <div className="p-4 border-t border-zinc-900">
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900">
        <LogOut size={18} /> Logout
      </button>
    </div>
  </div>
);

const TopBar = ({ title }: { title: string }) => (
  <div className="h-20 border-b border-zinc-900 bg-[#0a0a0a]/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
    <h1 className="text-2xl font-bold text-white">{title}</h1>
    <div className="flex items-center gap-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
        <input type="text" placeholder="Search system..." className="bg-zinc-900 border border-zinc-800 text-sm text-white pl-10 pr-4 py-2 rounded-full w-64 focus:outline-none focus:border-[#00BCD4]" />
      </div>
      <button className="relative text-zinc-400 hover:text-white">
        <Bell size={20} />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
      <div className="w-8 h-8 bg-gradient-to-tr from-[#00BCD4] to-blue-600 rounded-full"></div>
    </div>
  </div>
);

const StatCard = ({ label, value, sub, color }: any) => (
  <div className="bg-[#121212] border border-zinc-900 p-6 rounded-xl relative overflow-hidden group">
    <div className={`absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-[${color}]`}>
      <Activity size={40} />
    </div>
    <div className="text-zinc-500 text-xs font-mono mb-2 uppercase tracking-widest">{label}</div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm font-medium" style={{ color: color }}>{sub}</div>
  </div>
);

// --- VIEW 1: PHARMACY ---
const PharmacyView = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    {/* Stats */}
    <div className="grid grid-cols-4 gap-6">
      <StatCard label="Rx To Process" value="12" sub="+4 since last hour" color="#00BCD4" />
      <StatCard label="Ready for Pickup" value="45" sub="8 awaiting collection" color="#10B981" />
      <StatCard label="Low Stock Alerts" value="3" sub="Amoxicillin, Insulin" color="#F59E0B" />
      <StatCard label="Daily Revenue" value="R 14,200" sub="+12% vs yesterday" color="#A855F7" />
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-3 gap-8">
      {/* Left: Queue */}
      <div className="col-span-2 bg-[#121212] border border-zinc-900 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-zinc-900 flex justify-between items-center">
          <h3 className="text-white font-bold">Incoming Prescriptions</h3>
          <span className="text-xs bg-[#00BCD4]/10 text-[#00BCD4] px-2 py-1 rounded">Live Feed</span>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="text-zinc-500 bg-zinc-900/50 uppercase font-mono text-xs">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Patient</th>
              <th className="px-6 py-4">Medication</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900">
            {RX_QUEUE.map((rx) => (
              <tr key={rx.id} className="hover:bg-zinc-900/30 transition-colors">
                <td className="px-6 py-4 font-mono text-zinc-300">{rx.id}</td>
                <td className="px-6 py-4 text-white font-medium">{rx.patient}</td>
                <td className="px-6 py-4 text-zinc-400">{rx.meds}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium 
                    ${rx.status === 'ready' ? 'bg-green-500/10 text-green-500' : 
                      rx.status === 'processing' ? 'bg-blue-500/10 text-blue-500' : 
                      'bg-amber-500/10 text-amber-500'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${rx.status === 'ready' ? 'bg-green-500' : rx.status === 'processing' ? 'bg-blue-500' : 'bg-amber-500'}`}></span>
                    {rx.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-white text-black px-3 py-1.5 rounded text-xs font-bold hover:bg-gray-200">Process</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right: Quick Stock */}
      <div className="bg-[#121212] border border-zinc-900 rounded-xl p-6">
        <h3 className="text-white font-bold mb-6">Inventory Warnings</h3>
        <div className="space-y-4">
          {[1,2,3].map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
              <div className="w-10 h-10 rounded bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
                <AlertCircle size={20} />
              </div>
              <div className="flex-1">
                <div className="text-white font-medium">Amoxicillin 500mg</div>
                <div className="text-xs text-zinc-500">12 Units Remaining</div>
              </div>
              <button className="p-2 hover:bg-zinc-800 rounded text-zinc-400"><Plus size={16}/></button>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg text-sm font-medium hover:text-white hover:bg-zinc-800 transition-colors">
          View Full Inventory
        </button>
      </div>
    </div>
  </div>
);

// --- VIEW 2: HOSPITAL ---
const HospitalView = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="grid grid-cols-4 gap-6">
      <StatCard label="Occupancy Rate" value="84%" sub="4 beds available" color="#EF4444" />
      <StatCard label="Incoming Ambulances" value="2" sub="ETA: 10 mins" color="#F59E0B" />
      <StatCard label="Doctors On Call" value="18" sub="Full coverage" color="#10B981" />
      <StatCard label="Emergency Wait" value="14m" sub="Avg time" color="#3B82F6" />
    </div>

    <div className="grid grid-cols-12 gap-8">
      {/* Bed Map */}
      <div className="col-span-8 bg-[#121212] border border-zinc-900 rounded-xl p-6">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-white font-bold">Ward A - Realtime Status</h3>
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#EF4444] rounded"></div> Occupied</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#10B981] rounded"></div> Available</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#F59E0B] rounded"></div> Cleaning</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {WARD_DATA.map((bed) => (
            <div key={bed.id} className={`p-4 rounded-lg border flex justify-between items-start transition-all hover:scale-[1.02] cursor-pointer
              ${bed.status === 'occupied' ? 'bg-[#EF4444]/5 border-[#EF4444]/20' : 
                bed.status === 'available' ? 'bg-[#10B981]/5 border-[#10B981]/20' : 
                'bg-[#F59E0B]/5 border-[#F59E0B]/20'}`}>
              <div>
                <div className="text-zinc-500 text-xs font-mono mb-1">BED {bed.id}</div>
                <div className={`font-bold ${bed.status === 'occupied' ? 'text-[#EF4444]' : bed.status === 'available' ? 'text-[#10B981]' : 'text-[#F59E0B]'}`}>
                  {bed.status.toUpperCase()}
                </div>
              </div>
              {bed.patient && (
                <div className="text-right">
                  <div className="text-white text-sm">{bed.patient}</div>
                  <div className="text-xs text-zinc-500">{bed.condition}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Admissions Feed */}
      <div className="col-span-4 bg-[#121212] border border-zinc-900 rounded-xl p-6">
        <h3 className="text-white font-bold mb-6">Incoming Transfers</h3>
        <div className="space-y-4">
          <div className="p-4 bg-zinc-900 border-l-4 border-red-500 rounded-r-lg">
             <div className="flex justify-between items-center mb-1">
               <span className="text-white font-bold">Trauma #992</span>
               <span className="text-red-500 text-xs font-bold animate-pulse">CRITICAL</span>
             </div>
             <p className="text-sm text-zinc-400">MVA • Male, 34 • ETA 5m</p>
          </div>
          <div className="p-4 bg-zinc-900 border-l-4 border-blue-500 rounded-r-lg">
             <div className="flex justify-between items-center mb-1">
               <span className="text-white font-bold">Transfer #401</span>
               <span className="text-blue-500 text-xs font-bold">STABLE</span>
             </div>
             <p className="text-sm text-zinc-400">Post-Op Recovery • Female, 62</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- VIEW 3: INSURER ---
const InsurerView = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="grid grid-cols-4 gap-6">
      <StatCard label="Claims Today" value="1,240" sub="R 4.2M Value" color="#F59E0B" />
      <StatCard label="Auto-Approved" value="82%" sub="via AI Engine" color="#10B981" />
      <StatCard label="Fraud Flagged" value="14" sub="High Risk" color="#EF4444" />
      <StatCard label="Avg Processing" value="0.4s" sub="Real-time" color="#3B82F6" />
    </div>

    <div className="bg-[#121212] border border-zinc-900 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-zinc-900 flex justify-between items-center">
        <h3 className="text-white font-bold">Live Claims Feed</h3>
        <div className="flex gap-2">
          <button className="text-xs bg-zinc-900 text-zinc-400 px-3 py-1.5 rounded hover:text-white">Filter</button>
          <button className="text-xs bg-zinc-900 text-zinc-400 px-3 py-1.5 rounded hover:text-white">Export</button>
        </div>
      </div>
      <table className="w-full text-sm text-left">
        <thead className="text-zinc-500 bg-zinc-900/50 uppercase font-mono text-xs">
          <tr>
            <th className="px-6 py-4">Claim ID</th>
            <th className="px-6 py-4">Provider</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">AI Risk Score</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-900">
          {CLAIMS_DATA.map((claim) => (
            <tr key={claim.id} className="hover:bg-zinc-900/30 transition-colors">
              <td className="px-6 py-4 font-mono text-zinc-300">{claim.id}</td>
              <td className="px-6 py-4 text-white font-medium">{claim.provider}</td>
              <td className="px-6 py-4 text-white">{claim.amount}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className={`h-1.5 w-16 rounded-full bg-zinc-800 overflow-hidden`}>
                    <div className={`h-full ${claim.risk === 'high' ? 'bg-red-500 w-[90%]' : claim.risk === 'medium' ? 'bg-amber-500 w-[50%]' : 'bg-green-500 w-[10%]'}`}></div>
                  </div>
                  <span className={`text-xs ${claim.risk === 'high' ? 'text-red-500' : 'text-zinc-500'}`}>{claim.risk.toUpperCase()}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium 
                  ${claim.status === 'approved' ? 'bg-green-500/10 text-green-500' : 
                    claim.status === 'flagged' ? 'bg-red-500/10 text-red-500' : 
                    'bg-amber-500/10 text-amber-500'}`}>
                  {claim.status.toUpperCase()}
                </span>
              </td>
              <td className="px-6 py-4 text-right text-zinc-400 hover:text-white cursor-pointer">
                View Details
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- MAIN PAGE LAYOUT ---

export default function DashboardPage() {
  const [activeView, setActiveView] = useState<ViewType>('pharmacy');

  return (
    <div className="flex min-h-screen bg-black font-sans selection:bg-[#00BCD4] selection:text-black">
      <Sidebar activeView={activeView} setView={setActiveView} />
      
      <main className="flex-1 ml-64">
        <TopBar title={activeView === 'pharmacy' ? 'Pharmacy Dispatch' : activeView === 'hospital' ? 'Ward Management' : 'Claims Adjudication'} />
        
        <div className="p-8">
          {activeView === 'pharmacy' && <PharmacyView />}
          {activeView === 'hospital' && <HospitalView />}
          {activeView === 'insurer' && <InsurerView />}
        </div>
      </main>
    </div>
  );
}