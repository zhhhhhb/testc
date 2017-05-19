/**
 * Created by 小汤圆加西米露 on 2017/5/19.
 */
var formatWordAndCount = function (words, count){
    return words + ' ' + count;
}

var group = function (wordArray ){
    return wordArray .reduce((array, word) =>{
            let entry = array.find((e) => e.word === word);
    if(entry){
        entry.count++;
    }
    else{
        array.push({word: word,count: 1});
    }
    return array;
}, []);
};
var split = function (words){
    return words.split(/\s+/);
}

var sort = function (groupWords) {
    groupWords .sort((x, y) => y.count - x.count);
}

var format = function (groupWords) {
    return groupWords.map((e) => formatWordAndCount(e.word, e.count)).join('\r\n');
}
function main(words){
    if(words !== ''){
        let wordArray = split(words);
        let  groupWords = group(wordArray);
        sort(groupWords);
        return format(groupWords);
    }
    return '';
}
module.exports = main;