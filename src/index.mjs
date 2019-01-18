import MidiToJson from './conversion/midi-to-json';
import JsonToPresentation from './conversion/json-to-presentation';
import Install from './install';
import InstallFleet from './installfleet';
import PresentationToYouTube from './upload/presentation-to-youtube';
import YouTubePresentationDefender from './defense/youtube-presentation-defender';
import RemoveBadYoutubeMovies from './defense/remove-bad-youtube-movies';
import CannonFarm from './puppeteer/cannon-farm'
import BitMidi from './scooper/bitmidi';
import Harvest from './scooper/harvest';
import PresentationToYouTubePuppeteer from './upload/presentation-to-youtube-puppeteer';
export default {
    MidiToJson,
    CannonFarm,
    JsonToPresentation,
    Install,
    PresentationToYouTube,
    BitMidi,
    Harvest,
    InstallFleet, 
    YouTubePresentationDefender,
    PresentationToYouTubePuppeteer,
    RemoveBadYoutubeMovies
};