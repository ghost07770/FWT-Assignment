// Random

$(function(){
    $('#button1').click(function(){

    var a = $("#deck > div").remove().toArray();
    for (var i = a.length - 1; i >= 1; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var bi = a[i];
        var bj = a[j];
        a[i] = bj;
        a[j] = bi;
    }
    $("#deck").append(a);
});
});

// Zodiac Sign

function zodiac(){
    var birthmonth = document.getElementById("month").value;
     var birthday = document.getElementById("day").value;
   var result = " unknown because you didn't put a valid date.";
  
  
if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18){
          result = ("Aquarius");
}
if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
         result = ("Pisces");
}
if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
         result = ("Aries");
}
if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
          result = ("Taurus");
}
    
if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20){
          result = ("Gemini");
}
    
if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
          result = ("Cancer");
}
if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
          result = ("Leo");
}
if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
          result = ("Virgo");
}
if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
        result = ("Libra");
}
if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
         result = ("Scorpio");
}
if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
          result = ("Sagittarius");
}
    
if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
   
          result = ("Capricorn");
}
else if (birthmonth>12||birthday>31){
         alert("Please enter an accurate date ! ");
      }
   document.getElementById("output").innerHTML= result;
}

// BMI
function bmi () {
    var height1 = Number(document.getElementById("height1").value);
    var height2 = Number(document.getElementById("height2").value);
    var weight = Number(document.getElementById("weight").value);
    var height = height1*0.3048 + height2*0.0254
    var result = weight / (height * height);
    document.getElementById("result").innerHTML = "Your bmi score is : " + result;
    }