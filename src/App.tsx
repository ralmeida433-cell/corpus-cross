/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Check, 
  Clock, 
  Users, 
  Zap, 
  Trophy,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Planos', href: '#planos' },
    { name: 'Horários', href: '#horarios' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl tracking-widest leading-none">CORPUS <span className="text-brand-red">CROSS</span></span>
            <span className="font-condensed text-[8px] md:text-[10px] tracking-[0.3em] text-white/50 uppercase">by Corpus Fitness</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-condensed text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#cadastro" 
            className="bg-brand-red hover:bg-brand-red-dark text-white font-condensed font-bold text-xs tracking-widest uppercase px-6 py-2.5 clip-path-slant-sm transition-all"
          >
            Participar do Desafio
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark-2 border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-condensed text-lg tracking-widest uppercase text-white/80"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#cadastro" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-red text-white font-condensed font-bold text-center py-4 clip-path-slant uppercase tracking-widest"
              >
                PARTICIPAR DO DESAFIO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(232,21,27,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(232,21,27,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      </div>
      
      {/* Diagonal Accents */}
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-brand-red/30 to-transparent -skew-x-12 z-0" />
      <div className="absolute top-0 right-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-brand-red/10 to-transparent -skew-x-12 z-0" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent z-1" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-[2px] bg-brand-red" />
          <span className="font-condensed text-xs tracking-[0.4em] text-brand-red uppercase">Nova Lima – MG · Corpus Fitness</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(50px,15vw,140px)] leading-[0.85] mb-4"
        >
          CORPUS<br />
          <span className="text-outline text-brand-red">CROSS</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-condensed text-xl md:text-3xl tracking-[0.3em] text-brand-cream uppercase mb-8"
        >
          Forja corpo. Forja mente.
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/60 text-lg font-light max-w-xl mb-12 leading-relaxed"
        >
          CrossFit de alta performance em Nova Lima. Coaches certificados, 
          comunidade que empurra, e treinos que transformam de verdade.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full"
        >
          <a href="#cadastro" className="w-full md:w-auto text-center bg-brand-red hover:bg-brand-red-dark text-white font-condensed font-bold text-sm tracking-widest uppercase px-12 py-5 clip-path-slant transition-all group">
            Participar do Desafio
          </a>
          <a href="#modalidades" className="w-full md:w-auto text-center font-condensed text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors flex items-center justify-center gap-2 group py-3 md:py-0">
            Ver modalidades <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
        >
          {[
            { label: 'Anos de experiência', value: '5', suffix: '+' },
            { label: 'Unidades ativas', value: '3', suffix: '+' },
            { label: 'Views/mês nas redes', value: '1.2', suffix: 'M' },
            { label: 'Alunos satisfeitos', value: '1000', suffix: '+' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl text-white tracking-wider">
                {stat.value}<span className="text-brand-red">{stat.suffix}</span>
              </div>
              <div className="font-condensed text-[10px] tracking-widest text-white/40 uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = ['CORPUS CROSS', 'NOVA LIMA', 'CROSSFIT', 'TREINAMENTO FUNCIONAL', 'COMUNIDADE', 'PERFORMANCE'];
  
  return (
    <div className="bg-brand-red py-4 overflow-hidden relative z-20">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-2xl tracking-widest text-white/90">{item}</span>
            <div className="w-2 h-2 bg-white/40 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <section id="sobre" className="bg-brand-dark py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square bg-brand-gray relative overflow-hidden group">
            <div className="absolute inset-4 border-2 border-brand-red/40 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop" 
              alt="Corpus Cross" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red flex flex-col items-center justify-center clip-path-slant z-20">
              <span className="font-display text-4xl text-white leading-none">5</span>
              <span className="font-condensed text-[10px] tracking-widest text-white/80 text-center uppercase">Anos de<br />Força</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-brand-red" />
            <span className="font-condensed text-xs tracking-[0.4em] text-brand-red uppercase">Sobre o Corpus Cross</span>
          </div>
          <h2 className="text-5xl md:text-8xl mb-8 leading-[0.9]">
            QUEM<br />SOMOS<br /><span className="text-brand-red">NÓS</span>
          </h2>
          <div className="space-y-6 text-white/60 font-light text-lg leading-relaxed">
            <p>
              Fundada em 2021, a <strong className="text-white font-medium">Corpus Fitness</strong> nasceu para unir acessibilidade e qualidade operacional em Nova Lima e região.
            </p>
            <p>
              A <strong className="text-white font-medium">Corpus Cross</strong> é a nossa unidade especializada em CrossFit — treinos de alta intensidade com coaches certificados, estrutura industrial premium e a energia da melhor comunidade fitness da região.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 mt-10">
            {['Coaches Certificados', 'Estrutura Premium', 'Wellhub / Gympass', 'Comunidade Ativa', 'WOD Diário'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-brand-red text-brand-red font-condensed text-[10px] tracking-widest uppercase clip-path-slant-sm hover:bg-brand-red hover:text-white transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Modalities = () => {
  const mods = [
    {
      id: '01',
      name: 'CROSSFIT',
      tag: 'Principal · Diário',
      desc: 'Workout of the Day (WOD) programado, escalável para todos os níveis. Levantamento olímpico, ginástica e condicionamento metabólico.',
      icon: <Zap className="w-6 h-6" />,
      img: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: '02',
      name: 'FUNCTIONAL STRENGTH',
      tag: 'Força · Hipertrofia',
      desc: 'Ciclos de força com progressão linear. Squat, deadlift, press e variações olímpicas com acompanhamento técnico.',
      icon: <Trophy className="w-6 h-6" />,
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: '03',
      name: 'METCON',
      tag: 'Cardio · HIIT',
      desc: 'Condicionamento metabólico de alta intensidade. Queima calórica máxima com remos, assault bike e movimentos funcionais.',
      icon: <Zap className="w-6 h-6" />,
      img: 'https://images.unsplash.com/photo-1599058917233-557c5770d294?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: '04',
      name: 'GYMNASTICS',
      tag: 'Mobilidade · Técnica',
      desc: 'Pull-ups, muscle-ups, handstand e mobilidade articular. Aulas de recuperação ativa para performance sustentável.',
      icon: <Users className="w-6 h-6" />,
      img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="modalidades" className="bg-brand-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-brand-red" />
              <span className="font-condensed text-xs tracking-[0.4em] text-brand-red uppercase">O que oferecemos</span>
            </div>
            <h2 className="text-5xl md:text-8xl leading-[0.9]">
              NOSSAS<br /><span className="text-outline text-white">MODALIDADES</span>
            </h2>
          </div>
          <a href="#cadastro" className="bg-brand-red text-white font-condensed font-bold text-sm tracking-widest uppercase px-10 py-4 clip-path-slant hover:bg-brand-red-dark transition-all">
            Participar do Desafio
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:row-span-2 relative h-[600px] md:h-auto overflow-hidden group cursor-pointer"
          >
            <img src={mods[0].img} alt={mods[0].name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
            <span className="absolute top-8 right-8 font-display text-7xl text-white/10 group-hover:text-brand-red/20 transition-colors">{mods[0].id}</span>
            <div className="absolute top-8 left-8 w-12 h-12 bg-brand-red/20 border border-brand-red/30 flex items-center justify-center clip-path-slant-sm">
              {mods[0].icon}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <div className="font-condensed text-[10px] tracking-[0.3em] text-brand-red uppercase mb-2">{mods[0].tag}</div>
              <div className="font-display text-4xl text-white mb-4">{mods[0].name}</div>
              <p className="text-white/60 text-sm font-light leading-relaxed max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                {mods[0].desc}
              </p>
            </div>
          </motion.div>

          {/* Smaller Cards */}
          {mods.slice(1).map((mod, i) => (
            <motion.div 
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative h-[380px] overflow-hidden group cursor-pointer"
            >
              <img src={mod.img} alt={mod.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
              <span className="absolute top-6 right-6 font-display text-5xl text-white/10 group-hover:text-brand-red/20 transition-colors">{mod.id}</span>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="font-condensed text-[10px] tracking-[0.3em] text-brand-red uppercase mb-2">{mod.tag}</div>
                <div className="font-display text-3xl text-white mb-3">{mod.name}</div>
                <p className="text-white/60 text-xs font-light leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {mod.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    {
      name: 'STARTER',
      tag: 'Iniciante',
      price: '189',
      period: 'por mês',
      features: ['3 dias por semana', 'Acesso ao WOD diário', 'Coach em todas as aulas', 'App de acompanhamento', 'Comunidade Corpus Cross'],
      featured: false
    },
    {
      name: 'FULL ACCESS',
      tag: '⚡ Mais popular',
      price: '289',
      period: 'por mês',
      features: ['Acesso ilimitado', 'Open box + WOD diário', 'Coach e avaliação mensal', 'App + programação extra', 'Eventos e competições', 'Aceita Wellhub Silver'],
      featured: true
    },
    {
      name: 'CORPORATE',
      tag: 'Empresas / Grupos',
      price: 'Consultar',
      period: 'sob consulta',
      features: ['Plano para empresas', 'Descontos por volume', 'Aulas exclusivas in-company', 'Relatório de performance', 'Benefício corporativo'],
      featured: false
    }
  ];

  return (
    <section id="planos" className="bg-brand-dark py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[300px] text-white/[0.02] pointer-events-none whitespace-nowrap">
        PLANS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-brand-red" />
              <span className="font-condensed text-xs tracking-[0.4em] text-brand-red uppercase">Investimento</span>
            </div>
            <h2 className="text-5xl md:text-8xl leading-[0.9]">
              ESCOLHA<br />SEU <span className="text-brand-red">PLANO</span>
            </h2>
          </div>
          <p className="text-white/40 text-lg font-light leading-relaxed">
            Mensalidades acessíveis e sem enrolação. Comece quando quiser com nossa aula experimental gratuita. Aceitamos Wellhub (Gympass) no plano Silver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-12 flex flex-col ${plan.featured ? 'bg-brand-red md:-translate-y-4 shadow-2xl z-20' : 'bg-brand-dark-2 hover:bg-brand-gray transition-colors'}`}
            >
              <div className={`font-condensed text-[10px] tracking-[0.3em] uppercase mb-2 ${plan.featured ? 'text-white/70' : 'text-white/40'}`}>
                {plan.tag}
              </div>
              <div className="font-display text-4xl text-white mb-8">{plan.name}</div>
              
              <div className="mb-10">
                {plan.price === 'Consultar' ? (
                  <div className="font-display text-4xl md:text-5xl text-white leading-tight">SOB<br />CONSULTA</div>
                ) : (
                  <div className="flex items-start">
                    <span className="font-condensed text-base md:text-lg font-bold text-white mt-2 mr-1">R$</span>
                    <span className="font-display text-6xl md:text-8xl text-white leading-none tracking-tighter">{plan.price}</span>
                  </div>
                )}
                <div className={`font-condensed text-xs tracking-widest uppercase mt-2 ${plan.featured ? 'text-white/60' : 'text-white/30'}`}>
                  {plan.period}
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-light text-white/80">
                    <div className={`w-4 h-[1px] ${plan.featured ? 'bg-white/50' : 'bg-brand-red'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#cadastro" 
                className={`text-center py-4 font-condensed font-bold text-xs tracking-[0.3em] uppercase clip-path-slant transition-all ${
                  plan.featured 
                    ? 'bg-white text-brand-red hover:bg-white/90' 
                    : 'border border-white/20 text-white hover:bg-brand-red hover:border-brand-red'
                }`}
              >
                Participar do Desafio
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Schedule = () => {
  const schedule = [
    { time: '06:00', label: 'Segunda a Sexta' },
    { time: '07:00', label: 'Segunda a Sexta' },
    { time: '09:00', label: 'Segunda a Sexta' },
    { time: '12:00', label: 'Segunda a Sexta' },
    { time: '18:00', label: 'Segunda a Sexta' },
    { time: '19:00', label: 'Segunda a Sexta' },
    { time: '20:00', label: 'Segunda a Sexta' },
    { time: '08:00 · 09:00', label: 'Sábado' },
  ];

  return (
    <section id="horarios" className="grid md:grid-cols-2">
      <div className="bg-brand-dark-2 py-20 md:py-32 px-6 md:px-24 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-brand-red" />
            <span className="font-condensed text-xs tracking-[0.4em] text-brand-red uppercase">Horários</span>
          </div>
          <h2 className="text-5xl md:text-9xl leading-[0.9] mb-8">
            QUANDO<br />TREINAR
          </h2>
          <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm">
            Aulas programadas ao longo do dia para encaixar na sua rotina. Chegue, aqueça, mande ver.
          </p>
        </motion.div>
      </div>

      <div className="bg-brand-red py-20 md:py-24 px-6 md:px-24 flex flex-col justify-center">
        <div className="font-condensed text-[10px] tracking-[0.4em] text-white/50 uppercase mb-6">WOD SCHEDULE</div>
        <div className="space-y-0">
          {schedule.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex justify-between items-center py-5 border-t border-white/20 last:border-b"
            >
              <span className="font-condensed text-xs tracking-widest text-white/70 uppercase">{item.label}</span>
              <span className="font-display text-3xl text-white tracking-widest">{item.time}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 font-condensed text-[10px] tracking-[0.2em] text-white/50 uppercase">
          * Horários sujeitos a ajuste. Confirme via WhatsApp.
        </p>
      </div>
    </section>
  );
};

const Gamification = () => {
  const rewards = [
    { pts: '30', name: 'BRONZE', desc: '10% de desconto na matrícula' },
    { pts: '60', name: 'PRATA', desc: 'Isenção da taxa de matrícula' },
    { pts: '100', name: 'OURO', desc: '20% de desconto na 1ª mensalidade' },
    { pts: '150', name: 'DIAMANTE', desc: '30% de desconto + brinde exclusivo' },
  ];

  return (
    <section id="desafio" className="bg-brand-dark-2 py-32 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-brand-red" />
            <span className="font-condensed text-xs tracking-[0.4em] text-brand-red uppercase">Campanha de Pré-Inauguração</span>
            <div className="w-8 h-[2px] bg-brand-red" />
          </div>
          <h2 className="text-5xl md:text-7xl leading-[0.9] mb-6">
            DESAFIO <span className="text-brand-red">CORPUS CROSS</span>
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            Supere seus limites antes mesmo da inauguração. Cumpra missões, acumule pontos e troque por benefícios exclusivos e intransferíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {rewards.map((reward, i) => (
            <motion.div 
              key={reward.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-black p-8 border border-white/5 relative overflow-hidden group hover:border-brand-red/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-full -z-0 group-hover:bg-brand-red/10 transition-colors" />
              <div className="font-display text-5xl text-white/20 mb-2 relative z-10">{reward.pts} <span className="text-2xl">PTS</span></div>
              <div className="font-condensed text-xl tracking-widest text-brand-red uppercase mb-4 relative z-10">{reward.name}</div>
              <p className="text-white/70 font-light text-sm relative z-10">{reward.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-red text-white p-8 md:p-12 clip-path-slant-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl mb-2">COMO PARTICIPAR?</h3>
            <p className="font-light text-white/90 max-w-xl">
              Cadastre-se agora, receba seu painel de pontos exclusivo e comece a cumprir as missões (seguir no Instagram, compartilhar, indicar amigos).
            </p>
          </div>
          <a href="#cadastro" className="bg-brand-black hover:bg-brand-dark text-white font-condensed font-bold text-sm tracking-widest uppercase px-10 py-4 clip-path-slant transition-all whitespace-nowrap">
            QUERO PARTICIPAR
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    tel: '',
    email: '',
    instagram: '',
    lgpd: false
  });

  const handlePhoneMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    if (v.length > 9) v = `${v.slice(0, 10)}-${v.slice(10)}`;
    setFormData({ ...formData, tel: v });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // O formulário será enviado para o iframe oculto.
    // Simulamos o tempo de carregamento e mostramos a mensagem de sucesso.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nome: '',
        tel: '',
        email: '',
        instagram: '',
        lgpd: false
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="cadastro" className="bg-brand-dark py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-brand-red" />
            <span className="font-condensed text-xs tracking-[0.4em] text-brand-red uppercase">Cadastro no Desafio</span>
          </div>
          <h2 className="text-5xl md:text-8xl leading-[0.9] mb-8">
            GARANTA<br />SUA <span className="text-brand-red">VAGA</span>
          </h2>
          <p className="text-white/40 text-lg font-light leading-relaxed mb-12 max-w-md">
            Preencha os dados abaixo para criar seu perfil no Desafio Corpus Cross. Você receberá o link do seu painel de pontos no WhatsApp.
          </p>

          <div className="space-y-6">
            {[
              { icon: <MapPin className="w-5 h-5" />, text: 'Nova Lima – MG (endereço confirmado no agendamento)' },
              { icon: <Phone className="w-5 h-5" />, text: 'WhatsApp: (31) 9 0000-0000' },
              { icon: <Instagram className="w-5 h-5" />, text: '@studiocorpusnl · @academiacorpus.br' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-white/50 font-condensed tracking-widest text-sm uppercase">
                <div className="w-10 h-10 bg-brand-dark-2 flex items-center justify-center clip-path-slant-sm text-brand-red">
                  {item.icon}
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark-2 p-6 md:p-12 relative"
        >
          <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
          
          <form 
            action="https://docs.google.com/forms/d/e/1FAIpQLSck_IXu-w_GcUgP08y5EdnfDYO6N-RVYhFRupD31CkyMLPwIg/formResponse" 
            method="POST" 
            target="hidden_iframe"
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="font-condensed text-[10px] tracking-widest text-white/40 uppercase">Nome completo</label>
              <input 
                type="text" 
                name="entry.669097964"
                required
                value={formData.nome}
                onChange={e => setFormData({...formData, nome: e.target.value})}
                placeholder="Seu nome completo"
                className="w-full bg-brand-black/50 border-b-2 border-white/10 focus:border-brand-red outline-none px-4 py-3 text-white transition-colors placeholder:text-white/10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-condensed text-[10px] tracking-widest text-white/40 uppercase">WhatsApp</label>
                <input 
                  type="text" 
                  name="entry.577081962"
                  required
                  value={formData.tel}
                  onChange={handlePhoneMask}
                  placeholder="(31) 9 0000-0000"
                  className="w-full bg-brand-black/50 border-b-2 border-white/10 focus:border-brand-red outline-none px-4 py-3 text-white transition-colors placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="font-condensed text-[10px] tracking-widest text-white/40 uppercase">Instagram</label>
                <input 
                  type="text" 
                  name="entry.393520992"
                  value={formData.instagram}
                  onChange={e => setFormData({...formData, instagram: e.target.value})}
                  placeholder="@seu_perfil"
                  className="w-full bg-brand-black/50 border-b-2 border-white/10 focus:border-brand-red outline-none px-4 py-3 text-white transition-colors placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-condensed text-[10px] tracking-widest text-white/40 uppercase">E-mail</label>
              <input 
                type="email" 
                name="emailAddress"
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="seu@email.com"
                className="w-full bg-brand-black/50 border-b-2 border-white/10 focus:border-brand-red outline-none px-4 py-3 text-white transition-colors placeholder:text-white/10"
              />
            </div>

            <div className="pt-4 pb-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-1">
                  <input 
                    type="checkbox" 
                    required
                    checked={formData.lgpd}
                    onChange={e => setFormData({...formData, lgpd: e.target.checked})}
                    className="peer appearance-none w-5 h-5 border-2 border-white/20 checked:border-brand-red checked:bg-brand-red transition-colors cursor-pointer"
                  />
                  <Check className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <span className="text-white/50 text-xs font-light leading-relaxed group-hover:text-white/70 transition-colors">
                  Concordo com a política de privacidade e aceito o tratamento dos meus dados pessoais para receber comunicações da Corpus Cross, conforme a LGPD.
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-condensed font-bold text-sm tracking-[0.4em] uppercase py-5 clip-path-slant transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'ENVIANDO...' : 'ENTRAR NO DESAFIO →'}
            </button>
          </form>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 bg-brand-red flex flex-col items-center justify-center text-center p-12 z-30"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-red mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="font-display text-4xl text-white mb-2">CADASTRO REALIZADO!</h3>
                <p className="font-condensed text-white/80 tracking-widest uppercase">Verifique seu WhatsApp para acessar o painel de pontos.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="font-display text-4xl tracking-widest leading-none">CORPUS <span className="text-brand-red">CROSS</span></span>
              <span className="font-condensed text-[10px] tracking-[0.3em] text-white/50 uppercase">by Corpus Fitness · Nova Lima – MG</span>
            </div>
            <p className="text-white/40 font-light text-sm max-w-sm leading-relaxed">
              Transformando corpos e vidas desde 2021. Modalidade CrossFit da rede Corpus Fitness, referência fitness em Nova Lima e região.
            </p>
          </div>

          <div>
            <h4 className="font-condensed text-[10px] tracking-[0.4em] text-white/30 uppercase mb-8">Navegação</h4>
            <ul className="space-y-4">
              {[
                { name: 'Sobre nós', href: '#sobre' },
                { name: 'Modalidades', href: '#modalidades' },
                { name: 'Planos', href: '#planos' },
                { name: 'Horários', href: '#horarios' },
                { name: 'Participar do Desafio', href: '#cadastro' }
              ].map(item => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/50 hover:text-brand-red transition-colors text-sm font-light">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-condensed text-[10px] tracking-[0.4em] text-white/30 uppercase mb-8">Rede Corpus</h4>
            <ul className="space-y-4">
              {['Unidade Centro – Nova Lima', 'Unidade Oswaldo – Nova Lima', 'Unidade Raposos', 'Corpus Cross – Nova Lima'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-brand-red transition-colors text-sm font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="font-condensed text-[10px] tracking-widest text-white/20 uppercase">
            © 2025 <span className="text-brand-red">Corpus Fitness</span> · Todos os direitos reservados
          </div>
          <div className="flex items-center gap-4">
            {[
              { icon: <Instagram className="w-4 h-4" />, href: 'https://www.instagram.com/academiacorpus.br/?hl=pt' },
              { icon: <MessageCircle className="w-4 h-4" />, href: '#' },
              { icon: <Facebook className="w-4 h-4" />, href: '#' },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-10 h-10 bg-brand-dark-2 flex items-center justify-center text-white/30 hover:bg-brand-red hover:text-white transition-all clip-path-slant-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative selection:bg-brand-red selection:text-white">
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Gamification />
        <About />
        <Modalities />
        <Plans />
        <Schedule />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
