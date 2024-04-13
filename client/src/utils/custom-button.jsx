import React, { useRef } from "react";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

const CustomButton = () => {
  const buttonRef = useRef(null); // Define buttonRef using useRef
  const handleConfetti = () => {
    confetti({});
  };

  return (
    <Button
      ref={buttonRef}
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
      onPress={handleConfetti}
    >
      Press me
    </Button>
  );
};

export default CustomButton;
