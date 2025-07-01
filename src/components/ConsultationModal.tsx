import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

interface ConsultationModalProps {
  trigger?: React.ReactNode;
  className?: string;
}

const ConsultationModal = ({ trigger, className }: ConsultationModalProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение рабочего дня.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      projectType: "",
      message: "",
    });

    setIsSubmitting(false);
    setOpen(false);
  };

  const defaultTrigger = (
    <Button className={className}>
      <Icon name="MessageCircle" size={16} className="mr-2" />
      Получить консультацию
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Icon
              name="MessageCircle"
              size={20}
              className="mr-2 text-blue-600"
            />
            Заявка на консультацию
          </DialogTitle>
          <DialogDescription>
            Оставьте свои контакты, и наш специалист свяжется с вами для
            обсуждения проекта.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ваше имя"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+7 (XXX) XXX-XX-XX"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <Label htmlFor="projectType">Тип проекта</Label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Выберите тип проекта</option>
              <option value="cottage">Загородный дом</option>
              <option value="townhouse">Таунхаус</option>
              <option value="commercial">Коммерческое строительство</option>
              <option value="renovation">Реконструкция</option>
              <option value="other">Другое</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Расскажите о ваших планах и пожеланиях..."
              rows={3}
            />
          </div>

          <div className="flex space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Отмена
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? (
                <>
                  <Icon
                    name="Loader2"
                    size={16}
                    className="mr-2 animate-spin"
                  />
                  Отправка...
                </>
              ) : (
                "Отправить заявку"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
