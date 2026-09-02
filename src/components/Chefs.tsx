import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Chef1 from "../assets/images/chef-1.jpg";
import Chef2 from "../assets/images/chef-2.jpg";
import Chef3 from "../assets/images/chef-3.jpg";

// Centralized configuration for chef data
const CHEF_PROFILES = [
  {
    name: "Chef Girma Adugna",
    title: "Chef",
    image: Chef1,
    bio: "Over 5 years of culinary experience, including 4 years of dedicated service with Addis Misrak.",
    experience: "5+ Yrs Exp (4 Yrs at Addis Misrak)",
    specialties: ["Ethiopian Cuisine", "Traditional Specialties"],
  },
  {
    name: "Chef Genet W/Gebriel",
    title: "Chef",
    image: Chef2,
    bio: "Over 6 years of professional experience, bringing 4 years of culinary mastery to Addis Misrak.",
    experience: "6+ Yrs Exp (4 Yrs at Addis Misrak)",
    specialties: ["Traditional Dishes", "Culinary Arts"],
  },
  {
    name: "Chef Genet Berhanu",
    title: "Chef",
    image: Chef3,
    bio: "5 years of rich experience, with 5 full years dedicated to serving our guests at Addis Misrak.",
    experience: "5 Yrs Exp (5 Yrs at Addis Misrak)",
    specialties: ["Local Delicacies", "Ethiopian Specialties"],
  },
];

const Chefs = () => {
  return (
    <section id="chefs" className="section-padding bg-muted/30">
      <div className="container-width">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Chefs</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our talented culinary team brings passion, creativity, and years of experience to every dish they create.
          </p>
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHEF_PROFILES.map((chef, index) => (
            <Card
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Chef Image with specialties overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={chef.image}
                  alt={`${chef.name} - ${chef.title}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <ul className="flex flex-wrap gap-2">
                      {chef.specialties.map((specialty, idx) => (
                        <li
                          key={idx}
                          className="bg-primary/80 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chef Details */}
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-1">
                  {chef.name}
                </h3>
                <p className="text-primary font-medium mb-1">{chef.title}</p>
                <p className="text-xs font-bold text-black bg-amber-100 dark:bg-amber-200 dark:text-black border border-amber-300 inline-block px-3 py-1 rounded-full mb-3 shadow-sm">
                  {chef.experience}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {chef.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
