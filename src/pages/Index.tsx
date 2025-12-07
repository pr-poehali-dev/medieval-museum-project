import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Artifact {
  id: number;
  title: string;
  period: string;
  description: string;
  image: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  type: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const Index = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const artifacts: Artifact[] = [
    {
      id: 1,
      title: "Рыцарский меч",
      period: "XIV век",
      description: "Двуручный меч рыцаря-крестоносца. Длина клинка 110 см, вес 2.3 кг. Найден при раскопках замка в Германии.",
      image: "⚔️"
    },
    {
      id: 2,
      title: "Королевская корона",
      period: "XIII век",
      description: "Церемониальная корона из золота с драгоценными камнями. Принадлежала династии Плантагенетов.",
      image: "👑"
    },
    {
      id: 3,
      title: "Рыцарские доспехи",
      period: "XV век",
      description: "Полный комплект готических доспехов. Весят около 25 кг, изготовлены в Милане известным оружейником.",
      image: "🛡️"
    },
    {
      id: 4,
      title: "Иллюминированная рукопись",
      period: "XII век",
      description: "Религиозная книга с золотыми миниатюрами. Создана монахами в скриптории аббатства.",
      image: "📜"
    },
    {
      id: 5,
      title: "Рыцарский шлем",
      period: "XIV век",
      description: "Закрытый шлем типа 'бацинет' с забралом. Отлично сохранившийся образец оружейного искусства.",
      image: "⛑️"
    },
    {
      id: 6,
      title: "Средневековый кубок",
      period: "XIII век",
      description: "Серебряный кубок для пиров с гравировкой гербов. Использовался в замке английского барона.",
      image: "🏆"
    }
  ];

  const events: Event[] = [
    {
      id: 1,
      title: "Рыцарский турнир",
      date: "15 декабря 2025",
      description: "Реконструкция рыцарского турнира с участием лучших команд страны",
      type: "Мероприятие"
    },
    {
      id: 2,
      title: "Выставка 'Жизнь в замке'",
      date: "Постоянная экспозиция",
      description: "Уникальная коллекция предметов быта средневековых замков",
      type: "Выставка"
    },
    {
      id: 3,
      title: "Лекция 'Крестовые походы'",
      date: "20 декабря 2025",
      description: "Известный историк расскажет о военных кампаниях эпохи",
      type: "Лекция"
    },
    {
      id: 4,
      title: "Мастер-класс по каллиграфии",
      date: "22 декабря 2025",
      description: "Обучение средневековому искусству письма пером",
      type: "Мастер-класс"
    }
  ];

  const timeline: TimelineEvent[] = [
    {
      year: "476",
      title: "Падение Западной Римской империи",
      description: "Начало эпохи Средневековья в Европе"
    },
    {
      year: "800",
      title: "Коронация Карла Великого",
      description: "Создание Священной Римской империи"
    },
    {
      year: "1066",
      title: "Битва при Гастингсе",
      description: "Нормандское завоевание Англии"
    },
    {
      year: "1095",
      title: "Первый крестовый поход",
      description: "Начало эпохи крестовых походов"
    },
    {
      year: "1215",
      title: "Великая хартия вольностей",
      description: "Ограничение королевской власти в Англии"
    },
    {
      year: "1337",
      title: "Столетняя война",
      description: "Конфликт между Англией и Францией"
    },
    {
      year: "1453",
      title: "Падение Константинополя",
      description: "Конец Византийской империи и Средневековья"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-primary mb-6 tracking-wider">
            МУЗЕЙ СРЕДНЕВЕКОВЬЯ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Погрузитесь в эпоху рыцарей, замков и великих сражений
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 medieval-border"
          >
            Начать экскурсию
            <Icon name="ChevronRight" className="ml-2" />
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12 h-auto bg-card/50 p-2">
            <TabsTrigger 
              value="history" 
              className="text-lg font-display data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
            >
              <Icon name="Book" className="mr-2" size={20} />
              История
            </TabsTrigger>
            <TabsTrigger 
              value="events" 
              className="text-lg font-display data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              События
            </TabsTrigger>
            <TabsTrigger 
              value="artifacts" 
              className="text-lg font-display data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
            >
              <Icon name="Gem" className="mr-2" size={20} />
              Артефакты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="animate-fade-in">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-center mb-4 text-primary">
                Хронология Средневековья
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Тысяча лет европейской истории от падения Рима до эпохи Возрождения
              </p>
              
              <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>
                
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
                  >
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className="flex-1">
                        <Card className="p-6 bg-card/80 medieval-border hover-glow">
                          <div className="text-3xl font-display font-bold text-primary mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-display font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </Card>
                      </div>
                      
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background absolute left-6 md:left-1/2 transform md:-translate-x-1/2 shadow-lg shadow-primary/50"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events" className="animate-fade-in">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-center mb-4 text-primary">
                Мероприятия и выставки
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Актуальные события в нашем музее
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <Card 
                    key={event.id} 
                    className="p-6 bg-card/80 medieval-border hover-glow cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-display rounded-md">
                        {event.type}
                      </span>
                      <Icon 
                        name="Calendar" 
                        className="text-primary group-hover:scale-110 transition-transform" 
                        size={24} 
                      />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-primary/80 font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      {event.date}
                    </p>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-primary hover:text-primary hover:bg-primary/10"
                    >
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="artifacts" className="animate-fade-in">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-center mb-4 text-primary">
                Коллекция артефактов
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Интерактивная 3D-коллекция экспонатов — наведите для просмотра
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artifacts.map((artifact) => (
                  <div
                    key={artifact.id}
                    className="perspective-1000 h-80"
                    onMouseEnter={() => setFlippedCard(artifact.id)}
                    onMouseLeave={() => setFlippedCard(null)}
                  >
                    <div 
                      className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
                        flippedCard === artifact.id ? 'rotate-y-180' : ''
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: flippedCard === artifact.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                    >
                      <Card 
                        className="absolute inset-0 backface-hidden bg-card/90 medieval-border flex flex-col items-center justify-center p-6 cursor-pointer"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div className="text-8xl mb-4">{artifact.image}</div>
                        <h3 className="text-2xl font-display font-bold text-center text-primary">
                          {artifact.title}
                        </h3>
                        <p className="text-muted-foreground text-center mt-2 font-semibold">
                          {artifact.period}
                        </p>
                        <div className="mt-4 text-sm text-primary/70 flex items-center gap-2">
                          <Icon name="MousePointerClick" size={16} />
                          Наведите для подробностей
                        </div>
                      </Card>
                      
                      <Card 
                        className="absolute inset-0 backface-hidden bg-card/95 medieval-border p-6 cursor-pointer parchment-texture"
                        style={{ 
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <div className="h-full flex flex-col">
                          <h3 className="text-xl font-display font-bold mb-2 text-primary">
                            {artifact.title}
                          </h3>
                          <span className="text-sm text-primary/70 font-semibold mb-4 inline-block">
                            {artifact.period}
                          </span>
                          <p className="text-foreground/90 flex-1 leading-relaxed">
                            {artifact.description}
                          </p>
                          <Button 
                            variant="outline" 
                            className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            <Icon name="Eye" className="mr-2" size={16} />
                            Виртуальная экскурсия
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="border-t border-border/50 mt-20 py-12 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🏰</div>
          <h3 className="text-2xl font-display font-bold mb-2 text-primary">
            Музей Средневековья
          </h3>
          <p className="text-muted-foreground mb-6">
            Откройте для себя тысячу лет истории
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              ул. Историческая, 1
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Phone" size={16} />
              +7 (495) 123-45-67
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Mail" size={16} />
              info@museum.ru
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
