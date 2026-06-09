import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, ArrowUpRight, ArrowDownRight, Wallet, Calendar, ShieldCheck } from 'lucide-react';

const monthlyData = [
  { name: 'Jan', Saldo: 1200, Economias: 300 },
  { name: 'Fev', Saldo: 1800, Economias: 500 },
  { name: 'Mar', Saldo: 2400, Economias: 800 },
  { name: 'Abr', Saldo: 2100, Economias: 600 },
  { name: 'Mai', Saldo: 3500, Economias: 1200 },
  { name: 'Jun', Saldo: 4750, Economias: 1800 },
];

const yearlyData = [
  { name: '2021', Saldo: 5000, Economias: 1200 },
  { name: '2022', Saldo: 12000, Economias: 3500 },
  { name: '2023', Saldo: 22000, Economias: 7000 },
  { name: '2024', Saldo: 38000, Economias: 14000 },
  { name: '2025', Saldo: 55000, Economias: 22000 },
  { name: '2026', Saldo: 78000, Economias: 35000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{label}</p>
        <p style={{ color: '#10b981' }}>Saldo: R$ {payload[0].value.toLocaleString('pt-BR')}</p>
        {payload[1] && <p style={{ color: '#f59e0b' }}>Economias: R$ {payload[1].value.toLocaleString('pt-BR')}</p>}
      </div>
    );
  }
  return null;
};

export default function DashboardMockup() {
  const [timeframe, setTimeframe] = useState('monthly');
  const data = timeframe === 'monthly' ? monthlyData : yearlyData;

  return (
    <div style={{
      background: '#0f172a',
      borderRadius: '24px',
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      color: '#fff',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
    }}>
      {/* Mockup Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        paddingBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#ef4444'
          }} />
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#eab308'
          }} />
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#22c55e'
          }} />
          <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginLeft: '12px', fontWeight: 600 }}>
            Dinheiro no Controle™ - Dashboard do Sistema
          </span>
        </div>
        
        {/* Timeframe Toggle */}
        <div style={{
          display: 'flex',
          backgroundColor: '#1e293b',
          padding: '4px',
          borderRadius: '8px'
        }}>
          <button 
            onClick={() => setTimeframe('monthly')}
            style={{
              padding: '6px 12px',
              fontSize: '0.75rem',
              fontWeight: 700,
              backgroundColor: timeframe === 'monthly' ? '#10b981' : 'transparent',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Mês Atual
          </button>
          <button 
            onClick={() => setTimeframe('yearly')}
            style={{
              padding: '6px 12px',
              fontSize: '0.75rem',
              fontWeight: 700,
              backgroundColor: timeframe === 'yearly' ? '#10b981' : 'transparent',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Histórico
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '16px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Saldo Total</span>
            <Wallet size={16} style={{ color: '#10b981' }} />
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
            R$ {timeframe === 'monthly' ? '4.750,00' : '78.000,00'}
          </h3>
          <span style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '2px', marginTop: '4px' }}>
            <ArrowUpRight size={12} /> +12% este mês
          </span>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '16px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Economizado</span>
            <ShieldCheck size={16} style={{ color: '#f59e0b' }} />
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
            R$ {timeframe === 'monthly' ? '1.800,00' : '35.000,00'}
          </h3>
          <span style={{ fontSize: '0.7rem', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '2px', marginTop: '4px' }}>
            Meta de 40% atingida!
          </span>
        </div>
      </div>

      {/* Main Chart Area */}
      <div style={{
        height: '200px',
        width: '100%',
        marginBottom: '24px',
        position: 'relative'
      }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSaldo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorEconomias" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
            <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="Saldo" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorSaldo)" />
            <Area type="monotone" dataKey="Economias" stroke="#f59e0b" strokeWidth={1.5} fillOpacity={1} fill="url(#colorEconomias)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Transactions List */}
      <div>
        <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Transações Recentes
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            { category: 'Salário Principal', date: 'Hoje', val: '+R$ 7.500,00', type: 'in', color: '#10b981' },
            { category: 'Supermercado CompreBem', date: 'Ontem', val: '-R$ 412,50', type: 'out', color: '#ef4444' },
            { category: 'Aporte de Investimentos', date: '08 de Jun', val: '-R$ 1.000,00', type: 'out', color: '#f59e0b' },
          ].map((t, idx) => (
            <div key={idx} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 14px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '10px',
              fontSize: '0.85rem'
            }}>
              <div>
                <div style={{ fontWeight: 600, color: '#fff' }}>{t.category}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={10} /> {t.date}
                </div>
              </div>
              <div style={{ fontWeight: 700, color: t.color }}>
                {t.val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
