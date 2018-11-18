export default class MidiJsonInformation {
    static getInformation(jsonInfo) {
        var notes;

        return {
            notes,
            duration: jsonInfo.duration,
            raw: jsonInfo
        }
    }
}