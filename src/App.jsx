import React, { useState } from 'react';
import { 
  Check, 
  AlertTriangle, 
  ShieldCheck, 
  Menu, 
  X, 
  Sparkles, 
  Plus, 
  CheckCircle2, 
  ChevronDown, 
  TrendingUp, 
  DollarSign, 
  Wallet, 
  Users, 
  LayoutDashboard, 
  Calculator, 
  FileText, 
  ArrowRight,
  Star,
  Lock,
  Percent,
  Clock,
  ArrowUpRight,
  CreditCard,
  QrCode,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import DashboardMockup from './components/DashboardMockup';
import AIConsultantMockup from './components/AIConsultantMockup';

export default function App() {
  const [bumps, setBumps] = useState({
    casal: false,
    mei: false,
    crm: false
  });
  
  const [activeFaq, setActiveFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  // Prices
  const basePrice = 47;
  const bumpPrices = {
    casal: 19,
    mei: 27,
    crm: 29
  };

  const total = basePrice + 
    (bumps.casal ? bumpPrices.casal : 0) + 
    (bumps.mei ? bumpPrices.mei : 0) + 
    (bumps.crm ? bumpPrices.crm : 0);

  const toggleBump = (key) => {
    setBumps(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // Redirect to the main Cakto checkout page
  const handleOpenCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/35a3pg3_920975';
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Header */}
      <header>
        <div className="container nav-wrapper">
          <a href="#" className="logo">
            <Wallet size={24} style={{ color: '#10b981' }} />
            Dinheiro no <span>Controle™</span>
          </a>
          <nav className="nav-links">
            <a href="#problema" onClick={(e) => { e.preventDefault(); scrollToSection('problema'); }} className="nav-link">O Problema</a>
            <a href="#solucao" onClick={(e) => { e.preventDefault(); scrollToSection('solucao'); }} className="nav-link">A Solução</a>
            <a href="#recursos" onClick={(e) => { e.preventDefault(); scrollToSection('recursos'); }} className="nav-link">Recursos</a>
            <a href="#crm" onClick={(e) => { e.preventDefault(); scrollToSection('crm'); }} className="nav-link">Parceria CRM</a>
            <a href="#depoimentos" onClick={(e) => { e.preventDefault(); scrollToSection('depoimentos'); }} className="nav-link">Depoimentos</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="nav-link">FAQ</a>
          </nav>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              onClick={handleOpenCheckout}
              className="btn btn-primary nav-btn"
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              Comprar Agora (R$ 47)
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#0f172a'
              }}
              className="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
            zIndex: 1000
          }}>
            <a href="#problema" onClick={(e) => { e.preventDefault(); scrollToSection('problema'); }} style={{ fontWeight: 600 }}>O Problema</a>
            <a href="#solucao" onClick={(e) => { e.preventDefault(); scrollToSection('solucao'); }} style={{ fontWeight: 600 }}>A Solução</a>
            <a href="#recursos" onClick={(e) => { e.preventDefault(); scrollToSection('recursos'); }} style={{ fontWeight: 600 }}>Recursos</a>
            <a href="#crm" onClick={(e) => { e.preventDefault(); scrollToSection('crm'); }} style={{ fontWeight: 600 }}>Parceria CRM</a>
            <a href="#depoimentos" onClick={(e) => { e.preventDefault(); scrollToSection('depoimentos'); }} style={{ fontWeight: 600 }}>Depoimentos</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} style={{ fontWeight: 600 }}>FAQ</a>
            <button 
              onClick={handleOpenCheckout}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '8px' }}
            >
              Garantir Minha Vaga (R$ 47)
            </button>
          </div>
        )}
      </header>

      {/* SECTION 1 — HERO */}
      <section className="section-alt" style={{ overflow: 'hidden' }}>
        <div className="container hero-wrapper">
          <div className="hero-content">
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }} className="hero-badges-container">
              <div className="hero-badge">
                <Sparkles size={14} /> Sistema Financeiro Inteligente
              </div>
              <div className="hero-badge" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#d97706', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                🛡️ Garantia de 7 Dias Inclusa
              </div>
            </div>
            <h1 className="hero-title" style={{ marginTop: '12px' }}>
              Chega de ver o seu dinheiro <span>sumir</span> todo final de mês.
            </h1>
            <p className="hero-description">
              Transforme o caos financeiro em clareza absoluta com o <strong>Dinheiro no Controle™</strong>. Um ecossistema interativo com painéis, planejamento de metas visuais e consultoria de IA integrada. <strong>Teste sem riscos por 7 dias.</strong>
            </p>
            <div className="hero-ctas">
              <button onClick={handleOpenCheckout} className="btn btn-primary">
                QUERO ASSUMIR O CONTROLE DO MEU DINHEIRO <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollToSection('solucao')} className="btn btn-secondary">
                Ver como funciona
              </button>
            </div>
            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-stars">
                  <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                </div>
                <span>+12.500 Vidas Controladas</span>
              </div>
              <div className="trust-item">
                <ShieldCheck size={18} style={{ color: '#10b981' }} />
                <span>Garantia de Satisfação de 7 dias</span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section id="problema">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">A Realidade Financeira Comum</span>
          <h2 className="section-title">Para onde está indo o seu suor?</h2>
          <p className="section-subtitle">
            Se você se identifica com uma ou mais das situações abaixo, saiba que você não está sozinho — e a culpa não é da sua renda, mas do sistema de controle que você usa.
          </p>
          
          <div className="grid-2" style={{ marginTop: '24px', textAlign: 'left' }}>
            <div className="card problem-card">
              <div className="card-icon">
                <AlertTriangle size={24} />
              </div>
              <h3 className="card-title">O Sumiço Misterioso</h3>
              <p className="card-description">
                Você trabalha duro, o salário entra na conta, mas na segunda semana do mês você já se pergunta: <strong>"Onde foi parar todo esse dinheiro?"</strong>. Sem planejamento, pequenas taxas e gastos invisíveis drenam sua riqueza.
              </p>
            </div>

            <div className="card problem-card">
              <div className="card-icon">
                <AlertTriangle size={24} />
              </div>
              <h3 className="card-title">Ansiedade ao Abrir o App do Banco</h3>
              <p className="card-description">
                Sentir aquele frio na barriga toda vez que precisa olhar o saldo no aplicativo ou conferir a fatura do cartão de crédito. Viver com a constante incerteza se vai dar para passar o mês.
              </p>
            </div>

            <div className="card problem-card">
              <div className="card-icon">
                <AlertTriangle size={24} />
              </div>
              <h3 className="card-title">A Armadilha do "Viver no Limite"</h3>
              <p className="card-description">
                Viver de salário em salário, sempre dependendo do próximo pagamento para pagar as contas do mês anterior. Qualquer pequeno imprevisto de saúde ou no carro se transforma em uma dívida gigante.
              </p>
            </div>

            <div className="card problem-card">
              <div className="card-icon">
                <AlertTriangle size={24} />
              </div>
              <h3 className="card-title">Frustração de Poupança Zero</h3>
              <p className="card-description">
                Querer viajar, investir ou comprar algo especial, mas nunca conseguir poupar um único real de maneira consistente. Sentir que está correndo em uma esteira financeira sem sair do lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — INTRODUCE THE SOLUTION */}
      <section id="solucao" className="section-alt">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <div>
              <span className="section-tag-emerald">A Grande Virada</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: 0, marginBottom: '24px' }}>
                Conheça o Sistema Dinheiro no Controle™
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '32px' }}>
                Esqueça as planilhas complexas com centenas de fórmulas que travam seu computador, ou os caderninhos que você esquece na gaveta. 
                <br /><br />
                O <strong>Dinheiro no Controle™</strong> é um Sistema de Gestão Financeira inteligente criado especificamente para quem nunca conseguiu se organizar antes. Ele combina painéis fáceis de ler, planejamento visual de metas e um assistente de IA focado em cortar seus gastos desnecessários automaticamente.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: '#d1fae5', color: '#10b981', padding: '6px', borderRadius: '8px' }}>
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>100% Amigável para Iniciantes</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Nenhum conhecimento prévio em finanças ou matemática é necessário.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: '#d1fae5', color: '#10b981', padding: '6px', borderRadius: '8px' }}>
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>Orientado por Resultados Reais</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Foco total em fazer você economizar seus primeiros R$ 500 no primeiro mês.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: '#d1fae5', color: '#10b981', padding: '6px', borderRadius: '8px' }}>
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>Compra Protegida e Risco Zero</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Acesso coberto por garantia de reembolso total nos primeiros 7 dias.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <AIConsultantMockup />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURES SHOWCASE */}
      <section id="recursos">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">Recursos do Sistema</span>
          <h2 className="section-title">O que você vai receber hoje</h2>
          <p className="section-subtitle">
            Um ecossistema completo planejado nos mínimos detalhes para te guiar da incerteza financeira para a liberdade de escolha.
          </p>

          <div className="bento-grid">
            <div className="card bento-lg">
              <div className="card-icon">
                <LayoutDashboard size={24} />
              </div>
              <h3 className="card-title">Dashboard Financeiro Inteligente</h3>
              <p className="card-description">
                Visualize toda a sua saúde financeira em segundos. Gráficos dinâmicos que mostram exatamente onde seu dinheiro entra, de onde ele sai e quanto sobrou. Sem jargões técnicos difíceis — apenas clareza visual.
              </p>
              <div style={{
                marginTop: '24px',
                padding: '12px',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#10b981',
                fontWeight: 700,
                border: '1px solid #e2e8f0',
                display: 'inline-block'
              }}>
                Benefício: Redução imediata do tempo gasto com planilhas de 2 horas para apenas 5 minutos semanais.
              </div>
            </div>

            <div className="card">
              <div className="card-icon" style={{ backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                <Sparkles size={24} />
              </div>
              <h3 className="card-title">Consultor de IA Interativo</h3>
              <p className="card-description">
                Tenha um consultor financeiro particular disponível 24 horas por dia. Faça perguntas sobre corte de despesas ou metas clicando nas bolhas interativas e receba respostas instantâneas na tela.
              </p>
              <div style={{ marginTop: '16px', fontSize: '0.8rem', color: '#b45309', fontWeight: 600 }}>
                💡 Respostas baseadas em padrões reais
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <Calculator size={24} />
              </div>
              <h3 className="card-title">Calculadoras Financeiras</h3>
              <p className="card-description">
                Simuladores interativos para cálculo de juros compostos, quitação acelerada de dívidas e simulação de financiamentos sem pegadinhas.
              </p>
              <div style={{ marginTop: '16px', fontSize: '0.8rem', color: '#059669', fontWeight: 600 }}>
                📈 Simulações em 3 cliques
              </div>
            </div>

            <div className="card bento-lg">
              <div className="card-icon">
                <TrendingUp size={24} />
              </div>
              <h3 className="card-title">Planejador de Metas Visuais</h3>
              <p className="card-description">
                Cadastre suas metas (Reserva de Emergência, Viagem de Férias, Compra de Casa) e veja o progresso de cada um com termômetros visuais dinâmicos. O sistema ajuda a readequar os aportes conforme sua receita muda no mês.
              </p>
              <div style={{
                marginTop: '24px',
                padding: '12px',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#10b981',
                fontWeight: 700,
                border: '1px solid #e2e8f0',
                display: 'inline-block'
              }}>
                Benefício: Senso de progresso ativo que elimina a frustração de achar que "o dinheiro nunca rende".
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <FileText size={24} />
              </div>
              <h3 className="card-title">Relatórios e Insights</h3>
              <p className="card-description">
                Receba relatórios automatizados fáceis de entender, mostrando tendências de gastos mensais e indicando quais categorias estão estourando o seu orçamento.
              </p>
              <div style={{ marginTop: '16px', fontSize: '0.8rem', color: '#059669', fontWeight: 600 }}>
                📊 Exportável para PDF e Excel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section className="section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">Passo a Passo</span>
          <h2 className="section-title">Organização sem dor em 3 etapas</h2>
          <p className="section-subtitle">
            Como funciona o método Dinheiro no Controle™ na prática do seu dia a dia.
          </p>

          <div className="flow-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Alimente o Sistema</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
                Registre suas receitas e gastos de forma simples. Experimente fazer um lançamento de teste clicando em "Lançar" no nosso dashboard interativo no topo.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Análise e IA</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
                Nosso dashboard calcula automaticamente suas tendências e a nossa IA parceira indica exatamente onde você está desperdiçando dinheiro.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Assuma o Leme</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
                Com metas claras e acompanhamento visual, você vê suas economias crescerem de forma estruturada e constante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CRM SIGNATURE INTEGRATION */}
      <section id="crm" className="section-dark crm-glow">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="crm-badge">EVOLUÇÃO EXCLUSIVA DE PARCEIRO</span>
            <h2 className="section-title">O Próximo Nível: Integração CRM Signature</h2>
            <p className="section-subtitle" style={{ color: '#94a3b8' }}>
              Se você presta serviços, atua como autônomo, MEI ou freelancer, sua vida financeira pessoal está diretamente ligada ao seu negócio. Conheça a evolução que une tudo.
            </p>
          </div>

          <div className="bento-grid">
            <div className="card crm-card bento-lg">
              <div className="card-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                <Users size={24} />
              </div>
              <h3 className="card-title">Gestão Completa de Clientes</h3>
              <p className="card-description" style={{ color: '#94a3b8' }}>
                Monitore o pipeline de atendimento de clientes, envie orçamentos profissionais, registre o faturamento corporativo e acompanhe cobranças ativas tudo dentro da mesma estrutura.
              </p>
            </div>

            <div className="card crm-card" style={{ border: '1px solid rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.02)' }}>
              <div className="card-icon" style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
                <Star size={24} />
              </div>
              <h3 className="card-title">Bonus: 14 Dias Grátis</h3>
              <p className="card-description" style={{ color: '#94a3b8' }}>
                Ao garantir o Dinheiro no Controle™ hoje, você recebe <strong>14 dias de acesso gratuito e sem compromisso</strong> ao CRM Signature para integrar suas operações.
              </p>
            </div>

            <div className="card crm-card">
              <div className="card-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                <CheckCircle2 size={24} />
              </div>
              <h3 className="card-title">Separação PF vs PJ</h3>
              <p className="card-description" style={{ color: '#94a3b8' }}>
                O maior erro de todo autônomo é misturar o caixa da empresa com o pessoal. O CRM Signature ensina e separa isso na prática em telas dedicadas.
              </p>
            </div>

            <div className="card crm-card bento-lg">
              <div className="card-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                <Calculator size={24} />
              </div>
              <h3 className="card-title">Acelerador de Produtividade</h3>
              <p className="card-description" style={{ color: '#94a3b8' }}>
                Controle prazos, registre as entregas de cada cliente, integre custos fixos de ferramentas profissionais e aumente sua lucratividade identificando quais contratos são mais rentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — VALUE STACK */}
      <section>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">O Empilhamento de Valor</span>
          <h2 className="section-title">Tudo o que você leva hoje</h2>
          <p className="section-subtitle">
            Veja a diferença de valor real de cada um dos itens se comprados separadamente vs. o preço de lançamento da nossa parceria de hoje.
          </p>

          <div className="stack-box">
            <div className="stack-header">
              <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} style={{ color: '#10b981' }} /> PROPOSTA ESPECIAL DE LANÇAMENTO
              </h3>
            </div>
            <div className="stack-body">
              <div className="stack-item">
                <span className="stack-item-title">
                  <Check size={18} style={{ color: '#10b981' }} /> Sistema Completo "Dinheiro no Controle™"
                </span>
                <span className="stack-item-val">Valor: R$ 197</span>
              </div>
              
              <div className="stack-item">
                <span className="stack-item-title">
                  <Check size={18} style={{ color: '#10b981' }} /> Biblioteca de Prompts de IA Financeira
                </span>
                <span className="stack-item-val">Valor: R$ 39</span>
              </div>

              <div className="stack-item">
                <span className="stack-item-title">
                  <Check size={18} style={{ color: '#10b981' }} /> Guia Prático "Saia do Vermelho em 90 Dias"
                </span>
                <span className="stack-item-val">Valor: R$ 67</span>
              </div>

              <div className="stack-item">
                <span className="stack-item-title">
                  <Check size={18} style={{ color: '#10b981' }} /> Período de Testes CRM Signature (14 Dias)
                </span>
                <span className="stack-item-val">Valor: R$ 39</span>
              </div>

              <div className="stack-item" style={{ borderBottom: 'none' }}>
                <span className="stack-item-title">
                  <Check size={18} style={{ color: '#10b981' }} /> Atualizações Vitalícias Gratuitas
                </span>
                <span className="stack-item-val">Valor: R$ 30</span>
              </div>
            </div>

            <div className="stack-footer">
              <div className="stack-price-strike">Valor Real Total: Mais de R$ 370,00</div>
              <div className="stack-price-final">
                <span>R$</span>47<span>,00</span>
              </div>
              <div className="stack-price-installment">
                Ou em até 5x de R$ 10,15 no cartão de crédito
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: '#d97706', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px' }}>
                🛡️ Garantia Blindada de Satisfação de 7 dias inclusa!
              </div>
              <button onClick={handleOpenCheckout} className="btn btn-primary btn-block">
                QUERO MEU ACESSO AGORA COM DESCONTO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — BENEFITS */}
      <section className="section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">A Sua Transformação</span>
          <h2 className="section-title">O que acontece quando você assume o leme?</h2>
          <p className="section-subtitle">
            O resultado prático de trocar a desorganização financeira por uma vida estruturada.
          </p>

          <div className="grid-3">
            {[
              { title: 'Saber exatamente para onde vai cada centavo', desc: 'Acabe de vez com o mistério do dinheiro sumindo e tenha controle total de todas as saídas no painel.' },
              { title: 'Fim do desperdício invisível', desc: 'Identifique na hora pequenas assinaturas, tarifas ocultas e desperdícios que drenam de R$ 200 a R$ 500 por mês.' },
              { title: 'Construção de disciplina sem sofrimento', desc: 'Defina limites saudáveis e use alertas visuais automáticos para não extrapolar o orçamento sem precisar se privar.' },
              { title: 'Adeus estresse financeiro', desc: 'Esqueça a ansiedade ao deitar a cabeça no travesseiro com a certeza de que todos os boletos do mês estão sob controle.' },
              { title: 'Metas reais que saem do papel', desc: 'Crie seu fundo de emergência e economias para férias, carros ou investimentos com termômetros visuais interativos.' },
              { title: 'Confiança nas decisões diárias', desc: 'Saiba exatamente se você pode fazer uma compra maior sem prejudicar o caixa do mês seguinte.' }
            ].map((benefit, idx) => (
              <div key={idx} className="card" style={{ borderLeft: '4px solid #10b981' }}>
                <h3 className="card-title" style={{ fontSize: '1.1rem', marginBottom: '10px' }}>{benefit.title}</h3>
                <p className="card-description">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — TESTIMONIALS */}
      <section id="depoimentos">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">Depoimentos Reais</span>
          <h2 className="section-title">Quem usa, aprova e recomenda</h2>
          <p className="section-subtitle">
            Veja os depoimentos reais de quem superou a desorganização financeira e evoluiu seus negócios.
          </p>

          <div className="grid-2">
            {[
              {
                name: 'Mariana Costa',
                role: 'Designer Freelancer',
                avatar: 'MC',
                text: 'Minhas finanças eram uma bagunça completa de contas pessoais com as profissionais. O sistema me deu um controle visual imediato do meu caixa pessoal e os 14 dias grátis do CRM Signature me convenceram a organizar toda a minha carteira de clientes também.',
                result: 'Economizou R$ 1.850 no primeiro mês'
              },
              {
                name: 'Rodrigo Alves',
                role: 'Engenheiro de Software',
                avatar: 'RA',
                text: 'O consultor de IA é fantástico. Ele me apontou de cara três serviços de assinatura duplicados que eu continuava pagando sem usar. O layout é limpo, responsivo no celular e super prático no dia a dia.',
                result: 'Cortou R$ 420 em gastos invisíveis'
              },
              {
                name: 'Juliana M.',
                role: 'Proprietária de E-commerce',
                avatar: 'JM',
                text: 'Consegui estruturar meu fundo de reserva de emergência em apenas 4 meses usando o planejador de metas visuais do sistema. Vê-lo carregar a barra de progresso dá um incentivo gigante para poupar.',
                result: 'Reserva de Emergência de 6 meses concluída'
              },
              {
                name: 'Felipe Ramos',
                role: 'Consultor de Vendas MEI',
                avatar: 'FR',
                text: 'A integração com o CRM Signature foi o divisor de águas da minha empresa. Consigo cobrar meus clientes com controle de status integrado às minhas metas financeiras. Vale cada centavo.',
                result: 'Aumentou faturamento profissional em 25%'
              }
            ].map((t, idx) => (
              <div key={idx} className="card testimonial-card">
                <p className="testimonial-text">{t.text}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div className="testimonial-user">
                    <div className="testimonial-avatar">{t.avatar}</div>
                    <div className="testimonial-info">
                      <h4>{t.name}</h4>
                      <p>{t.role}</p>
                    </div>
                  </div>
                  <div className="testimonial-result">
                    <TrendingUp size={14} /> {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — ORDER BUMPS & CHECKOUT */}
      <section id="checkout" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag-emerald">Garantia de Compra Segura</span>
            <h2 className="section-title">Configure o seu Acesso Individual</h2>
            <p className="section-subtitle">
              Selecione ofertas extras recomendadas para turbinar a sua organização e finalize a compra.
            </p>
          </div>

          <div className="checkout-wrapper">
            {/* Main Product Display Card */}
            <div className="card" style={{ marginBottom: '24px', borderColor: '#10b981', background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.8rem', backgroundColor: '#d1fae5', color: '#065f46', padding: '4px 10px', borderRadius: '9999px', fontWeight: 700 }}>
                  Produto Principal
                </span>
                <span style={{ fontSize: '1.25rem', fontWeight: 850, color: '#0f172a' }}>R$ 47,00</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>Sistema Dinheiro no Controle™</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                Acesso vitalício ao sistema completo com painéis, calculadoras, consultor financeiro de IA e atualizações gratuitas inclusas.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#d97706', marginTop: '12px', fontWeight: 700 }}>
                🛡️ Garantia incondicional de reembolso por 7 dias
              </div>
            </div>

            {/* Bumps Grid Container */}
            <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Recomendações Especiais (Clique para Adicionar)
            </h4>

            {/* Bump 1 */}
            <div 
              onClick={() => toggleBump('casal')} 
              className={`order-bump-box ${bumps.casal ? 'selected' : ''}`}
            >
              <div className="order-bump-checkbox">
                {bumps.casal && <Check size={14} strokeWidth={3} />}
              </div>
              <div className="order-bump-content">
                <div className="order-bump-header">
                  <span className="order-bump-title">Versão Casal & Família</span>
                  <span className="order-bump-price">+ R$ 19,00</span>
                </div>
                <p className="order-bump-description">
                  Libere o modo compartilhado para gerenciar os orçamentos, cartões e despesas com seu cônjuge em tempo real no mesmo painel.
                </p>
              </div>
            </div>

            {/* Bump 2 */}
            <div 
              onClick={() => toggleBump('mei')} 
              className={`order-bump-box ${bumps.mei ? 'selected' : ''}`}
            >
              <div className="order-bump-checkbox">
                {bumps.mei && <Check size={14} strokeWidth={3} />}
              </div>
              <div className="order-bump-content">
                <div className="order-bump-header">
                  <span className="order-bump-title">Versão Autônomo & MEI</span>
                  <span className="order-bump-price">+ R$ 27,00</span>
                </div>
                <p className="order-bump-description">
                  Ideal para freelancers e profissionais autônomos. Adicione relatórios específicos de fluxo de caixa empresarial simplificado.
                </p>
              </div>
            </div>

            {/* Bump 3 - STAR OFFER */}
            <div 
              onClick={() => toggleBump('crm')} 
              className={`order-bump-box featured ${bumps.crm ? 'selected' : ''}`}
            >
              <span className="order-bump-tag">⭐ Oferta Mais Recomendada</span>
              <div className="order-bump-checkbox" style={{ borderColor: '#d97706' }}>
                {bumps.crm && <Check size={14} strokeWidth={3} />}
              </div>
              <div className="order-bump-content">
                <div className="order-bump-header" style={{ marginTop: '8px' }}>
                  <span className="order-bump-title" style={{ color: '#b45309', fontWeight: 800 }}>Acesso CRM Signature (3 Meses)</span>
                  <span className="order-bump-price" style={{ color: '#059669', fontWeight: 800 }}>+ R$ 29,00</span>
                </div>
                <p className="order-bump-description" style={{ color: '#b45309' }}>
                  <strong>Economize R$ 88!</strong> Garanta 3 meses completos de acesso premium à plataforma de gestão de clientes e CRM Financeiro profissional por menos do preço de uma mensalidade (De R$ 117 por apenas R$ 29).
                </p>
              </div>
            </div>

            {/* Interactive calculation display summary */}
            <div className="checkout-summary">
              <div className="checkout-summary-row">
                <span>Dinheiro no Controle™ (Acesso Vitalício)</span>
                <span>R$ 47,00</span>
              </div>
              {bumps.casal && (
                <div className="checkout-summary-row" style={{ color: '#059669' }}>
                  <span>+ Versão Casal / Família</span>
                  <span>R$ 19,00</span>
                </div>
              )}
              {bumps.mei && (
                <div className="checkout-summary-row" style={{ color: '#059669' }}>
                  <span>+ Versão Autônomo / MEI</span>
                  <span>R$ 27,00</span>
                </div>
              )}
              {bumps.crm && (
                <div className="checkout-summary-row" style={{ color: '#b45309', fontWeight: 600 }}>
                  <span>+ CRM Signature (3 Meses de Acesso Especial)</span>
                  <span>R$ 29,00</span>
                </div>
              )}
              
              <div className="checkout-summary-total">
                <span>Valor Total da Compra:</span>
                <span className="checkout-summary-total-val">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>

              <div style={{ marginTop: '24px' }}>
                <button onClick={handleOpenCheckout} className="btn btn-primary btn-block" style={{ padding: '20px', fontSize: '1.15rem' }}>
                  QUERO ASSUMIR O CONTROLE DO MEU DINHEIRO POR R$ {total.toFixed(2).replace('.', ',')}
                </button>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', marginTop: '16px', fontSize: '0.8rem', color: '#64748b' }}>
                  <Lock size={14} /> Compra protegida por garantia de reembolso total por 7 dias.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — GUARANTEE (Restyled with Premium Golden Circular Badge) */}
      <section style={{ background: '#fff' }}>
        <div className="container">
          <div className="guarantee-box" style={{
            border: '2px solid #f59e0b',
            background: 'linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)',
            boxShadow: '0 20px 40px -15px rgba(245, 158, 11, 0.12)',
            borderRadius: '24px',
            padding: '48px 32px'
          }}>
            {/* Circular Gold Badge (Custom SVG) */}
            <div style={{ position: 'relative', width: '120px', height: '120px', flexShrink: 0 }}>
              <svg viewBox="0 0 100 100" width="120" height="120">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#goldGradient)" stroke="#b45309" strokeWidth="2" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                <path d="M50 20 L58 38 L78 38 L62 50 L68 70 L50 58 L32 70 L38 50 L22 38 L42 38 Z" fill="#fff" />
                <text x="50" y="80" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="800" fontFamily="sans-serif">
                  7 DIAS
                </text>
                <text x="50" y="15" textAnchor="middle" fill="#5b21b6" fontSize="6" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">
                  GARANTIA
                </text>
              </svg>
            </div>
            
            <div className="guarantee-content">
              <h3 style={{ color: '#b45309', fontWeight: 800, fontSize: '1.6rem', marginBottom: '12px' }}>
                Garantia Blindada de Satisfação: Risco Zero por 7 Dias
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#475569' }}>
                Nós confiamos tanto na eficiência do método e do sistema <strong>Dinheiro no Controle™</strong> que oferecemos uma garantia incondicional de <strong>7 dias</strong>. 
                <br /><br />
                Use o sistema, cadastre suas contas, teste o consultor de IA e a integração com o CRM. Se por qualquer motivo você achar que não serve para você ou que não te ajudou a economizar, basta nos enviar um único e-mail e devolveremos 100% do seu dinheiro investido. Sem burocracia, sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — FAQ */}
      <section id="faq" className="section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag">Dúvidas Frequentes</span>
            <h2 className="section-title">Perguntas Respondidas</h2>
            <p className="section-subtitle">
              Tudo o que você precisa saber antes de fazer sua adesão ao sistema.
            </p>
          </div>

          <div className="faq-wrapper">
            {[
              {
                q: 'Preciso ter conhecimentos avançados em finanças?',
                a: 'Não, o Dinheiro no Controle™ foi desenhado do zero para iniciantes absolutos. A interface é extremamente limpa e não utiliza termos matemáticos complicados. Basta inserir seus valores de ganho e gasto conforme o assistente te guia.'
              },
              {
                q: 'Funciona no celular ou tablet?',
                a: 'Sim, a ferramenta é totalmente responsiva e funciona perfeitamente em qualquer dispositivo (Smartphone iOS, Android, Tablets, Notebook ou Computador) diretamente no seu navegador, sem precisar instalar aplicativos.'
              },
              {
                q: 'O CRM Signature é obrigatório?',
                a: 'De forma alguma. O CRM Signature é uma funcionalidade premium parceira voltada para a parte profissional. Se você deseja apenas controlar suas despesas domésticas e de casa, o sistema individual Dinheiro no Controle™ funcionará completo e de forma independente de forma vitalícia.'
              },
              {
                q: 'O que exatamente é o CRM Signature?',
                a: 'O CRM Signature é um sistema integrado de gestão para prestadores de serviços, autônomos e freelancers. Ele permite que você controle seus contatos, contratos, tarefas profissionais e faturamento corporativo no mesmo lugar, evitando que você misture finanças físicas com jurídicas.'
              },
              {
                q: 'Como funciona o acesso de teste do CRM Signature?',
                a: 'Ao adquirir o Dinheiro no Controle™, você ganhará um link de ativação exclusivo para experimentar as telas do CRM por 14 dias sem pagar nada. Se optar por continuar utilizando após os 14 dias, poderá assinar o plano com desconto especial.'
              },
              {
                q: 'Como recebo os meus acessos após o pagamento?',
                a: 'Assim que o pagamento for confirmado (instantaneamente no PIX ou Cartão de Crédito), você receberá um e-mail com seus dados de login do sistema e as instruções de ativação dos bônus no e-mail cadastrado.'
              },
              {
                q: 'O pagamento é único ou mensal?',
                a: 'Para o Sistema Dinheiro no Controle™, o pagamento de R$ 47 é ÚNICO e vitalício. Você não receberá cobranças mensais. O CRM Signature possui planos de assinatura adicionais, que você pode contratar ou cancelar quando preferir após o período gratuito.'
              },
              {
                q: 'É compatível com Microsoft Excel ou Google Planilhas?',
                a: 'Sim. Você possui uma ferramenta interna de exportação que gera arquivos em formato CSV compatíveis com Excel, Google Planilhas, Numbers ou qualquer outra planilha do mercado em apenas um clique.'
              },
              {
                q: 'Como funciona a consultoria de IA?',
                a: 'Nossa inteligência artificial analisa seus padrões de despesas em segundo plano. Ela consegue detectar flutuações anormais de gastos (ex: o preço do mercado subiu muito, ou você gastou mais com assinaturas do que a média) e fornece relatórios práticos sobre como otimizar seu orçamento.'
              },
              {
                q: 'Como funciona a garantia de reembolso?',
                a: 'Você tem 7 dias inteiros de garantia. Se decidir cancelar, basta acessar o link de reembolso que enviamos junto no e-mail de ativação ou nos mandar uma mensagem no e-mail de suporte. Processamos a devolução do dinheiro imediatamente.'
              }
            ].map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`}>
                <button className="faq-trigger" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="faq-icon" />
                </button>
                <div className="faq-content">
                  <div className="faq-answer">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — FINAL CTA */}
      <section style={{ padding: '40px 0 100px 0' }}>
        <div className="container">
          <div className="final-cta-box">
            <div className="final-cta-content">
              <span className="section-tag-emerald" style={{ color: '#d1fae5', background: 'rgba(16, 185, 129, 0.2)' }}>
                Decisão Inteligente
              </span>
              <h2 className="final-cta-title">Tome as rédeas da sua vida financeira hoje mesmo</h2>
              <p className="final-cta-subtitle">
                Por apenas R$ 47,00 (menos que o valor de uma pizza), você troca a incerteza e a ansiedade bancária diária pela paz de espírito de um orçamento totalmente sob seu controle.
              </p>
              <button 
                onClick={handleOpenCheckout} 
                className="btn btn-primary"
                style={{ padding: '20px 40px', fontSize: '1.2rem', boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)' }}
              >
                QUERO ASSUMIR O CONTROLE DO MEU DINHEIRO
              </button>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px', fontSize: '0.85rem', color: '#94a3b8' }}>
                <span>🔒 Compra 100% Protegida</span>
                <span>•</span>
                <span>🛡️ Garantia Incondicional de 7 Dias</span>
                <span>•</span>
                <span>⚡ Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-links">
            <a href="#" className="footer-link">Termos de Uso</a>
            <a href="#" className="footer-link">Políticas de Privacidade</a>
            <a href="#" className="footer-link">Suporte Técnico</a>
            <a href="#" className="footer-link">CRM Signature Hub</a>
          </div>
          <p style={{ marginBottom: '8px' }}>
            © {new Date().getFullYear()} Dinheiro no Controle™ - Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto', lineHeight: '1.5' }}>
            CRM Signature é uma marca registrada parceira. O período promocional de 14 dias gratuito é ofertado por tempo limitado para novos usuários. As simulações de ganhos e economias são estimativas baseadas em históricos de uso e não garantem retornos exatos sem a dedicação e alimentação correta do sistema pelo usuário.
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA Bottom Bar */}
      <div className="sticky-cta">
        <div className="sticky-info">
          <span className="sticky-tag">Dinheiro no Controle</span>
          <span className="sticky-price">R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
        <button onClick={handleOpenCheckout} className="btn btn-primary sticky-btn">
          Comprar Agora
        </button>
      </div>
    </>
  );
}
