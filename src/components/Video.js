import { Video } from "expo";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
export default Video;

export const SEED_DATA = {
  name: "Video",
  tag: "Video",
  description: "Given a URL, display a video",
  doc_link: "https://docs.expo.io/versions/latest/sdk/video/",
  code_link:
    "https://github.com/expo/expo/blob/master/packages/expo-av/src/Video.tsx",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {},
  props: {
    source: {
      label: "Video URL",
      description: "The URL the video should load",
      editable: true,
      required: true,
      value: "",
      type: FORM_TYPES.sourceUrl
    },
    usePoster: {
      label: "Use Thumbnail",
      description: "Thumbnail for the video",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    posterSource: {
      label: "Thumbnail Source",
      description: "Thumbnail Source",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.localImage
    },
    resizeMode: {
      label: "Resize Mode",
      description:
        "How the video should be scaled for display. (Default: stretch) ",
      editable: true,
      required: true,
      value: "contain",
      options: ["stretch", "contain", "cover"],
      type: FORM_TYPES.flatArray
    },
    positionMillis: {
      label: "Starting Point",
      description: "Set a certian starting point of the video",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      value: 0,
      min: 0,
      step: 0.01,
      precision: 2
    },
    rate: {
      label: "Playback Rate",
      description:
        "The playback rate of the media. This value must be between 0.0 and 32.0 (Default: 1)",
      editable: true,
      required: true,
      type: FORM_TYPES.number,
      min: 0,
      max: 32,
      step: 0.25,
      precision: 2,
      value: 1
    },
    volume: {
      label: "Volume",
      description:
        "The volume of the audio for this media. This value must be between 0.0 (silence) and 1.0 (maximum volume). (Default: .5)",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 1,
      step: 0.1,
      precision: 1,
      value: 1
    },
    isMuted: {
      label: "Mute",
      description: "To mute the audio of the video.",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    useNativeControls: {
      label: "Use Native Controls",
      description: "Allow users to have the option to pause or play the video",
      editable: true,
      required: true,
      value: false,
      type: FORM_TYPES.boolean
    },
    shouldPlay: {
      label: "Play on Load",
      description: "Allows the video play on loading",
      editable: true,
      required: false,
      value: true,
      type: FORM_TYPES.boolean
    },
    isLooping: {
      label: "Allow Looping",
      description: "Allows the video to loop",
      editable: true,
      required: true,
      value: false,
      type: FORM_TYPES.boolean
    }
  }
};