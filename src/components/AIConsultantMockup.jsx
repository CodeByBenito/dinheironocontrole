import React, { useState, useEffect } from 'react';
import { Bot, User, CheckCircle2, Send } from 'lucide-react';

const presetConversations = {
  delivery: {
    question: 'Como economizar no delivery este mês?',
    response: (
      <div>
        <p style={{ fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>
          Análise de Alimentação Fora de Casa 🍔
        </p>
        <p style={{ marginBottom: '8px' }}>
          Identifiquei um padrão! Despesas com delivery costumam evaporar silenciosamente. Minhas recomendações:
        </p>
        <div style={{
          backgroundColor: '#f1f5f9',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '10px',
          borderLeft: '3px solid #10b981'
        }}>
          <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li>Defina um teto semanal de R$ 90 para pedidos.</li>
            <li>Substitua os outros jantares por compras planejadas de mercado.</li>
          </ul>
        </div>
        <p style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#047857', fontWeight: 700, fontSize: '0.8rem', margin: 0 }}>
          <CheckCircle2 size={14} /> Economia esperada: R$ 320,00/mês.
        </p>
      </div>
    )
  },
  reserva: {
    question: 'Como montar minha Reserva de Emergência?',
    response: (
      <div>
        <p style={{ fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>
          Plano de Reserva de Emergência 🛡️
        </p>
        <p style={{ marginBottom: '8px' }}>
          Sua reserva deve cobrir de <strong>3 a 6 meses</strong> de seu custo de vida essencial.
        </p>
        <div style={{
          backgroundColor: '#f1f5f9',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '10px',
          borderLeft: '3px solid #f59e0b'
        }}>
          <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li>Calcule seu custo mensal mínimo (ex: R$ 2.500).</li>
            <li>Meta ideal: R$ 7.500 a R$ 15.000 aplicados em liquidez diária.</li>
          </ul>
        </div>
        <p style={{ fontSize: '0.8rem', margin: 0 }}>
          No <strong>Dinheiro no Controle™</strong>, crie uma Meta e rastreie os aportes mensais direto no dashboard!
        </p>
      </div>
    )
  },
  pfpj: {
    question: 'Como separar contas Pessoais e Profissionais?',
    response: (
      <div>
        <p style={{ fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>
          Gestão PF vs PJ para Autônomos 💼
        </p>
        <p style={{ marginBottom: '8px' }}>
          Misturar o caixa pessoal e empresarial é a principal causa da mortalidade de pequenas empresas.
        </p>
        <div style={{
          backgroundColor: '#f1f5f9',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '10px',
          borderLeft: '3px solid #3b82f6'
        }}>
          <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li>Defina um salário mensal fixo (Pró-labore).</li>
            <li>Use contas bancárias separadas para pagamentos de clientes e boletos da casa.</li>
          </ul>
        </div>
        <p style={{ fontSize: '0.8rem', margin: 0 }}>
          💡 Nosso parceiro <strong>CRM Signature</strong> possui módulos de separação perfeitos para gerenciar isso!
        </p>
      </div>
    )
  }
};

export default function AIConsultantMockup() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      content: (
        <div>
          Olá! Sou o assistente de inteligência artificial do <strong>Dinheiro no Controle™</strong>. 
          Como posso te ajudar a organizar seu orçamento e economizar hoje?
        </div>
      )
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);

  const handleAskQuestion = (key) => {
    if (isTyping) return;
    
    const convo = presetConversations[key];
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', content: convo.question }]);
    setIsTyping(true);
  };

  useEffect(() => {
    if (!isTyping) return;

    // Get the last user message to determine response
    const lastUserMsg = messages[messages.length - 1]?.content;
    let matchingKey = null;
    
    for (const k in presetConversations) {
      if (presetConversations[k].question === lastUserMsg) {
        matchingKey = k;
        break;
      }
    }

    if (matchingKey) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, {
          sender: 'bot',
          content: presetConversations[matchingKey].response
        }]);
        setIsTyping(false);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [isTyping, messages]);

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '24px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
      width: '100%',
      maxWidth: '520px',
      margin: '0 auto',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        background: '#0f172a',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#fff'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #10b981'
          }}>
            <Bot size={18} style={{ color: '#10b981' }} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', margin: 0 }}>Consultor de IA</h4>
            <span style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#10b981', borderRadius: '50%' }} /> Online • Interativo
            </span>
          </div>
        </div>
        <div style={{
          fontSize: '0.7rem',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '4px 10px',
          borderRadius: '9999px',
          fontWeight: 600
        }}>
          Simulador Ativo
        </div>
      </div>

      {/* Messages Area */}
      <div style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backgroundColor: '#f8fafc',
        height: '320px',
        overflowY: 'auto'
      }}>
        {messages.map((m, idx) => (
          <div key={idx} style={{
            display: 'flex',
            gap: '10px',
            alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '85%'
          }}>
            {m.sender === 'bot' && (
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}>
                <Bot size={14} style={{ color: '#10b981' }} />
              </div>
            )}
            <div style={{
              backgroundColor: m.sender === 'user' ? '#0f172a' : '#fff',
              color: m.sender === 'user' ? '#fff' : '#334155',
              padding: '12px 16px',
              borderRadius: m.sender === 'user' ? '16px 16px 2px 16px' : '2px 16px 16px 16px',
              fontSize: '0.85rem',
              border: m.sender === 'user' ? 'none' : '1px solid #e2e8f0',
              boxShadow: m.sender === 'user' ? 'none' : '0 2px 5px rgba(0,0,0,0.02)'
            }}>
              {m.content}
            </div>
            {m.sender === 'user' && (
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <User size={14} style={{ color: '#0f172a' }} />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', gap: '10px', alignSelf: 'flex-start' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <Bot size={14} style={{ color: '#10b981' }} />
            </div>
            <div style={{
              backgroundColor: '#fff',
              color: '#94a3b8',
              padding: '12px 16px',
              borderRadius: '2px 16px 16px 16px',
              fontSize: '0.85rem',
              border: '1px solid #e2e8f0',
              fontStyle: 'italic'
            }}>
              Digitando resposta...
            </div>
          </div>
        )}
      </div>

      {/* Suggested Questions Quick Select */}
      <div style={{
        padding: '14px 20px',
        borderTop: '1px solid #e2e8f0',
        backgroundColor: '#fff'
      }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', marginBottom: '8px', textTransform: 'uppercase' }}>
          Pergunte ao Consultor (Clique para Testar):
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <button 
            onClick={() => handleAskQuestion('delivery')}
            disabled={isTyping}
            style={{
              padding: '6px 12px',
              fontSize: '0.75rem',
              borderRadius: '20px',
              backgroundColor: '#f1f5f9',
              border: '1px solid #e2e8f0',
              color: '#475569',
              cursor: isTyping ? 'not-allowed' : 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#475569'; }}
          >
            🍔 Delivery
          </button>
          <button 
            onClick={() => handleAskQuestion('reserva')}
            disabled={isTyping}
            style={{
              padding: '6px 12px',
              fontSize: '0.75rem',
              borderRadius: '20px',
              backgroundColor: '#f1f5f9',
              border: '1px solid #e2e8f0',
              color: '#475569',
              cursor: isTyping ? 'not-allowed' : 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#475569'; }}
          >
            🛡️ Reserva
          </button>
          <button 
            onClick={() => handleAskQuestion('pfpj')}
            disabled={isTyping}
            style={{
              padding: '6px 12px',
              fontSize: '0.75rem',
              borderRadius: '20px',
              backgroundColor: '#f1f5f9',
              border: '1px solid #e2e8f0',
              color: '#475569',
              cursor: isTyping ? 'not-allowed' : 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#475569'; }}
          >
            💼 Separar PF/PJ
          </button>
        </div>
      </div>
    </div>
  );
}
