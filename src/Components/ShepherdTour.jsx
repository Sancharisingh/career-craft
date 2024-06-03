import React, { useRef, useEffect } from "react";
import Shepherd from "shepherd.js";

const ShepherdTour = () => {
  const tour = useRef(null);

  useEffect(() => {
    // Initialize the Shepherd tour
    tour.current = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true,
        },
        scrollTo: { behavior: 'smooth', block: 'center' },
        classes:
          "bg-base-100 shadow-xl p-5 w-96 rounded-lg border-2 border-gray-500",
      },
      useModalOverlay: true,
    });

    // Define the steps of the tour
    tour.current.addStep({
      id: "step-1",
      text: "Welcome to career-craft.",
      attachTo: {
        element: ".resume-builder",
        on: "bottom",
      },
      buttons: [
        {
          classes: "btn btn-accent btn-sm mt-5 btn-outline",
          text: "Next",
          action: tour.current.next,
        },
        {
            classes: "btn btn-error btn-sm ml-40 mt-5 btn-outline",
          text: "Cancel",
          action: tour.current.cancel,
        },
      ],
    });

    tour.current.addStep({
      id: "step-2",
      text: "Here you can select title you want to fill.",
      attachTo: {
        element: ".Selector",
        on: "bottom",
      },
      buttons: [
        {
            classes: "btn btn-accent btn-sm mt-5 btn-outline",
          text: "Back",
          action: tour.current.back,
        },
        {
            classes: "btn btn-accent btn-sm mt-5 ml-40 btn-outline",
          text: "Next",
          action: tour.current.next,
        },

      ],
    });

    tour.current.addStep({
      id: "step-3",
      text: "Here you can select color, which color heading and symbol you need.",
      attachTo: {
        element: ".Colors",
        on: "bottom",
      },
      buttons: [
        {
            classes: "btn btn-accent btn-sm mt-5 btn-outline",
          text: "Back",
          action: tour.current.back,
        },
        {
            classes: "btn btn-accent btn-sm mt-5 ml-40 btn-outline",
          text: "Next",
          action: tour.current.next,
        },
      ],
    });
    tour.current.addStep({
        id: "step-4",
        text: "Select if you want that section. Otherwise remove the title to remove that section.",
        attachTo: {
          element: ".InputLabel",
          on: "bottom-start",
        },
        buttons: [
            {
                classes: "btn btn-accent btn-sm mt-5 btn-outline",
              text: "Back",
              action: tour.current.back,
            },
            {
                classes: "btn btn-accent btn-sm mt-5 ml-40 btn-outline",
              text: "Next",
              action: tour.current.next,
            },
        ],
      });

      tour.current.addStep({
        id: "step-5",
        text: "Your Resume details will show here",
        attachTo: {
          element: ".Resume",
          on: "bottom-end",
        },
        buttons: [
            {
                classes: "btn btn-accent btn-sm mt-5 btn-outline",
              text: "Back",
              action: tour.current.back,
            },
            {
                classes: "btn btn-accent btn-sm mt-5 ml-40 btn-outline",
              text: "Next",
              action: tour.current.next,
            },
        ],
      });

      tour.current.addStep({
        id: "step-6",
        text: "Here you save the data.",
        attachTo: {
          element: ".Save",
          on: "bottom",
        },
        buttons: [
            {
                classes: "btn btn-accent btn-sm mt-5 btn-outline",
              text: "Back",
              action: tour.current.back,
            },
            {
                classes: "btn btn-accent btn-sm mt-5 ml-40 btn-outline",
              text: "Next",
              action: tour.current.next,
            },
        ],
      });

    tour.current.addStep({
      id: "step-6",
      text: "Here you can download your resume once you're done.",
      attachTo: {
        element: ".resume-builder .Download",
        on: "bottom",
      },
      buttons: [
        {
            classes: "btn btn-accent btn-sm mt-5 btn-outline",
          text: "Back",
          action: tour.current.back,
        },
        {
            classes: "btn btn-error btn-sm ml-40 mt-5 btn-outline",
          text: "Finish",
          action: tour.current.complete,
        },
      ],
    });

      tour.current.start();

    // Clean up on unmount
    return () => {
      if (tour.current) {
        tour.current.cancel();
        tour.current = null;
      }
    };
  }, []);

  return null;
};

export default ShepherdTour;
