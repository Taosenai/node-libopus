exports.OpusEncoder = require('./lib/OpusEncoder.js')

// Use these if setting the application target on encoder initialization:
//    const libopus = require('node-libopus')
// 	  const encoder = new libopus.OpusEncoder(samplingRate, channels, libopus.OPUS_APPLICATION_AUDIO)
exports.OPUS_APPLICATION_VOIP = 2048
exports.OPUS_APPLICATION_AUDIO = 2049
exports.OPUS_APPLICATION_RESTRICTED_LOWDELAY = 2051
