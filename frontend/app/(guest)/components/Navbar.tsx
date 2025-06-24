"use client";
import Image from "next/image";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-green-700 via-green-600 to-green-500 shadow-lg backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 h-[10vh]">
        <Link href="/" className="flex items-center">
          <div className="relative w-36 h-12 overflow-hidden">
            <Image
              src="/Logo.png"
              alt="Header logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-white text-2xl font-bold tracking-wide font-sans">
            Growsense
          </span>
        </Link>

        <ul className="flex items-center gap-4">
          <li>
            <Link href="/login">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="contained"
                  color="inherit"
                  startIcon={<FiLogIn size={20} />}
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#2e7d32",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "8px",
                    px: 2,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    "&:hover": {
                      backgroundColor: "#f1f1f1",
                    },
                  }}
                >
                  Login
                </Button>
              </motion.div>
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
