import { Shield, Truck, FileCheck, Warehouse, Calculator, BookOpen, Users, Activity, PackageCheck, Globe } from 'lucide-react';

export const WHATSAPP_LINK = "https://wa.me/79038911468";
export const PHONE_DISPLAY = "+7 (903) 891-14-68";
export const ADDRESS = "Садовод, корпус А, вход 5, этаж 1, офис 1Г-100";

export const NAV_LINKS = [
  { name: "О компании", href: "#about" },
  { name: "Услуги", href: "#services" },
  { name: "Преимущества", href: "#benefits" },
  { name: "Контакты", href: "#contacts" },
];

export const SERVICES = [
  {
    title: "Импорт под ключ",
    description: "Доставка товаров из любой страны с оформлением всех документов.",
    icon: Globe
  },
  {
    title: "Разрешительные документы",
    description: "Сертификаты, декларации, лицензии, СГР.",
    icon: FileCheck
  },
  {
    title: "Маркировка «Честный Знак»",
    description: "Регистрация, нанесение, отчётность.",
    icon: PackageCheck
  },
  {
    title: "Сертификация",
    description: "Полный пакет документов для торговли и импорта.",
    icon: Shield
  },
  {
    title: "Логистика и доставка",
    description: "Оптимальные маршруты и сроки.",
    icon: Truck
  },
  {
    title: "Бухгалтерские услуги",
    description: "Юридическое и бухгалтерское сопровождение.",
    icon: Calculator
  },
  {
    title: "Сопровождение бизнеса",
    description: "Комплексное решение вопросов ВЭД.",
    icon: BookOpen
  },
];

export const BENEFITS = [
  {
    title: "Правильное оформление",
    description: "Полное соответствие законодательству РФ.",
    icon: FileCheck
  },
  {
    title: "Скорость работы",
    description: "Минимальные сроки на всех этапах.",
    icon: Activity
  },
  {
    title: "Отсутствие штрафов",
    description: "Гарантия защиты от административных рисков.",
    icon: Shield
  },
  {
    title: "Безопасность",
    description: "100% легальность всех операций.",
    icon: Users
  }
];

export const WORKFLOW_STEPS = [
  { number: "01", title: "Заявка", desc: "Связываетесь с нами" },
  { number: "02", title: "Анализ", desc: "Подбираем решение" },
  { number: "03", title: "Оформление", desc: "Готовим документы" },
  { number: "04", title: "Доставка", desc: "Ввозим груз" },
  { number: "05", title: "Результат", desc: "Передача товара и документов" },
];

export const TARGET_AUDIENCE = [
  "Импортёры товаров",
  "Предприниматели",
  "Продавцы на «Садоводе»"
];