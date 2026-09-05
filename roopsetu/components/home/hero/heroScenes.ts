export interface HeroScene {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  desktopObjectPosition: string;
  mobileObjectPosition: string;
}

export const heroScenes: HeroScene[] = [
  { id: "nail-art", category: "Nail Art", title: "Details worth\nsaving.", description: "Your next manicure, beautifully discovered.", image: "/images/nails/lavender-marble-nails.jpg", desktopObjectPosition: "center 48%", mobileObjectPosition: "center 44%" },
  { id: "makeup", category: "Makeup", title: "Looks worth\nrecreating.", description: "Soft colour, beautiful definition, endless inspiration.", image: "/images/makeup/smokey-eyes.jpg", desktopObjectPosition: "center 22%", mobileObjectPosition: "center 18%" },
  { id: "hairstyles", category: "Hairstyles", title: "Your next\nsignature look.", description: "From effortless waves to intricate bridal styles.", image: "/images/hair/easy-waves-v2.jpg", desktopObjectPosition: "center 22%", mobileObjectPosition: "center 16%" },
  { id: "fashion", category: "Fashion", title: "Dressed for\nthe moment.", description: "Discover silhouettes, colour, and looks worth saving.", image: "/images/makeup/blush-bridal-saree.jpg", desktopObjectPosition: "center 18%", mobileObjectPosition: "center 16%" },
  { id: "mehndi", category: "Mehndi", title: "Art worth\nwearing.", description: "Intricate patterns for celebrations and special moments.", image: "/images/nails/floral-nails-v2.jpg", desktopObjectPosition: "center 45%", mobileObjectPosition: "center 42%" },
  { id: "bridal", category: "Bridal", title: "Made for\nthe moment.", description: "Beauty inspiration for the looks you will remember.", image: "/images/makeup/bridal-bun.jpg", desktopObjectPosition: "center 18%", mobileObjectPosition: "center 14%" },
];