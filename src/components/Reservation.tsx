import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Utensils, CheckCircle2, Phone, Mail, User, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:00",
    guests: "2",
    seating: "Indoor Cultural Dining",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      toast.error("Please fill in all required fields (Name, Phone, and Date).");
      return;
    }

    setIsSubmitted(true);
    toast.success("Reservation request submitted successfully!", {
      description: `We look forward to hosting you on ${formData.date} at ${formData.time}.`,
    });
  };

  return (
    <section id="reservation" className="section-padding bg-muted/40 relative">
      <div className="container-width">
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge variant="outline" className="border-primary text-primary px-4 py-1 mb-3 text-sm font-semibold uppercase tracking-wider">
            Table Reservations
          </Badge>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Book Your <span className="text-primary">Dining Table</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Reserve your table at Misrak Addis (ምስራቅ አዲስ) for an authentic Ethiopian culinary journey with family and friends.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card data-aos="zoom-in" className="shadow-xl border-border/60 overflow-hidden bg-card">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left Column: Info panel */}
              <div className="md:col-span-2 bg-gradient-to-br from-neutral-900 to-amber-950 text-white p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <span className="font-playfair text-xl font-bold">Misrak Addis</span>
                  </div>

                  <h3 className="text-2xl font-playfair font-bold text-amber-300 mb-4">
                    Reservation Info
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Join us for an unforgettable dining experience. For parties larger than 10 people, please contact us directly.
                  </p>

                  <div className="space-y-4 text-sm text-gray-300">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>+251 11 661 2345</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-amber-400" />
                      <span>reservations@misrakaddis.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>Open Daily: 8:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-amber-800/50">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                    <Utensils className="w-4 h-4" /> Authentic Hospitality
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="md:col-span-3 p-8">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-foreground">
                      Reservation Confirmed!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                      Thank you, <strong className="text-foreground">{formData.name}</strong>. We have received your reservation for <strong className="text-foreground">{formData.guests} guests</strong> on <strong className="text-foreground">{formData.date} at {formData.time}</strong>.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      A confirmation SMS/email has been dispatched to {formData.phone || formData.email}.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-4"
                    >
                      Make Another Reservation
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1 block">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                          <Input
                            required
                            type="text"
                            placeholder="e.g. Abebe Bikila"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="pl-9"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1 block">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                          <Input
                            required
                            type="tel"
                            placeholder="+251 91 123 4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="pl-9"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Date */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1 block">
                          Date *
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                          <Input
                            required
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="pl-9"
                          />
                        </div>
                      </div>

                      {/* Time */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1 block">
                          Time *
                        </label>
                        <div className="relative">
                          <Clock className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                          <select
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full h-10 pl-9 pr-3 rounded-md border border-input bg-background text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="12:00">12:00 PM (Lunch)</option>
                            <option value="13:30">1:30 PM (Lunch)</option>
                            <option value="18:30">6:30 PM (Dinner)</option>
                            <option value="19:30">7:30 PM (Dinner)</option>
                            <option value="20:30">8:30 PM (Dinner)</option>
                          </select>
                        </div>
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1 block">
                          Guests *
                        </label>
                        <div className="relative">
                          <Users className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                          <select
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            className="w-full h-10 pl-9 pr-3 rounded-md border border-input bg-background text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="8">8 Guests</option>
                            <option value="10+">10+ Guests</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground mb-1 block">
                        Special Requests / Occasion (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Birthday celebration, dietary preferences, special seating request..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full rounded-md border border-input bg-background p-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base shadow-md transition-all duration-300 transform hover:scale-[1.01]"
                    >
                      Confirm Table Reservation
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
