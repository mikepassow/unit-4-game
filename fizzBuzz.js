
/*
 function threeAndFive (number) {
    for (var i = 1; i < number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz");

        } else if (i % 5 === 0) {
            console.log("Buzz");

        } else if (i % 3 === 0) {
            console.log("FizzBuzz");

        }
        else {
            console.log(i);
        }
    }
}
*/

/*
var input = prompt('Enter a number');

   for(i=0; i<input; i++){
       var prime = true;
       if((i * i) == input){
           alert('Not Prime');
           prime = false;
           break
       }
   }

   if(prime === true){
       alert('Prime')
   } 

   //OR------------------------------------------------------------

   function primeChecker (number) {
    for(var i = 2; i < number; i++ ){
        if(number % i === 0) {
            return false;
        }
    }

    return number > 1;
   }

*/

# Sort By File Extension

## File

* *None*

## Instructions

You have an array of filenames with extensions. Sort the files into arrays based on whether or not they are videos or images.

```javascript
  var files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
  ];
```

## Info

### Image File Extensions

* jpg
* gif
* jpeg
* png

### Video File Extensions

* mov
* avi
* mpeg
* mp4
* mpg



//push files into the empty images array
//push files into the empty videos array




var images = []; //jpg, jpeg, gif, png
  var videos = []; //mov, mp4, avi, mpeg, mpg
  for (i = 0; i < files.length; i++){
    if ( files[i].includes(".mov") || files[i].includes(".mp4") || files[i].includes(".avi") || files[i].includes(".mpeg") || files[i].includes(".mpg")) {
        images.push(files[i]);
    
    }
    else {
        videos.push(files[i]);
        
    }
  }
console.log(images);
console.log(videos);