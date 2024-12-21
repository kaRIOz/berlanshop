import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export type ColorObject = {
    [key: string]: string;
};

export const tailwindColors: ColorObject = {
    current: "currentColor",
    transparent: "transparent",
    white: "#F9F9F9",
    primary: "#0D3261",
    "primary-content": "#FFFFFF",
    "main-bg": "var(--Main-BG-Pattern, linear-gradient(0deg, #98C1E5 0%, #AA8FBF 100%))",
    // "primary-focus": generateDarkenColorFrom("#0D3261"),
    secondary: "#6c5ce7",
    "secondary-100": "#757685",
    "secondary-50": "#75768580",
    "secondary-content": "#FFFFFF",
    // "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
    accent: "#1FB2A5",
    "accent-content": "#FFFFFF",
    // "accent-focus": generateDarkenColorFrom("#1FB2A5"),
    neutral: "#808080",
    // "neutral-content": generateForegroundColorFrom("#FFFFFF"),
    // "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
    "base-25": "#353d47",
    "base-50": "#2a323c",
    "base-75": "#20272e",
    "base-100": "#1d232a",
    "base-200": "#191e24",
    "base-300": "#15191e",
    "base-content": "#A6ADBB",
    "white-100": "#F1F1F1",
    "white-50": "#FFFFFF80",
    "danger-100": "#9B1515",
    "gray-dark": "#808080",
    "gray-50": "#f9fafb",
    "gray-100": "#d1d5db",
    info: "#215EAA",
    // "info-content": generateForegroundColorFrom("#215EAA"),
    success: "#159B4B",
    // "success-content": generateForegroundColorFrom("#159B4B"),
    warning: "#E4A606",
    // "warning-content": generateForegroundColorFrom("#E4A606"),
    error: "#9B1515",
    // "error-content": generateForegroundColorFrom("#f87272"),
    "gradient-first": "#98c1e5",
    "gradient-second": "#aa8fbf",
};

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            maxWidth: {
                container: "1440px",
            },
            fontFamily: {
                vazir: "var(--font-vazir)",
            },
            fontSize: {
                small: "10px",
                regular: "12px",
                medium: "14px",
            },

            colors: {
                ...tailwindColors,
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [tailwindcssAnimate],
};
export default config;
