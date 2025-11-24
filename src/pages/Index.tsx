import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const schedule = [
    { day: "Понедельник - Пятница", time: "8:00", service: "Утреня, Божественная Литургия" },
    { day: "Понедельник - Пятница", time: "17:00", service: "Вечерня" },
    { day: "Суббота", time: "8:00", service: "Божественная Литургия" },
    { day: "Суббота", time: "17:00", service: "Всенощное бдение" },
    { day: "Воскресенье", time: "7:00 и 9:00", service: "Ранняя и поздняя Литургия" },
  ];

  const sacraments = [
    { name: "Крещение", schedule: "По субботам в 12:00, запись по телефону" },
    { name: "Венчание", schedule: "По договоренности" },
    { name: "Исповедь", schedule: "Перед каждой Литургией" },
    { name: "Причастие", schedule: "После Литургии" },
  ];

  const relics = [
    { 
      name: "Чудотворная икона Божией Матери \"Скоропослушница\"", 
      description: "Особо почитаемая святыня храма, известная множеством чудес и исцелений" 
    },
    { 
      name: "Мощи святых угодников", 
      description: "Частицы мощей преподобных отцов и святых мучеников" 
    },
    { 
      name: "Животворящий Крест Господень", 
      description: "Частица Древа Креста Господня" 
    },
  ];

  const history = [
    { year: "1856", event: "Основание храма на пожертвования прихожан" },
    { year: "1892", event: "Освящение главного престола в честь Успения Пресвятой Богородицы" },
    { year: "1930", event: "Закрытие храма в период гонений" },
    { year: "1991", event: "Возвращение храма Церкви и начало восстановления" },
    { year: "2005", event: "Завершение полной реставрации храма" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/04d938aa-cc9d-4a4c-a703-a13daef2c0d2/files/49879e4e-8e4a-4f36-a6c9-d72c5d877b19.jpg" 
            alt="Храм" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Храм Успения Пресвятой Богородицы
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow">
            Дом молитвы и духовного утешения
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        <section className="animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Clock" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Расписание богослужений</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {schedule.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-foreground">{item.day}</h3>
                  <span className="text-2xl font-bold text-primary">{item.time}</span>
                </div>
                <p className="text-muted-foreground">{item.service}</p>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Cross" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Таинства</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {sacraments.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-xl mb-2 text-foreground">{item.name}</h3>
                <p className="text-muted-foreground">{item.schedule}</p>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Sparkles" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Святыни и реликвии</h2>
          </div>
          <div className="space-y-6">
            {relics.map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-2xl mb-3 text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="BookOpen" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold text-foreground">История храма</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            <div className="space-y-8">
              {history.map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-3xl font-bold text-primary">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground text-lg">{item.event}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Heart" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Пожертвования и поддержка</h2>
          </div>
          <Card className="p-8">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Наш храм существует благодаря вашей поддержке. Ваши пожертвования помогают поддерживать храм, 
              проводить богослужения и заниматься благотворительной деятельностью.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-xl mb-2">Реквизиты для пожертвований:</h3>
                <p className="text-muted-foreground">Расчетный счет: 40703810100000000000</p>
                <p className="text-muted-foreground">Банк: ПАО "Сбербанк"</p>
                <p className="text-muted-foreground">ИНН: 7700000000</p>
              </div>
              <Button className="mt-4">
                <Icon name="DollarSign" size={20} className="mr-2" />
                Поддержать храм
              </Button>
            </div>
          </Card>
        </section>

        <Separator className="my-16" />

        <section className="animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="MapPin" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Контакты и как добраться</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-4">Адрес храма</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <p className="text-muted-foreground">г. Москва, ул. Храмовая, д. 1</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <p className="text-muted-foreground">info@hram-uspenia.ru</p>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-4">Как добраться</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>На метро:</strong> станция "Площадь Революции", выход 2, далее пешком 5 минут</p>
                <p><strong>На автобусе:</strong> остановка "Храм Успения", маршруты 15, 25, 101</p>
                <p><strong>На автомобиле:</strong> парковка у храма, въезд с ул. Храмовой</p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border mt-24 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-lg mb-4">
            Храм Успения Пресвятой Богородицы
          </p>
          <p className="text-muted-foreground">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
