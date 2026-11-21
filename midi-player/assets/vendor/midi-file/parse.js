/* midi-file 1.2.4, MIT license. See LICENSE.md. */
var ReadMidiEvents = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };

  // node_modules/midi-file/lib/midi-parser.js
  var require_midi_parser = __commonJS({
    "node_modules/midi-file/lib/midi-parser.js"(exports, module) {
      function parseMidi(data) {
        var p = new Parser(data);
        var headerChunk = p.readChunk();
        if (headerChunk.id != "MThd")
          throw "Bad MIDI file.  Expected 'MHdr', got: '" + headerChunk.id + "'";
        var header = parseHeader(headerChunk.data);
        var tracks = [];
        for (var i = 0; !p.eof() && i < header.numTracks; i++) {
          var trackChunk = p.readChunk();
          if (trackChunk.id != "MTrk")
            throw "Bad MIDI file.  Expected 'MTrk', got: '" + trackChunk.id + "'";
          var track = parseTrack(trackChunk.data);
          tracks.push(track);
        }
        return {
          header,
          tracks
        };
      }
      function parseHeader(data) {
        var p = new Parser(data);
        var format = p.readUInt16();
        var numTracks = p.readUInt16();
        var result = {
          format,
          numTracks
        };
        var timeDivision = p.readUInt16();
        if (timeDivision & 32768) {
          result.framesPerSecond = 256 - (timeDivision >> 8);
          result.ticksPerFrame = timeDivision & 255;
        } else {
          result.ticksPerBeat = timeDivision;
        }
        return result;
      }
      function parseTrack(data) {
        var p = new Parser(data);
        var events = [];
        while (!p.eof()) {
          var event = readEvent();
          events.push(event);
        }
        return events;
        var lastEventTypeByte = null;
        function readEvent() {
          var event2 = {};
          event2.deltaTime = p.readVarInt();
          var eventTypeByte = p.readUInt8();
          if ((eventTypeByte & 240) === 240) {
            if (eventTypeByte === 255) {
              event2.meta = true;
              var metatypeByte = p.readUInt8();
              var length = p.readVarInt();
              switch (metatypeByte) {
                case 0:
                  event2.type = "sequenceNumber";
                  if (length !== 2) throw "Expected length for sequenceNumber event is 2, got " + length;
                  event2.number = p.readUInt16();
                  return event2;
                case 1:
                  event2.type = "text";
                  event2.text = p.readString(length);
                  return event2;
                case 2:
                  event2.type = "copyrightNotice";
                  event2.text = p.readString(length);
                  return event2;
                case 3:
                  event2.type = "trackName";
                  event2.text = p.readString(length);
                  return event2;
                case 4:
                  event2.type = "instrumentName";
                  event2.text = p.readString(length);
                  return event2;
                case 5:
                  event2.type = "lyrics";
                  event2.text = p.readString(length);
                  return event2;
                case 6:
                  event2.type = "marker";
                  event2.text = p.readString(length);
                  return event2;
                case 7:
                  event2.type = "cuePoint";
                  event2.text = p.readString(length);
                  return event2;
                case 32:
                  event2.type = "channelPrefix";
                  if (length != 1) throw "Expected length for channelPrefix event is 1, got " + length;
                  event2.channel = p.readUInt8();
                  return event2;
                case 33:
                  event2.type = "portPrefix";
                  if (length != 1) throw "Expected length for portPrefix event is 1, got " + length;
                  event2.port = p.readUInt8();
                  return event2;
                case 47:
                  event2.type = "endOfTrack";
                  if (length != 0) throw "Expected length for endOfTrack event is 0, got " + length;
                  return event2;
                case 81:
                  event2.type = "setTempo";
                  if (length != 3) throw "Expected length for setTempo event is 3, got " + length;
                  event2.microsecondsPerBeat = p.readUInt24();
                  return event2;
                case 84:
                  event2.type = "smpteOffset";
                  if (length != 5) throw "Expected length for smpteOffset event is 5, got " + length;
                  var hourByte = p.readUInt8();
                  var FRAME_RATES = { 0: 24, 32: 25, 64: 29, 96: 30 };
                  event2.frameRate = FRAME_RATES[hourByte & 96];
                  event2.hour = hourByte & 31;
                  event2.min = p.readUInt8();
                  event2.sec = p.readUInt8();
                  event2.frame = p.readUInt8();
                  event2.subFrame = p.readUInt8();
                  return event2;
                case 88:
                  event2.type = "timeSignature";
                  if (length != 2 && length != 4) throw "Expected length for timeSignature event is 4 or 2, got " + length;
                  event2.numerator = p.readUInt8();
                  event2.denominator = 1 << p.readUInt8();
                  if (length === 4) {
                    event2.metronome = p.readUInt8();
                    event2.thirtyseconds = p.readUInt8();
                  } else {
                    event2.metronome = 36;
                    event2.thirtyseconds = 8;
                  }
                  return event2;
                case 89:
                  event2.type = "keySignature";
                  if (length != 2) throw "Expected length for keySignature event is 2, got " + length;
                  event2.key = p.readInt8();
                  event2.scale = p.readUInt8();
                  return event2;
                case 127:
                  event2.type = "sequencerSpecific";
                  event2.data = p.readBytes(length);
                  return event2;
                default:
                  event2.type = "unknownMeta";
                  event2.data = p.readBytes(length);
                  event2.metatypeByte = metatypeByte;
                  return event2;
              }
            } else if (eventTypeByte == 240) {
              event2.type = "sysEx";
              var length = p.readVarInt();
              event2.data = p.readBytes(length);
              return event2;
            } else if (eventTypeByte == 247) {
              event2.type = "endSysEx";
              var length = p.readVarInt();
              event2.data = p.readBytes(length);
              return event2;
            } else {
              throw "Unrecognised MIDI event type byte: " + eventTypeByte;
            }
          } else {
            var param1;
            if ((eventTypeByte & 128) === 0) {
              if (lastEventTypeByte === null)
                throw "Running status byte encountered before status byte";
              param1 = eventTypeByte;
              eventTypeByte = lastEventTypeByte;
              event2.running = true;
            } else {
              param1 = p.readUInt8();
              lastEventTypeByte = eventTypeByte;
            }
            var eventType = eventTypeByte >> 4;
            event2.channel = eventTypeByte & 15;
            switch (eventType) {
              case 8:
                event2.type = "noteOff";
                event2.noteNumber = param1;
                event2.velocity = p.readUInt8();
                return event2;
              case 9:
                var velocity = p.readUInt8();
                event2.type = velocity === 0 ? "noteOff" : "noteOn";
                event2.noteNumber = param1;
                event2.velocity = velocity;
                if (velocity === 0) event2.byte9 = true;
                return event2;
              case 10:
                event2.type = "noteAftertouch";
                event2.noteNumber = param1;
                event2.amount = p.readUInt8();
                return event2;
              case 11:
                event2.type = "controller";
                event2.controllerType = param1;
                event2.value = p.readUInt8();
                return event2;
              case 12:
                event2.type = "programChange";
                event2.programNumber = param1;
                return event2;
              case 13:
                event2.type = "channelAftertouch";
                event2.amount = param1;
                return event2;
              case 14:
                event2.type = "pitchBend";
                event2.value = param1 + (p.readUInt8() << 7) - 8192;
                return event2;
              default:
                throw "Unrecognised MIDI event type: " + eventType;
            }
          }
        }
      }
      function Parser(data) {
        this.buffer = data;
        this.bufferLen = this.buffer.length;
        this.pos = 0;
      }
      Parser.prototype.eof = function() {
        return this.pos >= this.bufferLen;
      };
      Parser.prototype.readUInt8 = function() {
        var result = this.buffer[this.pos];
        this.pos += 1;
        return result;
      };
      Parser.prototype.readInt8 = function() {
        var u = this.readUInt8();
        if (u & 128)
          return u - 256;
        else
          return u;
      };
      Parser.prototype.readUInt16 = function() {
        var b0 = this.readUInt8(), b1 = this.readUInt8();
        return (b0 << 8) + b1;
      };
      Parser.prototype.readInt16 = function() {
        var u = this.readUInt16();
        if (u & 32768)
          return u - 65536;
        else
          return u;
      };
      Parser.prototype.readUInt24 = function() {
        var b0 = this.readUInt8(), b1 = this.readUInt8(), b2 = this.readUInt8();
        return (b0 << 16) + (b1 << 8) + b2;
      };
      Parser.prototype.readInt24 = function() {
        var u = this.readUInt24();
        if (u & 8388608)
          return u - 16777216;
        else
          return u;
      };
      Parser.prototype.readUInt32 = function() {
        var b0 = this.readUInt8(), b1 = this.readUInt8(), b2 = this.readUInt8(), b3 = this.readUInt8();
        return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
      };
      Parser.prototype.readBytes = function(len) {
        var bytes = this.buffer.slice(this.pos, this.pos + len);
        this.pos += len;
        return bytes;
      };
      Parser.prototype.readString = function(len) {
        var bytes = this.readBytes(len);
        return String.fromCharCode.apply(null, bytes);
      };
      Parser.prototype.readVarInt = function() {
        var result = 0;
        while (!this.eof()) {
          var b = this.readUInt8();
          if (b & 128) {
            result += b & 127;
            result <<= 7;
          } else {
            return result + b;
          }
        }
        return result;
      };
      Parser.prototype.readChunk = function() {
        var id = this.readString(4);
        var length = this.readUInt32();
        var data = this.readBytes(length);
        return {
          id,
          length,
          data
        };
      };
      module.exports = parseMidi;
    }
  });

  // parse-entry.js
  var require_parse_entry = __commonJS({
    "parse-entry.js"(exports, module) {
      module.exports = require_midi_parser();
    }
  });
  return require_parse_entry();
})();
