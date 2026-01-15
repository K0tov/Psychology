import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/app/components/ui/dialog";
import { useState } from "react";
import { Calendar, Clock, Mail, User, Phone, MessageSquare } from "lucide-react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // В реальному додатку тут відправка даних на сервер
        console.log("Booking data:", formData);
        alert("Дякуємо за вашу заявку! Ми зв'яжемося з вами найближчим часом.");
        onClose();
        setFormData({ name: "", email: "", phone: "", preferredDate: "", message: "" });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold">Записатися на консультацію</DialogTitle>
                    <DialogDescription>
                        Заповніть форму нижче, і ми зв'яжемося з вами протягом 24 годин.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Повне ім'я
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Іван Іваненко"
                            className="w-full px-4 py-2 border border-clinical-light rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-clinical-dark 
                       transition-all bg-soft-grey"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="ivan@example.com"
                            className="w-full px-4 py-2 border border-clinical-light rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-clinical-dark 
                       transition-all bg-soft-grey"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            Телефон (опціонально)
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+380 ХХ ХХХ ХХХХ"
                            className="w-full px-4 py-2 border border-clinical-light rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-clinical-dark 
                       transition-all bg-soft-grey"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Бажана дата
                        </label>
                        <input
                            id="date"
                            type="date"
                            required
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-2 border border-clinical-light rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-clinical-dark 
                       transition-all bg-soft-grey"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            Повідомлення (опціонально)
                        </label>
                        <textarea
                            id="message"
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Коротко розкажіть, з чим ви хотіли б отримати допомогу..."
                            className="w-full px-4 py-2 border border-clinical-light rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-clinical-dark 
                       transition-all resize-none bg-soft-grey"
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 bg-[#F5F5F7] text-[#1A1A1A] rounded-lg 
                       hover:bg-gray-300 transition-colors font-medium"
                        >
                            Скасувати
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-[#2D2D2D] text-white rounded-lg 
                       hover:bg-[#1A1A1A] transition-all font-medium"
                        >
                            Відправити
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
