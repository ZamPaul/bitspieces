export const answerWrap = {
  init: {
    gridTemplateRows: "0fr",
    opacity: 0,
  },
  open: {
    gridTemplateRows: "1fr",
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.65, 0, 0.35, 1],
      opacity: {
        delay: 0.3,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  },
  close: {
    gridTemplateRows: "0fr",
    opacity: 0,
    transition: {
      duration: 0.45,
      delay: 0.2,
      ease: [0.65, 0, 0.35, 1],
      opacity: {
        duration: 0.35,
        delay: 0,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  },
};

export const imgVariants = {
  init: {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  },
  open: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.45,
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  close: {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    transition: {
      duration: 0.45,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

