import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Wallet, Calendar, ShieldCheck, ArrowUpRight, Plus, ArrowDownRight } from 'lucide-react';

const initialMonthlyData = [
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
  const [chartData, setChartData] = useState(initialMonthlyData);
  const [transactions, setTransactions] = useState([
    { category: 'Salário Principal', date: 'Hoje', val: 7500, type: 'in', color: '#10b981' },
    { category: 'Supermercado CompreBem', date: 'Ontem', val: -412.50, type: 'out', color: '#ef4444' },
    { category: 'Aporte de Investimentos', date: '08 de Jun', val: -1000, type: 'out', color: '#f59e0b' },
  ]);

  // Form State
  const [desc, setDesc] = useState('');
  const [val, setVal] = useState('');
  const [type, setType] = useState('out'); // in / out
  const [showAddForm, setShowAddForm] = useState(false);
  const [notification, setNotification] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!desc || !val) return;

    const numericVal = parseFloat(val);
    if (isNaN(numericVal)) return;

    const actualVal = type === 'in' ? numericVal : -numericVal;
    const color = type === 'in' ? '#10b981' : '#ef4444';

    const newTx = {
      category: desc,
      date: 'Hoje',
      val: actualVal,
      type,
      color
    };

    // Update Transaction list
    setTransactions(prev => [newTx, ...prev]);

    // Recalculate Balance for June
    if (timeframe === 'monthly') {
      setChartData(prev => {
        const updated = [...prev];
        const lastIdx = updated.length - 1;
        updated[lastIdx] = {
          ...updated[lastIdx],
          Saldo: updated[lastIdx].Saldo + actualVal,
          Economias: type === 'in' 
            ? updated[lastIdx].Economias + (actualVal * 0.3)
            : updated[lastIdx].Economias
        };
        return updated;
      });
    }

    setDesc('');
    setVal('');
    setShowAddForm(false);
    setNotification('Lançamento adicionado!');
    setTimeout(() => setNotification(''), 3000);
  };

  // Compute values
  const currentJuneBalance = timeframe === 'monthly' ? chartData[chartData.length - 1].Saldo : 78000;
  const currentJuneSavings = timeframe === 'monthly' ? chartData[chartData.length - 1].Economias : 35000;

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
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
          <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginLeft: '12px', fontWeight: 600 }}>
            Painel Interativo Dinheiro no Controle™
          </span>
        </div>
        
        {/* Timeframe Toggle */}
        <div style={{ display: 'flex', backgroundColor: '#1e293b', padding: '4px', borderRadius: '8px' }}>
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

      {/* Notification Toast */}
      {notification && (
        <div style={{
          backgroundColor: '#10b981',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '0.8rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '16px',
          animation: 'pulseGlow 1.5s infinite'
        }}>
          ✓ {notification}
        </div>
      )}

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '16px',
        }}>
          <div style={{ display: 'flex', justifyView: 'space-between', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Saldo Atual</span>
            <Wallet size={16} style={{ color: '#10b981' }} />
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
            R$ {currentJuneBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h3>
          <span style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '2px', marginTop: '4px' }}>
            <ArrowUpRight size={12} /> Saldo ativo simulado
          </span>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '16px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Economias acumuladas</span>
            <ShieldCheck size={16} style={{ color: '#f59e0b' }} />
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
            R$ {currentJuneSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h3>
          <span style={{ fontSize: '0.7rem', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '2px', marginTop: '4px' }}>
            Economias estimadas
          </span>
        </div>
      </div>

      {/* Main Chart Area */}
      <div style={{ height: '180px', width: '100%', marginBottom: '24px', position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={timeframe === 'monthly' ? chartData : yearlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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

      {/* Recent Transactions List with Interactive Adder */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Lançamentos Recentes
          </h4>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: 'none',
              borderRadius: '6px',
              color: '#10b981',
              padding: '4px 10px',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s'
            }}
          >
            <Plus size={12} /> {showAddForm ? 'Fechar' : 'Lançar'}
          </button>
        </div>

        {/* Add Lançamento Form */}
        {showAddForm && (
          <form onSubmit={handleAddTransaction} style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '10px',
            padding: '16px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="text" 
                placeholder="Descrição (ex: Delivery, Cinema)" 
                value={desc}
                onChange={e => setDesc(e.target.value)}
                required
                style={{
                  flexGrow: 2,
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  color: '#fff',
                  padding: '8px 12px',
                  fontSize: '0.8rem',
                  outline: 'none'
                }}
              />
              <input 
                type="number" 
                placeholder="Valor (R$)" 
                value={val}
                onChange={e => setVal(e.target.value)}
                required
                style={{
                  flexGrow: 1,
                  width: '90px',
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  color: '#fff',
                  padding: '8px 12px',
                  fontSize: '0.8rem',
                  outline: 'none'
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <label style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="txType" 
                    checked={type === 'out'} 
                    onChange={() => setType('out')} 
                  /> Despesa (-)
                </label>
                <label style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="txType" 
                    checked={type === 'in'} 
                    onChange={() => setType('in')} 
                  /> Receita (+)
                </label>
              </div>
              <button type="submit" style={{
                backgroundColor: '#10b981',
                border: 'none',
                color: '#fff',
                padding: '6px 16px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}>
                Confirmar
              </button>
            </div>
          </form>
        )}

        {/* Transactions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {transactions.map((t, idx) => (
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
                {t.val > 0 ? '+' : ''}R$ {Math.abs(t.val).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
