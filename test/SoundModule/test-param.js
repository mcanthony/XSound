describe('SoundModule TEST', function() {

    describe('SoundModule.prototype.param', function() {

        describe('masterVolume', function() {

            afterEach(function() {
                soundModule.param('masterVolume', 1);
            });

            // Getter
            // Positive

            it('should return 1', function() {
                expect(soundModule.param('masterVolume')).toEqual(1);
            });

            // Negative

            it('should return undefined', function() {
                expect(soundModule.param('')).toBeUndefined();
            });

            // Setter
            // Positive

            it('should return 0.5', function() {
                soundModule.param('masterVolume', 0.5);
                expect(soundModule.param('masterVolume')).toEqual(0.5);
            });

            it('should return 1', function() {
                soundModule.param('masterVolume', 1);
                expect(soundModule.param('masterVolume')).toEqual(1);
            });

            it('should return 0', function() {
                soundModule.param('masterVolume', 0);
                expect(soundModule.param('masterVolume')).toEqual(0);
            });

            // Negative

            it('should return 1', function() {
                soundModule.param('masterVolume', 1.1);
                expect(soundModule.param('masterVolume')).toEqual(1);
            });

            it('should return 1', function() {
                soundModule.param('masterVolume', -0.1);
                expect(soundModule.param('masterVolume')).toEqual(1);
            });

        });

    });

});
