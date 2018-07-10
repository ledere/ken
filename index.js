#!/usr/local/bin/node
var natural = require("natural");
var path = require("path");


var base_folder = path.join(path.dirname(require.resolve("natural")), "brill_pos_tagger");
var rulesFilename = base_folder + "/data/English/tr_from_posjs.txt";
var lexiconFilename = base_folder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';

var lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
var rules = new natural.RuleSet(rulesFilename);
var tagger = new natural.BrillPOSTagger(lexicon, rules);

var sentence = "I see the man with the telecope in his asshole";

var tokenizer = new natural.WordTokenizer();
var tokens = tokenizer.tokenize(sentence);
var disected = tagger.tag(tokens);
console.log(disected);

