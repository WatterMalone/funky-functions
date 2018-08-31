window.onload = function() {
	var funkyFunctions = {
		salsa: function() {
			var danceMoves = [3,2,1,5,6];
			var numSteps = 0;
			for (var i = 0; i < danceMoves.length; i++) {
				// long way:
				numSteps = numSteps + danceMoves[i];
				// short hand way:
				// numSteps += danceMoves[i];
			}
			return numSteps;
		},
		chickenDance: function(){
			var numClucks = 0;
			for (var i=0; 1 < 5; i++) {
				numClucks = numClucks+5;
			}
			var chicken = {
				funky1: function(){ 
					numClucks = numClucks+10
				return numClucks;
			},
				funky2: function(){
					return this.funky1;
				}
			}
		},
		shuffle: function(){
			//code in here
		}
	}
}

//dot notation
var getSalsa = funkyFunctions.salsa();
console.log(getSalsa);

// bracket notation, not recommended for use
// funkyFunctions["salsa"]();
