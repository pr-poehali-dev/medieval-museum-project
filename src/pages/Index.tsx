import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Exhibit {
  id: number;
  title: string;
  period: string;
  description: string;
  image: string;
  position: number;
}

const Index = () => {
  const [showCorridor, setShowCorridor] = useState(false);
  const [position, setPosition] = useState(0);
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);
  const [isMoving, setIsMoving] = useState(false);

  const exhibits: Exhibit[] = [
    {
      id: 1,
      title: "Рыцарский меч",
      period: "XIV век",
      description: "Двуручный меч рыцаря-крестоносца. Длина клинка 110 см, вес 2.3 кг. Найден при раскопках замка в Германии. Клинок украшен латинскими надписями и крестом.",
      image: "⚔️",
      position: 0
    },
    {
      id: 2,
      title: "Королевская корона",
      period: "XIII век",
      description: "Церемониальная корона из золота с драгоценными камнями. Принадлежала династии Плантагенетов. Украшена рубинами, изумрудами и сапфирами.",
      image: "👑",
      position: 1
    },
    {
      id: 3,
      title: "Рыцарские доспехи",
      period: "XV век",
      description: "Полный комплект готических доспехов. Весят около 25 кг, изготовлены в Милане известным оружейником. Принадлежали итальянскому кондотьеру.",
      image: "🛡️",
      position: 2
    },
    {
      id: 4,
      title: "Иллюминированная рукопись",
      period: "XII век",
      description: "Религиозная книга с золотыми миниатюрами. Создана монахами в скриптории аббатства. Содержит уникальные иллюстрации библейских сцен.",
      image: "📜",
      position: 3
    },
    {
      id: 5,
      title: "Рыцарский шлем",
      period: "XIV век",
      description: "Закрытый шлем типа 'бацинет' с забралом. Отлично сохранившийся образец оружейного искусства. Имеет систему вентиляции и креплений.",
      image: "⛑️",
      position: 4
    },
    {
      id: 6,
      title: "Средневековый кубок",
      period: "XIII век",
      description: "Серебряный кубок для пиров с гравировкой гербов. Использовался в замке английского барона. Украшен сценами охоты и турниров.",
      image: "🏆",
      position: 5
    },
    {
      id: 7,
      title: "Боевой топор",
      period: "XI век",
      description: "Датский боевой топор викингов. Длина рукояти 120 см. Использовался воинами личной гвардии короля. Украшен скандинавскими рунами.",
      image: "🪓",
      position: 6
    },
    {
      id: 8,
      title: "Рыцарский щит",
      period: "XIII век",
      description: "Геральдический щит с гербом рода. Изготовлен из дерева, обтянут кожей и расписан. Использовался в крестовых походах.",
      image: "🛡️",
      position: 7
    }
  ];

  const maxPosition = exhibits.length - 1;

  const moveForward = () => {
    if (position < maxPosition) {
      setIsMoving(true);
      setTimeout(() => {
        setPosition(position + 1);
        setIsMoving(false);
      }, 600);
    }
  };

  const moveBackward = () => {
    if (position > 0) {
      setIsMoving(true);
      setTimeout(() => {
        setPosition(position - 1);
        setIsMoving(false);
      }, 600);
    }
  };

  const currentExhibit = exhibits[position];
  const leftExhibit = position > 0 ? exhibits[position - 1] : null;
  const rightExhibit = position < maxPosition ? exhibits[position + 1] : null;

  if (!showCorridor) {
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
              onClick={() => setShowCorridor(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 medieval-border"
            >
              Начать экскурсию
              <Icon name="ChevronRight" className="ml-2" />
            </Button>
          </div>
        </section>

        <footer className="absolute bottom-0 left-0 right-0 border-t border-border/50 py-6 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                ул. Историческая, 1
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                +7 (495) 123-45-67
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                info@museum.ru
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/50 py-4 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🏰</div>
              <div>
                <h1 className="text-2xl font-display font-bold text-primary">
                  Музей Средневековья
                </h1>
                <p className="text-sm text-muted-foreground">
                  Виртуальная экскурсия по коридору
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="MapPin" size={16} className="text-primary" />
              <span className="text-muted-foreground">
                Экспонат {position + 1} из {exhibits.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23D4AF37' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        ></div>

        <div className="relative w-full max-w-6xl">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 rounded-full border border-primary/30">
              <Icon name="Navigation" size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">
                Используйте кнопки для навигации по коридору
              </span>
            </div>
          </div>

          <div className="relative h-[500px] perspective-1000">
            <div 
              className={`absolute inset-0 flex items-center justify-center gap-8 transition-all duration-600 ${
                isMoving ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {leftExhibit && (
                <Card 
                  className="w-48 h-64 bg-card/40 medieval-border opacity-40 hover:opacity-60 transition-all cursor-pointer flex-shrink-0"
                  onClick={moveBackward}
                >
                  <div className="h-full flex flex-col items-center justify-center p-4">
                    <div className="text-5xl mb-2">{leftExhibit.image}</div>
                    <p className="text-xs text-muted-foreground text-center">
                      Предыдущий экспонат
                    </p>
                  </div>
                </Card>
              )}

              <Card 
                className="w-80 h-96 bg-card/90 medieval-border hover-glow cursor-pointer transform hover:scale-105 transition-all flex-shrink-0 animate-scale-in"
                onClick={() => setSelectedExhibit(currentExhibit)}
              >
                <div className="h-full flex flex-col items-center justify-center p-6 relative">
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-display rounded">
                      {currentExhibit.period}
                    </span>
                  </div>
                  <div className="text-9xl mb-6">{currentExhibit.image}</div>
                  <h3 className="text-2xl font-display font-bold text-center text-primary mb-2">
                    {currentExhibit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-3">
                    {currentExhibit.description}
                  </p>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon name="Eye" className="mr-2" size={14} />
                    Подробнее
                  </Button>
                </div>
              </Card>

              {rightExhibit && (
                <Card 
                  className="w-48 h-64 bg-card/40 medieval-border opacity-40 hover:opacity-60 transition-all cursor-pointer flex-shrink-0"
                  onClick={moveForward}
                >
                  <div className="h-full flex flex-col items-center justify-center p-4">
                    <div className="text-5xl mb-2">{rightExhibit.image}</div>
                    <p className="text-xs text-muted-foreground text-center">
                      Следующий экспонат
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={moveBackward}
              disabled={position === 0 || isMoving}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>

            <div className="flex gap-2">
              {exhibits.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isMoving) {
                      setIsMoving(true);
                      setTimeout(() => {
                        setPosition(idx);
                        setIsMoving(false);
                      }, 600);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === position 
                      ? 'bg-primary w-8' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  disabled={isMoving}
                />
              ))}
            </div>

            <Button
              size="lg"
              onClick={moveForward}
              disabled={position === maxPosition || isMoving}
              className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-30 medieval-border"
            >
              Вперёд
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Нажмите на экспонат для подробной информации
            </p>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedExhibit} onOpenChange={(open) => !open && setSelectedExhibit(null)}>
        <DialogContent className="max-w-2xl bg-card medieval-border">
          <DialogHeader>
            <DialogTitle className="text-3xl font-display text-primary flex items-center gap-4">
              <span className="text-6xl">{selectedExhibit?.image}</span>
              <div>
                <div>{selectedExhibit?.title}</div>
                <div className="text-sm text-muted-foreground font-body mt-1">
                  {selectedExhibit?.period}
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 parchment-texture p-6 rounded-lg">
            <p className="text-foreground/90 leading-relaxed text-lg">
              {selectedExhibit?.description}
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Icon name="Volume2" className="mr-2" size={16} />
              Аудиогид
            </Button>
            <Button 
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="Camera" className="mr-2" size={16} />
              3D-модель
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border/50 py-6 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
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