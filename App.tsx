import React, { useState } from 'react';
import { Menu, X, CheckCircle2, Warehouse, MapPin, Phone, MessageCircle, ChevronRight, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SERVICES, BENEFITS, WORKFLOW_STEPS, TARGET_AUDIENCE, WHATSAPP_LINK, PHONE_DISPLAY, ADDRESS } from './constants';
import { WhatsAppButton } from './components/Button';
import { Section, SectionHeader } from './components/Section';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-vks-light text-vks-graphite overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-vks-graphite/95 backdrop-blur-md border-b border-vks-steel">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-white tracking-tighter">ВКС</a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                  {link.name}
                </a>
              ))}
              <WhatsAppButton className="scale-90 origin-right" />
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white p-2">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-vks-graphite border-t border-vks-steel absolute w-full">
            <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white text-lg font-medium py-2 block"
                >
                  {link.name}
                </a>
              ))}
              <WhatsAppButton className="w-full" />
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <div className="relative bg-vks-graphite text-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
             {/* Abstract tech lines pattern */}
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 L100 0" stroke="white" strokeWidth="0.2" />
               <path d="M0 80 L80 0" stroke="white" strokeWidth="0.1" />
               <path d="M20 100 L100 20" stroke="white" strokeWidth="0.1" />
             </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-vks-steel rounded-full text-xs md:text-sm font-medium text-gray-300 mb-6 border border-vks-accent/30">
              Более 25 лет опыта
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Легальный импорт <br/> и сопровождение бизнеса
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
              ВКС — один партнёр для честного <br className="hidden md:block" /> и безопасного бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>

      {/* --- About Section --- */}
      <Section id="about" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title="О компании" />
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Мы предоставляем услуги на рынке уже <span className="font-bold text-vks-graphite">более 25 лет</span>. 
                Наш опыт позволяет решать самые сложные задачи в сфере ВЭД и логистики.
              </p>
              <p>
                <span className="font-bold text-vks-graphite">Работаем официально.</span> 
                Прозрачность процессов и юридическая чистота — наши главные приоритеты. 
                Мы берем на себя всю бюрократию, чтобы вы могли сосредоточиться на развитии продаж.
              </p>
              <p>
                Владеем <span className="font-bold text-vks-graphite">Собственным Таможенным Складом</span>, 
                что гарантирует сохранность грузов и оптимизацию расходов на хранение.
              </p>
            </div>
          </div>
          <div className="bg-vks-light rounded-xl p-8 md:p-12 border border-gray-200">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-vks-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-vks-graphite font-medium">Официальный договор</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-vks-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-vks-graphite font-medium">Полная материальная ответственность</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-vks-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-vks-graphite font-medium">Прозрачное ценообразование</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-vks-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-vks-graphite font-medium">Персональный менеджер 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* --- Services Section --- */}
      <Section id="services" className="bg-vks-light">
        <SectionHeader title="Услуги компании" subtitle="Комплексное решение задач любой сложности" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-vks-accent transition-all duration-300 hover:shadow-lg flex flex-col h-full">
              <div className="mb-6 bg-vks-light w-12 h-12 rounded-lg flex items-center justify-center text-vks-graphite group-hover:bg-vks-graphite group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-vks-graphite mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* --- Benefits Section --- */}
      <Section id="benefits" className="bg-vks-graphite">
        <SectionHeader title="Почему выбирают нас" light />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="bg-vks-steel p-6 rounded-xl border border-vks-accent/20">
              <div className="mb-4 text-vks-accent">
                <benefit.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* --- Customs Warehouse Feature --- */}
      <Section className="bg-white">
        <div className="bg-vks-graphite rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-vks-accent mb-4">
                <Warehouse size={24} />
                <span className="font-bold tracking-wider uppercase text-sm">Конкурентное преимущество</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Собственный <br/> Таможенный Склад
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Мы не посредники. Наличие собственной инфраструктуры позволяет нам гарантировать безопасность груза и предлагать лучшие цены на рынке без переплат третьим лицам.
              </p>
              <div>
                <WhatsAppButton text="Узнать стоимость хранения" />
              </div>
            </div>
            <div className="bg-vks-steel relative min-h-[300px] flex items-center justify-center overflow-hidden group">
              {/* Abstract visual for warehouse representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-vks-graphite to-vks-steel opacity-90 z-10"></div>
              <img 
                 src="https://picsum.photos/800/600?grayscale" 
                 alt="Warehouse Logistics" 
                 className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-20 border border-white/20 bg-white/5 backdrop-blur-sm p-8 rounded-xl max-w-xs text-center">
                 <Warehouse size={48} className="mx-auto text-white mb-4" />
                 <p className="text-white font-medium">Лицензированная зона таможенного контроля</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Workflow Section --- */}
      <Section id="workflow" className="bg-vks-light">
        <SectionHeader title="Как проходит работа" subtitle="Простой и понятный процесс" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Connector Line for Desktop */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-300 -z-10 transform translate-y-4"></div>
            
            {WORKFLOW_STEPS.map((step, index) => (
              <div key={index} className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm md:bg-transparent md:border-0 md:shadow-none">
                <div className="w-16 h-16 bg-vks-graphite text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-4 border-vks-light">
                  {step.number}
                </div>
                <h4 className="text-lg font-bold text-vks-graphite mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
                
                {/* Mobile Arrow */}
                {index < WORKFLOW_STEPS.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4 text-gray-300">
                     <ArrowRight size={20} className="rotate-90" />
                  </div>
                )}
              </div>
            ))}
        </div>
      </Section>

      {/* --- Target Audience --- */}
      <Section className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-vks-graphite mb-12">Для кого наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
             {TARGET_AUDIENCE.map((item, idx) => (
               <div key={idx} className="bg-vks-light py-6 px-4 rounded-lg font-medium text-vks-graphite hover:bg-vks-steel hover:text-white transition-colors cursor-default flex items-center justify-center gap-2 group">
                  <ChevronRight size={16} className="text-vks-accent group-hover:text-white" />
                  {item}
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* --- Footer/Contacts --- */}
      <footer id="contacts" className="bg-vks-graphite text-white py-16 md:py-24 border-t border-vks-steel">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Контакты</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-vks-accent mt-1 flex-shrink-0" />
                  <span>{ADDRESS}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-vks-accent flex-shrink-0" />
                  <a href={`tel:${PHONE_DISPLAY}`} className="hover:text-vks-accent transition-colors font-medium">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="text-vks-accent flex-shrink-0" />
                  <span className="text-gray-400">WhatsApp поддержка</span>
                </div>
              </div>
              
              <div className="mt-12">
                <WhatsAppButton />
              </div>
            </div>

            {/* Map Placeholder / Visual */}
            <div className="bg-vks-steel rounded-xl p-2 h-64 md:h-auto flex items-center justify-center border border-vks-accent/20 relative overflow-hidden">
               <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#415A77_1px,transparent_1px)] [background-size:16px_16px]"></div>
               <div className="text-center z-10">
                 <MapPin size={48} className="mx-auto text-vks-accent mb-4" />
                 <p className="text-gray-300">Рынок «Садовод»</p>
                 <p className="text-sm text-gray-500">Корпус А, вход 5, этаж 1, офис 1Г-100</p>
               </div>
            </div>

          </div>
          
          <div className="mt-20 pt-8 border-t border-vks-steel flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} ООО «Внешторг Консьерж Сервис». Все права защищены.</p>
            <p className="mt-2 md:mt-0">Политика конфиденциальности</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;