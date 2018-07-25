#!/usr/local/bin/node
var natural = require("natural");
var path = require("path");

//console.log(process.argv);

if (process.argv[2]) {
	var sentence = process.argv[2];
} else {
	var sentence = "You forgot to enter an argument to this script";
}

var base_folder = path.join(path.dirname(require.resolve("natural")), "brill_pos_tagger");
var rulesFilename = base_folder + "/data/English/tr_from_posjs.txt";
var lexiconFilename = base_folder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';

var lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
var rules = new natural.RuleSet(rulesFilename);
var tagger = new natural.BrillPOSTagger(lexicon, rules);

var tokenizer = new natural.WordTokenizer();
var tokens = tokenizer.tokenize(sentence);
var disected = tagger.tag(tokens);
console.log(disected);

