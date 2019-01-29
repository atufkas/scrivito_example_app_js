import * as Scrivito from "scrivito";

const VideoWidget = Scrivito.provideWidgetClass("VideoWidget", {
  attributes: {
    source: "reference",
    poster: ["reference", { only: ["Image"] }],
  },
});

export default VideoWidget;
