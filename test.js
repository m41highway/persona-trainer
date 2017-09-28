const natural = require('natural');
const classifier = new natural.BayesClassifier();

const trainingfile = './knowledge_base/classifier-20170926074740.json';

natural.BayesClassifier.load(trainingfile, null, function(err, classifier) {

    // const word1 = 'plan free energy wind bill support 50 based fossil acadia fuels provider customcase allows paid express creatively check sustainable kickstarter alternatives benefits include save renewable resources full creative expression regular professional artwork designs included kind plastic greatly appreciated 60 signed phone case power basically give access thanks 100 turn purchase looking credits usage simply instead doesn cost thing figure win environment essentially throwing behind renewables offers want though cover anyone tried add enjoyed experience please comment recently'

    const word1 = 'plan free energy wind bill support 50 based fossil acadia fuels provider customcase allows paid express creatively check sustainable kickstarter alternatives benefits include save renewable resources full creative expression regular professional '
    // const word1 = 'plan energy wind bill support 50 based fossil acadia fuels provider customcase allows paid express creatively check sustainable kickstarter alternatives benefits include save renewable resources '

// free enjoyed experience

    console.log(classifier.classify(word1));

    let prediction = classifier.getClassifications(word1)

    let sum = prediction.reduce(function(acc, score) {
        return acc + score.value;
    }, 0);

    let scoreList = [];
    for (let i =0 ; i < prediction.length ; i ++){
        let s = prediction[i].value.toPrecision(10);
        let t = sum.toPrecision(10);
        let x = s / t * 100;
        scoreList.push({'label': prediction[i].label, 'percent': Math.round(x)});
    }

    console.log(scoreList);
});