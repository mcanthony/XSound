(function(global) {
    'use strict';

    // Mocks

    function Statable() {
        this.isActive = true;
    }

    Statable.prototype.state = function() {
    };

    function SoundModule(context, bufferSize) {
    }

    SoundModule.prototype.params = function() {
        return {};
    };

    function Listener(context) {
    }

    function Analyser(context) {
    }

    function Visualizer(sampleRate) {
    }

    /**
     * Class (Static) properties
     */
    Visualizer.DRAW_TYPES        = {};
    Visualizer.DRAW_TYPES.CANVAS = 'canvas';
    Visualizer.DRAW_TYPES.SVG    = 'svg';

    Visualizer.XMLNS = 'http://www.w3.org/2000/svg';
    Visualizer.XLINK = 'http://www.w3.org/1999/xlink';

    function TimeOverview(sampleRate) {
    }

    function Time(sampleRate) {
    }

    function FFT(sampleRate) {
    }

    Analyser.Visualizer   = Visualizer;
    Analyser.TimeOverview = TimeOverview;
    Analyser.Time         = Time;
    Analyser.FFT          = FFT;

    function Recorder(context, bufferSize, numInput, numOutput) {
    }

    function Session(context, bufferSize, numInput, numOutput, analyser) {
    }

    function Effector(context, bufferSize) {
        Statable.call(this);

        this.context = context;

        this.input  = context.createGain();
        this.output = context.createGain();

        this.lfo       = context.createOscillator();
        this.depth     = context.createGain();
        this.rate      = this.lfo.frequency;
        this.processor = context.createScriptProcessor(bufferSize, 1, 2);

        this.lfo.start = this.lfo.start || this.lfo.noteOn;
        this.lfo.stop  = this.lfo.stop  || this.lfo.noteOff;

        this.values = {};

        this.isStop = true;
    }

    /** @implements {Statable} */
    Effector.prototype = Object.create(Statable.prototype);
    Effector.prototype.constructor = Effector;

    Effector.prototype.connect = function() {
    };

    function Compressor(context, bufferSize) {
    }

    function Distortion(context, bufferSize) {
    }

    function Wah(context, bufferSize) {
    }

    function Equalizer(context, bufferSize) {
    }

    function Filter(context, bufferSize) {
    }

    function Autopanner(context, bufferSize) {
    }

    function Tremolo(context, bufferSize) {
    };

    function Ringmodulator(context, bufferSize) {
    }

    function Phaser(context, bufferSize) {
    }

    function Flanger(context, bufferSize) {
    }

    function Chorus(context, bufferSize) {
    }

    function Delay(context, bufferSize) {
    }

    function Reverb(context, bufferSize) {
    }

    function Panner(context, bufferSize) {
    }

    function EnvelopeGenerator(context) {
    }

    SoundModule.Listener          = Listener;
    SoundModule.Analyser          = Analyser;
    SoundModule.Recorder          = Recorder;
    SoundModule.Session           = Session;
    SoundModule.Effector          = Effector;
    SoundModule.Compressor        = Compressor;
    SoundModule.Distortion        = Distortion;
    SoundModule.Wah               = Wah;
    SoundModule.Equalizer         = Equalizer;
    SoundModule.Filter            = Filter;
    SoundModule.Autopanner        = Autopanner;
    SoundModule.Tremolo           = Tremolo;
    SoundModule.Ringmodulator     = Ringmodulator;
    SoundModule.Phaser            = Phaser;
    SoundModule.Flanger           = Flanger;
    SoundModule.Chorus            = Chorus;
    SoundModule.Delay             = Delay;
    SoundModule.Reverb            = Reverb;
    SoundModule.Panner            = Panner;
    SoundModule.EnvelopeGenerator = EnvelopeGenerator;

    function OscillatorModule(context) {
        this.sources = [new Oscillator(), new Oscillator(), new Oscillator()];
    }

    function Oscillator() {
    }

    Oscillator.prototype.param = function(key) {
        switch (key) {
            case 'type'   : return 'sine';
            case 'gain'   : return 1;
            case 'octave' : return 0;
            case 'fine'   : return 0;
        }
    };

    function Glide() {
    }

    OscillatorModule.Oscillator = Oscillator;
    OscillatorModule.Glide      = Glide;

    function OneshotModule(context) {
    }

    function AudioModule(context) {
    }

    function VocalCanceler() {
    }

    AudioModule.VocalCanceler = VocalCanceler;

    function MediaModule(context) {
    }

    function MediaFallbackModule() {
    }

    function StreamModule(context) {
    }

    function NoiseGate() {
    }

    StreamModule.NoiseGate = NoiseGate;

    function MixerModule(context) {
    }

    function MML(context) {
    }

    // Export
    global.Mocks                     = {};
    global.Mocks.SoundModule         = SoundModule;
    global.Mocks.OscillatorModule    = OscillatorModule;
    global.Mocks.OneshotModule       = OneshotModule;
    global.Mocks.AudioModule         = AudioModule;
    global.Mocks.MediaModule         = MediaModule;
    global.Mocks.MediaFallbackModule = MediaFallbackModule;
    global.Mocks.StreamModule        = StreamModule;
    global.Mocks.MixerModule         = MixerModule;
    global.Mocks.MML                 = MML;

    global.Mocks.Statable = Statable;

})(window);
