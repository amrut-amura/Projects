/**
 * Function to append 's' to string if number is greater than 1
 * @param  {Number} num [Digit to decide whether append 's' to end or not]
 * @return {String} 's'
 */
function plurarize(num){
  if(num>1){
    return "s";
  }
}
/**
 * Function to return 10'th place equivalent string
 * @param  {Number} num [10'th digit value ] 
 * @return String equivalent to 10'th place digit
 */
function humanize_ten(num){
  var ten_string = ["Ten","Twenty","Thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninty"];
  return ten_string[num];
}
/**
 * Function to return different places equivalent string
 * @return String equivalent to places
 */
function human_array(){
  var human_str = [[10000000,"Crore"],[100000,"Lakh"],[1000,"Thousand"],[100,"Hundred"],[10,"Ten"]];
  return human_str;
}
/**
 * Function to return unit place equivalent string
 * @return String equivalent to unit place
 */
function number_string(){
	var numbers = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
	return numbers;
}
/**
 * Function to return string equivalent to string number
 * @param  {String} this [string whose human string is to calculate.] 
 * @return String equivalent to number string
 */
String.prototype.humanize = function() {
	var result = "";
	var pay = this;										// Assign this to pay 
	if(pay.includes(",")){pay = pay.replace(/[,]/g,'')}	//If this contain ',' replace it
	for( let key of human_array() ){
		let reminder = pay/key[0];
		if ((reminder)<key[0] &&  reminder>1  ) {
		  if(key[0]==10){									// condition for 10'th place 
		    result += "and " + humanize_ten(parseInt(reminder)-1);
		  }
		  else{
			  result += parseInt(reminder)+" ";
			  result += key[1]+plurarize(parseInt(reminder))+", ";
		  }
		}
		if(key[0]==1)										// condition for unit place 
		{
			result+=number_string()[parseInt(reminder)-1];
		}
		if(reminder>1)										// update pay value 
		{
		  pay = pay%key[0];
		}
		if(pay<=0){											
		  break;
		}
	}
  result = result.trim()                                // Remove blank spaces 
  return result.endsWith(',')?result.replace(/\,$/,''):result   // Remove last ',' if present
}
//var money = "2000000";
//var value = money.humanize();
//console.log(value);
