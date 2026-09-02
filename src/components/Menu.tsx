import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Flame, Utensils, Info, CheckCircle2, Sparkles, HeartHandshake } from "lucide-react";

import BeyeAynetImg from "../assets/images/beye-aynet.jpg";
import ShiroWetImg from "../assets/images/shiro-wet.png";
import DoroWetImg from "../assets/images/doro-wet.jpg";
import TibsImg from "../assets/images/tibs.jpg";

export interface MenuItem {
  id: string;
  name: string;
  amharicName: string;
  category: string;
  price: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  ingredients: string[];
  spiceLevel: "Mild" | "Medium" | "Hot";
  dietary: string[];
  prepTime: string;
  servingSize: string;
  chefNote: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "beye-aynet",
    name: "Beye Aynet",
    amharicName: "በየአይነቱ",
    category: "Traditional Platter",
    price: "ETB 400",
    image: BeyeAynetImg,
    shortDesc: "Vibrant Ethiopian vegan feast platter served on soft fresh teff Injera with an assortment of 7 aromatic stews.",
    fullDesc: "Beye Aynet (በየአይነቱ) is Ethiopia's iconic combination platter and celebration of vegan culinary heritage. Served on a large tray lined with fresh 100% teff Injera, it features colorfully arranged scoops of Kik Alicha (mild split peas), Misir Wot (spiced red lentils), Gomen (simmered collard greens), Fasolia (green beans & carrots), Key Sir (beetroot salad), Shiro, and Timatim Fitfit.",
    ingredients: [
      "100% Organic Teff Injera",
      "Misir Wot (Spiced Red Lentils)",
      "Kik Alicha (Yellow Split Peas)",
      "Gomen (Sautéed Collard Greens)",
      "Fasolia (Green Beans & Carrots)",
      "Key Sir (Fresh Beetroot & Potatoes)",
      "Timatim Salata (Tomato & Pepper Salad)"
    ],
    spiceLevel: "Mild",
    dietary: ["100% Vegan", "Gluten-Free Teff", "Fast Friendly (የፆም)"],
    prepTime: "15-20 mins",
    servingSize: "Serves 1-2 persons",
    chefNote: "Pair with traditional Ethiopian honey wine (Tej) or spiced Ethiopian black tea for an authentic dining ritual."
  },
  {
    id: "shiro-wet",
    name: "Shiro Wet",
    amharicName: "ሽሮ ወጥ",
    category: "Authentic Stews",
    price: "ETB 290",
    image: ShiroWetImg,
    shortDesc: "Rich, velvety chickpea stew simmered in a traditional clay pot with garlic, berbere, and Ethiopian herbs.",
    fullDesc: "Shiro Wet (ሽሮ ወጥ) is the heart and soul of Ethiopian comfort food. Crafted from finely ground sun-dried chickpeas blended with sacred spices, red onions, garlic, and simmered slowly until thick and velvety. Served piping hot in a hand-crafted black clay pot (Mancha) accompanied by warm rolled Injera.",
    ingredients: [
      "Sun-Dried Spiced Chickpea Flour (Shiro)",
      "Aged Berbere Spice Blend",
      "Minced Shallots & Fresh Garlic",
      "Ethiopian Herb Kibbeh (or Pure Seed Oil for Vegan)",
      "Jalapeño Peppers & Rosemary Sprig",
      "Fresh Teff Injera"
    ],
    spiceLevel: "Medium",
    dietary: ["Vegetarian", "Vegan Option Available", "Gluten-Free Teff"],
    prepTime: "12-15 mins",
    servingSize: "Serves 1 person",
    chefNote: "Order 'Tebab Shiro' or 'Shiro Tegabeno' for bubbling clay pot tableside service with extra herb kibbeh."
  },
  {
    id: "doro-wet",
    name: "Doro Wet",
    amharicName: "ዶሮ ወጥ",
    category: "Signature Feast",
    price: "ETB 600",
    image: DoroWetImg,
    shortDesc: "The crown jewel of Ethiopian cuisine. Tender chicken slow-cooked for hours in dark berbere sauce with hard-boiled eggs.",
    fullDesc: "Doro Wet (ዶሮ ወጥ) is Ethiopia's most esteemed national dish, traditionally reserved for holidays, family gatherings, and honored guests. Free-range chicken pieces are marinated in fresh lime and salt, then simmered for hours in caramelized red onions, rich berbere, and clarified spiced butter (Niter Kibbeh). Served with hard-boiled eggs that absorb the complex sauce flavors.",
    ingredients: [
      "Free-Range Tender Chicken Pieces",
      "Organic Hard-Boiled Eggs",
      "Aged Prime Berbere (Ethiopian Red Pepper)",
      "Caramelized Red Onions (Slow Cooked 4+ Hours)",
      "Niter Kibbeh (Clarified Spiced Butter)",
      "Mekelesha (Aromatic Finish Spices)"
    ],
    spiceLevel: "Hot",
    dietary: ["Signature Dish", "High Protein", "Traditional Heritage"],
    prepTime: "20-25 mins",
    servingSize: "Generous Portion (Serves 1-2)",
    chefNote: "Prepared daily by Chef Girma Adugna using traditional family spice recipes passed down through generations."
  },
  {
    id: "tibs",
    name: "Tibs",
    amharicName: "ጥብስ",
    category: "Sizzling Meat Specialty",
    price: "ETB 550",
    image: TibsImg,
    shortDesc: "Sizzling pan-seared tender beef strips sautéed with onions, garlic, rosemary, and sliced green jalapeño peppers, served in a traditional clay pot.",
    fullDesc: "Tibs (ጥብስ) is one of Ethiopia's most popular meat delicacies. Premium tender cuts of beef or lamb are flash-seared at high heat with caramelized onions, fresh garlic, rosemary sprigs, and green jalapeños. Served sizzling hot in a traditional clay stove (Chereba) alongside fresh teff Injera.",
    ingredients: [
      "Prime Tender Beef / Lamb Strips",
      "Caramelized Onions & Garlic",
      "Fresh Rosemary Sprigs",
      "Green Jalapeño Peppers",
      "Ethiopian Herb Kibbeh (Spiced Butter)",
      "Fresh Teff Injera"
    ],
    spiceLevel: "Medium",
    dietary: ["High Protein", "Traditional Specialty", "Sizzling Hot"],
    prepTime: "15-18 mins",
    servingSize: "Serves 1-2 persons",
    chefNote: "Pairs perfectly with a cold local beverage or traditional Ethiopian honey wine (Tej)."
  }
];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const getSpiceBadge = (level: MenuItem["spiceLevel"]) => {
    switch (level) {
      case "Hot":
        return <Badge className="bg-red-600 text-white font-medium flex items-center gap-1"><Flame className="w-3 h-3 fill-white" /> Hot (Spicy)</Badge>;
      case "Medium":
        return <Badge className="bg-amber-600 text-white font-medium flex items-center gap-1"><Flame className="w-3 h-3" /> Medium Spice</Badge>;
      default:
        return <Badge className="bg-emerald-600 text-white font-medium flex items-center gap-1"><Sparkles className="w-3 h-3" /> Mild & Flavorsome</Badge>;
    }
  };

  return (
    <section id="menu" className="section-padding bg-background relative overflow-hidden">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge variant="outline" className="border-primary text-primary px-4 py-1 mb-3 text-sm font-semibold tracking-wider uppercase">
            Authenic Culinary Experience
          </Badge>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Explore Our <span className="text-primary">Featured Menu</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selections of traditional Ethiopian delicacies and house favorites, prepared with farm-fresh ingredients and authentic heritage spices.
          </p>
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((dish, idx) => (
            <Card
              key={dish.id}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden border-border/60 bg-card"
            >
              {/* Dish Image container with price pill */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold px-3 py-1.5 rounded-full text-sm shadow-md">
                  {dish.price}
                </div>

                {/* Amharic Title overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="text-amber-300 font-sans text-sm font-semibold tracking-wider block">
                      {dish.amharicName}
                    </span>
                    <h3 className="text-xl font-playfair font-bold text-white leading-snug">
                      {dish.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {getSpiceBadge(dish.spiceLevel)}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                    {dish.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {dish.dietary.map((tag, i) => (
                      <span key={i} className="text-[11px] font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <Button
                  onClick={() => setSelectedItem(dish)}
                  variant="outline"
                  className="w-full mt-2 border-primary/40 hover:border-primary hover:bg-primary hover:text-primary-foreground font-semibold text-xs tracking-wide uppercase transition-all duration-200"
                >
                  <Info className="w-4 h-4 mr-1.5" /> View Dish Specifications
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Dish Detailed Specifications Dialog */}
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 rounded-xl overflow-hidden">
            <div className="relative h-64 sm:h-72 w-full">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-amber-300 font-semibold text-base block font-sans">
                  {selectedItem.amharicName}
                </span>
                <DialogTitle className="text-3xl font-playfair font-bold text-white mb-1">
                  {selectedItem.name}
                </DialogTitle>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-amber-400">{selectedItem.price}</span>
                  <span className="text-gray-300 text-sm">|</span>
                  <span className="text-sm text-gray-200">{selectedItem.category}</span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <DialogDescription className="text-foreground text-base leading-relaxed">
                {selectedItem.fullDesc}
              </DialogDescription>

              {/* Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/40 p-4 rounded-lg border border-border/50">
                <div>
                  <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1">Preparation Time</h4>
                  <p className="text-sm font-semibold text-foreground">{selectedItem.prepTime}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1">Serving Portion</h4>
                  <p className="text-sm font-semibold text-foreground">{selectedItem.servingSize}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1">Spice Profile</h4>
                  <div>{getSpiceBadge(selectedItem.spiceLevel)}</div>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1">Dietary Highlights</h4>
                  <p className="text-sm font-medium text-foreground">{selectedItem.dietary.join(" • ")}</p>
                </div>
              </div>

              {/* Detailed Ingredients */}
              <div>
                <h4 className="text-base font-playfair font-bold text-foreground mb-3 flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-primary" /> Ingredients & Recipe Components
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedItem.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chef Recommendation Note */}
              <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-amber-700 dark:text-amber-300">Chef's Recommendation</h5>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{selectedItem.chefNote}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Menu;
