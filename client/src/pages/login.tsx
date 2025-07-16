import React, { useState } from "react";
import {
  Home,
  Bell,
  MessageCircle,
  Calendar,
  User,
  Camera,
  AlertTriangle,
  Clock,
  CheckCircle,
  X,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Users,
  FileText,
  Heart,
  Star,
  Send,
  Download,
  Eye,
  Filter,
  Search,
  Plus,
  Menu,
  Settings,
  Info,
  Award,
  Target,
  Activity,
} from "lucide-react";

export default function ParentDashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedChild, setSelectedChild] = useState("joao");

  // Os estados 'showNotifications' e 'showMessages' foram removidos
  // pois a navegação agora é controlada consistentemente por 'activeTab'.

  const children = [
    {
      id: "joao",
      name: "João Silva",
      class: "5º Ano A",
      age: 10,
      photo: "👦",
      attendance: 95,
      behavior: "Excelente",
      nextClass: "Matemática - 14:00",
    },
    {
      id: "maria",
      name: "Maria Silva",
      class: "3º Ano B",
      age: 8,
      photo: "👧",
      attendance: 98,
      behavior: "Muito Bom",
      nextClass: "Português - 13:30",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "warning",
      title: "Ausência registrada",
      message: "João faltou na aula de Educação Física hoje",
      time: "2h atrás",
      child: "joao",
      read: false,
    },
    {
      id: 2,
      type: "info",
      title: "Reunião de pais",
      message: "Reunião marcada para 20/06 às 19h",
      time: "1 dia atrás",
      child: "all",
      read: false,
    },
    {
      id: 3,
      type: "success",
      title: "Nota excelente!",
      message: "Maria tirou 10 na prova de Matemática",
      time: "2 dias atrás",
      child: "maria",
      read: true,
    },
    {
      id: 4,
      type: "reminder",
      title: "Entrega de trabalho",
      message: "Trabalho de Ciências deve ser entregue amanhã",
      time: "3 dias atrás",
      child: "joao",
      read: true,
    },
  ];

  const messages = [
    {
      id: 1,
      from: "Prof. Ana Silva",
      subject: "Comportamento do João",
      preview: "Gostaria de conversar sobre o comportamento do João em sala...",
      time: "1h atrás",
      read: false,
      child: "joao",
    },
    {
      id: 2,
      from: "Coordenação",
      subject: "Reunião de Pais",
      preview: "Lembramos que a reunião de pais será no dia 20/06...",
      time: "1 dia atrás",
      read: false,
      child: "all",
    },
    {
      id: 3,
      from: "Prof. Carlos Lima",
      subject: "Parabéns Maria!",
      preview: "Maria se destacou na apresentação de hoje...",
      time: "2 dias atrás",
      read: true,
      child: "maria",
    },
  ];

  const occurrences = [
    {
      id: 1,
      type: "positive",
      title: "Participação exemplar",
      description:
        "João se destacou na aula de História com excelente participação",
      teacher: "Prof. Marina Costa",
      date: "14/06/2025",
      child: "joao",
    },
    {
      id: 2,
      type: "attention",
      title: "Conversa durante a aula",
      description:
        "João foi chamado atenção por conversar durante a explicação",
      teacher: "Prof. Ana Silva",
      date: "13/06/2025",
      child: "joao",
    },
    {
      id: 3,
      type: "positive",
      title: "Ajudou colega",
      description: "Maria ajudou uma colega com dificuldades na atividade",
      teacher: "Prof. Pedro Santos",
      date: "12/06/2025",
      child: "maria",
    },
  ];

  const photos = [
    { id: 1, title: "Feira de Ciências", date: "10/06/2025", child: "joao" },
    {
      id: 2,
      title: "Apresentação de Dança",
      date: "08/06/2025",
      child: "maria",
    },
    { id: 3, title: "Recreio", date: "05/06/2025", child: "all" },
    { id: 4, title: "Aula de Arte", date: "03/06/2025", child: "joao" },
    { id: 5, title: "Educação Física", date: "01/06/2025", child: "maria" },
    { id: 6, title: "Festa Junina", date: "28/05/2025", child: "all" },
  ];

  const currentChild = children.find((child) => child.id === selectedChild);
  const unreadNotifications = notifications.filter((n) => !n.read).length;
  const unreadMessages = messages.filter((m) => !m.read).length;

  const getNotificationIcon = (type) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case "info":
        return <Info className="w-5 h-5 text-blue-500" />;
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "reminder":
        return <Clock className="w-5 h-5 text-purple-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getOccurrenceColor = (type) => {
    switch (type) {
      case "positive":
        return "bg-green-50 border-green-200 text-green-800";
      case "attention":
        return "bg-yellow-50 border-yellow-200 text-yellow-800";
      case "negative":
        return "bg-red-50 border-red-200 text-red-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const renderHome = () => (
    <div className="space-y-6">
      {/* Header com seleção de filho */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Olá, Família Silva!</h1>
          <button
            onClick={() => setActiveTab("notifications")}
            className="relative p-2 bg-white/20 rounded-full"
          >
            <Bell className="w-5 h-5" />
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <div className="text-4xl">{currentChild.photo}</div>
          <div>
            <h2 className="text-lg font-semibold">{currentChild.name}</h2>
            <p className="text-blue-100">{currentChild.class}</p>
          </div>
        </div>

        {children.length > 1 && (
          <div className="flex space-x-2">
            {children.map((child) => (
              <button
                key={child.id}
                onClick={() => setSelectedChild(child.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedChild === child.id
                    ? "bg-white text-blue-600"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {child.name.split(" ")[0]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Cards de resumo */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Presença</p>
              <p className="text-2xl font-bold text-green-600">
                {currentChild.attendance}%
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Comportamento</p>
              <p className="text-sm font-bold text-blue-600">
                {currentChild.behavior}
              </p>
            </div>
            <Award className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Próxima aula */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Próxima aula</p>
            <p className="font-semibold text-gray-900">
              {currentChild.nextClass}
            </p>
          </div>
          <Clock className="w-5 h-5 text-orange-500" />
        </div>
      </div>

      {/* Notificações recentes */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">
              Notificações Recentes
            </h3>
            <button
              onClick={() => setActiveTab("notifications")}
              className="text-sm text-blue-600 font-medium"
            >
              Ver todas
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {notifications.slice(0, 3).map((notification) => (
              <div key={notification.id} className="flex items-start space-x-3">
                {getNotificationIcon(notification.type)}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-600">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.time}
                  </p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ocorrências recentes */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Ocorrências</h3>
            <button
              onClick={() => setActiveTab("occurrences")} // This assumes an 'occurrences' tab might be added later
              className="text-sm text-blue-600 font-medium"
            >
              Ver todas
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {occurrences
              .filter((o) => o.child === selectedChild)
              .slice(0, 2)
              .map((occurrence) => (
                <div
                  key={occurrence.id}
                  className={`border rounded-lg p-3 ${getOccurrenceColor(
                    occurrence.type
                  )}`}
                >
                  <p className="font-medium text-sm">{occurrence.title}</p>
                  <p className="text-xs mt-1">{occurrence.description}</p>
                  <p className="text-xs mt-2 opacity-75">
                    {occurrence.teacher} • {occurrence.date}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Notificações</h2>
        <button className="text-sm text-blue-600 font-medium">
          Marcar todas como lidas
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-xl p-4 shadow-sm border border-gray-200 ${
              !notification.read ? "ring-2 ring-blue-100" : ""
            }`}
          >
            <div className="flex items-start space-x-3">
              {getNotificationIcon(notification.type)}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">
                    {notification.title}
                  </p>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {notification.message}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-gray-500">{notification.time}</p>
                  {notification.child !== "all" && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {
                        children
                          .find((c) => c.id === notification.child)
                          ?.name.split(" ")[0]
                      }
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Mensagens</h2>
        <button className="p-2 bg-blue-600 text-white rounded-full">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`bg-white rounded-xl p-4 shadow-sm border border-gray-200 ${
              !message.read ? "ring-2 ring-blue-100" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <p className="font-medium text-gray-900">{message.from}</p>
                  {!message.read && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-800 mt-1">
                  {message.subject}
                </p>
                <p className="text-sm text-gray-600 mt-1">{message.preview}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-gray-500">{message.time}</p>
                  {message.child !== "all" && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {
                        children
                          .find((c) => c.id === message.child)
                          ?.name.split(" ")[0]
                      }
                    </span>
                  )}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCalendar = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">Calendário</h2>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Junho 2025</h3>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {["D", "S", "T", "Q", "Q", "S", "S"].map((day, index) => (
            <div key={index} className="p-2 font-medium text-gray-600">
              {day}
            </div>
          ))}
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className={`p-2 rounded-full cursor-pointer ${
                i + 1 === 15
                  ? "bg-blue-600 text-white font-bold"
                  : [20, 25].includes(i + 1)
                  ? "bg-orange-100 text-orange-800 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2 border-t pt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Hoje</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span className="text-sm text-gray-600">Eventos</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Próximos Eventos</h3>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Reunião de Pais</p>
              <p className="text-sm text-gray-600">20 de Junho - 19:00</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Apresentação de Dança</p>
              <p className="text-sm text-gray-600">25 de Junho - 15:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPhotos = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Álbum de Fotos</h2>
        <button className="p-2 bg-blue-600 text-white rounded-full">
          <Download className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <Camera className="w-12 h-12 text-gray-400" />
            </div>
            <div className="p-3">
              <p className="font-medium text-gray-900 text-sm truncate">
                {photo.title}
              </p>
              <p className="text-xs text-gray-600">{photo.date}</p>
              {photo.child !== "all" && (
                <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  {
                    children
                      .find((c) => c.id === photo.child)
                      ?.name.split(" ")[0]
                  }
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Perfil</h2>

      {/* Informações do responsável */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Carlos Silva
            </h3>
            <p className="text-gray-600">Pai de João e Maria</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <span className="text-gray-700">(11) 98765-4321</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <span className="text-gray-700">carlos.silva@email.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <span className="text-gray-700">
              Rua das Flores, 123 - São Paulo
            </span>
          </div>
        </div>
      </div>

      {/* Informações dos filhos */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Meus Filhos</h3>
        {children.map((child) => (
          <div
            key={child.id}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{child.photo}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{child.name}</h4>
                <p className="text-sm text-gray-600">
                  {child.class} • {child.age} anos
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Activity className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">
                      Presença: {child.attendance}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600">
                      {child.behavior}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Configurações */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Configurações</h3>
        </div>
        <div className="p-4 space-y-1">
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <span className="text-gray-700">Notificações</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <span className="text-gray-700">Privacidade</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <span className="text-gray-700">Sobre o App</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return renderHome();
      case "notifications":
        return renderNotifications();
      case "messages":
        return renderMessages();
      case "calendar":
        return renderCalendar();
      case "photos":
        return renderPhotos();
      case "profile":
        return renderProfile();
      default:
        return renderHome();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen font-sans">
      {/* Header Fixo no Topo */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">EduConnect</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab("messages")}
              className="relative p-2 text-gray-600"
            >
              <MessageCircle className="w-5 h-5" />
              {unreadMessages > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {unreadMessages}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className="p-2 text-gray-600"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="px-4 py-6 pb-24">{renderContent()}</main>

      {/* Navegação Inferior Fixa */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-sm border-t border-gray-200">
        <div className="flex justify-around">
          {[
            { id: "home", icon: Home, label: "Início" },
            { id: "calendar", icon: Calendar, label: "Calendário" },
            { id: "messages", icon: MessageCircle, label: "Mensagens" },
            { id: "photos", icon: Camera, label: "Fotos" },
            { id: "profile", icon: User, label: "Perfil" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-2 px-1 text-xs font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              <div className="relative">
                <tab.icon className="w-5 h-5 mb-1" />
                {tab.id === "notifications" && unreadNotifications > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                    {unreadNotifications}
                  </span>
                )}
                {tab.id === "messages" && unreadMessages > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                    {unreadMessages}
                  </span>
                )}
              </div>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
