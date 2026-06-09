import React from 'react';
import { Send, Bot, User, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AIConsultantMockup() {
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
              <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#10b981', borderRadius: '50%' }} /> Online • Respostas instantâneas
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
          Beta Premium
        </div>
      </div>

      {/* Messages Area */}
      <div style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backgroundColor: '#f8fafc',
        maxHeight: '380px',
        overflowY: 'auto'
      }}>
        {/* User Message */}
        <div style={{
          display: 'flex',
          gap: '10px',
          alignSelf: 'flex-end',
          maxWidth: '85%'
        }}>
          <div style={{
            backgroundColor: '#0f172a',
            color: '#fff',
            padding: '12px 16px',
            borderRadius: '16px 16px 2px 16px',
            fontSize: '0.85rem',
          }}>
            Gastando demais com delivery este mês. Como posso poupar R$ 300 sem sofrer?
          </div>
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
        </div>

        {/* AI Message */}
        <div style={{
          display: 'flex',
          gap: '10px',
          alignSelf: 'flex-start',
          maxWidth: '85%'
        }}>
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
            color: '#334155',
            padding: '14px 16px',
            borderRadius: '2px 16px 16px 16px',
            fontSize: '0.85rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
          }}>
            <p style={{ fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>
              Identifiquei um padrão! 🔍
            </p>
            <p style={{ marginBottom: '8px' }}>
              Você gastou <strong>R$ 680,00</strong> em jantares de sexta a domingo no último mês.
            </p>
            <div style={{
              backgroundColor: '#f1f5f9',
              padding: '10px',
              borderRadius: '8px',
              marginBottom: '10px',
              borderLeft: '3px solid #10b981'
            }}>
              <p style={{ fontWeight: 600, fontSize: '0.8rem', color: '#0f172a', marginBottom: '4px' }}>Sugestão Prática:</p>
              <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>Limite o delivery para 1x por semana (Teto de R$ 90/semana).</li>
                <li>Substitua os outros jantares por congelados gourmet caseiros.</li>
              </ul>
            </div>
            <p style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: 600, fontSize: '0.8rem' }}>
              <CheckCircle2 size={14} /> Economia estimada: R$ 320,00/mês.
            </p>
          </div>
        </div>

        {/* User Message 2 */}
        <div style={{
          display: 'flex',
          gap: '10px',
          alignSelf: 'flex-end',
          maxWidth: '85%'
        }}>
          <div style={{
            backgroundColor: '#0f172a',
            color: '#fff',
            padding: '12px 16px',
            borderRadius: '16px 16px 2px 16px',
            fontSize: '0.85rem',
          }}>
            Ótimo! Crie uma meta para esse limite semanal de delivery.
          </div>
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
        </div>

        {/* AI Message 2 */}
        <div style={{
          display: 'flex',
          gap: '10px',
          alignSelf: 'flex-start',
          maxWidth: '85%'
        }}>
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
            color: '#334155',
            padding: '14px 16px',
            borderRadius: '2px 16px 16px 16px',
            fontSize: '0.85rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
          }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>
              <CheckCircle2 size={14} style={{ color: '#10b981' }} /> Meta configurada!
            </p>
            <p style={{ margin: 0 }}>
              Defini <strong>R$ 90,00</strong> semanais em Alimentação - Delivery. Eu te avisarei se o saldo restante chegar a 15%!
            </p>
          </div>
        </div>
      </div>

      {/* Input area mockup */}
      <div style={{
        padding: '14px 20px',
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          flexGrow: 1,
          backgroundColor: '#f1f5f9',
          padding: '10px 16px',
          borderRadius: '9999px',
          fontSize: '0.8rem',
          color: '#94a3b8',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Pergunte algo sobre seu orçamento...</span>
        </div>
        <button style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: '#10b981',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'not-allowed'
        }}>
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
