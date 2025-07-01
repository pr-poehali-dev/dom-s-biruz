import Header from "@/components/Header";
import ConsultationModal from "@/components/ConsultationModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Классик",
      area: "120 м²",
      rooms: "3 спальни",
      price: "от 3 200 000 ₽",
      image: "/placeholder.svg",
      features: ["Кирпич", "Двухэтажный", "Гараж"],
      description:
        "Классический двухэтажный дом с гаражом. Идеально подходит для семьи из 4-5 человек.",
    },
    {
      id: 2,
      name: "Модерн",
      area: "180 м²",
      rooms: "4 спальни",
      price: "от 4 800 000 ₽",
      image: "/placeholder.svg",
      features: ["Газобетон", "Панорамные окна", "Терраса"],
      description:
        "Современный дом с панорамными окнами и просторной террасой.",
    },
    {
      id: 3,
      name: "Эконом",
      area: "90 м²",
      rooms: "2 спальни",
      price: "от 2 400 000 ₽",
      image: "/placeholder.svg",
      features: ["Каркасный", "Одноэтажный", "Экономичный"],
      description: "Компактный одноэтажный дом для небольшой семьи или дачи.",
    },
    {
      id: 4,
      name: "Премиум",
      area: "250 м²",
      rooms: "5 спален",
      price: "от 7 500 000 ₽",
      image: "/placeholder.svg",
      features: ["Кирпич", "Трёхэтажный", "Подвал"],
      description:
        "Роскошный трёхэтажный дом с подвалом и эксклюзивной отделкой.",
    },
    {
      id: 5,
      name: "Загородный",
      area: "160 м²",
      rooms: "3 спальни",
      price: "от 4 200 000 ₽",
      image: "/placeholder.svg",
      features: ["Брус", "Камин", "Веранда"],
      description: "Уютный дом из бруса с камином и большой верандой.",
    },
    {
      id: 6,
      name: "Студийный",
      area: "75 м²",
      rooms: "1 спальня",
      price: "от 1 900 000 ₽",
      image: "/placeholder.svg",
      features: ["Каркасный", "Студия", "Лофт"],
      description: "Современная студия в стиле лофт для молодой семьи.",
    },
  ];

  const filters = [
    { label: "Все проекты", active: true },
    { label: "До 100 м²", active: false },
    { label: "100-150 м²", active: false },
    { label: "Свыше 150 м²", active: false },
    { label: "Кирпич", active: false },
    { label: "Каркасные", active: false },
    { label: "Брус", active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Проекты домов</h1>
          <p className="text-xl text-blue-100 mb-8">
            Выберите готовый проект или закажите индивидуальную разработку
          </p>
          <ConsultationModal
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
            trigger={
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Индивидуальный проект
              </Button>
            }
          />
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <Badge
                key={index}
                variant={filter.active ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  filter.active
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-50 hover:border-blue-300"
                }`}
              >
                {filter.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white">
                      {project.price}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {project.name}
                      </CardTitle>
                      <div className="flex items-center text-gray-600 text-sm space-x-4">
                        <span className="flex items-center">
                          <Icon name="Square" size={16} className="mr-1" />
                          {project.area}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Bed" size={16} className="mr-1" />
                          {project.rooms}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                    <ConsultationModal
                      trigger={
                        <Button size="sm" className="flex-1">
                          <Icon name="Calculator" size={16} className="mr-2" />
                          Расчёт
                        </Button>
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Готовых проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Построенных домов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-blue-200">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Не нашли подходящий проект?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Мы разработаем индивидуальный проект специально для вас с учётом
            всех ваших пожеланий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationModal
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              trigger={
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Icon name="Drafting Compass" size={20} className="mr-2" />
                  Заказать индивидуальный проект
                </Button>
              }
            />
            <Button variant="outline" size="lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать каталог проектов
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
