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

      <div className="flex-1 relative overflow-hidden corridor-wall">
        <div className="corridor-floor absolute inset-0"></div>
        
        <div className="absolute inset-0 corridor-3d flex items-center justify-center">
          <div className={`relative w-full h-full transition-all duration-700 ${isMoving ? 'opacity-80' : 'opacity-100'}`}>
            <div className="absolute inset-0 flex items-end justify-center pb-32">
              <svg className="w-full h-full absolute inset-0" style={{ pointerEvents: 'none' }}>
                <defs>
                  <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'hsl(30 25% 10%)', stopOpacity: 0 }} />
                    <stop offset="60%" style={{ stopColor: 'hsl(30 25% 10%)', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: 'hsl(30 25% 8%)', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>
                <polygon 
                  points="50,20 5,100 95,100" 
                  fill="url(#floorGrad)" 
                  opacity="0.3"
                  vectorEffect="non-scaling-stroke"
                  style={{ transform: 'scale(5)' }}
                />
              </svg>

              <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex items-center justify-center">
                {position > 1 && exhibits[position - 2] && (
                  <div 
                    className="absolute depth-far"
                    style={{
                      left: '50%',
                      top: '35%',
                      transform: 'translateX(-50%) scale(0.3)',
                    }}
                  >
                    <div className="relative">
                      <div className="exhibit-spotlight absolute -inset-20 -top-32"></div>
                      <div className="exhibit-pedestal w-32 h-40 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-6xl mb-1">{exhibits[position - 2].image}</div>
                      </div>
                    </div>
                  </div>
                )}

                {leftExhibit && (
                  <div 
                    className="absolute depth-mid cursor-pointer hover:brightness-110 transition-all"
                    onClick={moveBackward}
                    style={{
                      left: '15%',
                      top: '30%',
                      transform: 'scale(0.5) rotateY(15deg)',
                    }}
                  >
                    <div className="relative">
                      <div className="exhibit-spotlight absolute -inset-24 -top-40"></div>
                      <div className="exhibit-pedestal w-48 h-56 rounded-xl border border-primary/20 flex flex-col items-center justify-center gap-2">
                        <div className="text-8xl">{leftExhibit.image}</div>
                        <p className="text-xs text-primary/60 font-display">← Предыдущий</p>
                      </div>
                    </div>
                  </div>
                )}

                <div 
                  className="relative depth-near cursor-pointer exhibit-3d"
                  onClick={() => setSelectedExhibit(currentExhibit)}
                  style={{
                    transform: 'scale(1)',
                  }}
                >
                  <div className="relative">
                    <div className="exhibit-spotlight absolute -inset-32 -top-48 animate-pulse"></div>
                    <div className="exhibit-pedestal w-80 h-96 rounded-2xl border-2 border-primary/40 shadow-2xl flex flex-col items-center justify-center gap-4 p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                      
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary/30 backdrop-blur-sm text-primary text-xs font-display rounded-full border border-primary/50">
                        {currentExhibit.period}
                      </div>
                      
                      <div className="text-9xl drop-shadow-2xl transform hover:scale-110 transition-transform duration-300">
                        {currentExhibit.image}
                      </div>
                      
                      <div className="w-full px-4">
                        <h3 className="text-3xl font-display font-bold text-center text-primary mb-3 drop-shadow-lg">
                          {currentExhibit.title}
                        </h3>
                        
                        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-3"></div>
                        
                        <p className="text-sm text-muted-foreground text-center line-clamp-3 leading-relaxed">
                          {currentExhibit.description}
                        </p>
                      </div>

                      <Button 
                        size="sm"
                        className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50 backdrop-blur-sm"
                      >
                        <Icon name="Eye" className="mr-2" size={14} />
                        Рассмотреть
                      </Button>
                      
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {rightExhibit && (
                  <div 
                    className="absolute depth-mid cursor-pointer hover:brightness-110 transition-all"
                    onClick={moveForward}
                    style={{
                      right: '15%',
                      top: '30%',
                      transform: 'scale(0.5) rotateY(-15deg)',
                    }}
                  >
                    <div className="relative">
                      <div className="exhibit-spotlight absolute -inset-24 -top-40"></div>
                      <div className="exhibit-pedestal w-48 h-56 rounded-xl border border-primary/20 flex flex-col items-center justify-center gap-2">
                        <div className="text-8xl">{rightExhibit.image}</div>
                        <p className="text-xs text-primary/60 font-display">Следующий →</p>
                      </div>
                    </div>
                  </div>
                )}

                {position < maxPosition - 1 && exhibits[position + 2] && (
                  <div 
                    className="absolute depth-far"
                    style={{
                      right: '50%',
                      top: '35%',
                      transform: 'translateX(50%) scale(0.3)',
                    }}
                  >
                    <div className="relative">
                      <div className="exhibit-spotlight absolute -inset-20 -top-32"></div>
                      <div className="exhibit-pedestal w-32 h-40 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-6xl mb-1">{exhibits[position + 2].image}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="flex items-center justify-center gap-4">
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

          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground/70 backdrop-blur-sm bg-background/30 inline-block px-4 py-2 rounded-full">
              <Icon name="Hand" size={12} className="inline mr-1" />
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