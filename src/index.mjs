import MidiToJson from './conversion/midi-to-json';
import JsonToPresentation from './conversion/json-to-presentation';
import Install from './install'
import PresentationToYouTube from './upload/presentation-to-youtube';
import YouTubePresentationDefender from './defense/youtube-presentation-defender';
import RemoveBadYoutubeMovies from './defense/remove-bad-youtube-movies';
import BitMidi from './scooper/bitmidi';
import Harvest from './scooper/harvest';
import PresentationToYouTubePuppeteer from './upload/presentation-to-youtube-puppeteer';
export default {
    MidiToJson,
    JsonToPresentation,
    Install,
    PresentationToYouTube,
    BitMidi,
    Harvest,
    YouTubePresentationDefender,
    PresentationToYouTubePuppeteer,
    RemoveBadYoutubeMovies
};