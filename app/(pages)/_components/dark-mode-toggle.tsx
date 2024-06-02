import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const DarkModeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  const darkModeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <CgDarkMode
      size={25}
      className={cn(
        "text-neutral-400 hover:text-black dark:hover:text-white",
        className
      )}
      onClick={darkModeHandler}
    />
  );
};

export default DarkModeToggle;
