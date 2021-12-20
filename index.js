

function findMatching(drivers,names){return drivers.filter(function(name){return name.toLowerCase()===names.toLowerCase()})}
function fuzzyMatch(drivers,beg){return drivers.filter(name =>{return name[0]==beg[0]})}
//console.log(findMatching(drivers,"Bobby"))
//console.log(fuzzyMatch(drivers,"Sa"))

 
function matchName(drivers,names){return drivers.filter(function (stuff){if(stuff.name===names){return stuff}})}
console.log(matchName(drivers,'Bobby'))
