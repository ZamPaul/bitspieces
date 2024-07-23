export const clip = {
  init: {
    backgroundColor: "#ffffff00",
    transform: "translate(-50%,-50%)",
  },
  open: {
    backgroundColor: "#fff",
    transform: "translate(-50%,-50%)",
    transition: {
      duration: 0.4,
      delay: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  close: {
    backgroundColor: "#ffffff00",
    transform: "translate(-50%,-50%)",
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const imgVariants = {
  init: {
    opacity: 1,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  close: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const opacityVariants = {
  init: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};
