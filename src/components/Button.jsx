import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-white text-ink shadow-glow hover:bg-electric focus-visible:outline-electric",
  secondary:
    "border border-white/15 bg-white/[0.06] text-white hover:border-electric/60 hover:bg-white/[0.1] focus-visible:outline-white",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
        href={href}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
