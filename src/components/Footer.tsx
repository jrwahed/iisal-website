import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import iisalLogo from "@/assets/iisal-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: "WhatsApp", href: "https://wa.me/201148627137" },
    { label: "Email", href: "mailto:hello@iisal.ai" },
    { label: "DriveLead", href: "/drivelead" },
    { label: "iisal", href: "/flowos" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/iisalai/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/IISAL0", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/iisal.ai/", label: "Instagram" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={iisalLogo} alt="iisal" className="h-7" />

          <p className="label-tech text-[10px] text-muted-foreground text-center">
            © {new Date().getFullYear()} iisal
          </p>

          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("/") ? undefined : "_blank"}
                rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                whileHover={{ color: "hsl(184, 100%, 68%)" }}
                className="label-tech text-[10px] text-muted-foreground transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            <div className="flex items-center gap-4 border-l border-border/20 pl-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ color: "hsl(184, 100%, 68%)", scale: 1.1 }}
                  className="text-muted-foreground transition-colors"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/5">
          <p className="text-[10px] text-muted-foreground/30 text-center leading-relaxed max-w-3xl mx-auto">
            {t("footer.seo")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
