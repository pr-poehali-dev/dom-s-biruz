import Header from "@/components/Header";
import ConsultationModal from "@/components/ConsultationModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Официальная гарантия на все виды работ до 10 лет",
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description:
        "Строительство дома от 3 до 8 месяцев в зависимости от проекта",
    },
    {
      icon: "Calculator",
      title: "Прозрачное ценообразование",
      description: "Фиксированная стоимость без скрытых доплат",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description: "Более 12 лет опыта в строительстве загородных домов",
    },
  ];

  const services = [
    {
      icon: "Home",
      title: "Строительство домов",
      description: "Полный цикл строительства от фундамента до отделки",
    },
    {
      icon: "Wrench",
      title: "Проектирование",
      description: "Индивидуальные и типовые проекты домов",
    },
    {
      icon: "Truck",
      title: "Материалы",
      description: "Поставка качественных строительных материалов",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Строительство домов <br className="hidden md:block" />в Ростовской
              области
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Надежно • Качественно • В срок
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationModal className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg" />
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы строим дома с 2012 года и знаем все тонкости качественного
              строительства
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon
                      name={advantage.icon as any}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600">
              Полный спектр услуг для строительства вашего дома
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon
                        name={service.icon as any}
                        size={24}
                        className="text-orange-600"
                      />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" size="sm">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы начать строительство?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Получите бесплатную консультацию и расчет стоимости вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationModal
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              trigger={
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              }
            />
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (863) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Home" size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">РостовДом</h3>
              </div>
              <p className="text-gray-400">
                Строительство качественных домов в Ростовской области с 2012
                года.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Строительство домов</li>
                <li>Проектирование</li>
                <li>Отделочные работы</li>
                <li>Ландшафтный дизайн</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (863) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@rostovdom.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Ростов-на-Дону
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 РостовДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
